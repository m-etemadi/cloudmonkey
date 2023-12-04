import { useState } from 'react';
import Hamburger from '../common/Hamburger/Hamburger';
import MobileNav from '../MobileNav/MobileNav';
import Navbar from '../Navbar/Navbar';

import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(o => !o);
  }

  return (
    <header className={styles.header}>
      {!isOpen && <Hamburger handleToggle={handleToggle} />}
      <MobileNav handleToggle={handleToggle} isOpen={isOpen} />
      <Navbar />
    </header>
  );
}

export default Header;
