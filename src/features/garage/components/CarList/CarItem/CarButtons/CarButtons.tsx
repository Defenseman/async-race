import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { AppDispatch } from '../../../../../../app/store';
import { deleteCar } from '../../../../operations';
import { Item } from '../../../../types';

export function CarButtons({
  carData,
  handleSelectedCar,
}: {
  carData: Item;
  handleSelectedCar: (car: Item) => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteCar = () => {
    dispatch(deleteCar(carData.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button onClick={() => handleSelectedCar(carData)}>Select</Button>
        <Button onClick={() => handleDeleteCar()}>Remove</Button>
      </div>
    </div>
  );
}
