import React from 'react';
import { Button } from '../../../../components/Button/Button';
import styles from './styles.module.scss';

export function CarButtons({ carId }: { carId: number }) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button>Select</Button>
        <Button>Remove</Button>
      </div>
      <div className={styles.wrapper}>
        <Button>A</Button>
        <Button>B</Button>
      </div>
    </div>
  );
}
