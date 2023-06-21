import { apiClient } from './ApiClient';
import Beer from 'shared/interfaces/Beer.interface';
import ServicesValidation from './ServicesValidator';

export const fetchBeers = async (page: number, perPage: number): Promise<Beer[]> => {
  ServicesValidation.validateRequestParameters(
    'fetchBeers error: null or undefined passed as one of parameters',
    [page, perPage]
  );
  const { data } = await apiClient.get<Beer[]>('/beers', {
    params: { page: page, per_page: perPage }
  });
  return data.slice();
};

export const fetchBeer = async (id: string): Promise<Beer> => {
  ServicesValidation.validateRequestParameters(
    'fetchBeer error: null or undefined passed as one of parameters',
    [id]
  );
  const { data } = await apiClient.get<Beer[]>(`/beers/${id}`);
  return data.slice()[0];
};
