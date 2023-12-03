import phoneIcon from '../../assets/images/icons/phone-icon.png';
import mailIcon from '../../assets/images/icons/mail-icon.png';

import styles from './Contact.module.css';

function Info() {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.item}>
        <div className="icon">
          <img src={phoneIcon} alt="+49 316 20 20" />
        </div>
        <a href="tel:+493162020">+49 316 20 20</a>
      </div>
      <div className={styles.item}>
        <div className="icon">
          <img src={mailIcon} alt="support@cloudmonkey.com.au" />
        </div>
        <a href="mailto:support@cloudmonkey.com.au">
          support@cloudmonkey.com.au
        </a>
      </div>
    </div>
  );
}

export default Info;
