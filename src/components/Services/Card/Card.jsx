import styles from './Card.module.css';

function Card({ card }) {
  const { icon, titleBlack, titleRed, text } = card;

  return (
    <div className={styles.card}>
      <div className={`${styles.cardSide} ${styles.cardFront}`}>
        <figure className={styles.cardIcon}>
          <img src={icon} alt={`${titleBlack} ${titleRed}`} />
        </figure>
        <figcaption>
          <h3 className="heading">
            <span className="color-dark">{titleBlack}</span>
            <br />
            <span className="color-red">{titleRed}</span>
          </h3>
        </figcaption>
      </div>
      <div className={`${styles.cardSide} ${styles.cardBack}`}>{text}</div>
    </div>
  );
}

export default Card;
