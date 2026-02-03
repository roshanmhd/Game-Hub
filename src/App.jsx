import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';
import UnoGame from './components/UnoGame';
import TicTacToe from './components/TicTacToe';
import RockPaperScissors from './components/RockPaperScissors';

function App() {
  const [activeGame, setActiveGame] = React.useState(null);

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
      <GameGrid onPlayGame={(gameId) => setActiveGame(gameId)} />
      <Footer />

      {activeGame === 1 && <UnoGame onClose={() => setActiveGame(null)} />}
      {activeGame === 2 && <TicTacToe onClose={() => setActiveGame(null)} />}
      {activeGame === 3 && <RockPaperScissors onClose={() => setActiveGame(null)} />}
    </div>
  );
}

export default App;
