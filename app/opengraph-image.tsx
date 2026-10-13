import { ImageResponse } from "next/og";
import { profile } from "../lib/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Social preview card (LinkedIn, WhatsApp, Slack, X…), generated at build time.
export default function OpengraphImage() {
  const stack = ["React", "Next.js", "TypeScript", "Node.js", "Docker"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #09090b 0%, #0f172a 55%, #1e3a8a 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#60a5fa",
              color: "#0b1220",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa" }}>shimul-portfolio2026.vercel.app</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#60a5fa", marginTop: 8 }}>{profile.role}</div>
          <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 24, maxWidth: 900 }}>
            Building web products end to end — and running the infrastructure they ship on.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {stack.map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid #3f3f46",
                background: "rgba(255,255,255,0.06)",
                fontSize: 24,
                color: "#e4e4e7",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
