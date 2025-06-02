/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) {
  if (!isOpen) return null;
  return createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContainer}>{children}</div>
      <div className={styles.backDrop} onClick={onClose} />
    </div>,
    document.body,
  );
}
