import { apiClient } from './ApiClient';

export const fetchBeers = async (page: number, perPage: number) => {
  const { data } = await apiClient.get('/beers', { params: { page: page, perPage: perPage } });
  return data.slice();
};
