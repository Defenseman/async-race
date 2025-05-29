import { combineReducers } from '@reduxjs/toolkit';
import garageReducer from '../features/garage/garageSlice';
import raceReducer from '../features/race/raceSlice';

export const rootReducer = combineReducers({
  garage: garageReducer,
  race: raceReducer,
});
