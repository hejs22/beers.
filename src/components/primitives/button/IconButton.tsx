import { ComponentProps } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import classNames from 'classnames';

interface IconButtonProps extends ComponentProps<'button'> {
  icon: IconDefinition;
}

const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  return (
    <Button {...props} className={classNames('button-container', className)}>
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
};

export default IconButton;
