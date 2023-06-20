import './Navbar.scss';
import { useEffect, useState } from 'react';
import { useScrollDirection } from '../../helpers/hooks/useScrollPosition';

const HEADER_COLLAPSE_THRESHOLD = 75;

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const scrollDirection = useScrollDirection(HEADER_COLLAPSE_THRESHOLD);

  useEffect(() => {
    setIsCollapsed(scrollDirection === 'down');
  }, [scrollDirection]);

  return (
    <div className={`navbar ${isCollapsed ? 'collapsed' : ''} `}>
      <div className="logo">Beers.</div>
    </div>
  );
};

export default Navbar;
