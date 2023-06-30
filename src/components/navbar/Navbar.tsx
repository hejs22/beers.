import './Navbar.scss';
import { useScrollDirection } from 'shared/hooks/useScrollPosition';
import classNames from 'classnames';

const HEADER_COLLAPSE_THRESHOLD = 75;

const Navbar = () => {
  const scrollDirection = useScrollDirection(HEADER_COLLAPSE_THRESHOLD);
  const isCollapsed = scrollDirection === 'down';

  return (
    <header className={classNames('navbar', { collapsed: isCollapsed })}>
      <h1 className="logo">Beers.</h1>
    </header>
  );
};

export default Navbar;
