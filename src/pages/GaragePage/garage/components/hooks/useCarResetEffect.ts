import { RefObject, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { clearResetFlag } from '../../../../../store/race/raceSlice';

interface UseCarResetEffectProps {
  carId: number;
  shouldReset: boolean;
  setTranslateCar: (value: number) => void;
  setStartAnimation: (value: boolean) => void;
  setdisabledStart: (value: boolean) => void;
  setdisabledStop: (value: boolean) => void;
  animationStartRef: RefObject<number | null>;
}

export function useCarResetEffect(props: UseCarResetEffectProps) {
  const {
    carId,
    shouldReset,
    setTranslateCar,
    setStartAnimation,
    setdisabledStart,
    setdisabledStop,
    animationStartRef,
  } = props;
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (shouldReset) {
      setTranslateCar(0);
      setStartAnimation(false);
      setdisabledStart(false);
      setdisabledStop(true);
      animationStartRef.current = null;

      dispatch(clearResetFlag(carId));
    }
  }, [shouldReset]);
}
