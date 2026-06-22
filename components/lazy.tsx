"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";

export const Globe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => <div className="globe-stage" style={{ minHeight: 320 }} />,
});

/* ---------- viewport-triggered lazy imports ---------- */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useVisibleImport(loader: () => Promise<any>, rootMargin = "400px") {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Comp, setComp] = useState<React.ComponentType<any> | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          loader().then((m: { default: React.ComponentType }) => setComp(() => m.default));
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return { ref, Comp };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function InfiniteGallery(props: any) {
  const { ref, Comp } = useVisibleImport(
    () => import("./InfiniteGallery"),
    "400px",
  );
  if (Comp) return <Comp {...props} />;
  return (
    <div ref={ref} style={{ height: "100vh", width: "100%", background: "#060a08" }} />
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ContainerScroll(props: any) {
  const { ref, Comp } = useVisibleImport(
    () => import("./ui/container-scroll").then((m) => ({ default: m.ContainerScroll })),
    "300px",
  );
  if (Comp) return <Comp {...props} />;
  return <div ref={ref} style={{ minHeight: 600 }} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CardSticky(props: any) {
  const { ref, Comp } = useVisibleImport(
    () => import("./ui/container-scroll").then((m) => ({ default: m.CardSticky })),
    "300px",
  );
  if (Comp) return <Comp {...props} />;
  return <div ref={ref} />;
}
