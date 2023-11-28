import styles from './Card.module.css';

function Card({ card }) {
  const { title, text } = card;

  return (
    <div className={styles.card}>
      <div className={`${styles.cardSide} ${styles.cardFront}`}>{title}</div>
      <div className={`${styles.cardSide} ${styles.cardBack}`}>{text}</div>
    </div>
  );
}

export default Card;
