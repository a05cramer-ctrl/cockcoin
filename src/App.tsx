import { useState } from 'react'
import './App.css'
import { RoosterHero } from './components/RoosterHero'
import { Roadmap } from './components/Roadmap'
import { MemeGallery } from './components/MemeGallery'
import { Nav } from './components/Nav'

function App() {
  const [buyModalOpen, setBuyModalOpen] = useState(false)

  return (
    <div className="app">
      <Nav onBuyClick={() => setBuyModalOpen(true)} />
      
      <main>
        <RoosterHero onBuyClick={() => setBuyModalOpen(true)} />
        
        <section className="hype-section">
          <div className="hype-content">
            <h2 className="hype-title">THE BLOCKCHAIN NEEDS SOMETHING TO RISE TO</h2>
            <p className="hype-text">
              Other tokens are soft. Flaccid. Asleep. Not $COCK. We're <span className="highlight">HARD</span> at 4 AM. 
              We didn't come to play—we came to <span className="highlight">CROW</span>. 
              This isn't just a token. It's a <span className="highlight">MANIFESTO</span>. 
              The biggest, boldest bird on the block. Always standing at attention.
            </p>
            <p className="hype-text">
              Join the flock. Get your <span className="highlight">$COCK</span>. You won't regret holding it.
            </p>
          </div>
        </section>

        <Roadmap />
        <MemeGallery />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span className="footer-logo">$COCK</span>
          <div className="footer-links">
            <a href="#">Twitter</a>
            <a href="#">Telegram</a>
            <a href="#">DexScreener</a>
          </div>
        </div>
      </footer>

      {buyModalOpen && (
        <div className="modal-overlay" onClick={() => setBuyModalOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setBuyModalOpen(false)}>×</button>
            <h3>GET YOUR $COCK</h3>
            <p className="modal-subtitle">Contract: 0x...C0CK — verify before you grab it</p>
            <div className="modal-actions">
              <a href="#" className="btn btn-primary btn-large">
                BUY ON RAYDIUM
              </a>
              <a href="#" className="btn btn-secondary btn-large">
                BUY ON JUPITER
              </a>
            </div>
            <p className="modal-warning">⚠️ Always verify contract address. DYOR.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
