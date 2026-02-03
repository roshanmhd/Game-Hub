import React from 'react';

const Hero = () => {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: '60px' // for navbar
        }}>
            {/* Background Glows */}
            <div className="animate-float" style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                filter: 'blur(150px)',
                opacity: 0.2,
                zIndex: -1
            }}></div>
            <div className="animate-float" style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'var(--color-secondary)',
                filter: 'blur(180px)',
                opacity: 0.2,
                animationDelay: '1s',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <h1 style={{
                    fontSize: '5rem',
                    lineHeight: '1.1',
                    marginBottom: '1.5rem',
                    fontWeight: '900',
                    textTransform: 'uppercase'
                }}>
                    Unleash Your <br />
                    <span className="text-gradient">Gaming Instinct</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-dim)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    lineHeight: '1.6'
                }}>
                    Dive into a universe of premium titles, competitive tournaments, and a thriving community. The next level awaits.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <button className="glow-hover" style={{
                        background: 'var(--gradient-main)',
                        color: '#fff',
                        padding: '1rem 3rem',
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        boxShadow: '0 0 20px rgba(0, 243, 255, 0.3)'
                    }}>
                        START PLAYING
                    </button>

                    <button
                        className="glass glow-hover"
                        style={{
                            color: '#fff',
                            padding: '1rem 3rem',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '700'
                        }}
                    >
                        BROWSE GAMES
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
