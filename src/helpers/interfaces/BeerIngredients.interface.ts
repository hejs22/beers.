import Hop from './Hop.interface';
import Malt from './Malt.interface';

export default interface BeerIngredients {
  hops: Hop[];
  malt: Malt[];
  yeast: string;
}
