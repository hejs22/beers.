import { ComponentProps } from 'react';
import Beer from 'shared/interfaces/Beer.interface';
import './BeerTile.scss';
import appRouter from 'router/AppRouter';
import { ROUTE } from 'shared/constants/RouteConstants';

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
    <article className="beer-tile-container" onClick={redirectToDetailsPage}>
      <section className="beer-picture-container">
        <p className="backdrop-text">{beer.name}</p>
        <img
          src={beer.image_url}
          className="beer-picture"
          alt={`Picture of ${beer.name} beer.`}
          loading="lazy"
        />
      </section>

      <section className="beer-info">
        <p className="beer-name">{beer.name}</p>
        <p className="beer-tagline">{beer.tagline}</p>
      </section>
    </article>
  );
};

export default BeerTile;
