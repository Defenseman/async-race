import { RefObject, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCarPosition } from '../../../../../../../../store/race/raceSlice';

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
  carId: number;
  containerWidth: number;
}

export function useCarStopEffect(props: IUseCarStopEffectProps) {
  const {
    isRunning,
    animationData,
    animationStartRef,
    setStartAnimation,
    setTranslateCar,
    carId,
    containerWidth,
  } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const toRound = 1000;
    if (!isRunning && animationData && animationStartRef.current) {
      const elapsed = (performance.now() - animationStartRef.current) / toRound;
      const distanceTravelled = animationData.velocity * elapsed;

      const carWidth = 120;
      const padding = 140;
      const maxDistance = containerWidth - carWidth - padding;
      const realTranslateCar = Math.min(animationData.distance, maxDistance);
      setStartAnimation(false);
      setTranslateCar(Math.min(distanceTravelled, realTranslateCar));
      dispatch(
        setCarPosition({
          id: carId,
          position: Math.min(distanceTravelled, realTranslateCar),
        }),
      );
    }
  }, [isRunning, containerWidth]);
}
