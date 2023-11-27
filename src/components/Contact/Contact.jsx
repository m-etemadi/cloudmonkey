import Info from './Info';

function Contact({ children }) {
  return (
    <section className="contact py-8">
      <header>
        <h2 className="heading heading-secondary">Get In Touch</h2>
      </header>
      <div className="container">{children}</div>
      <Info />
    </section>
  );
}

export default Contact;
