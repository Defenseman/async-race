import React from 'react';
import { CarButtons } from '../CarButtons/CarButtons';
import { Car } from '../../../../components/Car/Car';
import { Track } from '../Track/Track';
import styles from './styles.module.scss';

type CarProps = {
  name: string;
  color: string;
  id: number;
};

export function CarItem({ name, color, id }: CarProps) {
  return (
    <div className={styles.container}>
      <CarButtons carId={id} />
      <Car color={color} />
      <Track name={name} />
    </div>
  );
}
