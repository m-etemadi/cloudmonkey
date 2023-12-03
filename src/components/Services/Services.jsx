import { Element } from 'react-scroll';

function Services({ children }) {
  return (
    <section className="py-8">
      <Element className="services">
        <header>
          <h2 className="heading heading-secondary color-red">
            Why Choose Us?
          </h2>
        </header>
        <div className="container">{children}</div>
      </Element>
    </section>
  );
}

export default Services;
