import { ComponentProps } from 'react';

interface ErrorMessageProps extends ComponentProps<'div'> {
  header: string;
  error: string;
  imageSrc: string;
}

const ErrorMessage = ({ header, error, imageSrc }: ErrorMessageProps) => {
  return (
    <div>
      <div>
        <img src={imageSrc} alt="Error message picture." />
      </div>
      <div>{header}</div>
      <div>{error}</div>
    </div>
  );
};

export default ErrorMessage;
