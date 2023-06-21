import { useBeers } from '../../helpers/hooks/useBeers';
import BeersList from '../../components/beer/beers-list/BeersList';
import Builder from '../../helpers/utils/Builder';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import { ErrorNoData } from '../../constants/ErrorConstants';
import './HomePage.scss';

const HomePage = () => {
  const { data, status, refetch } = useBeers(1);

  return (
    <div className="home-page-container">
      <div className="home-page">
        {Builder.createResult(status)
          .onSuccess(<BeersList beers={data} />)
          .onLoading(<BeersList beers={data} />)
          .onError(
            <ErrorMessage
              header={ErrorNoData.header}
              caption={ErrorNoData.caption}
              imageSrc={ErrorNoData.imageSrc}
              buttonText="Refresh"
              buttonOnClick={refetch}
            />
          )
          .build()}
      </div>
    </div>
  );
};

export default HomePage;
