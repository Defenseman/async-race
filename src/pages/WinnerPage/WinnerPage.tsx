import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { WinnersHeader } from './components/WinnersHeader/WinnersHeader';
import { WinnerCarData } from './components/types';
import { getWinnersList } from '../../services/winnersApi';
import { WinnersList } from './components/WinnersList/WinnersList';
import { getCarsFromServer } from '../../services/garageApi';
import { Pagination } from '../../components/Pagination/Pagination';

export function WinnerPage() {
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
      const merged = winnersData.map(winCar => {
        const car = carsData.find(c => c.id === winCar.id);

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

  return (
    <div className={styles.winner}>
      <WinnersHeader />
      <WinnersList winners={visibleWinners} />
      <Pagination
        onPageChange={setPage}
        totalPages={totalPages}
        currentPage={page}
      />
    </div>
  );
}
