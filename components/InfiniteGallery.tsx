"use client";

// 3D infinite carpet gallery (react-three-fiber).
// Performance-tuned: NO per-frame React re-renders — the loop mutates mesh
// transforms + shader uniforms directly via refs. Pauses when off-screen,
// caps DPR, and binds wheel/keyboard/touch to its own canvas.
import type React from "react";
import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

type ImageItem = string | { src: string; alt?: string };

interface InfiniteGalleryProps {
  images: ImageItem[];
  speed?: number;
  visibleCount?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface PlaneData { z: number; imageIndex: number; x: number; y: number; lastImg: number; }

const DEPTH = 50;
const MAX_H = 8;
const MAX_V = 8;
const FADE = { in0: 0.05, in1: 0.25, out0: 0.4, out1: 0.43 };
const BLUR = { in0: 0.0, in1: 0.1, out0: 0.4, out1: 0.43, max: 8.0 };

const createClothMaterial = () =>
  new THREE.ShaderMaterial({
    transparent: true,
    uniforms: { map: { value: null }, opacity: { value: 1 }, blurAmount: { value: 0 }, scrollForce: { value: 0 }, time: { value: 0 }, isHovered: { value: 0 } },
    vertexShader: `
      uniform float scrollForce; uniform float time; uniform float isHovered;
      varying vec2 vUv;
      void main(){
        vUv = uv; vec3 pos = position;
        float ci = scrollForce * 0.3;
        float d = length(pos.xy);
        float curve = d*d*ci;
        float r1 = sin(pos.x*2.0 + scrollForce*3.0)*0.02;
        float r2 = sin(pos.y*2.5 + scrollForce*2.0)*0.015;
        float cloth = (r1+r2)*abs(ci)*2.0;
        float flag = 0.0;
        if(isHovered > 0.5){
          float damp = smoothstep(-0.5,0.5,pos.x);
          flag = sin(pos.x*3.0 + time*8.0)*0.1*damp + sin(pos.x*5.0 + time*12.0)*0.03*damp;
        }
        pos.z -= (curve + cloth + flag);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
      }`,
    fragmentShader: `
      uniform sampler2D map; uniform float opacity; uniform float blurAmount; uniform float scrollForce;
      varying vec2 vUv;
      void main(){
        vec4 color = texture2D(map, vUv);
        if(blurAmount > 0.0){
          vec2 ts = vec2(0.0034); vec4 b = vec4(0.0); float tot = 0.0;
          for(float x=-1.0;x<=1.0;x+=1.0){ for(float y=-1.0;y<=1.0;y+=1.0){
            vec2 off = vec2(x,y)*ts*blurAmount; float w = 1.0/(1.0+length(vec2(x,y)));
            b += texture2D(map, vUv+off)*w; tot += w; } }
          color = b/tot;
        }
        color.rgb += vec3(abs(scrollForce)*0.005);
        gl_FragColor = vec4(color.rgb, color.a*opacity);
      }`,
  });

function GalleryScene({ images, speed = 1, visibleCount = 10 }: Omit<InfiniteGalleryProps, "className" | "style">) {
  const normalized = useMemo(() => images.map((img) => (typeof img === "string" ? { src: img, alt: "" } : img)), [images]);
  const textures = useTexture(normalized.map((i) => i.src));
  const total = normalized.length;
  const materials = useMemo(() => Array.from({ length: visibleCount }, () => createClothMaterial()), [visibleCount]);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  const spatial = useMemo(() => {
    const arr: { x: number; y: number }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const ha = (i * 2.618) % (Math.PI * 2), va = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);
      arr.push({ x: (Math.sin(ha) * ((i % 3) * 1.2) * MAX_H) / 3, y: (Math.cos(va) * (((i + 1) % 4) * 0.8) * MAX_V) / 4 });
    }
    return arr;
  }, [visibleCount]);

  const planes = useRef<PlaneData[]>([]);
  useMemo(() => {
    planes.current = Array.from({ length: visibleCount }, (_, i) => ({
      z: visibleCount > 0 ? ((DEPTH / visibleCount) * i) % DEPTH : 0,
      imageIndex: total > 0 ? i % total : 0,
      x: spatial[i]?.x ?? 0, y: spatial[i]?.y ?? 0, lastImg: -1,
    }));
  }, [visibleCount, total, spatial]);

  // auto-play only — constant smooth scroll, no interaction
  const velocity = useRef(2.1);

  useFrame((state, delta) => {
    // clamp delta to prevent velocity burst when canvas resumes after being offscreen
    const dt = Math.min(delta, 0.05);
    velocity.current += 0.9 * dt * speed;
    velocity.current *= 0.95;
    const time = state.clock.getElapsedTime();
    const adv = total > 0 ? visibleCount % total || total : 0;
    const half = DEPTH / 2;

    planes.current.forEach((p, i) => {
      let nz = p.z + velocity.current * delta * 10;
      let wf = 0, wb = 0;
      if (nz >= DEPTH) { wf = Math.floor(nz / DEPTH); nz -= DEPTH * wf; }
      else if (nz < 0) { wb = Math.ceil(-nz / DEPTH); nz += DEPTH * wb; }
      if (wf > 0 && adv > 0 && total > 0) p.imageIndex = (p.imageIndex + wf * adv) % total;
      if (wb > 0 && adv > 0 && total > 0) p.imageIndex = (((p.imageIndex - wb * adv) % total) + total) % total;
      p.z = ((nz % DEPTH) + DEPTH) % DEPTH;

      const np = p.z / DEPTH;
      let op = 1;
      if (np >= FADE.in0 && np <= FADE.in1) op = (np - FADE.in0) / (FADE.in1 - FADE.in0);
      else if (np < FADE.in0) op = 0;
      else if (np >= FADE.out0 && np <= FADE.out1) op = 1 - (np - FADE.out0) / (FADE.out1 - FADE.out0);
      else if (np > FADE.out1) op = 0;
      op = Math.max(0, Math.min(1, op));

      let bl = 0;
      if (np >= BLUR.in0 && np <= BLUR.in1) bl = BLUR.max * (1 - (np - BLUR.in0) / (BLUR.in1 - BLUR.in0));
      else if (np < BLUR.in0) bl = BLUR.max;
      else if (np >= BLUR.out0 && np <= BLUR.out1) bl = BLUR.max * ((np - BLUR.out0) / (BLUR.out1 - BLUR.out0));
      else if (np > BLUR.out1) bl = BLUR.max;
      bl = Math.max(0, Math.min(BLUR.max, bl));

      const mat = materials[i];
      if (mat?.uniforms) {
        mat.uniforms.time.value = time;
        mat.uniforms.scrollForce.value = velocity.current;
        mat.uniforms.opacity.value = op;
        mat.uniforms.blurAmount.value = bl;
      }
      const mesh = meshRefs.current[i];
      if (mesh) {
        mesh.position.set(p.x, p.y, p.z - half);
        if (p.imageIndex !== p.lastImg) {
          p.lastImg = p.imageIndex;
          const tex = textures[p.imageIndex];
          if (tex && mat) {
            mat.uniforms.map.value = tex;
            const im = tex.image as { width?: number; height?: number } | undefined;
            const a = im?.width && im?.height ? im.width / im.height : 1;
            const BASE = 3.6;
            if (a > 1) mesh.scale.set(BASE * a, BASE, 1); else mesh.scale.set(BASE, BASE / a, 1);
          }
        }
      }
    });
  });

  if (total === 0) return null;

  return (
    <>
      {Array.from({ length: visibleCount }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => { meshRefs.current[i] = el; }}
          material={materials[i]}
          onPointerOver={() => { if (materials[i]?.uniforms) materials[i].uniforms.isHovered.value = 1; }}
          onPointerOut={() => { if (materials[i]?.uniforms) materials[i].uniforms.isHovered.value = 0; }}
        >
          <planeGeometry args={[1, 1, 16, 16]} />
        </mesh>
      ))}
    </>
  );
}

export default function InfiniteGallery({ images, speed = 1, visibleCount = 10, className = "", style }: InfiniteGalleryProps) {
  const [mounted, setMounted] = useState(false);
  const [inView, setInView] = useState(true);
  const [count, setCount] = useState(visibleCount);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // fewer planes on small / low-power screens
    if (typeof window !== "undefined" && window.innerWidth < 760) setCount(Math.min(7, visibleCount));
  }, [visibleCount]);
  useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.01 });
    io.observe(el);
    return () => io.disconnect();
  }, [mounted]);

  return (
    <div className={className} style={style} ref={wrapRef}>
      {mounted && (
        <Canvas camera={{ position: [0, 0, 0], fov: 55 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} dpr={[1, 1.5]} frameloop={inView ? "always" : "never"}>
          <Suspense fallback={null}>
            <GalleryScene images={images} speed={speed} visibleCount={count} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
