import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../components/Button/Button';
import styles from './styles.module.scss';
import { AppDispatch } from '../../../../app/store';
import { deleteCar } from '../../operations';

export function CarButtons({ carId }: { carId: number }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteCar = () => {
    dispatch(deleteCar(carId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button>Select</Button>
        <Button onClick={() => handleDeleteCar()}>Remove</Button>
      </div>
      <div className={styles.wrapper}>
        <Button>A</Button>
        <Button>B</Button>
      </div>
    </div>
  );
}
