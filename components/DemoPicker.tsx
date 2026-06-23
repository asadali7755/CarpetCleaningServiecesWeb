"use client";

import { useState, useEffect } from "react";

const THEMES = [
  { id: "skyblue", label: "Sky Blue", color: "#0EA5E9" },
  { id: "purple", label: "Purple", color: "#8B5CF6" },
  { id: "maroon", label: "Maroon", color: "#BE123C" },
] as const;

export default function DemoPicker() {
  const [active, setActive] = useState("skyblue");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("demo-theme") || "skyblue";
    setActive(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const pick = (id: string) => {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("demo-theme", id);
  };

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999 }}>
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: 56,
            right: 0,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            padding: "12px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: 160,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: 1 }}>
            Pick Theme
          </span>
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => pick(t.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: active === t.id ? "rgba(0,0,0,0.06)" : "transparent",
                border: "none",
                borderRadius: 8,
                padding: "8px 10px",
                cursor: "pointer",
                transition: "background 0.15s",
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: t.color,
                  border: active === t.id ? "2.5px solid #1e293b" : "2px solid #e2e8f0",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#1e293b" }}>{t.label}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Theme picker"
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          border: "2px solid #e2e8f0",
          background: "#fff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </button>
    </div>
  );
}
