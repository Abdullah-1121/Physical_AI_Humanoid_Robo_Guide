import React from 'react';
import clsx from 'clsx';

export function Grid({ children, className }) {
  return (
    <div className={clsx('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', className)}>
      {children}
    </div>
  );
}

export function Column({ children, className }) {
  return (
    <div className={clsx('flex flex-col', className)}>
      {children}
    </div>
  );
}

export function HeroContainer({ children, className }) {
  return (
    <div className={clsx('relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
}
