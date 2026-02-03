import React, { useState } from 'react';

const TicTacToe = ({ onClose }) => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [gameActive, setGameActive] = useState(true);
    const [status, setStatus] = useState("Player X's Turn");

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const checkWinner = (currentBoard, player) => {
        return winPatterns.some(pattern => {
            return pattern.every(index => currentBoard[index] === player);
        });
    };

    const makeMove = (index) => {
        if (!gameActive || board[index] !== "") return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        if (checkWinner(newBoard, currentPlayer)) {
            setStatus(`🎉 Player ${currentPlayer} Wins!`);
            setGameActive(false);
            return;
        }

        if (!newBoard.includes("")) {
            setStatus("😐 Draw!");
            setGameActive(false);
            return;
        }

        const nextPlayer = currentPlayer === "X" ? "O" : "X";
        setCurrentPlayer(nextPlayer);
        setStatus(`Player ${nextPlayer}'s Turn`);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setCurrentPlayer("X");
        setGameActive(true);
        setStatus("Player X's Turn");
    };

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
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                }}
                className="glow-hover"
            >
                ✕
            </button>

            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '10px' }}>
                    <span className="text-gradient">TIC TAC</span> TOE
                </h2>
                <div style={{
                    fontSize: '1.5rem',
                    color: gameActive ? 'var(--color-primary)' : '#ff5555',
                    fontWeight: '600',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '10px 30px',
                    borderRadius: '20px',
                    display: 'inline-block'
                }}>
                    {status}
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 100px)',
                gap: '15px',
                background: 'rgba(255,255,255,0.03)',
                padding: '20px',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
                {board.map((cell, index) => (
                    <div
                        key={index}
                        onClick={() => makeMove(index)}
                        className="glass glow-hover"
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            fontWeight: '900',
                            cursor: gameActive && cell === "" ? 'pointer' : 'default',
                            color: cell === "X" ? 'var(--color-primary)' : 'var(--color-secondary)',
                            textShadow: cell === "X" ? '0 0 15px rgba(0,243,255,0.5)' : '0 0 15px rgba(189,0,255,0.5)',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        {cell}
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '50px' }}>
                <button
                    onClick={resetGame}
                    className="glow-hover"
                    style={{
                        padding: '15px 40px',
                        borderRadius: '30px',
                        background: gameActive ? 'transparent' : 'var(--gradient-main)',
                        color: gameActive ? 'white' : 'black',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        border: '2px solid var(--color-primary)',
                        transition: 'all 0.3s'
                    }}
                >
                    {gameActive ? 'Restart Game' : 'Play Again'}
                </button>
            </div>
        </div>
    );
};

export default TicTacToe;
