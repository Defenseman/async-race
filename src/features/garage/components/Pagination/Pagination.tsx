import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../../components/Button/Button';
import { AppDispatch, RootState } from '../../../../app/store';
import styles from './styles.module.scss';
import { setPage } from '../../garageSlice';

export function Pagination() {
  const { items, currentPage } = useSelector(
    (state: RootState) => state.garage,
  );
  const dispatch = useDispatch<AppDispatch>();

  const carsPerPage = 10;
  const totalPages = Math.ceil(items.length / carsPerPage);

  return (
    <div className={styles.pagination}>
      <h1 className={styles.carsCount}>Garage ({items.length})</h1>
      <div className={styles.controls}>
        <Button
          onClick={() => dispatch(setPage(Math.max(currentPage - 1, 1)))}
          disabled={currentPage === 1}
        >
          &lt;
        </Button>
        <span className={styles.pageNumber}>
          Page# <span>{currentPage}</span>
        </span>
        <Button
          onClick={() => dispatch(setPage(Math.max(currentPage + 1, 1)))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
}
