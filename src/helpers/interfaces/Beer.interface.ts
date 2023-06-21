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
  ingredients: BeerIngredients;
  food_pairing: string[];
  brewers_tips: string;
}
