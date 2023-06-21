import Beer from '../../../helpers/interfaces/Beer.interface';
import { mount } from 'cypress/react18';
import BeerTile from './BeerTile';
import BeerTilePageObjects from './BeerTilePageObjects';
import { ROUTE } from '../../../constants/RouteConstants';

const BeerTilePO = new BeerTilePageObjects();

const buildBeerTile = (mockBeer: Beer) => {
  return mount(<BeerTile beer={mockBeer} />);
};

describe('Testing <BeerTile/>', () => {
  beforeEach(() => {
    buildBeerTile(BeerTilePO.MOCK_BEER);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      BeerTilePO.beerTileContainer.should('exist').should('be.visible');
    });

    it('should display correct beer name', () => {
      BeerTilePO.beerName
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerTilePO.MOCK_BEER.name);
    });

    it('should display correct beer tagline', () => {
      BeerTilePO.beerTagline
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerTilePO.MOCK_BEER.tagline);
    });

    it('should display correct beer picture', () => {
      BeerTilePO.beerPicture
        .should('exist')
        .should('be.visible')
        .should('have.attr', 'src', BeerTilePO.MOCK_BEER.image_url);
    });

    it(`should display 'see details' button`, () => {
      BeerTilePO.seeDetailsButton.should('exist').should('be.visible');
    });
  });

  describe('Testing actions', () => {
    it(`should redirect to details page after 'see details' button click`, () => {
      BeerTilePO.seeDetails;
      cy.location('pathname').should(
        'eq',
        ROUTE.DETAILS.replace(':id', BeerTilePO.MOCK_BEER.id.toString())
      );
    });
  });
});
