import React from 'react';
import { CarItem } from '../CarItem/CarItem';

type CarListItem = {
  name: string;
  color: string;
  id: number;
};
type CarListProps = {
  cars: CarListItem[];
};

export function CarList({ cars }: CarListProps) {
  return (
    <div>
      {cars.map(car => (
        <CarItem key={car.id} name={car.name} color={car.color} id={car.id} />
      ))}
    </div>
  );
}
