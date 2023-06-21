import { ComponentProps, ReactElement } from 'react';
import Beer from '../../../helpers/interfaces/Beer.interface';
import BeerTile from '../beer-tile/BeerTile';
import './BeersList.scss';

interface BeersContainerProps extends ComponentProps<'div'> {
  beers?: Beer[];
}

const BeersList = ({ beers }: BeersContainerProps) => {
  const buildSkeletons = () => {
    const skeletons: ReactElement[] = [];
    const maxSkeletons = 12;

    for (let count = 0; count < maxSkeletons; count++) {
      skeletons.push(<div className="skeleton" />);
    }

    return skeletons;
  };

  const buildBeerTiles = () => {
    if (beers) {
      return beers.map((beer) => <BeerTile key={beer.id} beer={beer} />);
    } else {
      return buildSkeletons();
    }
  };

  return <div className="beers-list-container">{buildBeerTiles()}</div>;
};

export default BeersList;
