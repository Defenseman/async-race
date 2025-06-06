import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../../../../../../../store/garage/types';
import { AppDispatch, RootState } from '../../../../../../../../store/store';

export function useCarItemState(car: Item) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationStartRef = useRef<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const [disabledStart, setdisabledStart] = useState(false);
  const [disabledStop, setdisabledStop] = useState(true);
  const [translateCar, setTranslateCar] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const toRound = 1000;

  const isRunning = useSelector(
    (state: RootState) => state.race.runningCar[car.id],
  );
  const animationData = useSelector(
    (state: RootState) => state.race.animationParams[car.id],
  );
  const shouldReset = useSelector(
    (state: RootState) => state.race.shouldReset[car.id],
  );
  const duration =
    animationData && animationData.distance / animationData.velocity / toRound;
  return {
    containerRef,
    animationStartRef,
    dispatch,
    disabledStart,
    setdisabledStart,
    disabledStop,
    setdisabledStop,
    translateCar,
    setTranslateCar,
    startAnimation,
    setStartAnimation,
    animationData,
    isRunning,
    shouldReset,
    duration,
  };
}
