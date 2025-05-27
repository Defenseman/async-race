import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GarageControls } from './components/GarageControls/GarageControls';
import { RaceControls } from './components/RaceControls/RaceControls';
import { CarList } from './components/CarList/CarList';
import styles from './styles.module.scss';
import { StartFinishLine } from './components/StartFinishLine/StartFinishLine';
import { getCars } from './operations';
import { AppDispatch, RootState } from '../../app/store';
import { Pagination } from './components/Pagination/Pagination';

export function Garage() {
  const { items, currentPage } = useSelector(
    (state: RootState) => state.garage,
  );
  const dispatch = useDispatch<AppDispatch>();

  const carsPerPage = 10;
  const visibleCars = items.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage,
  );

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainControlsBlock}>
          <RaceControls />
          <GarageControls />
        </div>
        <div className={styles.carRaceBlock}>
          <StartFinishLine />
          <CarList cars={visibleCars} />
        </div>
      </div>
      <Pagination />
    </>
  );
}
