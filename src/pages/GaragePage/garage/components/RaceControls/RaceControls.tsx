/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../../components/Button/Button';
import styles from './styles.module.scss';
import { CarItem } from '../CarList/CarItem/CarItem';
import {
  driveCar,
  startCar,
  stopCar,
} from '../../../../../store/race/operations';
import { AppDispatch } from '../../../../../store/store';
import { resetCarPosition } from '../../../../../store/race/raceSlice';
import { Modal } from '../../../../../components/Modal/Modal';
import {
  createWinner,
  getWinnerById,
  updateWinner,
} from '../../../../../services/winnersApi';

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

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [winner, setWinner] = useState<{
    id: number;
    time: number;
    name: string;
  } | null>(null);

  const handleRace = async () => {
    setDisabledRace(true);
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

    if (raceResults.length) {
      const firstWinner = raceResults.reduce((acc, curr) => {
        return curr.time < acc.time ? curr : acc;
      });
      setWinner(firstWinner);
      setIsOpenModal(true);

      try {
        const existingWinner = await getWinnerById(firstWinner.id);
        if (existingWinner) {
          await updateWinner(firstWinner.id, {
            wins: existingWinner.wins + 1,
            time: Math.min(firstWinner.time, existingWinner.time),
          });
        } else {
          await createWinner({
            id: firstWinner.id,
            wins: 1,
            time: firstWinner.time,
          });
        }
      } catch (error) {
        console.error('Ошибка при обработке победителя:', error);
      }
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
      <Button onClick={handleReset} width="90px">
        Reset
      </Button>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <h2>Winner: {winner?.name}</h2>
        <h3>Time: {winner?.time.toFixed(2)}s</h3>
      </Modal>
    </div>
  );
}
