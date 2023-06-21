import { ComponentProps } from 'react';
import './Chip.scss';

interface ChipProps extends ComponentProps<'div'> {
  label: string;
  value: string | number;
}

const Chip = ({ label, value, className }: ChipProps) => {
  return (
    <div className={`chip-container ${className ? className : ''}`}>
      <div className="chip-value chip-text">{value}</div>
      <div className="chip-label chip-text">{label}</div>
    </div>
  );
};

export default Chip;
