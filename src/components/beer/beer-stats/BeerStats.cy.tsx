import { mount } from 'cypress/react18';
import BeerStats from './BeerStats';
import BeerStatsPageObjects from './BeerStatsPageObjects';

const BeerStatsPO = new BeerStatsPageObjects();

const buildBeerStats = (mockIbu: number, mockAbv: number) => {
  return mount(<BeerStats abv={mockAbv} ibu={mockIbu} />);
};

describe('Testing <BeerStats/>', () => {
  describe('Testing layout', () => {
    beforeEach(() => {
      buildBeerStats(BeerStatsPO.MOCK_IBU_MID, BeerStatsPO.MOCK_ABV_MID);
    });

    it('should be visible', () => {
      BeerStatsPO.beerStatsContainer.should('exist').should('be.visible');
    });

    it('should contain IBU and ABV stat', () => {
      BeerStatsPO.beerStats.should('have.length', 2);
    });

    it('should display IBU stat', () => {
      BeerStatsPO.ibuStat
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerStatsPO.MOCK_IBU_MID.toString());
    });

    it('should display ABV stat', () => {
      BeerStatsPO.abvStat
        .should('exist')
        .should('be.visible')
        .should('contain.text', BeerStatsPO.MOCK_ABV_MID.toString());
    });
  });

  describe('Testing behaviour', () => {
    it(`abv container should have '${BeerStatsPO.LOW_CLASSNAME}' classname when value is below threshold`, () => {
      buildBeerStats(BeerStatsPO.MOCK_IBU_LOW, BeerStatsPO.MOCK_ABV_LOW);
      BeerStatsPO.abvStat.should('have.class', BeerStatsPO.LOW_CLASSNAME);
    });

    it(`ibu container should have '${BeerStatsPO.LOW_CLASSNAME}' classname when value is below threshold`, () => {
      buildBeerStats(BeerStatsPO.MOCK_IBU_LOW, BeerStatsPO.MOCK_ABV_LOW);
      BeerStatsPO.ibuStat.should('have.class', BeerStatsPO.LOW_CLASSNAME);
    });

    it(`abv container should have '${BeerStatsPO.MID_CLASSNAME}' classname when value is between thresholds`, () => {
      buildBeerStats(BeerStatsPO.MOCK_IBU_MID, BeerStatsPO.MOCK_ABV_MID);
      BeerStatsPO.abvStat.should('have.class', BeerStatsPO.MID_CLASSNAME);
    });

    it(`ibu container should have '${BeerStatsPO.MID_CLASSNAME}' classname when value is between thresholds`, () => {
      buildBeerStats(BeerStatsPO.MOCK_IBU_MID, BeerStatsPO.MOCK_ABV_MID);
      BeerStatsPO.ibuStat.should('have.class', BeerStatsPO.MID_CLASSNAME);
    });

    it(`abv container should have '${BeerStatsPO.HIGH_CLASSNAME}' classname when value is above threshold`, () => {
      buildBeerStats(BeerStatsPO.MOCK_IBU_HIGH, BeerStatsPO.MOCK_ABV_HIGH);
      BeerStatsPO.abvStat.should('have.class', BeerStatsPO.HIGH_CLASSNAME);
    });

    it(`ibu container should have '${BeerStatsPO.HIGH_CLASSNAME}' classname when value is above threshold`, () => {
      buildBeerStats(BeerStatsPO.MOCK_IBU_HIGH, BeerStatsPO.MOCK_ABV_HIGH);
      BeerStatsPO.ibuStat.should('have.class', BeerStatsPO.HIGH_CLASSNAME);
    });
  });
});
