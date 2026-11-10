import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Alhaya Cleaning Services - Professional Carpet Deep Cleaning UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c8a84e, transparent)",
          }}
        />

        {/* Brand */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#c8a84e",
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            AL HAYA
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              color: "#9a9a9a",
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Carpet Cleaning Services
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 38,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            marginTop: 40,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Professional Carpet Deep Cleaning
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 20,
            color: "#c8a84e",
            textAlign: "center",
            marginTop: 16,
            maxWidth: 700,
          }}
        >
          Residential & Commercial | All 7 UAE Emirates | 2-4 Hours Dry Time
        </div>

        {/* Phone */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 40,
            padding: "12px 32px",
            background: "rgba(200, 168, 78, 0.15)",
            borderRadius: 40,
            border: "1px solid rgba(200, 168, 78, 0.3)",
          }}
        >
          <div style={{ fontSize: 20, color: "#c8a84e" }}>Call / WhatsApp:</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#ffffff" }}>
            055 127 5545
          </div>
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            fontSize: 16,
            color: "#666",
            letterSpacing: 2,
          }}
        >
          carpetcleaningdubai.com
        </div>

        {/* Gold accent line bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #c8a84e, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
