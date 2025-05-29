import { agent } from './apiConstans';

export const startEngine = async (id: number) => {
  const response = await agent.patch(`/engine?id=${id}&status=started`);
  return response.data;
};

export const stopEngine = async (id: number) => {
  const response = await agent.patch(`/engine?id=${id}&status=stopped`);
  return response.data;
};

export const drive = async (id: number) => {
  const response = await agent.patch(`/engine?id=${id}&status=drive`);
  return response.data;
};
