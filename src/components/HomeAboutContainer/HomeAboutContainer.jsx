import styles from './HomeAboutContainer.module.css';

function HomeAboutContainer({ children }) {
  return (
    <div className={styles.homeAboutContainer}>
      <div className="container">{children}</div>
    </div>
  );
}

export default HomeAboutContainer;
