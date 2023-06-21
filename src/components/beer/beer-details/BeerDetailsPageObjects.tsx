import Beer from 'shared/interfaces/Beer.interface';

export default class BeerDetailsPageObjects {
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

  get beerDetailsContainer() {
    return cy.get('.beer-details-container');
  }

  get beerPicture() {
    return this.beerDetailsContainer.get('.beer-picture');
  }

  get pictureBackground() {
    return this.beerDetailsContainer.get('.circle-background');
  }

  get beerName() {
    return this.beerDetailsContainer.get('.beer-name');
  }

  get beerTagline() {
    return this.beerDetailsContainer.get('.beer-tagline');
  }

  get beerDescription() {
    return this.beerDetailsContainer.get('.beer-description');
  }

  get firstBrewDate() {
    return this.beerDetailsContainer.get('.since');
  }

  get tips() {
    return this.beerDetailsContainer.get('.beer-tips');
  }

  get ingredientsContainer() {
    return this.beerDetailsContainer.get('.beer-ingredients-list-container');
  }

  get statsContainer() {
    return this.beerDetailsContainer.get('.beer-stats-container');
  }

  get goBackButton() {
    return this.beerDetailsContainer.get('.go-back-button');
  }

  get goBack() {
    return this.goBackButton.click();
  }
}
