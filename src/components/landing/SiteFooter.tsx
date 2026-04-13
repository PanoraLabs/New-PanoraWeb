import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      "Panora Vaults",
      "Secondary Market",
      "NFT Passport",
      "Field Agent App",
    ],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "Whitepaper"],
  },
] as const;

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand-name">Panora Labs</div>
          <p className="footer-brand-desc">
            Climate-Smart RWA Agriculture Infrastructure. Building the financial
            rails for Indonesia&apos;s farmers on Solana.
          </p>
        </div>
        {columns.map(({ title, links }) => (
          <div key={title}>
            <div className="footer-col-title">{title}</div>
            <ul className="footer-links">
              {links.map((label) => (
                <li key={label}>
                  <Link href="#">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2026 Panora Labs. All rights reserved.
        </span>
        <span className="footer-built">
          Built by <span>Prasetio Wibowo</span>
        </span>
      </div>
    </footer>
  );
}
