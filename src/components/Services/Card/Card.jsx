import styles from './Card.module.css';

function Card({ card }) {
  const { titleBlack, titleRed, text } = card;

  return (
    <div className={styles.card}>
      <div className={`${styles.cardSide} ${styles.cardFront}`}>
        <h3>
          <span className="color-dark">{titleBlack}</span>
          <br />
          <span className="color-red">{titleRed}</span>
        </h3>
      </div>
      <div className={`${styles.cardSide} ${styles.cardBack}`}>{text}</div>
    </div>
  );
}

export default Card;
