import logo from '../../../assets/images/logo.png';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
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
