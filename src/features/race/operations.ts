import { createAsyncThunk } from '@reduxjs/toolkit';
import { startEngine, drive, stopEngine } from '../../services/raceApi';

export const startCar = createAsyncThunk(
  '/race/startcar',
  async (id: number) => {
    const response = await startEngine(id);
    await drive(id);
    return { id, ...response };
  },
);

export const stopCar = createAsyncThunk('/race/stopCar', async (id: number) => {
  stopEngine(id);
  return id;
});
