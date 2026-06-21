import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "linear-gradient(135deg, #1a1a2e, #0a0a0a)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          fontSize: 18,
          fontWeight: 800,
          color: "#c8a84e",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
