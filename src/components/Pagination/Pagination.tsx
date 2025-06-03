import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import { AppDispatch } from '../../store/store';
import styles from './styles.module.scss';
import { setPage } from '../../pages/GaragePage/garage/garageSlice';

type PagintionProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PagintionProps) {
  return (
    <div className={styles.controls}>
      <Button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        &lt;
      </Button>
      <span className={styles.pageNumber}>
        Page# <span>{currentPage}</span>
      </span>
      <Button
        onClick={() => onPageChange(Math.max(currentPage + 1, 1))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </Button>
    </div>
  );
}
