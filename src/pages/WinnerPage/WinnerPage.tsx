import styles from './styles.module.scss';
import { WinnersHeader } from './components/WinnersHeader/WinnersHeader';
import { WinnersList } from './components/WinnersList/WinnersList';
import { Pagination } from '../../components/Pagination/Pagination';
import { useWinnersData } from './hooks/useWinnersPage';

export function WinnerPage() {
  const { page, setPage, totalPages, visibleWinners } = useWinnersData();
  return (
    <div className={styles.winner}>
      <div className={styles.winnersMain}>
        <WinnersHeader />
        <WinnersList winners={visibleWinners} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Pagination
          onPageChange={setPage}
          totalPages={totalPages}
          currentPage={page}
        />
      </div>
    </div>
  );
}
