import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export function PrimaryButton({ children, onClick, className, ...rest }) {
  return (
    <button className={clsx(styles.button, styles.primary, className)} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, className, ...rest }) {
  return (
    <button className={clsx(styles.button, styles.secondary, className)} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export function ToggleButton({ children, onToggle, isToggled, className, ...rest }) {
  return (
    <button
      className={clsx(styles.button, styles.toggle, isToggled && styles.toggled, className)}
      onClick={onToggle}
      aria-pressed={isToggled}
      {...rest}
    >
      {children}
    </button>
  );
}
