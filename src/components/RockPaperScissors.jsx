import React, { useState } from 'react';

const RockPaperScissors = ({ onClose }) => {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [result, setResult] = useState("");
    const [lastChoices, setLastChoices] = useState({ user: null, computer: null });

    const choices = [
        { id: 'rock', emoji: '✊', color: '#ff5555' },
        { id: 'paper', emoji: '✋', color: '#50fa7b' },
        { id: 'scissors', emoji: '✌️', color: '#8be9fd' }
    ];

    const play = (userChoice) => {
        const computerChoice = choices[Math.floor(Math.random() * 3)].id;
        setLastChoices({ user: userChoice, computer: computerChoice });

        let resultText = "";

        if (userChoice === computerChoice) {
            resultText = "😐 It's a Draw!";
        }
        else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            resultText = "🎉 You Win!";
            setUserScore(prev => prev + 1);
        }
        else {
            resultText = "😢 Computer Wins!";
            setComputerScore(prev => prev + 1);
        }

        setResult(resultText);
    };

    const resetGame = () => {
        setUserScore(0);
        setComputerScore(0);
        setResult("");
        setLastChoices({ user: null, computer: null });
    };

    const getEmoji = (id) => choices.find(c => c.id === id)?.emoji;

    return (
        <div className="game-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(5, 5, 10, 0.95)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(15px)',
            fontFamily: 'var(--font-main)'
        }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '30px',
                    right: '30px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    fontSize: '1.2rem',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
                className="glow-hover"
            >
                ✕
            </button>

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '10px' }}>
                    <span className="text-gradient">ROCK PAPER</span> SCISSORS
                </h2>
                <div style={{
                    fontSize: '1.2rem',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '10px 30px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    Score — You: <span style={{ color: 'var(--color-primary)' }}>{userScore}</span> | Computer: <span style={{ color: 'var(--color-secondary)' }}>{computerScore}</span>
                </div>
            </div>

            <div className="display-area" style={{
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '40px'
            }}>
                {lastChoices.user ? (
                    <>
                        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}>{getEmoji(lastChoices.user)}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '5px' }}>YOU</div>
                            </div>
                            <div style={{ fontSize: '2rem', fontWeight: '900', opacity: 0.3 }}>VS</div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' }}>{getEmoji(lastChoices.computer)}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '5px' }}>CPU</div>
                            </div>
                        </div>
                        <div style={{
                            fontSize: '1.8rem',
                            fontWeight: '700',
                            color: result.includes('Win') ? 'var(--color-primary)' : result.includes('Draw') ? 'white' : '#ff5555'
                        }}>
                            {result}
                        </div>
                    </>
                ) : (
                    <div style={{ fontSize: '1.5rem', opacity: 0.5 }}>Choose your weapon!</div>
                )}
            </div>

            <div style={{
                display: 'flex',
                gap: '25px',
                padding: '20px'
            }}>
                {choices.map((choice) => (
                    <button
                        key={choice.id}
                        onClick={() => play(choice.id)}
                        className="glass glow-hover"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            cursor: 'pointer',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {choice.emoji}
                        <span style={{ fontSize: '0.7rem', fontWeight: '700', marginTop: '10px', color: 'white', opacity: 0.7, textTransform: 'uppercase' }}>
                            {choice.id}
                        </span>
                    </button>
                ))}
            </div>

            <div style={{ marginTop: '50px' }}>
                <button
                    onClick={resetGame}
                    style={{
                        padding: '12px 30px',
                        borderRadius: '30px',
                        background: 'transparent',
                        color: 'white',
                        fontWeight: '600',
                        border: '1px solid rgba(255,255,255,0.2)',
                        cursor: 'pointer'
                    }}
                    className="glow-hover"
                >
                    Reset Scores
                </button>
            </div>
        </div>
    );
};

export default RockPaperScissors;
