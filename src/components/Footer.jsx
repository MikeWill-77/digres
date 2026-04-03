import { CRIMSON, BG, TEXT, TEXT_DIM, BORDER, POW_URL } from "../styles/tokens";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${BORDER}`, background: BG }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: "0.04em",
              }}
            >
              MW<span style={{ color: CRIMSON }}>.</span>
            </span>
            <span style={{ fontSize: 11, color: TEXT_DIM, letterSpacing: "0.04em" }}>
              Web3 Community Manager &middot; Growth Strategist &middot; Polkadot Ecosystem
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/michael-william" },
              { label: "Twitter/X", href: "https://x.com/mikedotwill" },
              { label: "Telegram", href: "https://t.me/Digital_RC" },
              { label: "Linktree", href: "https://linktr.ee/Michael.William" },
              { label: "Work Archive \u2197", href: POW_URL },
              { label: "Resume \u2197", href: "https://read.cv/michael.william" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  color: TEXT_DIM,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={(ev) => (ev.currentTarget.style.color = TEXT)}
                onMouseLeave={(ev) => (ev.currentTarget.style.color = TEXT_DIM)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
