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
        <button className="btn btn-hero" onClick={onBuyClick}>
          GET YOUR $COCK
        </button>
      </div>
      
      <div className="hero-scroll">↓</div>
    </section>
  )
}
