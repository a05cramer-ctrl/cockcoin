const memes = [
  { id: 1, text: 'Me waiting for $COCK to 100x', emoji: '🐓' },
  { id: 2, text: 'POV: You got in early', emoji: '👑' },
  { id: 3, text: 'Waking up to $COCK', emoji: '🌅' },
  { id: 4, text: 'Other coins vs $COCK (size matters)', emoji: '💪' },
  { id: 5, text: 'When someone asks if you\'re holding', emoji: '🔥' },
  { id: 6, text: 'The only one that rises at 4 AM', emoji: '🐔' },
]

export function MemeGallery() {
  return (
    <section id="memes" className="section memes">
      <h2 className="section-title">
        <span className="section-emoji">🖼️</span>
        MEME GALLERY
      </h2>
      <p className="section-subtitle">Peak culture. Double meaning intended.</p>
      
      <div className="meme-grid">
        {memes.map((meme, i) => (
          <div key={meme.id} className="meme-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="meme-placeholder">
              <span className="meme-emoji">{meme.emoji}</span>
              <span className="meme-text">{meme.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
