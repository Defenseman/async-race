import React from 'react';
import { Button } from '../../../../../components/button/Button';
import styles from './styles.module.scss';

export function RaceControls() {
  return (
    <div className={styles.container}>
      <Button width="90px">Race</Button>
      <Button width="90px">Reset</Button>
    </div>
  );
}
