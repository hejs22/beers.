import { useBeers } from '../../helpers/hooks/useBeers';
import BeersList from '../../components/beer/beers-list/BeersList';
import Builder from '../../helpers/utils/Builder';

const HomePage = () => {
  const { data, status } = useBeers(1);

  return (
    <div>
      {Builder.createResult(status)
        .onSuccess(<BeersList beers={data!} />)
        .build()}
    </div>
  );
};

export default HomePage;
