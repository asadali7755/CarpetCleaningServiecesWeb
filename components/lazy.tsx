"use client";

import dynamic from "next/dynamic";

export const Globe = dynamic(() => import("./Globe"), {
  ssr: false,
  loading: () => <div className="globe-stage" style={{ minHeight: 320 }} />,
});

export const InfiniteGallery = dynamic(() => import("./InfiniteGallery"), {
  ssr: false,
  loading: () => (
    <div style={{ height: "100vh", width: "100%", background: "#060a08" }} />
  ),
});

export const ContainerScroll = dynamic(
  () => import("./ui/container-scroll").then((m) => ({ default: m.ContainerScroll })),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: 600 }} />,
  }
);

export const CardSticky = dynamic(
  () => import("./ui/container-scroll").then((m) => ({ default: m.CardSticky })),
  { ssr: false }
);
