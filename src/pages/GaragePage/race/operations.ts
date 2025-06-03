import { createAsyncThunk } from '@reduxjs/toolkit';
import { startEngine, drive, stopEngine } from '../../../services/raceApi';

export const startCar = createAsyncThunk(
  '/race/startcar',
  async (id: number) => {
    const response = await startEngine(id);
    return { id, ...response };
  },
);

export const driveCar = createAsyncThunk(
  '/race/driveCar',
  async (id: number, { rejectWithValue }) => {
    try {
      await drive(id);
      return id;
    } catch (error) {
      return rejectWithValue({ id, error });
    }
  },
);

export const stopCar = createAsyncThunk('/race/stopCar', async (id: number) => {
  stopEngine(id);
  return id;
});
