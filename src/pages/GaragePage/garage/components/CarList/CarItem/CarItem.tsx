import { CarButtons } from './CarButtons/CarButtons';
import { Car } from '../../../../../../components/Car/Car';
import { Track } from './Track/Track';
import styles from './styles.module.scss';
import { Item } from '../../../../../../store/garage/types';
import { CarDriveMode } from './CarDriveMode/CarDriveMode';
import { useCarItemLogic } from './hooks/useCarItemLogic';

type CarItemProps = {
  car: Item;
  handleSelectedCar: (carData: Item) => void;
};

export function CarItem({ car, handleSelectedCar }: CarItemProps) {
  const {
    containerRef,
    translateCar,
    startAnimation,
    disabledStart,
    disabledStop,
    handleStartCar,
    handleStopCar,
    duration,
    isRunning,
  } = useCarItemLogic(car);

  return (
    <div className={styles.container} ref={containerRef}>
      <CarButtons carData={car} handleSelectedCar={handleSelectedCar} />
      <CarDriveMode
        handleStartCar={handleStartCar}
        handleStopCar={handleStopCar}
        disabledStop={disabledStop}
        disabledStart={disabledStart}
        carId={car.id}
      />
      <Car
        translateCar={translateCar}
        shouldDrive={startAnimation && isRunning}
        duration={duration}
        color={car.color}
      />
      <Track name={car.name} />
    </div>
  );
}
