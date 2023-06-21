import { useBeers } from '../../helpers/hooks/useBeers';
import BeersList from '../../components/beer/beers-list/BeersList';
import Builder from '../../helpers/utils/Builder';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import { ErrorNoData } from '../../constants/ErrorConstants';
import './HomePage.scss';
import { useContext } from 'react';
import { SelectedPageContext } from '../../contexts/SelectedPageContext';
import PageSelector from '../../components/page-selector/PageSelector';

const HomePage = () => {
  const { page } = useContext(SelectedPageContext);
  const { data, status, refetch, nextData } = useBeers(page);

  return (
    <div className="home-page-container">
      <PageSelector hasNextPage={!!nextData?.length} />
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
