import { useEffect, RefObject } from 'react';

interface IAnimationData {
  distance: number;
  velocity: number;
}

interface IUseCarStartEffectProps {
  animationData: IAnimationData | undefined;
  containerRef: RefObject<HTMLDivElement | null>;
  animationStartRef: RefObject<number | null>;
  setdisabledStart: (value: boolean) => void;
  setdisabledStop: (value: boolean) => void;
  setTranslateCar: (value: number) => void;
  setStartAnimation: (value: boolean) => void;
}

export function useCarStartEffect(props: IUseCarStartEffectProps): void {
  const {
    animationData,
    containerRef,
    animationStartRef,
    setdisabledStart,
    setdisabledStop,
    setTranslateCar,
    setStartAnimation,
  } = props;

  useEffect(() => {
    if (!animationData) return;

    setStartAnimation(false);
    setTranslateCar(0);

    requestAnimationFrame(() => {
      const { distance } = animationData;
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const carWidth = 120;
      const padding = 140;
      const maxDistance = containerWidth - carWidth - padding;
      const realTranslateCar = Math.min(distance, maxDistance);

      animationStartRef.current = performance.now();
      setdisabledStart(true);
      setdisabledStop(false);
      setTranslateCar(realTranslateCar);
      setStartAnimation(true);
    });
  }, [animationData]);
}
