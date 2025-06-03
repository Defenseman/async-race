import { CreateCarData } from '../pages/GaragePage/garage/types';
import { agent } from './apiConstans';

export const getCarsFromServer = async () => {
  try {
    const response = await agent('/garage');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Unknown error occurred while geting a cars');
  }
};

export const createSingleCar = async (carData: CreateCarData) => {
  try {
    const response = await agent.post('/garage', carData);
    return await response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Unknown error occurred while creating a car');
  }
};

export const deleteCarFromServer = async (carId: number) => {
  try {
    const response = await agent.delete(`/garage/${carId}`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Unknown error occurred while deleting a car');
  }
};

export const updateCarOnServer = async (
  carId: number,
  carData: CreateCarData,
) => {
  try {
    const response = await agent.put(`/garage/${carId}`, carData);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Unknown error occurred while deleting a car');
  }
};
