import Beer from '../../../helpers/interfaces/Beer.interface';
import { mount } from 'cypress/react18';
import BeerDetails from './BeerDetails';
import BeerDetailsPageObjects from './BeerDetailsPageObjects';
import { ROUTE } from '../../../constants/RouteConstants';

const BeerDetailsPO = new BeerDetailsPageObjects();

const buildBeerDetails = (mockBeer: Beer) => {
  return mount(<BeerDetails beer={mockBeer} />);
};

describe('Testing <BeerDetails/>', () => {
  beforeEach(() => {
    buildBeerDetails(BeerDetailsPO.MOCK_BEER);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      BeerDetailsPO.beerDetailsContainer.should('exist').should('be.visible');
    });

    it('should display correct beer name', () => {
      BeerDetailsPO.beerName
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerDetailsPO.MOCK_BEER.name);
    });

    it('should display correct beer description', () => {
      BeerDetailsPO.beerDescription
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerDetailsPO.MOCK_BEER.description);
    });

    it('should display correct beer tagline', () => {
      BeerDetailsPO.beerTagline
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerDetailsPO.MOCK_BEER.tagline);
    });

    it('should display correct tips', () => {
      BeerDetailsPO.tips
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerDetailsPO.MOCK_BEER.brewers_tips);
    });

    it('should display correct date of first brew', () => {
      BeerDetailsPO.firstBrewDate
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerDetailsPO.MOCK_BEER.first_brewed);
    });

    it('should display correct picture', () => {
      BeerDetailsPO.beerPicture
        .should('exist')
        .should('be.visible')
        .should('have.attr', 'src', BeerDetailsPO.MOCK_BEER.image_url);
    });

    it('should display picture background', () => {
      BeerDetailsPO.pictureBackground.should('exist').should('be.visible');
    });

    it('should display beer stats container', () => {
      BeerDetailsPO.statsContainer.should('exist').should('be.visible');
    });

    it('should display beer ingredients container', () => {
      BeerDetailsPO.ingredientsContainer.should('exist').should('be.visible');
    });

    it(`it should display 'go back' button`, () => {
      BeerDetailsPO.goBackButton.should('exist').should('be.visible');
    });
  });

  describe('Testing actions', () => {
    it(`should redirect to home page after 'go back' button click`, () => {
      BeerDetailsPO.goBack;
      cy.location('pathname').should('eq', ROUTE.HOME);
    });
  });
});
