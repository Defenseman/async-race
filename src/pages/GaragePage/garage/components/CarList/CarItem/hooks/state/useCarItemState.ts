/* eslint-disable max-lines-per-function */
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Item } from '../../../../../../../../store/garage/types';
import { RootState } from '../../../../../../../../store/store';
import { useContainerWidthObserver } from '../effects/useContainerWidthObserver';

const toRound = 1000;

export function useCarItemState(car: Item) {
  const position = useSelector(
    (state: RootState) => state.race.carPosition[car.id] ?? 0,
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useContainerWidthObserver(containerRef);
  const animationStartRef = useRef<number | null>(null);
  const carId = car.id;
  const [disabledStart, setdisabledStart] = useState(false);
  const [disabledStop, setdisabledStop] = useState(true);
  const [translateCar, setTranslateCar] = useState(position);
  const [startAnimation, setStartAnimation] = useState(false);
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
    containerWidth,
    containerRef,
    animationStartRef,
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
    carId,
  };
}
