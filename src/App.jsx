function PadIllustration() {
  return (
    <svg viewBox="0 0 520 520" className="pad-illustration" aria-label="Menstrual support pad illustration">
      <defs>
        <linearGradient id="padBody" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#fffaf9" />
          <stop offset="100%" stopColor="#f7dfe8" />
        </linearGradient>
        <linearGradient id="padShadow" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f7bfd4" />
          <stop offset="100%" stopColor="#e5d7ff" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="250" r="170" fill="rgba(255,255,255,0.22)" />
      <circle cx="198" cy="152" r="62" fill="rgba(255,255,255,0.14)" />
      <circle cx="358" cy="344" r="83" fill="rgba(255,255,255,0.14)" />

      <g transform="translate(85 68)">
        <rect x="80" y="90" width="240" height="255" rx="70" fill="url(#padBody)" />
        <rect x="108" y="110" width="184" height="214" rx="52" fill="#fffdfd" opacity="0.76" />
        <path d="M150 155 C162 122, 215 102, 258 126 C280 139, 297 161, 298 202 C299 265, 247 314, 188 314 C147 314, 123 282, 119 247 C114 207, 123 175, 150 155Z" fill="url(#padShadow)" opacity="0.8" />
        <circle cx="163" cy="184" r="18" fill="#f5a2ba" opacity="0.85" />
        <circle cx="214" cy="160" r="15" fill="#d7c6ff" opacity="0.8" />
        <circle cx="252" cy="188" r="18" fill="#f9d4dd" opacity="0.9" />
        <circle cx="196" cy="234" r="18" fill="#f4b9c9" opacity="0.8" />
        <circle cx="244" cy="250" r="15" fill="#d9d0ff" opacity="0.85" />
        <rect x="92" y="242" width="216" height="18" rx="9" fill="#f6cfe0" opacity="0.8" />
        <rect x="138" y="91" width="150" height="33" rx="16" fill="#f9cee0" opacity="0.9" />
        <rect x="134" y="342" width="170" height="22" rx="11" fill="#e8cfe4" opacity="0.8" />
      </g>

      <g>
        <circle cx="108" cy="96" r="18" fill="#f8dfe9" />
        <circle cx="428" cy="122" r="22" fill="#dfe5ff" />
        <circle cx="400" cy="430" r="26" fill="#f8d9e7" />
        <circle cx="124" cy="405" r="20" fill="#e6d9ff" />
      </g>
    </svg>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">M</span>
          <span>Menora</span>
        </div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Insights</a>
          <a href="#">Support</a>
        </nav>

        <button type="button" className="nav-button">
          Sign In
        </button>
      </header>

      <main className="hero-section">
        <section className="content-panel">
          <p className="eyebrow">Gentle cycle care</p>
          <h1>Menstrual Irregularity</h1>
          <p className="subtitle">
            Track patterns, understand symptoms, and receive supportive guidance designed for a healthier, calmer cycle journey.
          </p>

          <div className="cta-row">
            <button type="button" className="cta-button">
              Get Started
            </button>
            <a href="#" className="secondary-link">
              Learn more
            </a>
          </div>

          <div className="mini-stats">
            <div>
              <strong>12k+</strong>
              <span>Cycle insights</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Care rating</span>
            </div>
          </div>
        </section>

        <section className="visual-panel">
          <div className="floating-card">
            <span className="card-tag">Smart Cycle Care</span>
            <div className="card-info">
              <div>
                <small>Today</small>
                <strong>Cycle balance</strong>
              </div>
              <span>Healthy pattern</span>
            </div>
            <PadIllustration />
          </div>
        </section>
      </main>
    </div>
  );
}
