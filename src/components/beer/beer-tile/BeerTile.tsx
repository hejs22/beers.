import { ComponentProps } from 'react';
import Beer from 'shared/interfaces/Beer.interface';
import './BeerTile.scss';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import appRouter from 'router/AppRouter';
import { ROUTE } from 'shared/constants/RouteConstants';
import IconButton from 'components/primitives/button/IconButton';

interface BeerTileProps extends ComponentProps<'div'> {
  beer: Beer;
}

const BeerTile = ({ beer }: BeerTileProps) => {
  const redirectToDetailsPage = () => {
    appRouter.navigate(ROUTE.DETAILS.replace(':id', beer.id.toString()), {
      state: { beerDetails: beer }
    });
  };

  return (
    <div className="beer-tile-container">
      <IconButton
        icon={faArrowRight}
        onClick={redirectToDetailsPage}
        className="see-details-button"
        aria-label="Check beer details"
      />

      <div className="beer-picture-container">
        <div className="backdrop-text">{beer.name}</div>
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
    </div>
  );
};

export default BeerTile;
