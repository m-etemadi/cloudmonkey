const cardsData = [
  {
    title: 'Mobile App Development',
    text: 'At Cloud Monkey, our team of skilled developers is proficient in creating native mobile applications for both iOS and Android platforms. We ensure that our apps offer optimal performance, leverage device-specific capabilities, and provide an excellent user experience, tailored to meet the unique needs of your business and its customers.',
  },
  {
    title: 'Booking and Reservation Forms',
    text: 'Our platform features intuitive and easy-to-use booking and reservation forms, designed to streamline the process for end-users. We focus on creating a seamless user journey, reducing friction, and ensuring that customers can quickly and easily secure the services they need, boosting conversion rates and customer satisfaction.',
  },
  {
    title: 'Comprehensive Administration Portal',
    text: 'Monocura includes a robust administration portal, providing your team with a central hub for managing all aspects of your operations. From scheduling and dispatch to billing and customer management, our portal empowers your staff with the tools they need to stay organized, make informed decisions, and keep your business running smoothly.',
  },
  {
    title: 'Automated Invoicing Solutions',
    text: 'Our automated invoicing solutions help streamline your financial processes, reducing manual effort and minimizing the risk of errors. With features like auto-generation of invoices, payment tracking, and integration with leading accounting software, we ensure that your billing operations are efficient, accurate, and hassle-free.',
  },
  {
    title: 'Secure Online Payment Integration',
    text: 'Monocura includes secure and reliable online payment integration, allowing your customers to make payments quickly and securely. We support a wide range of payment methods and work with trusted payment gateways to ensure that every transaction is protected, providing peace of mind for both your business and your customers.',
  },
  {
    title: 'Hardware Access Device Solution',
    text: 'Our platform is designed to seamlessly integrate with various hardware access devices, enabling businesses managing physical spaces, such as car parks, to control and monitor access efficiently. Whether it’s automated barriers, gates, or other access control systems, our solution ensures that you can manage your facilities securely and with ease.',
  },
];

import styles from './Services.module.css';

function Cards() {
  return (
    <div className={styles.cards}>
      {cardsData.map((card, i) => (
        <div className={styles.card} key={i}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
