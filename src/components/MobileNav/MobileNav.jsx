import { Link } from 'react-scroll';

import styles from './MobileNav.module.css';

function MobileNav() {
  return (
    <aside className={styles.mobileNav}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
      >
        About Us
      </Link>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        duration={500}
      >
        Services
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
      >
        Contact Us
      </Link>
    </aside>
  );
}

export default MobileNav;
