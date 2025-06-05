import { combineReducers } from '@reduxjs/toolkit';
import garageReducer from './garage/garageSlice';
import raceReducer from './race/raceSlice';

export const rootReducer = combineReducers({
  garage: garageReducer,
  race: raceReducer,
});
