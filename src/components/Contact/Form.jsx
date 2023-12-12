import { useState } from 'react';

import { URL } from '../../config/config';

import Button from '../common/Button/Button';

import styles from './Contact.module.css';

function Form() {
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const res = await fetch(URL, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (!res.ok) throw new Error('Something went wrong!');
      const data = await res.json();

      if (data.success) {
        setError('Message sent!');
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.contactForm}>
      <form method="POST" className="form myb-8" onSubmit={handleSubmit}>
        <div>
          <input
            name="Full Name"
            type="text"
            placeholder="Full Name *"
            required
          />
        </div>
        <div>
          <input
            name="Email"
            type="email"
            placeholder="Email Address *"
            required
          />
        </div>
        <div>
          <input name="Subject" type="text" placeholder="Subject *" required />
        </div>
        <div>
          <textarea
            name="Message"
            rows="4"
            cols="50"
            placeholder="Your Message... *"
            required
          ></textarea>
        </div>

        <Button isSubmit={true} type="primary">
          Send
        </Button>

        {error && <div className={styles.message}>{error}</div>}
      </form>
    </div>
  );
}

export default Form;
