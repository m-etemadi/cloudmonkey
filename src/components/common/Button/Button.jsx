import { Link } from 'react-scroll';

import styles from './Button.module.css';

function Button({ isLink = false, isSubmit = false, to, type, children }) {
  if (isLink) {
    return (
      <Link
        className={`${styles.btn} ${styles[type]}`}
        to={to}
        spy={true}
        smooth={true}
        duration={500}
      >
        {children}
      </Link>
    );
  } else if (isSubmit) {
    return (
      <button type="submit" className={`${styles.btn} ${styles[type]}`}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
    );
  }
}

export default Button;
