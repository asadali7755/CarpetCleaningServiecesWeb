import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "linear-gradient(135deg, #1a1a2e, #0a0a0a)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          gap: 2,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, color: "#c8a84e" }}>A</div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#9a9a9a",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          AL HAYA
        </div>
      </div>
    ),
    { ...size }
  );
}
