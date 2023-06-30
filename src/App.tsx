import { RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/QueryClient';
import { useMemo, useState } from 'react';
import { SelectedPageContext } from 'shared/contexts/SelectedPageContext';

function App() {
  const [page, setPage] = useState(1);
  const pageContext = useMemo(
    () => ({
      page,
      setPage
    }),
    [page, setPage]
  );

  return (
    <SelectedPageContext.Provider value={pageContext}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </SelectedPageContext.Provider>
  );
}

export default App;
