import { ComponentProps } from 'react';
import Beer from '../../../helpers/interfaces/Beer.interface';
import BeerTile from '../beer-tile/BeerTile';

interface BeersContainerProps extends ComponentProps<'div'> {
  beers: Beer[];
}

const BeersContainer = ({ beers }: BeersContainerProps) => {
  const buildBeerTiles = () => {
    return beers.map((beer) => <BeerTile key={beer.id} beer={beer} />);
  };

  return <div>{buildBeerTiles()}</div>;
};

export default BeersContainer;
