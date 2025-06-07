import { useEffect, RefObject } from 'react';
import { useDispatch } from 'react-redux';
import { setCarPosition } from '../../../../../../../../store/race/raceSlice';

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
  carId: number;
}

export function useCarStartEffect(props: IUseCarStartEffectProps): void {
  const dispatch = useDispatch();
  const {
    animationData,
    containerRef,
    animationStartRef,
    setdisabledStart,
    setdisabledStop,
    setTranslateCar,
    setStartAnimation,
    carId,
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
      dispatch(setCarPosition({ id: carId, position: realTranslateCar }));
      setStartAnimation(true);
    });
  }, [animationData]);
}
