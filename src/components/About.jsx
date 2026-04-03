import { Section, SectionLabel } from "./Section";
import FadeIn from "./FadeIn";
import { CRIMSON, TEXT_DIM, BORDER } from "../styles/tokens";

export default function About() {
  return (
    <div style={{ borderTop: `1px solid ${BORDER}` }}>
      <Section id="about">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px,4vw,48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 40,
              maxWidth: 640,
            }}
          >
            I don't just create content.
            <br />
            <span style={{ color: CRIMSON }}>I engineer community growth.</span>
          </h2>
        </FadeIn>

        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <FadeIn delay={0.1}>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "#aaa",
                fontWeight: 300,
                marginBottom: 24,
              }}
            >
              I operate at the intersection of community management, content strategy, and
              growth marketing. My work is about understanding how people move — online and
              on-chain — and building the structures that guide them from strangers to
              believers to active participants.
            </p>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.85,
                color: "#aaa",
                fontWeight: 300,
                marginBottom: 24,
              }}
            >
              Web3 is loud. Most projects say the same things in the same ways. I help
              blockchain teams cut through with precision: clear brand messaging, deliberate
              community architecture, and user acquisition systems that convert without
              gimmicks.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "#aaa", fontWeight: 300 }}>
              Throughout 2022–2023 I operated as an independent Web3 contractor — running
              concurrent engagements across content, community, and BD — before going deeper
              into the Polkadot ecosystem full-time.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                ["Growth", "Funnels & Acquisition"],
                ["Content", "Strategy & Development"],
                ["Community", "Building & Operations"],
                ["BD", "Partnerships & Deals"],
              ].map(([t, s]) => (
                <div key={t} style={{ borderLeft: `2px solid ${CRIMSON}`, paddingLeft: 16 }}>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      marginBottom: 3,
                    }}
                  >
                    {t}
                  </div>
                  <div style={{ fontSize: 12, color: TEXT_DIM }}>{s}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
