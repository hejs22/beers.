import { ComponentProps } from 'react';
import Chip from '../../primitives/chip/Chip';
import './BeerStats.scss';

interface BeerStatsProps extends ComponentProps<'div'> {
  abv: number;
  ibu: number;
}

type Range = 'low' | 'mid' | 'high';

const ABV_FIRST_THRESHOLD = 4.5;
const ABV_SECOND_THRESHOLD = 8;
const IBU_FIRST_THRESHOLD = 30;
const IBU_SECOND_THRESHOLD = 55;

const BeerStats = ({ abv, ibu, className }: BeerStatsProps) => {
  const checkRange = (firstThreshold: number, secondThreshold: number, value: number): Range => {
    if (value < firstThreshold) {
      return 'low';
    } else if (value > secondThreshold) {
      return 'high';
    } else {
      return 'mid';
    }
  };

  const buildBeerStats = () => {
    const abvRange = checkRange(ABV_FIRST_THRESHOLD, ABV_SECOND_THRESHOLD, abv);
    const ibuRange = checkRange(IBU_FIRST_THRESHOLD, IBU_SECOND_THRESHOLD, ibu);

    return (
      <div className={`beer-stats-container ${className ? className : ''}`}>
        <Chip label="ABV" className={abvRange} value={abv} />
        <Chip label="IBU" className={ibuRange} value={ibu} />
      </div>
    );
  };

  return buildBeerStats();
};

export default BeerStats;
