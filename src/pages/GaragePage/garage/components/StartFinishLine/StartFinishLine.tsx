import React from 'react';
import styles from './styles.module.scss';

export function StartFinishLine() {
  return (
    <>
      <div className={styles.startLine} />
      <div className={styles.finishLine} />
    </>
  );
}
