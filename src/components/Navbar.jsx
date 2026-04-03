import { CRIMSON, CRIMSON_DIM, CRIMSON_PALE, TEXT, BORDER } from "../styles/tokens";
import { NAV_SECTIONS } from "../data/navigation";
import { PROFILE_IMG } from "../styles/tokens";

export default function Navbar({ activeNav, scrolled, menuOpen, setMenuOpen, scrollTo }) {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 28px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(8,8,8,0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid rgba(192,24,42,${scrolled ? "0.55" : "0.2"})`,
          boxShadow: scrolled
            ? "0 1px 32px rgba(192,24,42,0.18), 0 0 0 1px rgba(192,24,42,0.08)"
            : "none",
          transition: "all 0.35s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}
          onClick={() => scrollTo("home")}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1.5px solid rgba(192,24,42,0.7)",
              boxShadow: "0 0 12px rgba(192,24,42,0.4)",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={PROFILE_IMG}
              alt="Michael William"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "0.05em",
            }}
          >
            MW<span style={{ color: CRIMSON }}>.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_SECTIONS.map((s) => (
            <button
              key={s}
              className={`nav-link ${activeNav === s ? "active" : ""}`}
              onClick={() => scrollTo(s)}
            >
              {s}
            </button>
          ))}
          <a
            href="https://read.cv/michael.william"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 16px",
              background: "rgba(192,24,42,0.12)",
              color: CRIMSON_PALE,
              border: "1px solid rgba(192,24,42,0.45)",
              borderRadius: 2,
              textDecoration: "none",
              transition: "all 0.2s",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(ev) => {
              ev.currentTarget.style.background = "rgba(192,24,42,0.25)";
              ev.currentTarget.style.color = TEXT;
              ev.currentTarget.style.boxShadow = "0 0 12px rgba(192,24,42,0.3)";
            }}
            onMouseLeave={(ev) => {
              ev.currentTarget.style.background = "rgba(192,24,42,0.12)";
              ev.currentTarget.style.color = CRIMSON_PALE;
              ev.currentTarget.style.boxShadow = "none";
            }}
          >
            Resume ↗
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_SECTIONS.map((s) => (
          <button
            key={s}
            className={`mobile-nav-btn ${activeNav === s ? "active" : ""}`}
            onClick={() => scrollTo(s)}
          >
            {s}
          </button>
        ))}
        <a
          href="https://read.cv/michael.william"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 20,
            alignSelf: "flex-start",
            padding: "11px 20px",
            background: CRIMSON_DIM,
            border: "1px solid rgba(192,24,42,0.4)",
            borderRadius: 2,
            color: CRIMSON_PALE,
            fontFamily: "'Syne',sans-serif",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Resume ↗
        </a>
      </div>
    </>
  );
}
