import { Element } from 'react-scroll';

import image from '../../assets/images/about.jpg';

import styles from './About.module.css';

function About() {
  return (
    <section>
      <Element className="about">
        <header>
          <h2 className="heading heading-secondary color-light">Who We Are?</h2>
        </header>
        <div className={styles.aboutContent}>
          <div className={styles.textColumn}>
            <h3 className="heading heading-tertiary">
              Lorem ipsum <span className="color-red">dolor sit amet.</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              libero reprehenderit ad vitae animi sit voluptatum nulla eveniet
              pariatur aspernatur fugiat provident at minus magnam suscipit
              dolorum asperiores, id ducimus delectus molestiae corporis maiores
              laborum labore. Inventore eius quod nihil saepe. Voluptas
              voluptates amet, optio consequuntur, harum sequi, voluptatum atque
              quo dignissimos aut deserunt placeat inventore nam. Velit, omnis.
              Nulla illum recusandae natus reiciendis ipsa quae optio facilis
              sed dolorum, perspiciatis fugit vel voluptatibus mollitia
              inventore. Corporis, excepturi! Ex id excepturi sed perspiciatis
              facere harum eius fugiat dicta neque voluptates. Tempore vitae
              molestiae fuga soluta sit saepe nulla dolorum, modi aut numquam
              assumenda quaerat velit recusandae culpa repellendus pariatur
              perferendis doloremque dolores id ut? Laboriosam, quos est? Eius,
              repudiandae dolor!
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
