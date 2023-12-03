import { Element } from 'react-scroll';

import Button from '../common/Button/Button';

import styles from './Home.module.css';

function Home() {
  return (
    <section>
      <Element className={`${styles.home} home`}>
        <header>
          <h1 className="heading heading-primary color-light">
            Your <span className="color-red">business title</span>
            <br />
            goes here
          </h1>
        </header>

        <Button type="primary">Learn More</Button>
      </Element>
    </section>
  );
}

export default Home;
