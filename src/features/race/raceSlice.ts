import { createSlice } from '@reduxjs/toolkit';
import { RaceState } from './types';
import { startCar, stopCar } from './operations';

const initialState: RaceState = {
  runningCars: {},
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(startCar.pending, (state, action) => {
        state.runningCars[action.meta.arg] = true;
      })
      .addCase(startCar.fulfilled, (state, action) => {
        state.runningCars[action.meta.arg] = false;
      })
      .addCase(stopCar.fulfilled, (state, action) => {
        delete state.runningCars[action.payload];
      });
  },
});

export default raceSlice.reducer;
