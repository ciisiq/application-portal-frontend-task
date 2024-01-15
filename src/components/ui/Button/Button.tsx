import React from 'react';
import cn from 'classnames';
import styles from './Button.module.css';

export const Button = ({ className, text, ...buttonProps }) => {
  return (
    <button className={cn(styles.button, className)} {...buttonProps}>
      {text}{' '}
    </button>
  );
};
