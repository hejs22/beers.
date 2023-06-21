import ErrorMessage from '../../components/error-message/ErrorMessage';
import './NotFoundPage.scss';
import appRouter from '../../router/AppRouter';
import { ROUTE } from '../../constants/RouteConstants';
import { Error404 } from '../../constants/ErrorConstants';

const NotFoundPage = () => {
  const navigateBack = () => {
    appRouter.navigate(ROUTE.BACK);
  };

  return (
    <div className="not-found-page-container">
      <ErrorMessage
        header={Error404.header}
        caption={Error404.caption}
        imageSrc={Error404.imageSrc}
        buttonText="Go back"
        buttonOnClick={navigateBack}
      />
    </div>
  );
};

export default NotFoundPage;
