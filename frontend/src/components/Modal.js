import React from 'react';
import clsx from 'clsx';
import styles from './Modal.module.css';

function Modal({ isOpen, onClose, children, className, ...rest }) {
  if (!isOpen) return null;

  return (
    <div className={clsx(styles.modalOverlay, className)} onClick={onClose} {...rest}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
