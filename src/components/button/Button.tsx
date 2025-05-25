import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  onCLick?: () => void;
  icon?: ReactNode;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({ onCLick, children, icon, type }: ButtonProps) {
  return (
    <button className={styles.button}>
      {children}
      {icon}
    </button>
  );
}
