import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      {/* Background Grid Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }}></div>

      <Navbar />
      <Hero />
      <GameGrid />
      <Footer />
    </div>
  );
}

export default App;
