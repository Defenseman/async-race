import React from 'react';
import { CarButtons } from './CarButtons/CarButtons';
import { Car } from '../../../../../components/Car/Car';
import { Track } from './Track/Track';
import styles from './styles.module.scss';
import { Item } from '../../../types';
import { CarDriveMode } from './CarDriveMode/CarDriveMode';

export function CarItem({
  car,
  handleSelectedCar,
}: {
  car: Item;
  handleSelectedCar: (carData: Item) => void;
}) {
  return (
    <div className={styles.container}>
      <CarButtons carData={car} handleSelectedCar={handleSelectedCar} />
      <CarDriveMode carId={car.id} />
      <Car color={car.color} />
      <Track name={car.name} />
    </div>
  );
}
