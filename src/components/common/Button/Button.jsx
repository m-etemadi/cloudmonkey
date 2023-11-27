import styles from './Button.module.css';

function Button({ type, children }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
}

export default Button;
