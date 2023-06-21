import BeerDetails from '../../components/beer/beer-details/BeerDetails';
import './BeerDetailsPage.scss';
import { useEffect } from 'react';
import { useBeer } from '../../helpers/hooks/useBeer';
import Builder from '../../helpers/utils/Builder';

export const BeerDetailsPage = () => {
  const { data: beerDetails, status } = useBeer();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="beer-details-page-container">
      {Builder.createResult(status)
        .onSuccess(<BeerDetails beer={beerDetails} />)
        .build()}
    </div>
  );
};
