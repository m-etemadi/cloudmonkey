import styles from './Home.module.css';

import Button from '../common/Button/Button';

function Home() {
  return (
    <section className={styles.home}>
      <header>
        <h1 className="heading heading-primary color-light">
          Your <span className="color-red">business title</span>
          <br />
          goes here
        </h1>
      </header>

      <Button type="primary">Learn More</Button>
    </section>
  );
}

export default Home;
