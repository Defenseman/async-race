/* eslint-disable max-lines-per-function */
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarButtons } from './CarButtons/CarButtons';
import { Car } from '../../../../../../components/Car/Car';
import { Track } from './Track/Track';
import styles from './styles.module.scss';
import { Item } from '../../../../../../store/garage/types';
import { CarDriveMode } from './CarDriveMode/CarDriveMode';
import { AppDispatch, RootState } from '../../../../../../store/store';
import { stopCar } from '../../../../../../store/race/operations';
import { useCarStartEffect } from '../../hooks/useCarStartEffect';
import { useCarStopEffect } from '../../hooks/useCarStopEffect';
import { useCarResetEffect } from '../../hooks/useCarResetEffect';

type CarItemProps = {
  car: Item;
  handleSelectedCar: (carData: Item) => void;
};

export function CarItem({ car, handleSelectedCar }: CarItemProps) {
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

  const handleStopCar = () => {
    dispatch(stopCar(car.id));
    setTranslateCar(0);
    setdisabledStart(false);
    setdisabledStop(true);
    setStartAnimation(false);
    animationStartRef.current = null;
  };

  useCarStartEffect({
    animationData,
    containerRef,
    animationStartRef,
    setdisabledStart,
    setdisabledStop,
    setTranslateCar,
    setStartAnimation,
  });

  useCarStopEffect({
    animationData,
    isRunning,
    animationStartRef,
    containerRef,
    setStartAnimation,
    setTranslateCar,
  });

  useCarResetEffect({
    carId: car.id,
    shouldReset,
    setTranslateCar,
    setStartAnimation,
    setdisabledStart,
    setdisabledStop,
    animationStartRef,
  });

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
