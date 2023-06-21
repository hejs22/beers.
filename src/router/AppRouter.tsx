import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ROUTE } from 'shared/constants/RouteConstants';
import Navbar from 'components/navbar/Navbar';
import HomePage from 'pages/home/HomePage';
import { BeerDetailsPage } from 'pages/beer-details/BeerDetailsPage';
import NotFoundPage from 'pages/error/NotFoundPage';

const AppRouter = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      { path: ROUTE.HOME, element: <HomePage /> },
      {
        path: ROUTE.DETAILS,
        element: <BeerDetailsPage />
      },
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);

export default AppRouter;
