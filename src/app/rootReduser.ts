import { combineReducers } from '@reduxjs/toolkit';
import garageReducer from '../features/garage/garageSlice';

export const rootReducer = combineReducers({
  garage: garageReducer,
});
