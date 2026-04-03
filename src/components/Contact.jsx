import { useState } from "react";
import { Section, SectionLabel } from "./Section";
import FadeIn from "./FadeIn";
import { CRIMSON, CRIMSON_PALE, CRIMSON_DIM, TEXT, TEXT_DIM, BORDER } from "../styles/tokens";

export default function Contact() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div style={{ borderTop: `1px solid ${BORDER}` }}>
      <Section id="contact">
        <FadeIn>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SectionLabel>Contact</SectionLabel>
            </div>
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(32px,5vw,56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              Ready to build
              <br />
              <span style={{ color: CRIMSON }}>something real?</span>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: TEXT_DIM,
                lineHeight: 1.7,
                fontWeight: 300,
                marginBottom: 40,
              }}
            >
              If you're working on a Web3 project and need someone who can grow your
              community, craft your narrative, and drive acquisition — let's talk.
            </p>

            <button
              onClick={() => setContactOpen((v) => !v)}
              aria-label="Show contact options"
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: contactOpen ? CRIMSON : "transparent",
                border: `1.5px solid ${contactOpen ? CRIMSON : "rgba(255,255,255,0.15)"}`,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s",
                color: contactOpen ? "#fff" : TEXT_DIM,
                fontSize: 20,
              }}
              onMouseEnter={(ev) => {
                if (!contactOpen) {
                  ev.currentTarget.style.borderColor = CRIMSON;
                  ev.currentTarget.style.color = CRIMSON_PALE;
                }
              }}
              onMouseLeave={(ev) => {
                if (!contactOpen) {
                  ev.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  ev.currentTarget.style.color = TEXT_DIM;
                }
              }}
            >
              {contactOpen ? "\u00d7" : "\u2709"}
            </button>

            {contactOpen && (
              <div
                className="slide-down"
                style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  {
                    label: "LinkedIn",
                    handle: "linkedin.com/in/michael-william",
                    href: "https://www.linkedin.com/in/michael-william",
                    icon: "in",
                  },
                  {
                    label: "Twitter / X",
                    handle: "@mikedotwill",
                    href: "https://x.com/mikedotwill",
                    icon: "\u2715",
                  },
                  {
                    label: "Telegram",
                    handle: "@Digital_RC",
                    href: "https://t.me/Digital_RC",
                    icon: "\u2708",
                  },
                  {
                    label: "Linktree",
                    handle: "linktr.ee/Michael.William",
                    href: "https://linktr.ee/Michael.William",
                    icon: "\u2b21",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        background: CRIMSON_DIM,
                        border: "1px solid rgba(192,24,42,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        color: CRIMSON_PALE,
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </div>
                    <div style={{ flex: 1, textAlign: "left" }}>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{c.label}</div>
                      <div style={{ fontSize: 11, color: TEXT_DIM }}>{c.handle}</div>
                    </div>
                    <span style={{ color: TEXT_DIM, fontSize: 16 }}>&rarr;</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
