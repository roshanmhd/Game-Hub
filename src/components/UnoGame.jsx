import React, { useState, useEffect } from 'react';

const COLORS = ["RED", "GREEN", "BLUE", "YELLOW"];

const UnoGame = ({ onClose }) => {
    const [topCard, setTopCard] = useState(null);
    const [playerHand, setPlayerHand] = useState([]);
    const [status, setStatus] = useState("Game started!");
    const [gameWon, setGameWon] = useState(false);

    const randomCard = () => ({
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        number: Math.floor(Math.random() * 10),
        id: Math.random() // Unique ID for React keys
    });

    const initGame = () => {
        setTopCard(randomCard());
        setPlayerHand([randomCard(), randomCard(), randomCard(), randomCard()]);
        setStatus("Match color or number!");
        setGameWon(false);
    };

    useEffect(() => {
        initGame();
    }, []);

    const playCard = (index) => {
        if (gameWon) return;

        const card = playerHand[index];
        if (card.color === topCard.color || card.number === topCard.number) {
            setTopCard(card);
            const newHand = playerHand.filter((_, i) => i !== index);
            setPlayerHand(newHand);
            setStatus("Nice move!");

            if (newHand.length === 0) {
                setStatus("🎉 YOU WON!");
                setGameWon(true);
            }
        } else {
            setStatus("Invalid move! Match color or number.");
        }
    };

    const drawCard = () => {
        if (gameWon) return;
        setPlayerHand([...playerHand, randomCard()]);
        setStatus("You drew a card.");
    };

    const getCardColor = (color) => {
        switch (color) {
            case 'RED': return '#FF4136';
            case 'GREEN': return '#2ECC40';
            case 'BLUE': return '#0074D9';
            case 'YELLOW': return '#FFDC00';
            default: return '#555';
        }
    };

    if (!topCard) return null;

    return (
        <div className="uno-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            fontFamily: 'var(--font-main)'
        }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    color: 'white',
                    fontSize: '2rem',
                    padding: '10px'
                }}
            >
                ✕
            </button>

            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '10px' }}>
                    <span className="text-gradient">UNO</span> MINI
                </h2>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem' }}>{status}</p>
            </div>

            <div className="game-board" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px',
                width: '100%',
                maxWidth: '800px'
            }}>
                {/* Top Card */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                    <span style={{ color: 'var(--color-text-dim)', textTransform: 'uppercase', letterSpacing: '2px' }}>Current Card</span>
                    <div className="card glass" style={{
                        width: '120px',
                        height: '180px',
                        borderRadius: '15px',
                        backgroundColor: getCardColor(topCard.color),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        boxShadow: `0 0 30px ${getCardColor(topCard.color)}66`,
                        border: '4px solid white',
                        color: topCard.color === 'YELLOW' ? '#000' : '#fff'
                    }}>
                        {topCard.number}
                    </div>
                </div>

                {/* Player's Hand */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '30px' }}>
                        {playerHand.map((card, index) => (
                            <div
                                key={card.id}
                                onClick={() => playCard(index)}
                                className="glow-hover"
                                style={{
                                    width: '90px',
                                    height: '135px',
                                    borderRadius: '12px',
                                    backgroundColor: getCardColor(card.color),
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.8rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    border: '3px solid white',
                                    color: card.color === 'YELLOW' ? '#000' : '#fff'
                                }}
                            >
                                {card.number}
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <button
                            onClick={drawCard}
                            className="glass glow-hover"
                            disabled={gameWon}
                            style={{
                                padding: '12px 30px',
                                borderRadius: '30px',
                                color: 'white',
                                fontWeight: '600',
                                border: '1px solid var(--color-primary)',
                                opacity: gameWon ? 0.5 : 1
                            }}
                        >
                            Draw Card
                        </button>
                        {gameWon && (
                            <button
                                onClick={initGame}
                                className="glow-hover"
                                style={{
                                    padding: '12px 30px',
                                    borderRadius: '30px',
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'black',
                                    fontWeight: '600'
                                }}
                            >
                                Play Again
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnoGame;
