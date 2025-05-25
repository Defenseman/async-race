import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  onCLick?: () => void;
  icon?: ReactNode;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
};

export function Button({ onCLick, children, icon, type, width }: ButtonProps) {
  return (
    <button className={styles.button} style={{ width }}>
      {children}
      {icon}
    </button>
  );
}
