import { Section, SectionLabel } from "./Section";
import FadeIn from "./FadeIn";
import { experiences } from "../data/experiences";
import { CRIMSON, CRIMSON_PALE, CRIMSON_DIM, TEXT_DIM, BORDER, POW_URL } from "../styles/tokens";

export default function Experience() {
  return (
    <div style={{ borderTop: `1px solid ${BORDER}` }}>
      <Section id="experience">
        <FadeIn>
          <SectionLabel>Experience</SectionLabel>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px,4vw,42px)",
              marginBottom: 48,
              letterSpacing: "-0.02em",
            }}
          >
            Roles & Impact
          </h2>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 16,
            alignItems: "start",
          }}
          className="grid-2"
        >
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="exp-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <div
                      style={{
                        padding: "4px 10px",
                        background: CRIMSON_DIM,
                        border: "1px solid rgba(192,24,42,0.25)",
                        borderRadius: 2,
                        fontSize: 10.5,
                        letterSpacing: "0.1em",
                        color: CRIMSON_PALE,
                        textTransform: "uppercase",
                        fontFamily: "'Syne',sans-serif",
                      }}
                    >
                      {exp.org}
                    </div>
                    {exp.type && (
                      <div
                        style={{
                          padding: "3px 8px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 2,
                          fontSize: 9.5,
                          letterSpacing: "0.12em",
                          color: "#666",
                          textTransform: "uppercase",
                          fontFamily: "'Syne',sans-serif",
                        }}
                      >
                        {exp.type}
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize: 11, color: TEXT_DIM, letterSpacing: "0.04em" }}>
                    {exp.duration}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Syne',sans-serif",
                    fontWeight: 700,
                    fontSize: 16.5,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {exp.role}
                </h3>

                <p
                  style={{
                    fontSize: 13.5,
                    color: TEXT_DIM,
                    lineHeight: 1.72,
                    fontWeight: 300,
                    marginBottom: 14,
                  }}
                >
                  {exp.impact}
                </p>

                <a
                  href={`${POW_URL}?org=${exp.powOrg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 11,
                    color: "#555",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontFamily: "'Syne',sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 5,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(ev) => (ev.currentTarget.style.color = CRIMSON_PALE)}
                  onMouseLeave={(ev) => (ev.currentTarget.style.color = "#555")}
                >
                  <span
                    style={{
                      width: 14,
                      height: "1px",
                      background: "currentColor",
                      display: "inline-block",
                    }}
                  />
                  View work samples ↗
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
