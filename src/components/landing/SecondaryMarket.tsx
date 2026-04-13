const checklist = [
  "Real-time oracle pricing based on IoT crop health data",
  "Price floor logic prevents predatory under-selling",
  "0.5% royalty on every trade goes to farmer emergency fund",
  "Rights transfer is instant — farmers are never disrupted",
] as const;

const rows = [
  { icon: "🌶️", name: "CHILI-GH-SUBANG-Q2", day: "Day 65 of 90", price: "Rp 10,850,000", up: "+8.5% vs. entry" },
  { icon: "☕", name: "COFFEE-HYB-TORAJA-Q1", day: "Day 120 of 180", price: "Rp 25,200,000", up: "+12.1% vs. entry" },
  { icon: "🧅", name: "SHALLOT-GH-BREBES-Q2", day: "Day 30 of 100", price: "Rp 5,050,000", up: "+1.0% vs. entry" },
  { icon: "🌾", name: "RICE-OPEN-KARAWANG-Q2", day: "Day 88 of 130", price: "Rp 8,400,000", up: "+5.2% vs. entry" },
] as const;

export function SecondaryMarket() {
  return (
    <section id="market" className="market-section-pad">
      <div className="reveal">
        <div className="section-label">Liquidity</div>
        <h2 className="section-title">
          Exit anytime.
          <br />
          <em>No lock-in</em> anxiety.
        </h2>
        <p className="section-sub">
          Participation Tokens trade on Panora&apos;s secondary market. Sell your
          harvest rights the moment you need liquidity — price updates in real
          time as crops grow.
        </p>
        <ul className="market-checklist">
          {checklist.map((text) => (
            <li key={text}>
              <span className="market-check-icon">✓</span>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="market-visual reveal"
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="market-header">
          <span className="mh-title">Secondary Market</span>
          <span className="mh-live">
            <span className="mh-dot" /> Live
          </span>
        </div>
        <div className="market-list">
          {rows.map(({ icon, name, day, price, up }) => (
            <div key={name} className="market-row">
              <div className="mr-left">
                <div className="mr-icon">{icon}</div>
                <div>
                  <div className="mr-name">{name}</div>
                  <div className="mr-day">{day}</div>
                </div>
              </div>
              <div className="mr-right">
                <div className="mr-price">{price}</div>
                <div className="mr-up">{up}</div>
              </div>
            </div>
          ))}
        </div>
        <button type="button" className="market-btn">
          View All Active Listings →
        </button>
      </div>
    </section>
  );
}
