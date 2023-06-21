import { useBeers } from '../../helpers/hooks/useBeers';
import BeersList from '../../components/beer/beers-list/BeersList';
import Builder from '../../helpers/utils/Builder';

const HomePage = () => {
  const { data, status } = useBeers(1);

  return (
    <div className="home-page-container">
      {Builder.createResult(status)
        .onSuccess(<BeersList beers={data} />)
        .onLoading(<BeersList beers={data} />)
        .build()}
    </div>
  );
};

export default HomePage;
