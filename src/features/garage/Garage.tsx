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
import { useCarForm } from './components/GarageControls/useCarForm';

export function Garage() {
  const { items, currentPage } = useSelector(
    (state: RootState) => state.garage,
  );
  const { handleSelectedCar, selectedCar, setSelectedCar, handleUpdateCar } =
    useCarForm();
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
          <RaceControls cars={visibleCars} />
          <GarageControls
            selectedCar={selectedCar}
            setSelectedCar={setSelectedCar}
            handleUpdateCar={handleUpdateCar}
          />
        </div>
        <div className={styles.carRaceBlock}>
          <StartFinishLine />
          <CarList cars={visibleCars} handleSelectedCar={handleSelectedCar} />
        </div>
      </div>
      <Pagination />
    </>
  );
}
