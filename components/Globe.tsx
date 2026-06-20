"use client";

// Interactive UAE coverage globe — a faithful React port of the original
// Claude Design canvas component. Rotating dotted earth, 7 emirate nodes
// connected by animated arcs, hover tooltips and click-to-zoom districts.

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

// emirate canvas-id -> location page slug
const SLUG: Record<string, string> = {
  auh: "abu-dhabi", dxb: "dubai", shj: "sharjah", ajm: "ajman",
  uaq: "umm-al-quwain", rak: "ras-al-khaimah", fuj: "fujairah",
};

interface City {
  id: string; name: string; x: number; y: number;
  avail: string; resp: string; desc: string; zoomable: boolean;
}
interface District { id: string; name: string; resp: string; desc: string; }

const CITIES: City[] = [
  { id: "auh", name: "Abu Dhabi", x: 0.14, y: 0.52, avail: "AVAILABLE", resp: "35–55 min", desc: "Abu Dhabi City, Khalifa City, Al Ain & Mussafah. Click to explore districts.", zoomable: true },
  { id: "dxb", name: "Dubai", x: 0.30, y: 0.78, avail: "AVAILABLE", resp: "25–40 min", desc: "Marina, Downtown, Jumeirah, Business Bay, Deira & Al Barsha. Click to explore districts.", zoomable: true },
  { id: "shj", name: "Sharjah", x: 0.86, y: 0.50, avail: "AVAILABLE", resp: "30–45 min", desc: "Al Nahda, Al Majaz, Muwaileh, Kalba & Khor Fakkan. Click to explore districts.", zoomable: true },
  { id: "ajm", name: "Ajman", x: 0.52, y: 0.86, avail: "AVAILABLE", resp: "30–45 min", desc: "Ajman City, Al Jurf, Al Nuaimiya & Al Rashidiya. Click to explore districts.", zoomable: true },
  { id: "uaq", name: "Umm Al Quwain", x: 0.50, y: 0.14, avail: "AVAILABLE", resp: "40–60 min", desc: "UAQ City, Al Salamah, Al Raas & Al Haditha. Click to explore districts.", zoomable: true },
  { id: "rak", name: "Ras Al Khaimah", x: 0.78, y: 0.26, avail: "AVAILABLE", resp: "45–65 min", desc: "RAK City, Al Hamra, Al Nakheel & Mina Al Arab. Click to explore districts.", zoomable: true },
  { id: "fuj", name: "Fujairah", x: 0.73, y: 0.75, avail: "AVAILABLE", resp: "50–70 min", desc: "Fujairah City, Dibba, Al Faseel & Kalba. Click to explore districts.", zoomable: true },
];

const ROUTES: [number, number][] = [[4, 5], [5, 2], [2, 6], [6, 3], [3, 1], [1, 0], [0, 4], [4, 3], [5, 1], [2, 0]];

const DISTRICTS: Record<string, District[]> = {
  dxb: [
    { id: "dxb-marina", name: "Dubai Marina", resp: "20–35 min", desc: "JBR, Marina Walk & high-rise towers — premium carpet care." },
    { id: "dxb-downtown", name: "Downtown", resp: "15–30 min", desc: "Burj Khalifa district, DIFC & Old Town residences." },
    { id: "dxb-jumeirah", name: "Jumeirah", resp: "25–40 min", desc: "Beachside villas, Umm Suqeim & La Mer." },
    { id: "dxb-bizbay", name: "Business Bay", resp: "15–30 min", desc: "Canal-side offices and apartments — same-day service." },
    { id: "dxb-deira", name: "Deira", resp: "20–35 min", desc: "Old Dubai, Al Rigga & Gold Souk neighbourhoods." },
    { id: "dxb-barsha", name: "Al Barsha", resp: "25–40 min", desc: "Mall of the Emirates, Tecom & Springs villas." },
  ],
  auh: [
    { id: "auh-city", name: "AD City", resp: "30–45 min", desc: "Corniche, Al Markaziyah & central island residences." },
    { id: "auh-khalifa", name: "Khalifa City", resp: "35–50 min", desc: "Khalifa A/B & Zayed City family villas." },
    { id: "auh-mussafah", name: "Mussafah", resp: "40–55 min", desc: "Industrial & residential — commercial contracts welcome." },
    { id: "auh-yas", name: "Yas & Saadiyat", resp: "40–60 min", desc: "Island communities, hotels & beachfront homes." },
    { id: "auh-alain", name: "Al Ain", resp: "60–80 min", desc: "Garden City villas & the eastern region." },
  ],
  shj: [
    { id: "shj-nahda", name: "Al Nahda", resp: "25–40 min", desc: "Border-district apartments & towers." },
    { id: "shj-majaz", name: "Al Majaz", resp: "30–45 min", desc: "Buhairah Corniche, Qasba & lakeside flats." },
    { id: "shj-muwaileh", name: "Muwaileh", resp: "35–50 min", desc: "University City & New Sharjah villas." },
    { id: "shj-khor", name: "Khor Fakkan", resp: "60–80 min", desc: "East-coast town — on-site & pickup service." },
  ],
  ajm: [
    { id: "ajm-city", name: "Ajman City", resp: "30–45 min", desc: "Corniche & central residential blocks." },
    { id: "ajm-jurf", name: "Al Jurf", resp: "30–45 min", desc: "Industrial & emerging residential zones." },
    { id: "ajm-nuaimiya", name: "Al Nuaimiya", resp: "30–45 min", desc: "Dense apartment communities — fast turnaround." },
    { id: "ajm-rashid", name: "Al Rashidiya", resp: "35–50 min", desc: "Beachside towers & family villas." },
  ],
  uaq: [
    { id: "uaq-city", name: "UAQ City", resp: "40–55 min", desc: "Old town & Corniche residences." },
    { id: "uaq-salamah", name: "Al Salamah", resp: "40–60 min", desc: "New residential expansion district." },
    { id: "uaq-raas", name: "Al Raas", resp: "45–60 min", desc: "Coastal homes & the old harbour area." },
    { id: "uaq-haditha", name: "Al Haditha", resp: "45–65 min", desc: "Inland villas & community blocks." },
  ],
  rak: [
    { id: "rak-city", name: "RAK City", resp: "45–60 min", desc: "Al Nakheel & Old Town on both creek banks." },
    { id: "rak-hamra", name: "Al Hamra", resp: "50–65 min", desc: "Al Hamra Village & golf-side villas." },
    { id: "rak-mina", name: "Mina Al Arab", resp: "50–70 min", desc: "Waterfront communities & resorts." },
    { id: "rak-khuzam", name: "Al Khuzam", resp: "50–65 min", desc: "Central residential neighbourhoods." },
  ],
  fuj: [
    { id: "fuj-city", name: "Fujairah City", resp: "50–65 min", desc: "Corniche, Faseel & central residences." },
    { id: "fuj-dibba", name: "Dibba", resp: "70–90 min", desc: "Northern coastal town — pickup & on-site." },
    { id: "fuj-faseel", name: "Al Faseel", resp: "50–70 min", desc: "Beachfront villas & apartment blocks." },
    { id: "fuj-kalba", name: "Kalba", resp: "65–85 min", desc: "Southern coast — mangrove-side homes." },
  ],
};

const LAND: number[][][] = [
  [[34.3, 29.5], [35, 28], [37, 24], [39, 21], [43, 16], [43, 13], [45, 13], [48, 14], [52, 15], [55, 17], [56, 18], [58, 20], [59.8, 22.5], [57, 25], [56.4, 25.6], [55, 25.6], [53, 24.2], [51.5, 24.6], [51.3, 26], [50.8, 27.5], [49, 28.5], [48, 30], [47, 30], [46, 29], [44, 29], [42, 31], [40, 31], [38, 31], [36, 30]],
  [[-9, 37], [-9, 43], [-4, 48], [3, 51], [8, 54], [10, 58], [14, 65], [24, 71], [34, 70], [55, 71], [75, 73], [100, 77], [120, 73], [140, 72], [160, 69], [170, 66], [160, 59], [153, 51], [140, 46], [130, 43], [122, 38], [121, 31], [112, 22], [108, 16], [106, 10], [104, 9], [100, 7], [98, 10], [94, 18], [90, 22], [83, 18], [77, 8], [73, 16], [70, 20], [67, 24], [64, 25], [61, 25], [59, 25], [56, 27], [52, 29], [48, 30], [45, 38], [40, 41], [35, 42], [28, 41], [26, 40], [23, 40], [19, 40], [16, 42], [13, 45], [8, 44], [3, 43], [-2, 40]],
  [[-16, 15], [-16, 22], [-10, 28], [-6, 36], [10, 37], [11, 33], [20, 32], [25, 32], [31, 31], [34, 28], [36, 22], [37, 18], [40, 15], [43, 11], [48, 8], [44, 2], [41, -2], [40, -11], [35, -18], [33, -26], [26, -34], [20, -35], [15, -29], [13, -17], [9, -1], [5, 4], [-4, 5], [-9, 5], [-13, 8]],
  [[-156, 71], [-168, 66], [-164, 60], [-152, 58], [-135, 58], [-130, 54], [-124, 48], [-124, 40], [-120, 34], [-117, 33], [-110, 23], [-105, 22], [-97, 16], [-95, 18], [-90, 20], [-88, 18], [-87, 21], [-90, 30], [-84, 30], [-82, 25], [-80, 27], [-81, 31], [-76, 35], [-70, 42], [-67, 45], [-60, 47], [-64, 52], [-78, 53], [-82, 60], [-95, 60], [-95, 69], [-110, 69], [-125, 71], [-145, 71]],
  [[-79, 9], [-72, 11], [-62, 10], [-50, 0], [-44, -3], [-35, -6], [-38, -13], [-41, -22], [-48, -26], [-54, -34], [-58, -39], [-63, -41], [-66, -45], [-69, -52], [-74, -52], [-73, -44], [-72, -30], [-71, -18], [-78, -8], [-81, -5], [-80, 0], [-78, 4]],
  [[-46, 60], [-30, 60], [-20, 68], [-22, 76], [-32, 83], [-50, 82], [-58, 76], [-54, 68]],
  [[114, -22], [122, -18], [130, -12], [137, -12], [142, -11], [145, -15], [150, -22], [153, -28], [150, -37], [143, -39], [135, -35], [129, -32], [123, -34], [115, -34], [114, -28]],
  [[-5, 50], [-2, 52], [-3, 55], [-5, 58], [-8, 57], [-6, 53], [-10, 52], [-6, 50]],
  [[130, 31], [133, 34], [138, 35], [141, 40], [142, 44], [140, 42], [136, 36], [132, 33]],
  [[43, -13], [49, -15], [50, -20], [47, -25], [44, -22], [43, -16]],
];

const GLOBE_SPEED = 1;
const FLOW_SPEED = 0.8;

function pip(lon: number, lat: number, poly: number[][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0], yi = poly[i][1], xj = poly[j][0], yj = poly[j][1];
    if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}
function isLand(lon: number, lat: number) {
  for (const p of LAND) if (pip(lon, lat, p)) return true;
  return false;
}
function vec(lon: number, lat: number) {
  const la = lat * Math.PI / 180, lo = lon * Math.PI / 180, cl = Math.cos(la);
  return { x: cl * Math.sin(lo), y: Math.sin(la), z: cl * Math.cos(lo) };
}

// Placeholder city thumbnails (swap for real per-city photos later).
const POOL_IMGS = [
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=160&q=60",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=160&q=60",
  "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=160&q=60",
  "https://images.unsplash.com/photo-1582672060674-bc2bd808a8f5?auto=format&fit=crop&w=160&q=60",
  "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=160&q=60",
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=160&q=60",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=160&q=60",
];

// Draws a small circular thumbnail with a green ring; falls back to a tinted
// disc until the image loads (or if it fails), so the globe never shows a gap.
function drawThumb(ctx: CanvasRenderingContext2D, img: HTMLImageElement | undefined, cx: number, cy: number, size: number, alpha: number) {
  const r = size / 2;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.closePath();
  ctx.fillStyle = "rgba(10,16,13,0.92)"; ctx.fill();
  ctx.save(); ctx.clip();
  if (img && img.complete && img.naturalWidth) {
    const ar = img.naturalWidth / img.naturalHeight;
    let dw = size, dh = size, ox = 0, oy = 0;
    if (ar > 1) { dh = size; dw = size * ar; ox = (size - dw) / 2; } else { dw = size; dh = size / ar; oy = (size - dh) / 2; }
    ctx.drawImage(img, cx - r + ox, cy - r + oy, dw, dh);
  } else {
    ctx.fillStyle = "rgba(45,212,108,0.16)"; ctx.fillRect(cx - r, cy - r, size, size);
  }
  ctx.restore();
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.lineWidth = 1.5; ctx.strokeStyle = "rgba(45,212,108,0.65)"; ctx.stroke();
  ctx.restore();
}

export default function Globe() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<string | null>(null);

  // mutable mirrors for the animation loop
  const hoverRef = useRef<string | null>(null);
  const zoomRef = useRef<string | null>(null);
  hoverRef.current = hoverId;
  zoomRef.current = zoom;

  const cityScreen = useRef<{ id: string; sx: number; sy: number; ix: number; iy: number; hitR: number; vis: boolean }[]>([]);
  const distScreen = useRef<{ id: string; sx: number; sy: number; ix: number; iy: number; hitR: number }[]>([]);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;

    const imgEls = POOL_IMGS.map((src) => { const im = new Image(); im.src = src; return im; });

    // coarser point grid on small screens → fewer per-frame projections
    const step = typeof window !== "undefined" && window.innerWidth < 760 ? 2.4 : 1.8;
    const landPts = (() => {
      const pts: { x: number; y: number; z: number }[] = [];
      for (let lat = -58; lat <= 82; lat += step)
        for (let lon = -180; lon < 180; lon += step)
          if (isLand(lon, lat)) pts.push(vec(lon, lat));
      return pts;
    })();

    const parts: { ri: number; t: number; sp: number }[] = [];
    ROUTES.forEach((_, ri) => { for (let k = 0; k < 2; k++) parts.push({ ri, t: k * 0.5, sp: 0.004 + Math.random() * 0.003 }); });

    let arcCtrl: number[][] = [];
    let dparts: { i: number; t: number; sp: number }[] = [];
    let dpartsFor: string | null = null;
    let zoomCur = 0;
    const t0 = performance.now();
    let raf = 0;

    let visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0.01 });
    io.observe(cv);

    const draw = () => {
      if (!visible) { raf = requestAnimationFrame(draw); return; } // skip heavy work off-screen
      const w = cv.clientWidth, h = cv.clientHeight;
      if (!w || !h) { raf = requestAnimationFrame(draw); return; }
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      if (cv.width !== Math.round(w * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
      const t = (performance.now() - t0) / 1000, spd = GLOBE_SPEED, fs = FLOW_SPEED;
      const md = Math.min(w, h), cx = w * 0.5, cy = h * 0.5;
      const uiScale = Math.max(0.6, Math.min(1, w / 560)); // shrink markers/thumbs on small screens

      const zt = zoomRef.current ? 1 : 0;
      zoomCur += (zt - zoomCur) * 0.10;
      if (Math.abs(zt - zoomCur) < 0.001) zoomCur = zt;
      const z = zoomCur;
      const ss = (a: number, b: number, x: number) => { const u = Math.max(0, Math.min(1, (x - a) / (b - a))); return u * u * (3 - 2 * u); };
      const eA = 1 - ss(0.12, 0.66, z);
      const dA = ss(0.45, 1, z);

      const fc = (zoomRef.current && CITIES.find(c => c.id === zoomRef.current)) || CITIES[1];
      const fx = fc.x * w, fy = fc.y * h;
      const scale = 1 + z * 2.7;
      const tgtX = fx + (cx - fx) * z, tgtY = fy + (cy - fy) * z;
      const T = (px: number, py: number): [number, number] => [tgtX + scale * (px - fx), tgtY + scale * (py - fy)];

      const gx = cx, gy = cy, R = md * 0.46;
      const angY = t * 0.07 * spd, angX = 0.40;
      const cyA = Math.cos(angY), syA = Math.sin(angY), cxA = Math.cos(angX), sxA = Math.sin(angX);
      const Pr = (v: { x: number; y: number; z: number }) => {
        const x1 = v.x * cyA + v.z * syA, z1 = -v.x * syA + v.z * cyA, y1 = v.y;
        const y2 = y1 * cxA - z1 * sxA, z2 = y1 * sxA + z1 * cxA;
        return { sx: gx + R * x1, sy: gy - R * y2, z: z2 };
      };

      ctx.save();
      ctx.globalAlpha = 1 - z * 0.62;
      ctx.translate(tgtX, tgtY); ctx.scale(scale, scale); ctx.translate(-fx, -fy);
      const g = ctx.createRadialGradient(gx - R * 0.32, gy - R * 0.36, R * 0.08, gx, gy, R);
      g.addColorStop(0, "rgba(44,44,48,0.6)"); g.addColorStop(0.6, "rgba(20,20,22,0.5)"); g.addColorStop(1, "rgba(8,8,10,0.18)");
      ctx.save(); ctx.beginPath(); ctx.arc(gx, gy, R, 0, 7); ctx.clip(); ctx.fillStyle = g; ctx.fillRect(gx - R, gy - R, R * 2, R * 2);
      ctx.strokeStyle = "rgba(45,212,108,0.05)"; ctx.lineWidth = 1 / scale;
      for (let lonG = -180; lonG < 180; lonG += 15) { ctx.beginPath(); let st = false; for (let latG = -85; latG <= 85; latG += 3) { const p = Pr(vec(lonG, latG)); if (p.z > 0) { if (!st) { ctx.moveTo(p.sx, p.sy); st = true; } else ctx.lineTo(p.sx, p.sy); } else st = false; } ctx.stroke(); }
      for (let latG = -75; latG <= 75; latG += 15) { ctx.beginPath(); let st = false; for (let lonG = -180; lonG <= 180; lonG += 3) { const p = Pr(vec(lonG, latG)); if (p.z > 0) { if (!st) { ctx.moveTo(p.sx, p.sy); st = true; } else ctx.lineTo(p.sx, p.sy); } else st = false; } ctx.stroke(); }
      for (const v of landPts) { const p = Pr(v); if (p.z <= 0.02) continue; const a = 0.10 + 0.42 * p.z; ctx.fillStyle = "rgba(45,212,108," + a.toFixed(3) + ")"; const s = (1.1 + 0.8 * p.z) / Math.sqrt(scale); ctx.fillRect(p.sx - s / 2, p.sy - s / 2, s, s); }
      ctx.restore();
      ctx.lineWidth = 1.2 / scale; ctx.strokeStyle = "rgba(45,212,108,0.16)"; ctx.beginPath(); ctx.arc(gx, gy, R, 0, 7); ctx.stroke();
      ctx.restore();

      const cpos = CITIES.map(c => T(c.x * w, c.y * h));
      if (eA > 0.01) {
        ctx.save(); ctx.globalAlpha = eA;
        const ctrl = (a: number[], b: number[]) => { const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1; return [mx - dy / len * len * 0.16, my + dx / len * len * 0.16]; };
        arcCtrl = ROUTES.map(([a, b]) => ctrl(cpos[a], cpos[b]));
        ROUTES.forEach(([a, b], ri) => { const A = cpos[a], B = cpos[b], C = arcCtrl[ri]; ctx.strokeStyle = "rgba(45,212,108,0.30)"; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.quadraticCurveTo(C[0], C[1], B[0], B[1]); ctx.stroke(); });
        ctx.shadowColor = "rgba(45,212,108,0.95)";
        parts.forEach(p => { p.t += p.sp * fs; if (p.t > 1) p.t -= 1; const [a, b] = ROUTES[p.ri]; const A = cpos[a], B = cpos[b], C = arcCtrl[p.ri]; const u = 1 - p.t; const px = u * u * A[0] + 2 * u * p.t * C[0] + p.t * p.t * B[0]; const py = u * u * A[1] + 2 * u * p.t * C[1] + p.t * p.t * B[1]; ctx.fillStyle = "#34E37D"; ctx.shadowBlur = 10; ctx.beginPath(); ctx.arc(px, py, 2.3, 0, 7); ctx.fill(); });
        ctx.shadowBlur = 0;
        ctx.restore();
      }

      cityScreen.current = [];
      CITIES.forEach((c, i) => {
        const [px, py] = cpos[i];
        const hot = hoverRef.current === c.id;
        const tSize = (hot ? 68 : 58) * uiScale;
        const tcy = py - 56 * uiScale;
        cityScreen.current.push({ id: c.id, sx: px, sy: py, ix: px, iy: tcy, hitR: tSize / 2 + 12, vis: eA > 0.2 });
        if (eA <= 0.01) return;
        ctx.save(); ctx.globalAlpha = eA;
        const ring = (hot ? 15 : 11) + 2.2 * Math.sin(t * 2.2 + i * 0.7);
        ctx.beginPath(); ctx.strokeStyle = "rgba(45,212,108," + (hot ? 0.55 : 0.32) + ")"; ctx.lineWidth = 1; ctx.arc(px, py, ring, 0, 7); ctx.stroke();
        ctx.beginPath(); ctx.fillStyle = "rgba(45,212,108,0.10)"; ctx.arc(px, py, hot ? 11 : 8, 0, 7); ctx.fill();
        ctx.beginPath(); ctx.fillStyle = "#34E37D"; ctx.shadowColor = "rgba(45,212,108,0.95)"; ctx.shadowBlur = 14; ctx.arc(px, py, hot ? 4.4 : 3.3, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        if (c.zoomable) { ctx.beginPath(); ctx.strokeStyle = "rgba(45,212,108," + (0.5 * (0.5 + 0.5 * Math.sin(t * 3))) + ")"; ctx.lineWidth = 1.4; ctx.arc(px, py, ring + 6, 0, 7); ctx.stroke(); }
        const fImg = Math.sin(t * 1.5 + i * 0.9) * 4.5;
        drawThumb(ctx, imgEls[i % imgEls.length], px, tcy + fImg, tSize, eA);
        ctx.font = '600 11px "JetBrains Mono", monospace'; ctx.textAlign = "center"; ctx.fillStyle = "rgba(45,212,108," + (hot ? 0.98 : 0.74) + ")"; ctx.fillText(c.name, px, py + (hot ? 15 : 13) + 11);
        ctx.restore();
      });

      distScreen.current = [];
      const dlist = DISTRICTS[fc.id] || [];
      if (dA > 0.01 && dlist.length) {
        ctx.save(); ctx.globalAlpha = dA;
        const dc = T(fx, fy); const rD = md * 0.30;
        dlist.forEach((_, i) => { const ang = -Math.PI / 2 + i * (Math.PI * 2 / dlist.length); const px = dc[0] + Math.cos(ang) * rD, py = dc[1] + Math.sin(ang) * rD; ctx.strokeStyle = "rgba(45,212,108,0.28)"; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(dc[0], dc[1]); ctx.lineTo(px, py); ctx.stroke(); });
        ctx.shadowColor = "rgba(45,212,108,0.95)";
        if (dpartsFor !== fc.id) { dparts = dlist.map((_, i) => ({ i, t: Math.random(), sp: 0.005 + Math.random() * 0.003 })); dpartsFor = fc.id; }
        dparts.forEach(p => { if (p.i >= dlist.length) return; p.t += p.sp * fs; if (p.t > 1) p.t -= 1; const ang = -Math.PI / 2 + p.i * (Math.PI * 2 / dlist.length); const px = dc[0] + Math.cos(ang) * rD * p.t, py = dc[1] + Math.sin(ang) * rD * p.t; ctx.fillStyle = "#34E37D"; ctx.shadowBlur = 9; ctx.beginPath(); ctx.arc(px, py, 2.1, 0, 7); ctx.fill(); });
        ctx.shadowBlur = 0;
        dlist.forEach((d, i) => { const ang = -Math.PI / 2 + i * (Math.PI * 2 / dlist.length); const px = dc[0] + Math.cos(ang) * rD, py = dc[1] + Math.sin(ang) * rD;
          const hot = hoverRef.current === d.id;
          const tSize = (hot ? 52 : 46) * uiScale; const tcy = py - 44 * uiScale;
          distScreen.current.push({ id: d.id, sx: px, sy: py, ix: px, iy: tcy, hitR: tSize / 2 + 9 });
          ctx.beginPath(); ctx.strokeStyle = "rgba(45,212,108," + (hot ? 0.55 : 0.3) + ")"; ctx.lineWidth = 1; ctx.arc(px, py, hot ? 13 : 10, 0, 7); ctx.stroke();
          ctx.beginPath(); ctx.fillStyle = "rgba(45,212,108,0.10)"; ctx.arc(px, py, hot ? 10 : 7, 0, 7); ctx.fill();
          ctx.beginPath(); ctx.fillStyle = "#34E37D"; ctx.shadowColor = "rgba(45,212,108,0.95)"; ctx.shadowBlur = 13; ctx.arc(px, py, hot ? 4 : 3, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
          const dfImg = Math.sin(t * 1.5 + i * 0.9) * 4;
          drawThumb(ctx, imgEls[i % imgEls.length], px, tcy + dfImg, tSize, dA);
          ctx.font = '600 11px "JetBrains Mono", monospace'; ctx.textAlign = "center"; ctx.fillStyle = "rgba(45,212,108," + (hot ? 0.98 : 0.78) + ")"; ctx.fillText(d.name, px, py + (hot ? 13 : 11) + 12); });
        ctx.beginPath(); ctx.fillStyle = "rgba(45,212,108,0.12)"; ctx.arc(dc[0], dc[1], 16, 0, 7); ctx.fill();
        ctx.beginPath(); ctx.fillStyle = "#34E37D"; ctx.shadowColor = "rgba(45,212,108,0.95)"; ctx.shadowBlur = 18; ctx.arc(dc[0], dc[1], 6, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
        ctx.font = '700 13px "Space Grotesk", sans-serif'; ctx.textAlign = "center"; ctx.fillStyle = "#34E37D"; ctx.fillText(fc.name.toUpperCase(), dc[0], dc[1] - 24);
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  const nearest = (e: React.MouseEvent) => {
    const cv = canvasRef.current; if (!cv) return null;
    const r = cv.getBoundingClientRect(); const mx = e.clientX - r.left, my = e.clientY - r.top;
    const list = zoomRef.current ? distScreen.current : cityScreen.current;
    let best: { id: string; sx: number; sy: number; ix: number; iy: number } | null = null, bd = Infinity;
    for (const c of list) {
      if ((c as { vis?: boolean }).vis === false) continue;
      // hit either the node OR the floating thumbnail above it
      const d = Math.min(Math.hypot(c.sx - mx, c.sy - my), Math.hypot(c.ix - mx, c.iy - my));
      if (d < c.hitR && d < bd) { bd = d; best = c; }
    }
    return best;
  };

  const lookup = (id: string | null): (City | District) | null => {
    if (!id) return null;
    const c = CITIES.find(x => x.id === id); if (c) return c;
    for (const k in DISTRICTS) { const d = DISTRICTS[k].find(x => x.id === id); if (d) return d; }
    return null;
  };

  const onMove = (e: React.MouseEvent) => {
    const b = nearest(e);
    const cv = canvasRef.current;
    if (cv) cv.style.cursor = b ? "pointer" : "default";
    if (b) { if (hoverId !== b.id) { setHoverId(b.id); setPos({ x: b.ix, y: b.iy }); } }
    else if (hoverId) setHoverId(null);
  };
  const onTap = (e: React.MouseEvent) => {
    const b = nearest(e);
    if (!zoom) {
      if (b) { const c = CITIES.find(x => x.id === b.id); if (c && c.zoomable) { setZoom(c.id); setHoverId(null); } else { setHoverId(hoverId === b.id ? null : b.id); setPos({ x: b.ix, y: b.iy }); } }
      else if (hoverId) setHoverId(null);
    } else {
      // zoomed in: tapping any district opens its emirate's location page
      if (b) { const slug = SLUG[zoom]; if (slug) router.push(`/locations/${slug}`); }
      else if (hoverId) setHoverId(null);
    }
  };

  const hov = lookup(hoverId) as (City & District) | null;
  const fc = zoom ? CITIES.find(c => c.id === zoom) : null;

  return (
    <div className="globe-stage">
      <canvas ref={canvasRef} onMouseMove={onMove} onMouseLeave={() => setHoverId(null)} onClick={onTap} />

      {zoom && (
        <div className="globe-back">
          <span onClick={() => { setZoom(null); setHoverId(null); }} className="globe-back-btn">← Back to UAE</span>
          <span className="globe-back-label">{fc?.name} · DISTRICTS</span>
        </div>
      )}

      {!zoom && (
        <div className="globe-hint">
          <span className="dot" />CLICK ANY EMIRATE TO EXPLORE DISTRICTS
        </div>
      )}

      {zoom && (
        <div className="globe-hint">
          <span className="dot" />TAP A DISTRICT TO OPEN {fc?.name?.toUpperCase()} SERVICES
        </div>
      )}

      {hov && (
        <div className="globe-tip" style={{ left: pos.x, top: pos.y }}>
          <div className="globe-tip-card">
            <div className="globe-tip-head">
              <div className="globe-tip-name">{hov.name}</div>
              <span className="globe-tip-avail"><span className="dot" />{hov.avail || "AVAILABLE"}</span>
            </div>
            <div className="globe-tip-desc">{hov.desc}</div>
            <div className="globe-tip-foot">
              <span>Est. response</span>
              <span className="globe-tip-resp">{hov.resp}</span>
            </div>
          </div>
          <div className="globe-tip-arrow" />
        </div>
      )}
    </div>
  );
}
