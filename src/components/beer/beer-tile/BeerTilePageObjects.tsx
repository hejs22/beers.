import Beer from '../../../helpers/interfaces/Beer.interface';

export default class BeerTilePageObjects {
  public MOCK_BEER: Beer = {
    brewers_tips: 'MOCK_TIPS',
    description: 'MOCK_DESCRIPTION',
    first_brewed: 'MOCK_FIRST_BREWED',
    food_pairing: [],
    ingredients: {
      malt: [{ name: 'MOCK_MALT_NAME', amount: { unit: 'MOCK_UNIT', value: 5 } }],
      hops: [
        {
          name: 'MOCK_HOPS_NAME',
          amount: { unit: 'MOCK_UNIT', value: 5 },
          add: 'MOCK_ADD',
          attribute: 'MOCK_ATTRIBUTE'
        }
      ],
      yeast: 'MOCK_YEAST_NAME'
    },
    name: 'MOCK_BEER',
    id: 1,
    ibu: 5,
    abv: 4,
    tagline: 'MOCK_TAGLINE',
    image_url: 'MOCK_URL'
  };

  get beerTileContainer() {
    return cy.get('.beer-tile-container');
  }

  get beerPicture() {
    return this.beerTileContainer.get('.beer-picture');
  }

  get beerName() {
    return this.beerTileContainer.get('.beer-name');
  }

  get beerTagline() {
    return this.beerTileContainer.get('.beer-tagline');
  }

  get seeDetailsButton() {
    return this.beerTileContainer.get('.see-details-button');
  }

  get seeDetails() {
    return this.seeDetailsButton.click();
  }
}
