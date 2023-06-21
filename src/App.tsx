import { RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/QueryClient';
import { SelectedPageContext } from './contexts/SelectedPageContext';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState(1);

  const setDisplayedPage = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <SelectedPageContext.Provider value={{ page, setPage: setDisplayedPage }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={AppRouter} />
      </QueryClientProvider>
    </SelectedPageContext.Provider>
  );
}

export default App;
