import { CRIMSON, CRIMSON_PALE } from "../styles/tokens";

export function Section({ id, children, style = {} }) {
  return (
    <section
      id={id}
      style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 24px", ...style }}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
      <div style={{ width: 28, height: 2, background: CRIMSON }} />
      <span
        style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: CRIMSON_PALE,
        }}
      >
        {children}
      </span>
    </div>
  );
}
