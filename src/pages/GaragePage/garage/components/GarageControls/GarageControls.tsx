/* eslint-disable max-lines-per-function */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { setPage } from '../../../../../store/garage/garageSlice';
import { generateManyCars } from '../../../../../store/garage/operations';
import { AppDispatch } from '../../../../../store/store';
import { CreateCarForm } from './CreateCarForm/CreateCarForm';
import { Item } from '../../../../../store/garage/types';

export function GarageControls({
  selectedCar,
  setSelectedCar,
  handleUpdateCar,
}: {
  selectedCar: Item | null;
  setSelectedCar: (carData: Item) => void;
  handleUpdateCar: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const handleGenerateCars = () => {
    dispatch(generateManyCars());
    dispatch(setPage(1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!selectedCar) return;
    setSelectedCar({
      ...selectedCar,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <CreateCarForm />
      <div className={styles.wrapper}>
        <input
          name="name"
          value={selectedCar?.name || ''}
          onChange={handleInputChange}
          className={`
            ${selectedCar ? styles.inputText : styles.disabledInput}
            `}
          type="text"
        />
        <Button disabled={!selectedCar} onClick={() => handleUpdateCar()}>
          Update
        </Button>
        <input
          name="color"
          value={selectedCar?.color || '#000000'}
          onChange={handleInputChange}
          className={`
            ${selectedCar ? styles.inputColor : styles.disabledColorInput}
          `}
          type="color"
        />
      </div>
      <Button onClick={() => handleGenerateCars()}>Generate</Button>
    </div>
  );
}
