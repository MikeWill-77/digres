import { Section, SectionLabel } from "./Section";
import FadeIn from "./FadeIn";
import { projects } from "../data/projects";
import { thumbComponents } from "./thumbnails";
import { CRIMSON, CRIMSON_PALE, BG2, TEXT, TEXT_DIM, BORDER, POW_URL } from "../styles/tokens";

export default function Projects() {
  return (
    <div style={{ borderTop: `1px solid ${BORDER}`, background: BG2 }}>
      <Section id="projects">
        <FadeIn>
          <SectionLabel>Projects</SectionLabel>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px,4vw,42px)",
              marginBottom: 48,
              letterSpacing: "-0.02em",
            }}
          >
            Selected Work
          </h2>
        </FadeIn>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}
          className="grid-2"
        >
          {projects.map((p, i) => {
            const Thumb = thumbComponents[i];
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="proj-card"
                  style={{ cursor: p.href ? "pointer" : "default" }}
                  onClick={() => {
                    if (p.href) window.open(p.href, "_blank", "noopener noreferrer");
                  }}
                >
                  <div className="proj-thumb">
                    <Thumb />
                    <span
                      style={{
                        position: "relative",
                        zIndex: 1,
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 800,
                        fontSize: 11,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: CRIMSON,
                        opacity: 0.75,
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  <div style={{ padding: 28 }}>
                    <h3
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 700,
                        fontSize: 18,
                        marginBottom: 10,
                      }}
                    >
                      {p.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 14,
                        color: TEXT_DIM,
                        lineHeight: 1.7,
                        fontWeight: 300,
                        marginBottom: 18,
                      }}
                    >
                      {p.desc}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <div style={{ width: 16, height: 1, background: CRIMSON }} />
                        <span
                          style={{
                            fontSize: 12,
                            color: CRIMSON_PALE,
                            letterSpacing: "0.08em",
                            fontFamily: "'Syne',sans-serif",
                          }}
                        >
                          {p.role}
                        </span>
                      </div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        {p.href && (
                          <span style={{ fontSize: 11, color: TEXT_DIM }}>View ↗</span>
                        )}
                        {p.powLink && (
                          <a
                            href={p.powLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              fontSize: 11,
                              color: CRIMSON_PALE,
                              textDecoration: "none",
                              padding: "4px 10px",
                              border: "1px solid rgba(192,24,42,0.3)",
                              borderRadius: 2,
                            }}
                          >
                            View Work Archive ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Portfolio CTA */}
        <FadeIn delay={0.3}>
          <div
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: `1px solid ${BORDER}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div style={{ fontSize: 13, color: TEXT_DIM, fontWeight: 300, marginBottom: 4 }}>
                Full case studies, published content, and campaign breakdowns live in one
                place.
              </div>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.06em" }}>
                Updated as work ships.
              </div>
            </div>
            <a
              href={POW_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "12px 24px",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 2,
                color: TEXT,
                textDecoration: "none",
                transition: "all 0.25s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(ev) => {
                ev.currentTarget.style.borderColor = CRIMSON;
                ev.currentTarget.style.color = CRIMSON_PALE;
              }}
              onMouseLeave={(ev) => {
                ev.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                ev.currentTarget.style.color = TEXT;
              }}
            >
              View Work Portfolio ↗
            </a>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
