import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RaceState } from './types';
import { startCar, stopCar, driveCar } from './operations';

const initialState: RaceState = {
  runningCar: {},
  animationParams: {},
  shouldReset: {},
  carPosition: {},
};

const raceSlice = createSlice({
  name: 'race',
  initialState,
  reducers: {
    resetCarPosition: (state, action: PayloadAction<number>) => {
      state.shouldReset[action.payload] = true;
    },
    clearResetFlag: (state, action: PayloadAction<number>) => {
      delete state.shouldReset[action.payload];
    },
    setCarPosition: (
      state,
      action: PayloadAction<{ id: number; position: number }>,
    ) => {
      const { id, position } = action.payload;
      state.carPosition[id] = position;
    },
  },
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
        delete state.animationParams[action.payload];
      });
  },
});

export const { resetCarPosition, clearResetFlag, setCarPosition } =
  raceSlice.actions;
export default raceSlice.reducer;
