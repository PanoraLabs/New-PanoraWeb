const stats = [
  {
    num: (
      <>
        Rp <span>48</span>B+
      </>
    ),
    label: "Total Value Locked",
    delay: undefined,
  },
  {
    num: <span>340+</span>,
    label: "Active Farmers Onboarded",
    delay: "0.1s",
  },
  {
    num: <span>12</span>,
    label: "Vaults Completed",
    delay: "0.2s",
  },
  {
    num: <span>0</span>,
    label: "Rug Pulls (ever)",
    delay: "0.3s",
  },
] as const;

export function StatsBar() {
  return (
    <section id="stats">
      {stats.map(({ num, label, delay }) => (
        <div
          key={label}
          className="stat-item reveal"
          style={delay ? { transitionDelay: delay } : undefined}
        >
          <div className="stat-num">{num}</div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </section>
  );
}
