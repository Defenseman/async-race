import axios from 'axios';
import { agent, error404 } from './apiConstans';

type dataParams = {
  id: number;
  wins: number;
  time: number;
};

export const getWinnerById = async (id: number): Promise<dataParams | null> => {
  try {
    const response = await agent(`/winners/${id}`);
    return await response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response?.status === error404) {
      return null;
    }
    throw new Error('Неизвестная ошибка при получении победителя');
  }
};

export const createWinner = async (data: dataParams) => {
  try {
    const response = await agent.post('/winners', data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Ошибка при создании победителя:');
  }
};

export const updateWinner = async (
  id: number,
  data: Omit<dataParams, 'id'>,
) => {
  try {
    const response = await agent.put(`/winners/${id}`, data);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Ошибка обновления победителя');
    }
  }
};

export const getWinnersList = async () => {
  try {
    const response = await agent('/winners');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Ошибка при получении Списка всех победителей');
  }
};
