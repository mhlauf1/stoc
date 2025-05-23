import React, { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import type { AnimationItem } from "lottie-web";

/**
 * Grab the prop types directly from the Lottie component,
 * so we never re-declare “animationData” as `any`.
 */
type LottieComponentProps = React.ComponentProps<typeof Lottie>;

export interface LottieIconProps {
  /** start spinning on hover-in; finish current loop & stop on hover-out */
  play: boolean;
  data: LottieComponentProps["animationData"];
  width?: string;
  height?: string;
}

export function LottieIcon({
  play,
  data,
  width = "36px",
  height = "36px",
}: LottieIconProps) {
  const lottieRef = useRef<
    (LottieRefCurrentProps & { animationItem?: AnimationItem }) | null
  >(null);

  useEffect(() => {
    const anim = lottieRef.current?.animationItem;
    if (!anim) return;

    if (play) {
      anim.loop = true;
      anim.play();
    } else {
      // disable looping so it stops smoothly after this cycle
      anim.loop = false;
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
