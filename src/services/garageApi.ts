import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';

const agent = axios.create({ baseURL: BASE_URL });

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

type ItemProps = {
  name: string;
  color: string;
};

export const createCar = async (carData: ItemProps) => {
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
