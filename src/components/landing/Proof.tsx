const logos = [
  "Solana",
  "Metaplex",
  "Pyth Oracle",
  "EUDR",
  "Chainlink",
  "Bulog",
] as const;

export function Proof() {
  return (
    <section id="proof">
      <div className="section-label proof-built-label">Built on</div>
      <p className="proof-infra-title">Powered by open infrastructure</p>
      <div className="proof-logos">
        {logos.map((name) => (
          <div key={name} className="proof-logo">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
