/* eslint-disable no-magic-numbers */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../components/Button/Button';
import styles from './styles.module.scss';
import { addCars, setPage } from '../../garageSlice';

export function GarageControls() {
  const dispatch = useDispatch();
  const generateRandomCars = () => {
    const name = `Car # ${Math.floor(Math.random() * 1000)}`;
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
