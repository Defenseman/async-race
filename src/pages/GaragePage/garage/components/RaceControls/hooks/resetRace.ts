import { AppDispatch } from '../../../../../../store/store';
import { stopCar } from '../../../../../../store/race/operations';
import { resetCarPosition } from '../../../../../../store/race/raceSlice';

type Car = {
  id: number;
};

export const resetRace = (cars: Car[], dispatch: AppDispatch) => {
  cars.forEach(car => {
    dispatch(stopCar(car.id));
    dispatch(resetCarPosition(car.id));
  });
};
