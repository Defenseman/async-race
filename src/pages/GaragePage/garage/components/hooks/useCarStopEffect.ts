import { RefObject, useEffect } from 'react';

interface IAnimationData {
  distance: number;
  velocity: number;
}

interface IUseCarStopEffectProps {
  isRunning: boolean;
  animationData: IAnimationData | undefined;
  animationStartRef: RefObject<number | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  setStartAnimation: (value: boolean) => void;
  setTranslateCar: (value: number) => void;
}

export function useCarStopEffect(props: IUseCarStopEffectProps) {
  const {
    isRunning,
    animationData,
    animationStartRef,
    containerRef,
    setStartAnimation,
    setTranslateCar,
  } = props;

  useEffect(() => {
    const toRound = 1000;
    if (!isRunning && animationData && animationStartRef.current) {
      const elapsed = (performance.now() - animationStartRef.current) / toRound;
      const distanceTravelled = animationData.velocity * elapsed;

      const containerWidth = containerRef.current?.offsetWidth || 0;
      const carWidth = 120;
      const padding = 140;
      const maxDistance = containerWidth - carWidth - padding;
      const realTranslateCar = Math.min(animationData.distance, maxDistance);

      setStartAnimation(false);
      setTranslateCar(Math.min(distanceTravelled, realTranslateCar));
    }
  }, [isRunning]);
}
