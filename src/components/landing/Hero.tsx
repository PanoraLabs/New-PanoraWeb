import Link from "next/link";

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-left">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          Climate-Smart RWA Agriculture — Now Live
        </div>

        <h1 className="hero-title">
          Growing
          <br />
          <em>real yields</em>
          <br />
          on-chain.
        </h1>

        <p className="hero-sub">
          Panora Labs connects investors with verified Indonesian farmers through
          blockchain-powered vaults — transparent, traceable, and
          climate-resilient.
        </p>

        <div className="hero-actions">
          <Link href="#vaults" className="btn-primary">
            Start Investing →
          </Link>
          <Link href="#how" className="btn-outline">
            See How It Works
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card-stack">
          <div className="vault-card vc-far" />
          <div className="vault-card vc-behind" />
          <div className="vault-card vc-main">
            <div className="float-badge fb-top">
              <div className="fb-label">Season Yield</div>
              <div className="fb-val">
                +18.4% <span className="fb-green">↑</span>
              </div>
            </div>

            <div className="vc-tag">
              <span className="vc-tag-dot" />
              Active Vault
            </div>
            <div className="vc-title">CHILI-GH-SUBANG-Q2</div>
            <div className="vc-sub">Red Chili · Greenhouse · West Java</div>

            <div className="vc-stats">
              <div className="vc-stat">
                <div className="vc-stat-label">Funded</div>
                <div className="vc-stat-val">Rp 2.4B</div>
              </div>
              <div className="vc-stat">
                <div className="vc-stat-label">Duration</div>
                <div className="vc-stat-val">
                  90 <span>days</span>
                </div>
              </div>
            </div>

            <div className="vc-progress-label">
              <span>Growth Progress</span>
              <span style={{ fontWeight: 500, color: "var(--forest)" }}>
                Day 65 / 90
              </span>
            </div>
            <div className="vc-bar-bg">
              <div className="vc-bar-fill" />
            </div>

            <div className="vc-avatars">
              <div className="vc-av">AW</div>
              <div className="vc-av" style={{ background: "var(--gold)" }}>
                BR
              </div>
              <div className="vc-av" style={{ background: "var(--leaf)" }}>
                PT
              </div>
              <div className="vc-av vc-av-more">+24</div>
              <span className="vc-av-label">investors staked</span>
            </div>

            <div className="float-badge fb-bot">
              <div className="fb-label">IoT Status</div>
              <div
                className="fb-val"
                style={{ fontSize: 14, color: "var(--sprout)" }}
              >
                🌡 28°C · 82% RH
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
