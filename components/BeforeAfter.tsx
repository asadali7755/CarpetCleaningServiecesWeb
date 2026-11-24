"use client";

import { useState } from "react";
import Image from "next/image";

export interface BAPair {
  before: string;
  after: string;
  title: string;
  w: number;
  h: number;
}

// Drag (or use the arrow keys on) the handle to compare a real job's
// before and after photos. The range input keeps it keyboard-accessible.
export default function BeforeAfter({ pairs }: { pairs: BAPair[] }) {
  const [i, setI] = useState(0);
  const [pos, setPos] = useState(50);
  const p = pairs[i];

  return (
    <div className="ba2">
      <div className="ba2-stage" style={{ aspectRatio: `${p.w} / ${p.h}` }}>
        <Image src={p.after} alt={`${p.title} — after cleaning`} fill sizes="(max-width: 900px) 100vw, 620px" className="ba2-img" />
        <div className="ba2-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={p.before} alt={`${p.title} — before cleaning`} fill sizes="(max-width: 900px) 100vw, 620px" className="ba2-img" />
        </div>
        <span className="ba2-tag ba2-tag-before">Before</span>
        <span className="ba2-tag ba2-tag-after">After</span>
        <div className="ba2-handle" style={{ left: `${pos}%` }} aria-hidden="true">
          <span>
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="ba2-range"
          aria-label={`Compare before and after: ${p.title}`}
        />
      </div>
      <p className="ba2-title">{p.title}</p>
      <div className="ba2-thumbs" role="tablist" aria-label="Choose a job">
        {pairs.map((q, n) => (
          <button
            key={q.after}
            role="tab"
            aria-selected={n === i}
            className={`ba2-thumb${n === i ? " on" : ""}`}
            onClick={() => { setI(n); setPos(50); }}
          >
            <Image src={q.after} alt="" fill sizes="120px" />
            <span>{q.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
