# Michael William — Portfolio

A modern, single-page portfolio site for **Michael William**, Web3 Community Manager & Growth Strategist operating within the Polkadot ecosystem.

Built with **React 18** + **Vite** for fast development and production builds, deployable to any static hosting platform.

---

## Preview

Dark-themed portfolio featuring:

- Animated particle canvas hero section
- Scroll-triggered fade-in animations
- Responsive mobile-first layout with hamburger menu
- Interactive contact reveal
- SVG-generated project thumbnails
- Crimson (`#C0182A`) accent on a near-black (`#080808`) background

Fonts: **Syne** (headings) + **DM Sans** (body) via Google Fonts.

---

## Tech Stack

| Layer       | Technology                        |
| ----------- | --------------------------------- |
| Framework   | React 18                          |
| Build Tool  | Vite 6                            |
| Styling     | CSS-in-JS (inline) + global CSS   |
| Fonts       | Google Fonts (Syne, DM Sans)      |
| Animations  | CSS keyframes + IntersectionObserver |
| Canvas      | HTML5 Canvas (particle network)   |
| Deployment  | Static (Vercel / Netlify / GitHub Pages) |

---

## Project Structure

```
digres/
├── public/
│   ├── favicon.svg            # MW. branded favicon
│   └── profile.jpg            # Profile photo (add your own)
├── src/
│   ├── components/
│   │   ├── thumbnails/
│   │   │   ├── ThumbDotVest.jsx
│   │   │   ├── ThumbNextbridge.jsx
│   │   │   ├── ThumbAtomic.jsx
│   │   │   ├── ThumbDotSpawn.jsx
│   │   │   └── index.js
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── FadeIn.jsx
│   │   ├── FontLoader.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroCanvas.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Section.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── experiences.js     # Work history entries
│   │   ├── navigation.js      # Nav section IDs
│   │   ├── projects.js        # Featured projects
│   │   └── skills.js          # Skill categories & tiers
│   ├── styles/
│   │   ├── global.css         # Global styles, animations, responsive
│   │   └── tokens.js          # Design tokens (colors, URLs)
│   ├── App.jsx                # Root component (scroll logic + layout)
│   └── main.jsx               # React entry point
├── index.html                 # HTML shell
├── vite.config.js             # Vite configuration
├── package.json
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9 (or use pnpm / yarn)

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Configuration

### Profile Image

Place your profile photo at `public/profile.jpg`. The site references it via `/profile.jpg`.

Alternatively, update the `PROFILE_IMG` export in `src/styles/tokens.js` to point to:
- A hosted image URL
- A Base64 data URI (`data:image/jpeg;base64,...`)

### External Links

All external URLs are configured in `src/styles/tokens.js`:

| Constant       | Purpose                                |
| -------------- | -------------------------------------- |
| `POW_URL`      | Proof-of-work portfolio page           |
| `PROFILE_IMG`  | Profile photo path or URL              |

Social and resume links are defined inline within the `Contact.jsx`, `Footer.jsx`, and `Navbar.jsx` components:

- **LinkedIn**: linkedin.com/in/michael-william
- **Twitter/X**: @mikedotwill
- **Telegram**: @Digital_RC
- **Linktree**: linktr.ee/Michael.William
- **Resume**: read.cv/michael.william

### Resume Content

All resume data is stored in `src/data/`:

- **experiences.js** — roles, organizations, durations, impact descriptions
- **projects.js** — featured projects with descriptions, roles, tags, links
- **skills.js** — skill categories with primary/secondary tier tags

Edit these files to update content without touching component code.

---

## Deployment

### Vercel (Recommended)

1. Push the repo to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Framework preset: **Vite** (auto-detected)
4. Deploy — done

### Netlify

1. Push to GitHub
2. Import in [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Set `base` in `vite.config.js`:
   ```js
   base: "/your-repo-name/",
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## Design System

### Colors

| Token          | Value                        | Usage              |
| -------------- | ---------------------------- | ------------------ |
| `CRIMSON`      | `#C0182A`                    | Primary accent     |
| `CRIMSON_PALE` | `#E84057`                    | Hover / highlight  |
| `CRIMSON_DIM`  | `rgba(192,24,42,0.15)`       | Subtle backgrounds |
| `BG`           | `#080808`                    | Page background    |
| `BG2`          | `#0e0e0e`                    | Card / section bg  |
| `BG3`          | `#141414`                    | Tertiary bg        |
| `TEXT`          | `#F0EEE9`                    | Primary text       |
| `TEXT_DIM`     | `#888`                       | Secondary text     |
| `BORDER`       | `rgba(255,255,255,0.07)`     | Subtle borders     |

### Typography

- **Headings**: Syne (weight 600–800)
- **Body**: DM Sans (weight 300–500)

---

## Sections

| Section      | Component         | Description                                      |
| ------------ | ----------------- | ------------------------------------------------ |
| Hero         | `Hero.jsx`        | Animated canvas, name, bio, stats, CTA buttons   |
| About        | `About.jsx`       | Bio paragraphs + competency grid                 |
| Skills       | `Skills.jsx`      | 5 categories with primary/secondary skill tags   |
| Experience   | `Experience.jsx`  | 6 role cards with org, duration, impact, POW links |
| Projects     | `Projects.jsx`    | 4 project cards with SVG thumbnails + links      |
| Contact      | `Contact.jsx`     | Expandable contact links (LinkedIn, X, Telegram) |
| Footer       | `Footer.jsx`      | Branding + all social/external links              |

---

## License

[MIT](LICENSE)
