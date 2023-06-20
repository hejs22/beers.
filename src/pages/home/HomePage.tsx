import { useBeers } from '../../helpers/hooks/useBeers';
import BeersContainer from '../../components/beer/beers-container/BeersContainer';
import Builder from '../../helpers/utils/Builder';

const HomePage = () => {
  const { data, status } = useBeers(1);

  return (
    <div>
      {Builder.createResult(status)
        .onSuccess(<BeersContainer beers={data!} />)
        .build()}
    </div>
  );
};

export default HomePage;
