// components/icons/GlobeIcon.tsx
import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import type { AnimationItem } from "lottie-web";

// 1) Import your JSON — TS will now know its structure
import rawGlobeData from "../../../public/globe.json";

// 2) Capture its type
export type GlobeAnimationData = typeof rawGlobeData;

export interface GlobeLottieProps {
  play: boolean; // true = spin now, false = finish current spin then stop
  data: GlobeAnimationData; // ← typed as exactly the shape of your JSON
  width?: string;
  height?: string;
}

export function LottieIcon({
  play,
  data,
  width = "36px",
  height = "36px",
}: GlobeLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const animItem = (lottieRef.current as any)?.animationItem as AnimationItem;
    if (!animItem) return;

    if (play) {
      animItem.loop = true;
      animItem.play();
    } else {
      animItem.loop = false;
    }
  }, [play]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={data} // now fully typed
      autoplay={false}
      loop
      style={{ width, height }}
    />
  );
}
