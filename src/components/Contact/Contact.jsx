import styles from './Contact.module.css';

import Info from './Info';

function Contact({ children }) {
  return (
    <section className={`${styles.contact} py-8`}>
      <header>
        <h2 className="heading heading-secondary color-light">Get In Touch</h2>
      </header>
      <div className="container">
        <div className={styles.contactContent}>{children}</div>
      </div>
      <Info />
    </section>
  );
}

export default Contact;
