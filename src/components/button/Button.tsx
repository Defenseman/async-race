import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  onClick?: () => void;
  icon?: ReactNode;
  children?: ReactNode;
  width?: string;
  disabled?: boolean;
};

export function Button({
  onClick,
  children,
  icon,
  width,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${disabled && styles.disabled}`}
      style={{ width }}
      onClick={onClick}
    >
      {children}
      {icon}
    </button>
  );
}
