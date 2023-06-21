import BeerDetails from '../../components/beer/beer-details/BeerDetails';
import './BeerDetailsPage.scss';
import { useEffect } from 'react';
import { useBeer } from '../../helpers/hooks/useBeer';
import Builder from '../../helpers/utils/Builder';
import { DATA_NOT_FOUND_SRC } from '../../constants/ImageConstants';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import appRouter from '../../router/AppRouter';
import { ROUTE } from '../../constants/RouteConstants';

export const BeerDetailsPage = () => {
  const { data: beerDetails, status } = useBeer();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateToHomePage = () => {
    appRouter.navigate(ROUTE.HOME);
  };

  return (
    <div className="beer-details-page-container">
      {Builder.createResult(status)
        .onSuccess(<BeerDetails beer={beerDetails} />)
        .onError(
          <ErrorMessage
            header="Oops!"
            caption="We couldn't find what you are looking for."
            imageSrc={DATA_NOT_FOUND_SRC}
            buttonText="Go to Home Page"
            buttonOnClick={navigateToHomePage}
          />
        )
        .build()}
    </div>
  );
};
