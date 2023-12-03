import image from '../../assets/images/icons/location-icon.png';

import styles from './Contact.module.css';

function Map() {
  return (
    <div className={styles.googleMap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.9746445453984!2d151.20724107529557!3d-33.83876451750314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aef2ae6c66ad%3A0xf23bfc74c3251a3b!2s1004%2F122%20Arthur%20St%2C%20North%20Sydney%20NSW%202060!5e0!3m2!1sen!2sau!4v1701240646947!5m2!1sen!2sau"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.addressDetails}>
        <div className="icon">
          <img src={image} alt="Cloud Monkey address" loading="lazy" />
        </div>
        <p>1004/122 Arthur Street, North Sydney 2060, NSW</p>
      </div>
    </div>
  );
}

export default Map;
