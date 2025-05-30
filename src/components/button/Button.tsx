import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type ButtonProps = {
  onClick: () => void;
  icon?: React.ReactNode;
  width?: string;
  disabled?: boolean;
};

export function Button({
  onClick,
  icon = undefined,
  width = 'auto',
  disabled = false,
  children,
}: PropsWithChildren<ButtonProps>) {
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
