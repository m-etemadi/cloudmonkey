import { Link } from 'react-scroll';

import styles from './Button.module.css';

function Button({ isLink = false, to, type, children }) {
  if (isLink)
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

  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
}

export default Button;
