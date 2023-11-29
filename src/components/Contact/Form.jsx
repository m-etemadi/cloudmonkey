import styles from './Contact.module.css';

import Button from '../common/Button/Button';

function Form() {
  return (
    <div className={styles.contactForm}>
      <form>
        <div>
          <input type="text" placeholder="Full Name" />
        </div>
        <div>
          <input type="email" placeholder="Email Address" />
        </div>
        <div>
          <input type="text" placeholder="Subject" />
        </div>
        <div>
          <textarea rows="4" cols="50" placeholder="Your Message..."></textarea>
        </div>

        <Button type="primary">Send</Button>
      </form>
    </div>
  );
}

export default Form;
