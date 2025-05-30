/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React, { useEffect, useRef, useState } from 'react';
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
  const [translateCar, setTranslateCar] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const isRunning = useSelector(
    (state: RootState) => state.race.runningCars[car.id],
  );
  const animationData = useSelector(
    (state: RootState) => state.race.animationParams[car.id],
  );

  const duration =
    // eslint-disable-next-line no-magic-numbers
    animationData && animationData.distance / animationData.velocity / 1000;

  useEffect(() => {
    if (animationData) {
      requestAnimationFrame(() => {
        const { distance } = animationData;
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const carWidth = 120;
        const padding = 10;
        const maxDistance = containerWidth - carWidth - padding;
        const realTranslateCar = Math.min(distance, maxDistance);

        setStartAnimation(false);
        setTranslateCar(0);

        setTimeout(() => {
          setTranslateCar(realTranslateCar);
          setStartAnimation(true);
        }, 0);
      });
    }
  }, [animationData]);

  return (
    <div className={styles.container}>
      <CarButtons carData={car} handleSelectedCar={handleSelectedCar} />
      <CarDriveMode carId={car.id} />
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
