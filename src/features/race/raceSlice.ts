import { createSlice } from '@reduxjs/toolkit';
import { RaceState } from './types';
import { startCar, stopCar, driveCar } from './operations';

const initialState: RaceState = {
  runningCar: {},
  animationParams: {},
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(startCar.pending, (state, action) => {
        state.runningCar[action.meta.arg] = true;
      })
      .addCase(startCar.fulfilled, (state, action) => {
        const { id, velocity, distance } = action.payload;
        state.animationParams[id] = { velocity, distance };
      })

      .addCase(driveCar.rejected, (state, action) => {
        const { id } = action.payload as { id: number };
        state.runningCar[id] = false;
      })

      .addCase(stopCar.fulfilled, (state, action) => {
        delete state.runningCar[action.payload];
      });
  },
});

export default raceSlice.reducer;
