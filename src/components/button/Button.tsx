import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  onClick?: () => void;
  icon?: ReactNode;
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  width?: string;
};

export function Button({ onClick, children, icon, type, width }: ButtonProps) {
  return (
    <button className={styles.button} style={{ width }} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
}
