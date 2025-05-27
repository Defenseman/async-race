export type Item = {
  name: string;
  color: string;
  id: number;
};

export type GarageState = {
  items: Item[];
  loading: boolean;
  error: null | string;
  currentPage: number;
};
