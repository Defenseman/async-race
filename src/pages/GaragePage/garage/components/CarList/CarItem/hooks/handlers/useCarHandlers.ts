import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../../../store/store';
import {
  driveCar,
  startCar,
  stopCar,
} from '../../../../../../../../store/race/operations';
import { useCarItemState } from '../state/useCarItemState';

export const useCarHandlers = (
  carId: number,
  state: ReturnType<typeof useCarItemState>,
) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleStopCar = () => {
    dispatch(stopCar(carId));
    state.setTranslateCar(0);
    state.setdisabledStart(false);
    state.setdisabledStop(true);
    state.setStartAnimation(false);
    state.animationStartRef.current = null;
  };

  const handleStartCar = () => {
    dispatch(startCar(carId)).then(() => dispatch(driveCar(carId)));
  };

  return { handleStartCar, handleStopCar };
};
