const vaults = [
  {
    icon: "🌶️",
    iconClass: "vi-green",
    name: "High Value",
    title: "Greenhouse Produce",
    desc: "Chili, tomato, shallot. Climate-controlled greenhouses eliminate weather risk and ensure supply consistency for modern retailers.",
    returnVal: "15–22%",
    duration: "90–110 days",
    delay: undefined,
  },
  {
    icon: "☕",
    iconClass: "vi-gold",
    name: "Export RWA",
    title: "Traceable Exports",
    desc: "Coffee, cacao, vanilla. Every batch minted as cNFT — full chain-of-custody from farm to foreign buyer. EUDR-ready by default.",
    returnVal: "18–28%",
    duration: "6–9 months",
    delay: "0.1s",
  },
  {
    icon: "🌾",
    iconClass: "vi-blue",
    name: "Bulk Commodity",
    title: "Staple Crops",
    desc: "Rice and corn at scale, backed by off-taker guarantees from Bulog and licensed warehouses. Lower yield, higher volume security.",
    returnVal: "8–14%",
    duration: "4–5 months",
    delay: "0.2s",
  },
] as const;

export function Vaults() {
  return (
    <section id="vaults">
      <div className="vaults-bg-circle" />
      <div className="vaults-bg-circle2" />
      <div className="vaults-inner">
        <div className="section-label">Product</div>
        <h2 className="section-title" style={{ color: "white" }}>
          Three vault
          <br />
          <em>strategies</em>
        </h2>
        <p className="section-sub">
          Pick your risk profile. All secured by smart contracts and
          Proof-of-Activity.
        </p>

        <div className="vault-grid">
          {vaults.map(
            ({ icon, iconClass, name, title, desc, returnVal, duration, delay }) => (
              <div
                key={title}
                className="vault-item reveal"
                style={delay ? { transitionDelay: delay } : undefined}
              >
                <div className={`vault-icon ${iconClass}`}>{icon}</div>
                <div className="vault-name">{name}</div>
                <div className="vault-title">{title}</div>
                <div className="vault-desc">{desc}</div>
                <div className="vault-meta">
                  <div>
                    <div className="vm-label">Est. Return</div>
                    <div className="vm-val">{returnVal}</div>
                  </div>
                  <div>
                    <div className="vm-label">Duration</div>
                    <div className="vm-val">{duration}</div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
