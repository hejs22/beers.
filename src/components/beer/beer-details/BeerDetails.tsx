import './BeerDetails.scss';
import Beer from 'shared/interfaces/Beer.interface';
import { ComponentProps } from 'react';
import BeerStats from 'components/beer/beer-stats/BeerStats';
import BeerIngredientsList from 'components/beer/beer-ingredients-list/BeerIngredientsList';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import appRouter from 'router/AppRouter';
import { ROUTE } from 'shared/constants/RouteConstants';
import IconButton from 'components/primitives/button/IconButton';

interface BeerDetailsProps extends ComponentProps<'article'> {
  beer: Beer;
}

const BeerDetails = ({ beer }: BeerDetailsProps) => {
  const navigateBack = () => {
    appRouter.navigate(ROUTE.BACK);
  };

  return (
    <article className="beer-details-container">
      <IconButton
        icon={faArrowLeft}
        className="go-back-button"
        onClick={navigateBack}
        aria-label="Go to previous page"
      />

      <section className="beer-picture-container">
        <div className="circle-background" />
        <img
          className="beer-picture"
          src={beer.image_url}
          alt={`Big picture of ${beer.name} beer.`}
          loading="eager"
        />
        <p className="since">{`Since ${beer.first_brewed}.`}</p>
      </section>

      <section className="beer-details">
        <div className="details-header">
          <div>
            <p className="beer-tagline header-text">{beer.tagline}</p>
            <h3 className="beer-name header-text">{beer.name}</h3>
          </div>
          <BeerStats className="beer-stats" abv={beer.abv} ibu={beer.ibu} />
        </div>
        <p className="beer-description details-text">{beer.description}</p>
        <BeerIngredientsList ingredients={beer.ingredients} />
        <p className="beer-tips details-text">
          <b>Expert says: </b>
          <q>{beer.brewers_tips}</q>
        </p>
      </section>
    </article>
  );
};

export default BeerDetails;
