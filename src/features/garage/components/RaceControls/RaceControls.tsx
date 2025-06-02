/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../components/Button/Button';
import styles from './styles.module.scss';
import { CarItem } from '../CarList/CarItem/CarItem';
import { driveCar, startCar, stopCar } from '../../../race/operations';
import { AppDispatch } from '../../../../app/store';
import { resetCarPosition } from '../../../race/raceSlice';
import { Modal } from '../../../../components/Modal/Modal';

type CarItem = {
  name: string;
  color: string;
  id: number;
};

type RaceControlsProps = {
  cars: CarItem[];
};

export function RaceControls({ cars }: RaceControlsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const toRound = 1000;
  const [disabledRace, setDisabledRace] = useState(false);
  const [disabledReset, setDisabledReset] = useState(true);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [winner, setWinner] = useState<{
    id: number;
    time: number;
    name: string;
  } | null>(null);

  const handleRace = async () => {
    setDisabledRace(true);
    setDisabledReset(false);
    const startTimes: Record<number, number> = {};
    const raceResults: { id: number; time: number; name: string }[] = [];

    await Promise.all(
      cars.map(async car => {
        const start = performance.now();
        startTimes[car.id] = start;

        await dispatch(startCar(car.id));
        const result = await dispatch(driveCar(car.id));

        if (driveCar.fulfilled.match(result)) {
          const finish = performance.now();
          const time = (finish - start) / toRound;
          raceResults.push({ id: car.id, time, name: car.name });
        }
      }),
    );

    setDisabledRace(false);
    setDisabledReset(false);

    if (raceResults.length) {
      const firstWinner = raceResults.reduce((acc, curr) => {
        return curr.time < acc.time ? curr : acc;
      });
      setWinner(firstWinner);
      setIsOpenModal(true);
    }
  };

  const handleReset = () => {
    cars.forEach(car => {
      dispatch(stopCar(car.id));
      dispatch(resetCarPosition(car.id));
    });
    setWinner(null);
    setIsOpenModal(false);
    setDisabledRace(true);
    setDisabledRace(false);
  };

  return (
    <div className={styles.container}>
      <Button disabled={!!disabledRace} onClick={handleRace} width="90px">
        Race
      </Button>
      <Button disabled={!!disabledReset} onClick={handleReset} width="90px">
        Reset
      </Button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h2>Winner: {winner?.name}</h2>
        <h3>Time: {winner?.time.toFixed(2)}s</h3>
      </Modal>
    </div>
  );
}
