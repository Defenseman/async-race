import React from 'react';
import styles from './styles.module.scss';

interface TrackProps {
  name: string;
}

export function Track({ name }: TrackProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.carName}>{name}</h1>
      <div
        style={{
          position: 'absolute',
          height: '6px',
          width: '100%',
          backgroundColor: 'white',
        }}
      />
    </div>
  );
}
