import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';

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
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About Us
            </Link>
          </li>
        </ul>
        <div className={styles.logo}>
          <a href="https://cloudmonkey.com.au" title="Cloud Monkey">
            <img src={logo} alt="Company Logo" />
          </a>
        </div>

        <ul>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
