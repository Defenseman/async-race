import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarsFromServer } from '../../services/garageApi';

export const getCars = createAsyncThunk('/garage/getCars', async () => {
  try {
    const response = await getCarsFromServer();
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
