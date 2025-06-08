import React from 'react';
import { CarItem } from './CarItem/CarItem';
import style from './styles.module.scss';

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
      {cars.length < 0 ? (
        cars.map(car => (
          <CarItem
            key={car.id}
            car={car}
            handleSelectedCar={handleSelectedCar}
          />
        ))
      ) : (
        <h1 className={style.noCarTitle}>There is no Cars</h1>
      )}
    </div>
  );
}
