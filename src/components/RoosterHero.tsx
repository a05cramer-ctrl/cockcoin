interface RoosterHeroProps {
  onBuyClick: () => void
}

export function RoosterHero({ onBuyClick }: RoosterHeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grain" />
        <div className="hero-sun" />
        <div className="hero-waves" />
      </div>
      
      <div className="hero-content">
        <div className="hero-rooster">
          <img src="/favicon.png" alt="$COCK" className="hero-rooster-img" />
        </div>
        
        <h1 className="hero-title">
          <span className="hero-title-main">WAKE UP</span>
          <span className="hero-title-sub">THE BLOCKCHAIN</span>
        </h1>
        <p className="hero-tagline">$COCK — Hard. Early. Always up. (We mean the rooster.)</p>
        <div className="hero-buttons">
          <a href="https://x.com/CockCoin_Dev" target="_blank" rel="noopener noreferrer" className="btn btn-hero-social" aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Twitter
          </a>
          <button className="btn btn-hero" onClick={onBuyClick}>
            GET YOUR $COCK
          </button>
          <a href="https://dexscreener.com/solana/Cv5ykPrYmx4jC5eFsEW1eVf6dA83J7Kh1AnoGXcTpump" target="_blank" rel="noopener noreferrer" className="btn btn-hero-social" aria-label="Chart">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
            Chart
          </a>
        </div>
      </div>
      
      <div className="hero-scroll">↓</div>
    </section>
  )
}
