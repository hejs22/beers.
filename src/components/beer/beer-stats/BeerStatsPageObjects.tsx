import { Range } from 'shared/utils/BeerUtils';

export default class BeerStatsPageObjects {
  public MOCK_IBU_LOW = 3;
  public MOCK_IBU_MID = 50;
  public MOCK_IBU_HIGH = 75;
  public MOCK_ABV_LOW = 3;
  public MOCK_ABV_MID = 6;
  public MOCK_ABV_HIGH = 14;

  public MID_CLASSNAME: Range = 'mid';
  public LOW_CLASSNAME: Range = 'low';
  public HIGH_CLASSNAME: Range = 'high';

  get beerStatsContainer() {
    return cy.get('.beer-stats-container');
  }

  get beerStats() {
    return this.beerStatsContainer.children();
  }

  get ibuStat() {
    return this.beerStats.get('div').contains('IBU').parent();
  }

  get abvStat() {
    return this.beerStats.get('div').contains('ABV').parent();
  }
}
