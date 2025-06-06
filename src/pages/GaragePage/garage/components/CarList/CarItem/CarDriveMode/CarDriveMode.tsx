import { Button } from '../../../../../../../components/Button/Button';
import styles from './styles.module.scss';

type CarDriveModeProps = {
  carId: number;
  disabledStart: boolean;
  disabledStop: boolean;
  handleStartCar: () => void;
  handleStopCar: () => void;
};

export function CarDriveMode({
  disabledStart,
  disabledStop,
  handleStartCar,
  handleStopCar,
}: CarDriveModeProps) {
  return (
    <div className={styles.wrapper}>
      <Button disabled={disabledStart} onClick={handleStartCar}>
        A
      </Button>
      <Button disabled={disabledStop} onClick={handleStopCar}>
        B
      </Button>
    </div>
  );
}
