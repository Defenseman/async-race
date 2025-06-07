import { useDispatch } from 'react-redux';
import { driveCar, startCar } from '../../../../../../store/race/operations';
import { AppDispatch } from '../../../../../../store/store';

type Car = {
  id: number;
  name: string;
  color: string;
};

export function useStartRace() {
  const dispatch = useDispatch<AppDispatch>();

  const toRound = 1000;

  const startRace = async (cars: Car[]) => {
    const results: { id: number; time: number; name: string }[] = [];

    await Promise.all(
      cars.map(async car => {
        const start = performance.now();

        await dispatch(startCar(car.id));
        const result = await dispatch(driveCar(car.id));

        if (driveCar.fulfilled.match(result)) {
          const finish = performance.now();
          const time = (finish - start) / toRound;
          results.push({ id: car.id, time, name: car.name });
        }
      }),
    );

    return results;
  };

  return { startRace };
}
