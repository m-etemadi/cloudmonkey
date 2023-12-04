import { Element } from 'react-scroll';

import Button from '../common/Button/Button';

import styles from './Home.module.css';

function Home() {
  return (
    <section>
      <Element className={`${styles.home} home`}>
        <h1 className="heading heading-primary color-light">
          Leading <span className="color-red">Transport & Space</span> Solutions
        </h1>

        <Button isLink={true} type="primary" to="about">
          Learn More
        </Button>
      </Element>
    </section>
  );
}

export default Home;
