import styles from './styles.module.scss';
import { WinnerCarData } from '../types';
import { Car } from '../../../../components/Car/Car';

type WinnerRowdata = {
  winner: WinnerCarData;
};

export function WinnerRow({ winner }: WinnerRowdata) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>{winner.id}</div>
      <div className={styles.item}>
        <Car color={winner.color} />
      </div>
      <div className={styles.item}>{winner.name}</div>
      <div className={styles.item}>{winner.wins}</div>
      <div className={styles.item}>{winner.time.toFixed(1)}</div>
    </div>
  );
}
