import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { startCar, stopCar } from '../../../../../race/operations';
import { AppDispatch } from '../../../../../../app/store';

type CarDriveModeProps = {
  carId: number;
};

export function CarDriveMode({ carId }: CarDriveModeProps) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => dispatch(startCar(carId))}>A</Button>
      <Button onClick={() => dispatch(stopCar(carId))}>B</Button>
    </div>
  );
}
