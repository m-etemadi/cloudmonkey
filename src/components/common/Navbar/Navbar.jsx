import { useEffect, useState } from 'react';

import logo from '../../../assets/images/logo.png';

import styles from './Navbar.module.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  function handleScroll() {
    window.scrollY > 80 ? setScrolling(true) : setScrolling(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        scrolling ? `${styles.scrolledDown}` : ''
      }`}
    >
      <div className={`${styles.container} container`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>
        <div className={styles.logo}>
          <img src={logo} alt="Company Logo" />
        </div>

        <ul>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
