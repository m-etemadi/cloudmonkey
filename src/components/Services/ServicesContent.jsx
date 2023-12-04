import styles from './services.module.css';

import image from '../../assets/images/services.jpg';

function ServicesContent() {
  return (
    <div className={styles.servicesContent}>
      <div className={styles.imageColumn}>
        <img src={image} alt="Who we are?" loading="lazy" />
      </div>
      <div className={styles.textColumn}>
        <p>
          By focusing on the following key areas, Cloud Monkey is dedicated to
          providing a comprehensive and user-friendly solution for businesses
          operating a mobile workforce, ensuring that you have the tools and
          support you need to succeed.
        </p>
      </div>
    </div>
  );
}

export default ServicesContent;
