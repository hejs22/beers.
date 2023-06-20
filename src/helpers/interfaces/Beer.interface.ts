import Amount from './Amount.interface';
import BeerIngredients from './BeerIngredients.interface';

export default interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebs: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Amount;
  boil_volume: Amount;
  ingredients: BeerIngredients;
  food_pairing: string[];
  brewer_tips: string;
}
