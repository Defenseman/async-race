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
