import { Element } from 'react-scroll';

import image from '../../assets/images/about.jpg';

import styles from './About.module.css';

function About() {
  return (
    <section>
      <Element className="about">
        <header>
          <h2 className="heading heading-secondary color-light">
            What is Monocura?
          </h2>
        </header>
        <div className={styles.aboutContent}>
          <div className={styles.textColumn}>
            <h3 className="heading heading-tertiary">
              Monocura, <span className="color-red">Your Single Solution</span>
            </h3>
            <p>
              Monocura, Latin for &ldquo;single solution&rdquo; is a
              comprehensive suite designed to empower businesses managing a
              mobile workforce. Our software products seamlessly integrate,
              offering solutions for booking, dispatch, pricing, billing, and
              Customer Relations Management (CRM). Monocura streamlines
              operations, boosts productivity, and simplifies the scheduling
              process, all while being a white-label application tailored to
              your brand.
            </p>
          </div>
          <div className={styles.imageColumn}>
            <img src={image} alt="Who we are?" loading="lazy" />
          </div>
        </div>
      </Element>
    </section>
  );
}

export default About;
