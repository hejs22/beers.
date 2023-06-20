import { RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/QueryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter} />
    </QueryClientProvider>
  );
}

export default App;
