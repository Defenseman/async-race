import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../../store/garage/operations';
import { setPage } from '../../../../store/garage/garageSlice';
import { AppDispatch, RootState } from '../../../../store/store';
import { useCarForm } from '../components/GarageControls/useCarForm';

export const useGarage = () => {
  const { items, currentPage } = useSelector(
    (state: RootState) => state.garage,
  );
  const { handleSelectedCar, selectedCar, setSelectedCar, handleUpdateCar } =
    useCarForm();
  const dispatch = useDispatch<AppDispatch>();

  const carsPerPage = 7;
  const totalPages = Math.ceil(items.length / carsPerPage);

  const visibleCars = items.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage,
  );

  useEffect(() => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const currentPageCars = items.slice(startIndex, startIndex + carsPerPage);

    if (items.length > 0 && currentPage > 1 && currentPageCars.length === 0) {
      dispatch(setPage(currentPage - 1));
    }
  }, [items.length, currentPage, dispatch]);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  return {
    items,
    currentPage,
    handleSelectedCar,
    selectedCar,
    setSelectedCar,
    handleUpdateCar,
    totalPages,
    visibleCars,
    setPage: (page: number) => dispatch(setPage(page)),
  };
};
