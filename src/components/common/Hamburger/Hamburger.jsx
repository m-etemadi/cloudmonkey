import image from '../../../assets/images/icons/hamburger-icon.png';

import styles from './Hamburger.module.css';

function Hamburger({ setIsOpen }) {
  return (
    <div className={styles.hamburger} onClick={() => setIsOpen(o => !o)}>
      <img src={image} alt="mobile nav" />
    </div>
  );
}

export default Hamburger;
