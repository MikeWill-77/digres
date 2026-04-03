import HeroCanvas from "./HeroCanvas";
import { CRIMSON, CRIMSON_PALE, CRIMSON_DIM, TEXT_DIM, PROFILE_IMG, POW_URL } from "../styles/tokens";

export default function Hero({ scrollTo }) {
  return (
    <div
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <HeroCanvas />

      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Bottom glow */}
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "30vh",
          background: "radial-gradient(ellipse,rgba(192,24,42,0.12) 0%,transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div>
          {/* Tag */}
          <div
            className="hero-line hero-line-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              border: "1px solid rgba(192,24,42,0.35)",
              borderRadius: 2,
              marginBottom: 32,
              background: CRIMSON_DIM,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: CRIMSON_PALE,
                boxShadow: `0 0 8px ${CRIMSON}`,
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: CRIMSON_PALE,
              }}
            >
              Web3 Community Manager & Growth Strategist
            </span>
          </div>

          {/* Name */}
          <h1
            className="hero-line hero-line-2 hero-h1"
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(52px,8vw,92px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Michael
            <br />
            <span style={{ WebkitTextStroke: `1px ${CRIMSON}`, color: "transparent" }}>
              William
            </span>
            <span style={{ color: CRIMSON }}>.</span>
          </h1>

          {/* Bio */}
          <p
            className="hero-line hero-line-3"
            style={{
              fontSize: 17,
              color: TEXT_DIM,
              maxWidth: 520,
              lineHeight: 1.7,
              fontWeight: 300,
              marginBottom: 40,
            }}
          >
            Web3 Community Manager and Growth Strategist — building the systems that turn
            audiences into communities, content into acquisition pipelines, and blockchain
            projects into traction.
          </p>

          {/* Stats */}
          <div
            className="hero-line hero-line-3 stats-row"
            style={{ display: "flex", gap: 36, flexWrap: "wrap", marginBottom: 48 }}
          >
            {[
              ["4+", "Years in Web3"],
              ["10+", "Projects Partnered"],
              ["3+", "Years in Ecosystem\nCommunity Development"],
            ].map(([num, label]) => (
              <div key={num} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <span
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 800,
                    fontSize: 30,
                    color: CRIMSON_PALE,
                    lineHeight: 1,
                  }}
                >
                  {num}
                </span>
                <span
                  style={{
                    fontSize: 11.5,
                    color: TEXT_DIM,
                    lineHeight: 1.5,
                    paddingTop: 3,
                    maxWidth: 85,
                    whiteSpace: "pre-line",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* POW link */}
          <a
            href={POW_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 48,
              fontSize: 11.5,
              color: "#555",
              letterSpacing: "0.08em",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "'Syne',sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(ev) => (ev.currentTarget.style.color = CRIMSON_PALE)}
            onMouseLeave={(ev) => (ev.currentTarget.style.color = "#555")}
          >
            <span style={{ display: "inline-block", width: 20, height: "1px", background: "#444" }} />
            View full work portfolio ↗
          </a>

          {/* CTA buttons */}
          <div className="hero-line hero-line-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View Work
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-secondary">
              Let Me Help You Grow
            </button>
          </div>
        </div>

        {/* Profile image */}
        <div
          className="hero-line hero-line-2 hero-img-wrap"
          style={{ position: "relative", flexShrink: 0, width: 340, height: 400 }}
        >
          <div
            style={{
              position: "absolute",
              inset: -24,
              borderRadius: 4,
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(192,24,42,0.22) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: -1,
              left: -1,
              right: -1,
              bottom: -1,
              borderRadius: 4,
              border: "1px solid rgba(192,24,42,0.35)",
              pointerEvents: "none",
            }}
          />
          {[
            { top: 0, left: 0 },
            { top: 0, right: 0 },
            { bottom: 0, left: 0 },
            { bottom: 0, right: 0 },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                ...pos,
                width: 18,
                height: 18,
                borderTop: pos.top === 0 ? `2px solid ${CRIMSON}` : "none",
                borderBottom: pos.bottom === 0 ? `2px solid ${CRIMSON}` : "none",
                borderLeft: pos.left === 0 ? `2px solid ${CRIMSON}` : "none",
                borderRight: pos.right === 0 ? `2px solid ${CRIMSON}` : "none",
              }}
            />
          ))}
          <img
            src={PROFILE_IMG}
            alt="Michael William"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              borderRadius: 3,
              filter: "grayscale(15%) contrast(1.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 3,
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.35,
          animation: "heroFade 1s ease 1.2s both",
        }}
      >
        <div
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom,transparent,${CRIMSON})`,
          }}
        />
        <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          scroll
        </span>
      </div>
    </div>
  );
}
