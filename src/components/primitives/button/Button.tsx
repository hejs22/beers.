import { ComponentProps } from 'react';
import './Button.scss';

const Button = ({ children, className, onClick, disabled }: ComponentProps<'button'>) => {
  return (
    <button
      disabled={disabled}
      className={`button-container ${className ? className : ''} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
