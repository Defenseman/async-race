import { GarageControls } from './components/GarageControls/GarageControls';
import { RaceControls } from './components/RaceControls/RaceControls';
import { CarList } from './components/CarList/CarList';
import styles from './styles.module.scss';
import { StartFinishLine } from './components/StartFinishLine/StartFinishLine';
import { Pagination } from '../../../components/Pagination/Pagination';
import { useGarage } from './hooks/useGarage';

export function Garage() {
  const {
    currentPage,
    handleSelectedCar,
    handleUpdateCar,
    items,
    selectedCar,
    setSelectedCar,
    totalPages,
    visibleCars,
    setPage,
  } = useGarage();

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
      <div className={styles.pagination}>
        <h1 className={styles.carsCount}>Garage ({items.length})</h1>
        <Pagination
          onPageChange={setPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
