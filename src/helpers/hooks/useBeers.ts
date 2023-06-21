import { useQuery } from 'react-query';
import { fetchBeers } from '../../services/BeerService';
import { DEFAULT_PAGE_SIZE } from '../../config/ApiConfig';

export const useBeers = (page: number, perPage: number = DEFAULT_PAGE_SIZE) => {
  return useQuery('BEERS_QUERY_KEY', () => fetchBeers(page, perPage));
};
