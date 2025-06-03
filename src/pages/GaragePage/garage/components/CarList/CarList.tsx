import React from 'react';
import { CarItem } from './CarItem/CarItem';

type CarListItem = {
  name: string;
  color: string;
  id: number;
};
type CarListProps = {
  cars: CarListItem[];
  handleSelectedCar: (car: CarListItem) => void;
};

export function CarList({ cars, handleSelectedCar }: CarListProps) {
  return (
    <div>
      {cars.map(car => (
        <CarItem key={car.id} car={car} handleSelectedCar={handleSelectedCar} />
      ))}
    </div>
  );
}
