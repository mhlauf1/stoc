// components/icons/GlobeIcon.tsx
import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import type { AnimationItem } from "lottie-web";

// 1) Import your JSON — TS will now know its structure
import rawGlobeData from "../../../public/globe.json";

// 2) Capture its type
export type GlobeAnimationData = typeof rawGlobeData;

export interface GlobeLottieProps {
  play: boolean;
  data: GlobeAnimationData;
  width?: string;
  height?: string;
}

export function LottieIcon({
  play,
  data,
  width = "36px",
  height = "36px",
}: GlobeLottieProps) {
  // 3) extend the LottieRef type so animationItem is known
  const lottieRef = useRef<
    (LottieRefCurrentProps & { animationItem?: AnimationItem }) | null
  >(null);

  useEffect(() => {
    const animItem = lottieRef.current?.animationItem;
    if (!animItem) return;

    if (play) {
      animItem.loop = true;
      animItem.play();
    } else {
      animItem.loop = false; // will finish current loop then stop
    }
  }, [play]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={data}
      autoplay={false}
      loop
      style={{ width, height }}
    />
  );
}
