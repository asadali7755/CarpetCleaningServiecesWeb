// Inline stroke icons (no emoji, no icon-font dependency). Outline style.
import type { JSX } from "react";

const P = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PATHS: Record<string, JSX.Element> = {
  star: <path {...P} fill="currentColor" stroke="none" d="M12 2l2.9 6.3 6.8.8-5 4.6 1.3 6.7L12 17.8 5.9 20.4l1.3-6.7-5-4.6 6.8-.8z" />,
  phone: <path {...P} d="M5 4h3l1.5 5L7.5 10a12 12 0 006.5 6.5l1-2 5 1.5V19a2 2 0 01-2 2A16 16 0 014 6a2 2 0 011-2z" />,
  whatsapp: <g><path {...P} d="M3 21l1.7-5A8 8 0 113 21z" /><path {...P} d="M8.5 9.5c.3 2 2 3.7 4 4 .6.1 1.4-.6 1.6-1.2l1.4.7c-.2 1-1.3 1.8-2.4 1.7-2.8-.2-5-2.4-5.2-5.2-.1-1.1.7-2.2 1.7-2.4l.7 1.4c-.6.2-1.3 1-1.5 1.2z" /></g>,
  menu: <path {...P} d="M4 7h16M4 12h16M4 17h16" />,
  x: <path {...P} d="M6 6l12 12M18 6L6 18" />,
  arrow: <g><path {...P} d="M5 12h14" /><path {...P} d="M13 6l6 6-6 6" /></g>,
  check: <path {...P} d="M5 12l5 5L20 7" />,
  pin: <g><path {...P} d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle {...P} cx="12" cy="10" r="2.5" /></g>,
  clock: <g><circle {...P} cx="12" cy="12" r="9" /><path {...P} d="M12 7v5l3 2" /></g>,
  mail: <g><rect {...P} x="3" y="5" width="18" height="14" rx="2" /><path {...P} d="M4 7l8 6 8-6" /></g>,
  sparkle: <path {...P} d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" />,
  truck: <g><rect {...P} x="2" y="6" width="12" height="10" rx="1" /><path {...P} d="M14 9h4l3 3v4h-7z" /><circle {...P} cx="7" cy="18" r="1.7" /><circle {...P} cx="17" cy="18" r="1.7" /></g>,
  file: <g><path {...P} d="M7 3h7l5 5v13H7z" /><path {...P} d="M14 3v5h5M10 13h6M10 17h6" /></g>,
  leaf: <g><path {...P} d="M5 19c0-8 6-13 14-14 1 8-4 14-12 14-1 0-2 0-2-1z" /><path {...P} d="M9 15c2-3 5-5 8-6" /></g>,
  shield: <g><path {...P} d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6z" /><path {...P} d="M9 12l2 2 4-4" /></g>,
  // service icons
  carpet: <g><rect {...P} x="3" y="6" width="18" height="12" rx="1.5" /><path {...P} d="M3 9h18M3 15h18M7 6v12M17 6v12" /></g>,
  rug: <g><path {...P} d="M4 5h16l-1.5 14H5.5z" /><path {...P} d="M8 9h8M8 13h8" /></g>,
  sofa: <g><path {...P} d="M4 11V9a2 2 0 012-2h12a2 2 0 012 2v2" /><path {...P} d="M3 11a2 2 0 012 2v3h14v-3a2 2 0 012-2 2 2 0 00-2 2 2 2 0 00-2-2H7a2 2 0 00-2 2 2 2 0 00-2-2z" /><path {...P} d="M6 19v1M18 19v1" /></g>,
  droplet: <g><path {...P} d="M12 3s6 6 6 10a6 6 0 01-12 0c0-4 6-10 6-10z" /><path {...P} d="M9 14a3 3 0 003 3" /></g>,
  bed: <g><path {...P} d="M3 8v9M3 12h18v5M21 12v5" /><path {...P} d="M6 12V9h6v3" /></g>,
  office: <g><rect {...P} x="4" y="3" width="11" height="18" rx="1" /><path {...P} d="M15 8h5v13h-5" /><path {...P} d="M7 7h3M7 11h3M7 15h3" /></g>,
  curtain: <g><path {...P} d="M3 4h18M5 4c0 8-1 12-2 16M19 4c0 8 1 12 2 16M9 4c0 7-1 11-2 16M15 4c0 7 1 11 2 16" /></g>,
  // process + ui
  calendar: <g><rect {...P} x="3" y="4" width="18" height="17" rx="2" /><path {...P} d="M3 9h18M8 2v4M16 2v4" /></g>,
  search: <g><circle {...P} cx="11" cy="11" r="7" /><path {...P} d="M21 21l-4-4" /></g>,
  wind: <path {...P} d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5M3 12h15a3 3 0 1 1-3 3M3 16h8a2 2 0 1 1-2 2" />,
  fan: <g><circle {...P} cx="12" cy="12" r="2" /><path {...P} d="M12 10c.5-3 0-6-1-7-2 1-2 4-1 7M14 12c3 .5 6 0 7-1-1-2-4-2-7-1M12 14c-.5 3 0 6 1 7 2-1 2-4 1-7M10 12c-3-.5-6 0-7 1 1 2 4 2 7 1" /></g>,
  clipboard: <g><rect {...P} x="6" y="4" width="12" height="17" rx="2" /><path {...P} d="M9 4h6v3H9zM9 13l2 2 4-4" /></g>,
  thumbup: <path {...P} d="M7 11v9H4v-9zM7 11l4-8a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2.3l-1.2 6A2 2 0 0 1 16.8 20H7" />,
  spray: <g><path {...P} d="M9 8h5v11a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zM9 8V5h3V3M16 6h.01M19 5h.01M17 9h.01M20 9h.01" /></g>,
  steam: <path {...P} d="M7 20c0-2 1.5-2.5 1.5-4S7 13.5 7 11.5 8.5 9 8.5 7M12 20c0-2 1.5-2.5 1.5-4S12 13.5 12 11.5 13.5 9 13.5 7M17 20c0-2 1.5-2.5 1.5-4S17 13.5 17 11.5 18.5 9 18.5 7" />,
  dust: <g><circle {...P} cx="9" cy="13" r="4" /><circle {...P} cx="16" cy="9" r="2.5" /><circle {...P} cx="17.5" cy="16" r="1.5" /></g>,
  bubbles: <g><circle {...P} cx="9" cy="13" r="4" /><circle {...P} cx="16" cy="10" r="2.5" /><circle {...P} cx="17" cy="16" r="1.4" /></g>,
  sun: <g><circle {...P} cx="12" cy="12" r="4" /><path {...P} d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6L19 19M5 19l1.4-1.4M17.6 6.4L19 5" /></g>,
  moon: <path {...P} d="M21 12.8A8 8 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8z" />,
  quote: <path {...P} fill="currentColor" stroke="none" d="M7 7h4v4c0 3-1.4 5-4 6v-2c1.3-.6 2-1.7 2-3H7zM15 7h4v4c0 3-1.4 5-4 6v-2c1.3-.6 2-1.7 2-3h-2z" />,
  facebook: <path fill="currentColor" stroke="none" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  linkedin: <g><path fill="currentColor" stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect fill="currentColor" stroke="none" x="2" y="9" width="4" height="12" /><circle fill="currentColor" stroke="none" cx="4" cy="4" r="2" /></g>,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {PATHS[name] ?? PATHS.sparkle}
    </svg>
  );
}
