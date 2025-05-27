import { createSlice } from '@reduxjs/toolkit';
import { deleteCar, generateManyCars, getCars } from './operations';
import { GarageState } from './types';

const initialState: GarageState = {
  items: [],
  loading: false,
  error: null,
  currentPage: 1,
};

const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    addCars(state, action) {
      state.items = [...state.items, ...action.payload];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Unknown error';
      })

      .addCase(generateManyCars.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
      })

      .addCase(deleteCar.fulfilled, (state, action) => {
        state.items = state.items.filter(car => car.id !== action.payload);
      });
  },
});

export const { setPage, addCars } = garageSlice.actions;
export default garageSlice.reducer;
