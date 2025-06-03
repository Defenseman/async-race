import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreateCarData, Item } from '../../types';
import { updateCar } from '../../operations';
import { AppDispatch } from '../../../../../store/store';

const InitialCar: CreateCarData = {
  name: '',
  color: '#000000',
};

export const useCarForm = () => {
  const [car, setCar] = useState(InitialCar);
  const [selectedCar, setSelectedCar] = useState<Item | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputCar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCar(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectedCar = (carData: Item) => {
    setSelectedCar(carData);
  };

  const handleUpdateCar = () => {
    if (selectedCar) {
      dispatch(updateCar(selectedCar));
      setSelectedCar(null);
    }
  };
  const resetForm = () => setCar(InitialCar);

  return {
    car,
    setCar,
    handleInputCar,
    resetForm,
    handleSelectedCar,
    selectedCar,
    setSelectedCar,
    handleUpdateCar,
  };
};
