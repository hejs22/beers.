import { useContext } from 'react';
import { SelectedPageContext } from '../../contexts/SelectedPageContext';
import './PageSelector.scss';
import IconButton from '../primitives/button/IconButton';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface PageSelectorProps {
  hasNextPage: boolean;
}

const PageSelector = ({ hasNextPage }: PageSelectorProps) => {
  const { page, setPage } = useContext(SelectedPageContext);

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  const canDecrement = () => {
    return page > 1;
  };

  const canIncrement = () => {
    return hasNextPage;
  };

  return (
    <div className="page-selector-container">
      <IconButton disabled={!canDecrement()} icon={faAngleLeft} onClick={decrementPage} />
      <div className="current-page">{page}</div>
      <IconButton disabled={!canIncrement()} icon={faAngleRight} onClick={incrementPage} />
    </div>
  );
};

export default PageSelector;
