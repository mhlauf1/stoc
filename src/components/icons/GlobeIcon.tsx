// components/icons/GlobeIcon.tsx
import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import type { AnimationItem } from "lottie-web";
import globeData from "../../../public/globe.json";

export interface GlobeLottieProps {
  play: boolean; // true = spin now, false = finish current spin then stop
  data: any;
  width?: string;
  height?: string;
}

export function LottieIcon({
  play,
  data,
  width = "42px",
  height = "42px",
}: GlobeLottieProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    // grab the raw lottie-web instance
    const animItem = (lottieRef.current as any)?.animationItem as AnimationItem;
    if (!animItem) return;

    if (play) {
      // on hover-in: re-enable looping & play
      animItem.loop = true;
      animItem.play();
    } else {
      // on hover-out: disable looping so it stops after the current cycle
      animItem.loop = false;
    }
  }, [play]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={data}
      autoplay={false} // we control play/stop manually
      loop // initial loop behavior (will get overridden)
      style={{ width, height }}
    />
  );
}
