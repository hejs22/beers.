import { ComponentProps, ReactElement } from 'react';
import Beer from '../../../helpers/interfaces/Beer.interface';
import BeerTile from '../beer-tile/BeerTile';
import './BeersList.scss';
import ErrorMessage from '../../error-message/ErrorMessage';
import { ErrorDataEmpty } from '../../../constants/ErrorConstants';
import { DEFAULT_PAGE_SIZE } from '../../../config/ApiConfig';

interface BeersContainerProps extends ComponentProps<'div'> {
  beers?: Beer[];
}

const BeersList = ({ beers }: BeersContainerProps) => {
  const buildSkeletons = () => {
    const skeletons: ReactElement[] = [];

    for (let count = 0; count < DEFAULT_PAGE_SIZE; count++) {
      skeletons.push(<div className="skeleton" />);
    }

    return skeletons;
  };

  const buildBeersList = () => {
    if (beers) {
      if (beers.length) {
        return beers.map((beer) => <BeerTile key={beer.id} beer={beer} />);
      } else {
        return (
          <ErrorMessage
            header={ErrorDataEmpty.header}
            caption={ErrorDataEmpty.caption}
            imageSrc={ErrorDataEmpty.imageSrc}
          />
        );
      }
    } else {
      return buildSkeletons();
    }
  };

  return <div className="beers-list-container">{buildBeersList()}</div>;
};

export default BeersList;
