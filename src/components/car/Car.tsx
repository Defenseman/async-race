import React from 'react';
import styles from './styles.module.scss';

type CarProps = {
  color: string;
};

export function Car({ color }: CarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.carIcon}>
        <svg width="120" height="50" viewBox="0 0 120 50">
          <rect x="10" y="20" width="100" height="20" rx="6" fill={color} />
          <path d="M30 20 Q35 10 50 10 Q65 10 70 20 Z" fill={color} />
          <circle cx="30" cy="42" r="6" fill="#333" />
          <circle cx="30" cy="42" r="3" fill="#888" />
          <circle cx="90" cy="42" r="6" fill="#333" />
          <circle cx="90" cy="42" r="3" fill="#888" />
          <circle cx="110" cy="30" r="3" fill="yellow" />
          <circle cx="10" cy="30" r="3" fill="red" />
          <rect x="50" y="12" width="12" height="8" fill="#cce" rx="2" />
        </svg>
      </div>
    </div>
  );
}
