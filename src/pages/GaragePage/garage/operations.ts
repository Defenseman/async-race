import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createSingleCar,
  deleteCarFromServer,
  getCarsFromServer,
  updateCarOnServer,
} from '../../../services/garageApi';
import { generateRandomCar } from '../../../utils/generateRandomCar';
import { CreateCarData, Item } from './types';

export const getCars = createAsyncThunk('/garage/getCars', async () => {
  const response = await getCarsFromServer();
  return response;
});

export const generateManyCars = createAsyncThunk(
  '/garage/generateManyCars',
  async () => {
    const generatedCars = Array.from({ length: 100 }, generateRandomCar);
    const createdCars = await Promise.all(generatedCars.map(createSingleCar));
    return createdCars;
  },
);

export const createCar = createAsyncThunk<Item, CreateCarData>(
  '/garage/createCar',
  async carData => {
    const response = await createSingleCar(carData);
    return response;
  },
);

export const deleteCar = createAsyncThunk<number, number>(
  '/garage/deletecar',
  async id => {
    await deleteCarFromServer(id);
    return id;
  },
);

export const updateCar = createAsyncThunk<Item, Item>(
  '/garage/updateCar',
  async car => {
    const response = await updateCarOnServer(car.id, {
      name: car.name,
      color: car.color,
    });
    return response;
  },
);
