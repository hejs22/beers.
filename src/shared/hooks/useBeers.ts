import { useQuery } from 'react-query';
import { fetchBeers } from 'services/BeerService';
import { DEFAULT_PAGE_SIZE } from 'shared/config/ApiConfig';

export const useBeers = (page: number, perPage: number = DEFAULT_PAGE_SIZE) => {
  const query = useQuery(['BEERS_QUERY_KEY', page], () => fetchBeers(page, perPage));
  const { data: nextData } = useQuery(
    ['BEERS_QUERY_KEY', page + 1],
    () => fetchBeers(page + 1, perPage),
    { enabled: query.isSuccess }
  );
  return { nextData, ...query };
};
