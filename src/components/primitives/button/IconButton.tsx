import { ComponentProps } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.scss';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: IconDefinition;
}

const IconButton = ({ icon, className, onClick }: IconButtonProps) => {
  return (
    <button className={`icon-button-container ${className ? className : ''}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
