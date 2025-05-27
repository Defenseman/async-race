import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../components/Button/Button';
import styles from './styles.module.scss';
import { addCars, setPage } from '../../garageSlice';
import { generateManyCars } from '../../operations';
import { AppDispatch } from '../../../../app/store';

export function GarageControls() {
  const dispatch = useDispatch<AppDispatch>();
  const handleGenerateCars = async () => {
    dispatch(generateManyCars());
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
