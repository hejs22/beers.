import { apiClient } from './ApiClient';
import Beer from 'shared/interfaces/Beer.interface';

export const fetchBeers = async (page: number, perPage: number): Promise<Beer[]> => {
  const { data } = await apiClient.get<Beer[]>('/beers', {
    params: { page: page, per_page: perPage }
  });
  return data.slice();
};

export const fetchBeer = async (id: string): Promise<Beer> => {
  const { data } = await apiClient.get<Beer[]>(`/beers/${id}`);
  return data.slice()[0];
};
