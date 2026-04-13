const steps = [
  {
    n: "1",
    title: "Stake",
    desc: "Deposit USDC into a Vault. Receive a Participation Token as proof.",
  },
  {
    n: "2",
    title: "Activate",
    desc: "Node Agent verifies field readiness with geotagged photos.",
  },
  {
    n: "3",
    title: "Grow",
    desc: "Track live IoT data and milestone disbursements in-app.",
  },
  {
    n: "4",
    title: "Harvest",
    desc: "Off-taker pays directly to the Panora smart contract.",
  },
  {
    n: "5",
    title: "Claim",
    desc: "Receive 100% principal + 35% net profit to your wallet.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how">
      <div className="section-label">Process</div>
      <h2 className="section-title">
        From seed to <em>settlement</em>
      </h2>
      <p className="section-sub">Five on-chain steps, zero middlemen.</p>

      <div className="steps reveal">
        {steps.map(({ n, title, desc }) => (
          <div key={n} className="step">
            <div className="step-num">{n}</div>
            <div className="step-title">{title}</div>
            <div className="step-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
