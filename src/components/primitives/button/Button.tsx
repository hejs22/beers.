import { ComponentProps } from 'react';
import './Button.scss';

const Button = ({ children, className, onClick }: ComponentProps<'button'>) => {
  return (
    <button className={`button-container ${className ? className : ''}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
