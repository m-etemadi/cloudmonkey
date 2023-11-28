import cardsData from '../../data/cardsData';

import Card from './Card/Card';

import styles from './Services.module.css';

function Cards() {
  return (
    <div className={styles.cards}>
      {cardsData.map((card, i) => (
        <Card key={i} card={card} />
      ))}
    </div>
  );
}

export default Cards;
