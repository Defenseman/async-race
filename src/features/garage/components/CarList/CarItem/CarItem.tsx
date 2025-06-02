/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarButtons } from './CarButtons/CarButtons';
import { Car } from '../../../../../components/Car/Car';
import { Track } from './Track/Track';
import styles from './styles.module.scss';
import { Item } from '../../../types';
import { CarDriveMode } from './CarDriveMode/CarDriveMode';
import { AppDispatch, RootState } from '../../../../../app/store';
import { stopCar } from '../../../../race/operations';
import { clearResetFlag } from '../../../../race/raceSlice';

export function CarItem({
  car,
  handleSelectedCar,
}: {
  car: Item;
  handleSelectedCar: (carData: Item) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationStartRef = useRef<number | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const [disabledStart, setdisabledStart] = useState(false);
  const [disabledStop, setdisabledStop] = useState(true);
  const [translateCar, setTranslateCar] = useState(0);
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
    animationData &&
    (animationData.distance / animationData.velocity / 1000) * 1.3;

  const handleStopCar = () => {
    dispatch(stopCar(car.id));
    setTranslateCar(0);
    setdisabledStart(false);
    setdisabledStop(true);
    setStartAnimation(false);
    animationStartRef.current = null;
  };

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

  useEffect(() => {
    if (!isRunning && animationData && animationStartRef.current) {
      const elapsed =
        ((performance.now() - animationStartRef.current) / 1000) * 1.3;
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

  useEffect(() => {
    if (shouldReset) {
      setTranslateCar(0);
      setStartAnimation(false);
      setdisabledStart(false);
      setdisabledStop(true);
      animationStartRef.current = null;

      dispatch(clearResetFlag(car.id));
    }
  }, [shouldReset]);

  return (
    <div className={styles.container} ref={containerRef}>
      <CarButtons carData={car} handleSelectedCar={handleSelectedCar} />
      <CarDriveMode
        handleStopCar={handleStopCar}
        disabledStop={disabledStop}
        disabledStart={disabledStart}
        carId={car.id}
      />
      <Car
        translateCar={translateCar}
        shouldDrive={startAnimation && isRunning}
        duration={duration}
        color={car.color}
      />
      <Track name={car.name} />
    </div>
  );
}
