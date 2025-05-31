/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CarButtons } from './CarButtons/CarButtons';
import { Car } from '../../../../../components/Car/Car';
import { Track } from './Track/Track';
import styles from './styles.module.scss';
import { Item } from '../../../types';
import { CarDriveMode } from './CarDriveMode/CarDriveMode';
import { RootState } from '../../../../../app/store';

export function CarItem({
  car,
  handleSelectedCar,
}: {
  car: Item;
  handleSelectedCar: (carData: Item) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationStartRef = useRef<number | null>(null);
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

  const duration =
    // eslint-disable-next-line no-magic-numbers
    animationData &&
    (animationData.distance / animationData.velocity / 1000) * 1.4;

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
        ((performance.now() - animationStartRef.current) / 1000) * 1.4;
      const distanceTravelled = animationData.velocity * elapsed;

      setStartAnimation(false);
      setTranslateCar(distanceTravelled);
    }
  }, [isRunning]);

  return (
    <div className={styles.container} ref={containerRef}>
      <CarButtons carData={car} handleSelectedCar={handleSelectedCar} />
      <CarDriveMode
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
