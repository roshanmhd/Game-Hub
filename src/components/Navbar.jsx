import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '1px' }}>
          <span className="text-gradient">GAME</span>HUB
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Home', 'Games', 'Tournaments', 'Community'].map((item) => (
             <a href={`#${item.toLowerCase()}`} key={item} style={{
               color: 'var(--color-text)',
               fontWeight: '600',
               fontSize: '0.9rem',
               opacity: 0.8,
               transition: 'opacity 0.2s',
               cursor: 'pointer'
             }} 
             onMouseOver={(e) => e.target.style.opacity = '1'}
             onMouseOut={(e) => e.target.style.opacity = '0.8'}
             >
               {item}
             </a>
          ))}
        </div>

        <button className="glow-hover" style={{
          background: 'transparent',
          color: 'var(--color-primary)',
          border: '1px solid var(--color-primary)',
          padding: '0.5rem 1.5rem',
          borderRadius: '50px',
          fontWeight: '700',
          fontSize: '0.9rem'
        }}>
          LOGIN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
