import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../../../store/store';
import { clearResetFlag } from '../../../../../../../../store/race/raceSlice';
import { useCarItemState } from '../state/useCarItemState';

interface UseCarResetEffectProps {
  carId: number;
  state: ReturnType<typeof useCarItemState>;
}

export function useCarResetEffect({ carId, state }: UseCarResetEffectProps) {
  const {
    shouldReset,
    setTranslateCar,
    setStartAnimation,
    setdisabledStart,
    setdisabledStop,
    animationStartRef,
  } = state;
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
