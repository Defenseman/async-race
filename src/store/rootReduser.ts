import { combineReducers } from '@reduxjs/toolkit';
import garageReducer from '../pages/GaragePage/garage/garageSlice';
import raceReducer from '../pages/GaragePage/race/raceSlice';

export const rootReducer = combineReducers({
  garage: garageReducer,
  race: raceReducer,
});
