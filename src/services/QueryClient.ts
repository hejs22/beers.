import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: { queries: { keepPreviousData: false, retry: 1 } }
});
