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
    <article className="error-message-container">
      <section className="error-image-container">
        <img className="error-image" src={imageSrc} alt="Error message picture." />
      </section>
      <section className="error-message-content">
        <p className="error-text error-header">{header}</p>
        <p className="error-text error-caption">{caption}</p>
        {buttonOnClick && buttonText && (
          <Button className="action-button" onClick={buttonOnClick}>
            {buttonText}
          </Button>
        )}
      </section>
    </article>
  );
};

export default ErrorMessage;
