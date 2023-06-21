import { ComponentProps } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import classNames from 'classnames';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: IconDefinition;
}

const IconButton = ({ icon, className, onClick, disabled }: IconButtonProps) => {
  return (
    <Button
      disabled={disabled}
      className={classNames('button-container', className)}
      onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default IconButton;
