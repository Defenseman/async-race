import { Item } from '../../../../../../../store/garage/types';
import { useCarHandlers } from './handlers/useCarHandlers';
import { useCarItemState } from './state/useCarItemState';
import { useCarResetEffect } from './effects/useCarResetEffect';
import { useCarStartEffect } from './effects/useCarStartEffect';
import { useCarStopEffect } from './effects/useCarStopEffect';

export function useCarItemLogic(car: Item) {
  const state = useCarItemState(car);
  useCarStartEffect(state);
  useCarStopEffect(state);
  useCarResetEffect({ carId: car.id, state });
  const { handleStartCar, handleStopCar } = useCarHandlers(car.id, state);

  return {
    containerRef: state.containerRef,
    translateCar: state.translateCar,
    startAnimation: state.startAnimation,
    disabledStart: state.disabledStart,
    disabledStop: state.disabledStop,
    duration: state.duration,
    isRunning: state.isRunning,
    handleStartCar,
    handleStopCar,
  };
}
