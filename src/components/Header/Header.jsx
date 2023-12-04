import { useState } from 'react';
import Hamburger from '../common/Hamburger/Hamburger';
import MobileNav from '../MobileNav/MobileNav';
import Navbar from '../Navbar/Navbar';

import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <Hamburger setIsOpen={setIsOpen} />
      {isOpen && <MobileNav />}
      <Navbar />
    </header>
  );
}

export default Header;
