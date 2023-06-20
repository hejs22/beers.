import { createBrowserRouter, Outlet } from 'react-router-dom';
import { ROUTE } from '../constants/RouteConstants';
import HomePage from '../pages/home/HomePage';
import { BeerDetailsPage } from '../pages/beer-details/BeerDetailsPage';
import NotFoundPage from '../pages/error/NotFoundPage';
import Navbar from '../components/navbar/Navbar';

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
      { path: ROUTE.DETAILS, element: <BeerDetailsPage /> }
    ]
  },
  { path: '*', element: <NotFoundPage /> }
]);

export default AppRouter;
