import { useQuery } from 'react-query';
import { fetchBeers } from '../../services/BeerService';

const DEFAULT_PAGE_SIZE = 12;

export const useBeers = (page: number, perPage: number = DEFAULT_PAGE_SIZE) => {
  return useQuery('BEERS_QUERY_KEY', () => fetchBeers(page, perPage));
};
