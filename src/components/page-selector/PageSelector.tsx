import './PageSelector.scss';
import IconButton from 'components/primitives/button/IconButton';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { SelectedPageContext } from '../../shared/contexts/SelectedPageContext';

interface PageSelectorProps {
  hasNextPage: boolean;
}

const PageSelector = ({ hasNextPage }: PageSelectorProps) => {
  const { page, setPage } = useContext(SelectedPageContext);

  const canDecrement = () => {
    return page > 1;
  };

  const canIncrement = () => {
    return hasNextPage;
  };

  const handlePageChange = (diff: number) => {
    setPage && setPage((prev) => prev + diff);
  };

  return (
    <div className="page-selector-container">
      <IconButton
        aria-label="Show previous page"
        disabled={!canDecrement()}
        icon={faAngleLeft}
        onClick={() => handlePageChange(-1)}
      />
      <b className="current-page">{page}</b>
      <IconButton
        aria-label="Show next page"
        disabled={!canIncrement()}
        icon={faAngleRight}
        onClick={() => handlePageChange(1)}
      />
    </div>
  );
};

export default PageSelector;
