import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import { v4 as uuidv4 } from 'uuid'

export default function CardsView(props) {
  // console.log('CardsView_props', props);
  // console.log('CardsView_props.cards', props.cards);
  const { cards } = props;
  const cardsViewStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <div className="cards" style={cardsViewStyles}>
      {cards.map((card) => (
        <ShopCard key={uuidv4()} card={card} />      
      ))}
    </div>
  );
}

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
