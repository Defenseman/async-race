import React from 'react';
import { Button } from '../../../../../components/button/Button';
import styles from './styles.module.scss';

export function GarageControls() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input className={styles.inputText} type="text" />
        <Button>Create</Button>
        <input className={styles.inputColor} type="color" />
      </div>
      <div className={styles.wrapper}>
        <input className={styles.inputText} type="text" />
        <Button>Update</Button>
        <input className={styles.inputColor} type="color" />
      </div>
      <Button>Generate</Button>
    </div>
  );
}
