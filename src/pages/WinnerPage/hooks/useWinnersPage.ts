import { useState, useEffect } from 'react';
import { getCarsFromServer } from '../../../services/garageApi';
import { getWinnersList } from '../../../services/winnersApi';
import { WinnerCarData } from '../components/types';

type Winner = {
  id: number;
  wins: number;
  time: number;
};

type Car = {
  id: number;
  name: string;
  color: string;
};

export function useWinnersData() {
  const [winners, setWinners] = useState<WinnerCarData[]>([]);
  const [page, setPage] = useState(1);
  const carsPerPage = 10;
  const totalPages = Math.ceil(winners.length / carsPerPage);
  const visibleWinners = winners.slice(
    (page - 1) * carsPerPage,
    page * carsPerPage,
  );
  useEffect(() => {
    const fetchData = async () => {
      const winnersData = await getWinnersList();
      const carsData = await getCarsFromServer();
      const merged = winnersData.map((winCar: Winner) => {
        const car = carsData.find((c: Car) => c.id === winCar.id);

        return {
          ...winCar,
          name: car.name,
          color: car.color,
        };
      });
      setWinners(merged);
    };
    fetchData();
  }, [page]);

  return {
    page,
    setPage,
    totalPages,
    visibleWinners,
  };
}
