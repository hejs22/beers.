import { createContext, Dispatch, SetStateAction } from 'react';

export const SelectedPageContext = createContext<{
  page: number;
  setPage: Dispatch<SetStateAction<number>> | null;
}>({ page: 1, setPage: null });
