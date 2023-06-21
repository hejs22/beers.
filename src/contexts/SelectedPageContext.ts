import { createContext } from 'react';

export const SelectedPageContext = createContext<{
  page: number;
  setPage: (page: number) => void; // eslint-disable-line no-unused-vars
}>({
  page: 1,
  setPage: (page: number) => {} // eslint-disable-line no-unused-vars
});
