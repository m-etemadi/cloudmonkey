import { Element } from 'react-scroll';

import Info from './Info';

import styles from './Contact.module.css';

function Contact({ children }) {
  return (
    <section className={`${styles.contact} py-8`}>
      <Element className="contact">
        <header>
          <h2 className="heading heading-secondary color-red">Get In Touch</h2>
        </header>
        <div className="container">
          <div className={styles.contactContent}>{children}</div>
        </div>
        <Info />
      </Element>
    </section>
  );
}

export default Contact;
