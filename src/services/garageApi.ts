import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000';

const agent = axios.create({ baseURL: BASE_URL });

export const getCarsFromServer = async () => {
  try {
    const response = await agent('/garage');
    console.log('Это cars от сервера', response.data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

type ItemProps = {
  name: string;
  color: string;
};

export const createCar = async (carData: ItemProps) => {
  try {
    const response = await agent.post('/garage', carData);
    console.log('Это createCar', response.data);
    return await response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteCar = async (carId: number) => {
  try {
    const response = await agent.delete(`/garage/${carId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
