import { ComponentProps } from 'react';
import Beer from '../../../helpers/interfaces/Beer.interface';

interface BeerTileProps extends ComponentProps<'div'> {
  beer: Beer;
}

const BeerTile = ({ beer }: BeerTileProps) => {
  return <div>{beer.name}</div>;
};

export default BeerTile;
