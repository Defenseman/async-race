import { WinnerRow } from '../WinnerRow/WinnerRow';
import styles from './styles.module.scss';
import { WinnerCarData } from '../types';

type WinnerListProp = {
  winners: WinnerCarData[];
};

export function WinnersList({ winners }: WinnerListProp) {
  return (
    <div className={styles.container}>
      {winners.map(winner => {
        return <WinnerRow key={winner.id} winner={winner} />;
      })}
    </div>
  );
}
