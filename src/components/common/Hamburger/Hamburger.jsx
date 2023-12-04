import image from '../../../assets/images/icons/hamburger-icon.png';

import styles from './Hamburger.module.css';

function Hamburger({ handleToggle }) {
  return (
    <div className={styles.hamburger} onClick={handleToggle}>
      <img className="mobile-nav--btn" src={image} alt="mobile nav" />
    </div>
  );
}

export default Hamburger;
