import { ComponentProps } from 'react';
import './ErrorMessage.scss';
import Button from 'components/primitives/button/Button';

interface ErrorMessageProps extends ComponentProps<'div'> {
  header: string;
  caption: string;
  imageSrc: string;
  buttonOnClick?: () => void;
  buttonText?: string;
}

const ErrorMessage = ({
  header,
  caption,
  imageSrc,
  buttonText,
  buttonOnClick
}: ErrorMessageProps) => {
  return (
    <div className="error-message-container">
      <div className="error-image-container">
        <img className="error-image" src={imageSrc} alt="Error message picture." />
      </div>
      <div>
        <div className="error-text error-header">{header}</div>
        <div className="error-text error-caption">{caption}</div>
        {buttonOnClick && buttonText && (
          <Button className="action-button" onClick={buttonOnClick}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
