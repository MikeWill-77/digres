import { Section, SectionLabel } from "./Section";
import FadeIn from "./FadeIn";
import { skills } from "../data/skills";
import { CRIMSON, BG2, TEXT_DIM, BORDER } from "../styles/tokens";

export default function Skills() {
  return (
    <div style={{ borderTop: `1px solid ${BORDER}`, background: BG2 }}>
      <Section id="skills">
        <FadeIn>
          <SectionLabel>Expertise</SectionLabel>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px,4vw,42px)",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            What I Bring
          </h2>
          <div style={{ display: "flex", gap: 20, marginBottom: 48, flexWrap: "wrap" }}>
            {[
              ["rgba(192,24,42,0.4)", "rgba(192,24,42,0.6)", "Core skills"],
              ["#141414", "rgba(255,255,255,0.06)", "Supporting skills"],
            ].map(([bg, border, label]) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 1,
                    background: bg,
                    border: `1px solid ${border}`,
                  }}
                />
                <span style={{ fontSize: 12, color: TEXT_DIM }}>{label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}
          className="grid-3"
        >
          {skills.map((s, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: 4,
                  padding: 28,
                  background: BG2,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{ width: 3, height: 20, background: CRIMSON, borderRadius: 1 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {s.category}
                  </span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", margin: "-4px" }}>
                  {s.items.map((item) => (
                    <span
                      key={item.name}
                      className={
                        item.tier === "primary" ? "skill-primary" : "skill-secondary"
                      }
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </div>
  );
}
