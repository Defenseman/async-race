import React from 'react';
import { GarageControls } from './components/GarageControls/GarageControls';
import { RaceControls } from './components/RaceControls/RaceControls';
import { CarList } from './components/CarList/CarList';
import styles from './styles.module.scss';
import { StartFinishLine } from './components/StartFinishLine/StartFinishLine';
import { getCarsFromServer } from '../../services/garageApi';

const cars = await getCarsFromServer();

export function Garage() {
  return (
    <div className={styles.container}>
      <div className={styles.mainControlsBlock}>
        <RaceControls />
        <GarageControls />
      </div>
      <div className={styles.carRaceBlock}>
        <StartFinishLine />
        <CarList cars={cars} />
      </div>
    </div>
  );
}
