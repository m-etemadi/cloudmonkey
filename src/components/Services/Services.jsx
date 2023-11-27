function Services({ children }) {
  return (
    <section className="services py-8">
      <header>
        <h2 className="heading heading-secondary color-red">Why Choose Us?</h2>
      </header>
      <div className="container">{children}</div>
    </section>
  );
}

export default Services;
