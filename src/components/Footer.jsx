import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--color-card-border)',
            padding: '4rem 0',
            background: '#020205'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '4rem'
            }}>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>
                        <span className="text-gradient">GAME</span>HUB
                    </h3>
                    <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                        The ultimate destination for gamers. Play, compete, and connect with millions of players around the world.
                    </p>
                </div>

                {[
                    { title: 'Platform', links: ['Browse Games', 'Tournaments', 'Live Streams', 'Events'] },
                    { title: 'Support', links: ['Help Center', 'Terms of Service', 'Privacy Policy', 'Contact Us'] },
                    { title: 'Community', links: ['Discord', 'Twitter', 'Instagram', 'Twitch'] }
                ].map((col, idx) => (
                    <div key={idx}>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#fff' }}>{col.title}</h4>
                        <ul style={{ listStyle: 'none' }}>
                            {col.links.map(link => (
                                <li key={link} style={{ marginBottom: '1rem' }}>
                                    <a href="#" style={{ color: 'var(--color-text-dim)', transition: 'color 0.2s' }}
                                        onMouseOver={e => e.target.style.color = 'var(--color-primary)'}
                                        onMouseOut={e => e.target.style.color = 'var(--color-text-dim)'}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="container" style={{
                textAlign: 'center',
                paddingTop: '3rem',
                marginTop: '3rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--color-text-dim)',
                fontSize: '0.9rem'
            }}>
                © 2026 GameHub. All rights reserved. Made by <span className="text-gradient" style={{ fontWeight: 'bold' }}>Roshan</span> ⚡
            </div>
        </footer>
    );
};

export default Footer;
