import { ComponentProps } from 'react';
import Beer from '../../../helpers/interfaces/Beer.interface';
import BeerTile from '../beer-tile/BeerTile';
import './BeersList.scss';

interface BeersContainerProps extends ComponentProps<'div'> {
  beers: Beer[];
}

const BeersList = ({ beers }: BeersContainerProps) => {
  const buildBeerTiles = () => {
    return beers.map((beer) => <BeerTile key={beer.id} beer={beer} />);
  };

  return <div className="beers-list-container">{buildBeerTiles()}</div>;
};

export default BeersList;
