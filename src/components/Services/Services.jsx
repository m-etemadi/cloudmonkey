function Services({ children }) {
  return (
    <section className="services">
      <header>
        <h2 className="heading heading-secondary">Why Choose Us?</h2>
      </header>
      <div className="container">{children}</div>
    </section>
  );
}

export default Services;
