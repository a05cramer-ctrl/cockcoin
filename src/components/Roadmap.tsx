const phases = [
  { phase: 1, title: 'HATCHING', items: ['Token launch', '$COCK drops on Solana', 'First crow heard across the block'], emoji: '🥚' },
  { phase: 2, title: 'EARLY BIRD', items: ['Listings on DexScreener', 'Twitter gets a taste', 'Telegram: everyone wants a piece'], emoji: '🐣' },
  { phase: 3, title: 'FARM DOMINANCE', items: ['CEX listings (maybe)', '$COCK in every portfolio', 'NFT collection: collect them all'], emoji: '🐓' },
  { phase: 4, title: 'SUNRISE EMPIRE', items: ['$COCK on top of the chain', 'Everyone\'s holding', 'The alpha. The only one that matters.'], emoji: '👑' },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="section roadmap">
      <h2 className="section-title">
        <span className="section-emoji">🗺️</span>
        THE ROADMAP
      </h2>
      <p className="section-subtitle">From egg to empire. Watch us grow.</p>
      
      <div className="roadmap-timeline">
        {phases.map((p, i) => (
          <div key={i} className="roadmap-phase" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="roadmap-phase-header">
              <span className="roadmap-emoji">{p.emoji}</span>
              <span className="roadmap-phase-num">PHASE {p.phase}</span>
              <h3 className="roadmap-phase-title">{p.title}</h3>
            </div>
            <ul className="roadmap-list">
              {p.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
