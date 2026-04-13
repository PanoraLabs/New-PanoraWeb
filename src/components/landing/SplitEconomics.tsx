import { DONUT_C, DONUT_L1, DONUT_L2, DONUT_L3 } from "./constants";

const legend = [
  {
    color: "var(--leaf)",
    label: "55% — Farmers",
    sub: "Directly to yield-account, cashable in IDR",
  },
  {
    color: "var(--gold)",
    label: "35% — Investors",
    sub: "Proportional to stake, claimable to wallet",
  },
  {
    color: "var(--stone)",
    label: "10% — Platform & Ecosystem",
    sub: "4% ops · 4% Node Agents · 2% Emergency Fund",
  },
] as const;

const pctRow = [
  { pct: "55%", label: "Farmer", color: "var(--leaf)" },
  { pct: "35%", label: "Investor", color: "var(--gold)" },
  { pct: "10%", label: "Ecosystem", color: "var(--stone)" },
] as const;

export function SplitEconomics() {
  return (
    <section id="split">
      <div className="reveal">
        <div className="section-label">Economics</div>
        <h2 className="section-title">
          A split
          <br />
          built for <em>fairness</em>
        </h2>
        <p className="section-sub">
          Net profit is distributed transparently, on-chain, the moment settlement
          occurs — no middlemen taking silent cuts.
        </p>

        <div className="split-legend">
          {legend.map(({ color, label, sub }) => (
            <div key={label} className="sl-item">
              <div className="sl-dot" style={{ background: color }} />
              <div>
                <div className="sl-label">{label}</div>
                <div className="sl-sub">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal" style={{ transitionDelay: "0.2s" }}>
        <div className="split-donut">
          <svg viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--mist)"
              strokeWidth="28"
            />
            <circle
              className="donut-arc donut-arc--1"
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--leaf)"
              strokeWidth="28"
              strokeDasharray={`${DONUT_L1} ${DONUT_C - DONUT_L1}`}
            />
            <circle
              className="donut-arc donut-arc--2"
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="28"
              strokeDasharray={`${DONUT_L2} ${DONUT_C - DONUT_L2}`}
              transform="rotate(198 100 100)"
            />
            <circle
              className="donut-arc donut-arc--3"
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--stone)"
              strokeWidth="28"
              strokeDasharray={`${DONUT_L3} ${DONUT_C - DONUT_L3}`}
              transform="rotate(324 100 100)"
            />
          </svg>
          <div className="donut-center">
            <div className="dc-label">Net Profit</div>
            <div className="dc-val">Split</div>
          </div>
        </div>

        <div className="split-pct-row">
          {pctRow.map(({ pct, label, color }) => (
            <div key={label} className="split-pct-item">
              <div className="split-pct-val" style={{ color }}>
                {pct}
              </div>
              <div className="split-pct-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
