# Panora — Agricultural Investing (Demo)

Hackathon demo app for investing in Indonesian farm vaults. No backend or wallet auth — all flows run on in-browser demo data with persistence.

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal. Desktop shows a sidebar; mobile uses bottom navigation.

Reset demo data: add `?reset` to the URL, or long-press the top status strip on mobile.

## Project structure

```
src/
├── App.tsx              # Routes / screen shell
├── main.tsx
├── config/
│   └── demo.ts          # Demo user & sheet defaults
├── data/                # Seed content (vaults, listings, activity, …)
├── store/
│   ├── app-store.ts     # UI state (screen, sheets, toast)
│   └── demo-store.ts    # Demo portfolio & transactions
├── hooks/
│   ├── use-demo.ts      # Demo data selectors
│   ├── useUser.ts
│   ├── useHome.ts
│   ├── usePortfolio.ts
│   ├── useWallet.ts
│   ├── usePassport.ts
│   └── useWhenSheetOpen.ts
├── screens/             # Full-page views
│   └── sheets/          # Modal flows (invest, buy, claim, …)
├── components/
│   ├── layout/          # Shell, nav, sheets, toast
│   ├── shared/          # Cards, rows, tiles
│   └── ui/              # shadcn (badge, input)
├── lib/                 # format, icons, utils, amount helpers
└── motion/              # framer-motion variants
```

## Scripts

| Command        | Description        |
|----------------|--------------------|
| `npm run dev`  | Development server |
| `npm run build`| Production build   |
| `npm run preview` | Preview build   |

## Demo flows

- **Invest** — Discover → vault → confirm amount
- **Trade** — Marketplace buy / sell listings
- **Claim** — Home or Account → claim harvest profit
- **Cash** — Account → add or withdraw USD
