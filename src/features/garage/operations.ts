import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createCar,
  deleteCarFromServer,
  getCarsFromServer,
} from '../../services/garageApi';
import { generateRandomCar } from '../../utils/generateRandomCar';

export const getCars = createAsyncThunk('/garage/getCars', async () => {
  const response = await getCarsFromServer();
  return response;
});

export const generateManyCars = createAsyncThunk(
  '/garage/generateManyCars',
  async () => {
    const generatedCars = Array.from({ length: 100 }, generateRandomCar);
    const createdCars = await Promise.all(generatedCars.map(createCar));
    return createdCars;
  },
);

export const deleteCar = createAsyncThunk<number, number>(
  '/garage/deletecar',
  async id => {
    await deleteCarFromServer(id);
    return id;
  },
);
