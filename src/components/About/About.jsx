import image from '../../assets/images/about.jpg';

function About() {
  return (
    <section className="about">
      <header>
        <h2 className="heading heading-secondary">Who We Are?</h2>
      </header>
      <div className="about-content">
        <div className="text-column">
          <h3 className="heading heading-tertiary">
            Lorem ipsum dolor sit amet.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            molestias facere assumenda dolore illum temporibus placeat. Debitis
            accusantium eaque, iste autem aspernatur numquam temporibus tempore.
            Esse tempora labore maiores reprehenderit impedit saepe dolores in
            eaque. Cumque facere magnam in doloremque.
          </p>
        </div>
        <div className="image-column">
          <img src={image} alt="Who we are?" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default About;
