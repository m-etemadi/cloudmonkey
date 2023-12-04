import { Link } from 'react-scroll';

import image from '../../assets/images/icons/cross-icon.png';

import styles from './MobileNav.module.css';

function MobileNav({ isOpen, handleToggle }) {
  return (
    <aside className={`${styles.mobileNav} ${isOpen ? styles.navOpen : ''}`}>
      <div className={styles.navClose} onClick={handleToggle}>
        <img className="mobile-nav--btn" src={image} alt="close button" />
      </div>
      <div>
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
      </div>
    </aside>
  );
}

export default MobileNav;
