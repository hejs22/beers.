import { ComponentProps } from 'react';
import Beer from '../../../helpers/interfaces/Beer.interface';
import './BeerTile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import appRouter from '../../../router/AppRouter';
import { ROUTE } from '../../../constants/RouteConstants';
import Chip from '../../primitives/chip/Chip';

interface BeerTileProps extends ComponentProps<'div'> {
  beer: Beer;
}

const BeerTile = ({ beer }: BeerTileProps) => {
  const redirectToDetailsPage = () => {
    appRouter.navigate(ROUTE.DETAILS.replace(':id', beer.id.toString()));
  };

  return (
    <div className="beer-tile-container">
      <FontAwesomeIcon
        onClick={redirectToDetailsPage}
        className="see-details-button"
        icon={faArrowRight}
      />
      <div className="beer-picture-container">
        <img
          src={beer.image_url}
          className="beer-picture"
          alt={`Picture of ${beer.name} beer.`}
          loading="lazy"
        />
      </div>
      <div className="beer-info">
        <div className="beer-name">{beer.name}</div>
        <div className="beer-tagline">{beer.tagline}</div>
      </div>
      <div className="beer-stats">
        <Chip label="ABV" value={beer.abv} />
        <Chip label="IBU" value={beer.ibu} />
      </div>
    </div>
  );
};

export default BeerTile;
