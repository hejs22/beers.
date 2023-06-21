import { ComponentProps, ReactElement } from 'react';
import Beer from '../../../helpers/interfaces/Beer.interface';
import BeerTile from '../beer-tile/BeerTile';
import './BeersList.scss';
import ErrorMessage from '../../error-message/ErrorMessage';
import { ErrorDataEmpty } from '../../../constants/ErrorConstants';
import { DEFAULT_PAGE_SIZE } from '../../../config/ApiConfig';
import Builder from '../../../helpers/utils/Builder';

interface BeersContainerProps extends ComponentProps<'div'> {
  beers?: Beer[];
}

const BeersList = ({ beers }: BeersContainerProps) => {
  const buildSkeletons = () => {
    const skeletons: ReactElement[] = [];

    for (let count = 0; count < DEFAULT_PAGE_SIZE; count++) {
      skeletons.push(<div key={`Skeleton id:${count}`} className="skeleton" />);
    }

    return skeletons;
  };

  const mapBooleanToStatus = (): 'success' | 'loading' | 'error' => {
    if (!beers) {
      return 'loading';
    } else if (beers.length) {
      return 'success';
    } else {
      return 'error';
    }
  };

  const buildBeerTiles = () => {
    if (beers) {
      return beers.map((beer) => <BeerTile key={beer.id} beer={beer} />);
    }
  };

  return Builder.createResult(mapBooleanToStatus())
    .onLoading(<div className="beers-list-container">{buildSkeletons()}</div>)
    .onSuccess(<div className="beers-list-container">{buildBeerTiles()}</div>)
    .onError(
      <ErrorMessage
        header={ErrorDataEmpty.header}
        caption={ErrorDataEmpty.caption}
        imageSrc={ErrorDataEmpty.imageSrc}
      />
    )
    .build();
};

export default BeersList;
