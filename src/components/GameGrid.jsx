import React from 'react';

const games = [
    { id: 1, title: 'UNO', category: 'Card Game', rating: '4.8', color: 'linear-gradient(45deg, #FF5555, #FFB86C)' },
    { id: 2, title: 'Tic-Tac-Toe', category: 'Classic', rating: '4.5', color: 'linear-gradient(45deg, #50fa7b, #282a36)' },
    { id: 3, title: 'Rock Paper Scissors', category: 'Casual', rating: '4.6', color: 'linear-gradient(45deg, #BD93F9, #FF79C6)' },
];

const GameCard = ({ game, onClick }) => (
    <div
        className="glass glow-hover"
        onClick={onClick}
        style={{
            borderRadius: '20px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            cursor: 'pointer'
        }}>
        <div style={{
            height: '200px',
            background: game.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <span style={{ fontSize: '3rem', opacity: '0.4' }}>🎮</span>
        </div>
        <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: '600', textTransform: 'uppercase' }}>{game.category}</span>
                <span style={{ color: '#FFD700', fontSize: '0.9rem' }}>★ {game.rating}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{game.title}</h3>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Join the action and compete with players worldwide.</p>
            <button className="glow-hover" style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                background: 'var(--gradient-main)',
                color: 'black',
                fontWeight: '700',
                fontSize: '0.9rem'
            }}>PLAY NOW</button>
        </div>
    </div>
);

const GameGrid = ({ onPlayGame }) => {
    return (
        <section id="games" style={{ padding: '5rem 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>Trending Games</h2>
                        <p style={{ color: 'var(--color-text-dim)' }}>Most played titles this week</p>
                    </div>
                    <a href="#" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>View All Games →</a>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {games.map(game => (
                        <GameCard
                            key={game.id}
                            game={game}
                            onClick={() => onPlayGame(game.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GameGrid;
