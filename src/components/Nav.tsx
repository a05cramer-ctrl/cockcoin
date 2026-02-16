interface NavProps {
  onBuyClick: () => void
}

export function Nav({ onBuyClick }: NavProps) {
  return (
    <nav className="nav">
      <a href="#" className="nav-logo">$COCK</a>
      <div className="nav-links">
        <a href="#roadmap">Roadmap</a>
        <a href="#memes">Memes</a>
        <button className="btn btn-primary" onClick={onBuyClick}>
          GET $COCK
        </button>
      </div>
    </nav>
  )
}
