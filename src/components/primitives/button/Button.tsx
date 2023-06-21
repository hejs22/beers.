import { ComponentProps } from 'react';
import './Button.scss';
import classNames from 'classnames';

const Button = ({ children, className, onClick, disabled }: ComponentProps<'button'>) => {
  return (
    <button
      disabled={disabled}
      className={classNames('button-container', className, { disabled: disabled })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
