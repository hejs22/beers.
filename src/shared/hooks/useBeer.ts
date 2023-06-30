import { useQuery } from 'react-query';
import { fetchBeer } from 'services/BeerService';
import appRouter from 'router/AppRouter';
import { useParams } from 'react-router-dom';
import Beer from '../interfaces/Beer.interface';
import { BuilderStatus } from '../utils/Builder';

export const useBeer = (): { data: Beer | undefined; status: BuilderStatus } => {
  const beerDetails = appRouter.state.location.state?.beerDetails;
  if (beerDetails) {
    return { data: beerDetails, status: 'success' };
  }

  const id = useParams().id;
  if (!id) {
    return { data: undefined, status: 'error' };
  }

  const { data, status } = useQuery(['BEER_QUERY_KEY', id], () => fetchBeer(id), {
    enabled: !beerDetails
  });

  return { data, status };
};
