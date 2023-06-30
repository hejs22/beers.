import { ComponentProps } from 'react';
import Chip from 'components/primitives/chip/Chip';
import './BeerStats.scss';
import { checkRange } from 'shared/utils/BeerUtils';
import classNames from 'classnames';

interface BeerStatsProps extends ComponentProps<'div'> {
  abv: number;
  ibu: number;
}

const ABV_FIRST_THRESHOLD = 4.5;
const ABV_SECOND_THRESHOLD = 8;
const IBU_FIRST_THRESHOLD = 30;
const IBU_SECOND_THRESHOLD = 55;

const BeerStats = ({ abv, ibu, className }: BeerStatsProps) => {
  const abvRange = checkRange(ABV_FIRST_THRESHOLD, ABV_SECOND_THRESHOLD, abv);
  const ibuRange = checkRange(IBU_FIRST_THRESHOLD, IBU_SECOND_THRESHOLD, ibu);

  return (
    <section className={classNames('beer-stats-container', className)}>
      {abv !== null && <Chip label="ABV" className={abvRange} value={abv} />}
      {ibu !== null && <Chip label="IBU" className={ibuRange} value={ibu} />}
    </section>
  );
};

export default BeerStats;
