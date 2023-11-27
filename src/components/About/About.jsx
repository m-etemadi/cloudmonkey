import image from '../../assets/images/about.jpg';

import styles from './About.module.css';

function About() {
  return (
    <section className="about">
      <header>
        <h2 className="heading heading-secondary color-light">Who We Are?</h2>
      </header>
      <div className={styles.aboutContent}>
        <div className={styles.textColumn}>
          <h3 className="heading heading-tertiary">
            Lorem ipsum <span className="color-red">dolor sit amet.</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
            ipsam error adipisci sed molestias maiores hic porro possimus,
            cupiditate pariatur? In aut necessitatibus, adipisci, fugiat, minima
            explicabo ex quaerat vel magnam non impedit eos nulla officia a
            culpa velit iste officiis dicta accusamus porro doloribus inventore
            sequi. Autem, voluptatibus nemo error enim totam doloribus obcaecati
            incidunt. Quam, praesentium in? Ipsum similique quam molestias odit
            sunt repellendus praesentium id deserunt.
          </p>
        </div>
        <div className={styles.imageColumn}>
          <img src={image} alt="Who we are?" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default About;
