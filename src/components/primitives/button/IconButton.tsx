import { ComponentProps } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: IconDefinition;
}

const IconButton = ({ icon, className, onClick }: IconButtonProps) => {
  return (
    <Button className={`button-container ${className ? className : ''}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default IconButton;
