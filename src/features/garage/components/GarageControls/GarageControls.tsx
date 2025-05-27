import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../components/Button/Button';
import styles from './styles.module.scss';
import { addCars, setPage } from '../../garageSlice';

export function GarageControls() {
  const dispatch = useDispatch();
  const CARS_TO_GENERATE = 1000;
  const HEX_COLOR_MAX = 16777215;
  const HEX_RADIX = 16;

  const generateRandomCars = () => {
    const name = `Car # ${Math.floor(Math.random() * CARS_TO_GENERATE)}`;
    const color = `
      #${Math.floor(Math.random() * HEX_COLOR_MAX).toString(HEX_RADIX)}
      `;
    const id = Date.now() + Math.random();
    return { id, name, color };
  };

  const handleGenerateCars = () => {
    const newCars = Array.from({ length: 100 }, generateRandomCars);
    dispatch(addCars(newCars));
    dispatch(setPage(1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input className={styles.inputText} type="text" />
        <Button>Create</Button>
        <input className={styles.inputColor} type="color" />
      </div>
      <div className={styles.wrapper}>
        <input className={styles.inputText} type="text" />
        <Button>Update</Button>
        <input className={styles.inputColor} type="color" />
      </div>
      <Button onClick={() => handleGenerateCars()}>Generate</Button>
    </div>
  );
}
