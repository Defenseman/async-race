import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { driveCar, startCar, stopCar } from '../../../../../race/operations';
import { AppDispatch } from '../../../../../../app/store';

type CarDriveModeProps = {
  carId: number;
  disabledStart: boolean;
  disabledStop: boolean;
};

export function CarDriveMode({
  carId,
  disabledStart,
  disabledStop,
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
      <Button disabled={disabledStop} onClick={() => dispatch(stopCar(carId))}>
        B
      </Button>
    </div>
  );
}
