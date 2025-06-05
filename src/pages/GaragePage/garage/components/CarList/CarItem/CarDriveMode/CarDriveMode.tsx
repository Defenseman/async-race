import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { driveCar, startCar } from '../../../../../../../store/race/operations';
import { AppDispatch } from '../../../../../../../store/store';

type CarDriveModeProps = {
  carId: number;
  disabledStart: boolean;
  disabledStop: boolean;
  handleStopCar: () => void;
};

export function CarDriveMode({
  carId,
  disabledStart,
  disabledStop,
  handleStopCar,
}: CarDriveModeProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={styles.wrapper}>
      <Button
        disabled={disabledStart}
        onClick={() =>
          dispatch(startCar(carId)).then(() => dispatch(driveCar(carId)))
        }
      >
        A
      </Button>
      <Button disabled={disabledStop} onClick={handleStopCar}>
        B
      </Button>
    </div>
  );
}
