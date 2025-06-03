import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import { useCarForm } from '../useCarForm';
import { createCar } from '../../../operations';
import { Button } from '../../../../../../components/Button/Button';
import styles from './styles.module.scss';

export function CreateCarForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { car, resetForm, handleInputCar } = useCarForm();

  const handleCreateSingleCar = async () => {
    if (car.name.trim()) {
      dispatch(createCar(car));
      resetForm();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        name="name"
        value={car.name}
        onChange={handleInputCar}
        className={styles.inputText}
        type="text"
      />
      <Button onClick={() => handleCreateSingleCar()}>Create</Button>
      <input
        name="color"
        value={car.color}
        onChange={handleInputCar}
        className={styles.inputColor}
        type="color"
      />
    </div>
  );
}
