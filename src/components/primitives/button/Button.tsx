import { ComponentProps } from 'react';
import './Button.scss';
import classNames from 'classnames';

const Button = ({ children, className, ...props }: ComponentProps<'button'>) => {
  return (
    <button
      {...props}
      disabled={props.disabled}
      className={classNames('button-container', className, { disabled: props.disabled })}>
      {children}
    </button>
  );
};

export default Button;
