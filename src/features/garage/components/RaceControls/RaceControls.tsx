/* eslint-disable max-lines-per-function */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../components/Button/Button';
import styles from './styles.module.scss';
import { CarItem } from '../CarList/CarItem/CarItem';
import { driveCar, startCar, stopCar } from '../../../race/operations';
import { AppDispatch } from '../../../../app/store';

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
  const [disabledRace, setdisabledRace] = useState(false);
  const [disabledReset, setdisabledReset] = useState(false);

  const handleRace = async () => {
    const startTimes: Record<number, number> = {};
    const raceResults: { id: number; time: number }[] = [];

    await Promise.all(
      cars.map(async car => {
        const start = performance.now();
        startTimes[car.id] = start;

        await dispatch(startCar(car.id));
        const result = await dispatch(driveCar(car.id));

        if (driveCar.fulfilled.match(result)) {
          const finish = performance.now();
          const time = (finish - start) / toRound;
          raceResults.push({ id: car.id, time });
        }
      }),
    );
    if (raceResults.length) {
      const winner = raceResults.reduce((acc, curr) =>
        acc.time < curr.time ? acc : curr,
      );
    }
  };

  const handleReset = () => {
    cars.forEach(car => {
      dispatch(stopCar(car.id));
    });
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleRace} width="90px">
        Race
      </Button>
      <Button onClick={handleReset} width="90px">
        Reset
      </Button>
    </div>
  );
}
