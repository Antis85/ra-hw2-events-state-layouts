import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard(props) {
  // console.log('ShopCard_props', props);
  // console.log('ShopCard_props.card', props.card);
  const { card } = props;

  const cardStyles = {
    background: `url(${card.img}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    boxSizing: 'border-box',
    marginRight: '100px',
    marginLeft: '100px',
    marginTop: '50px',
  };

  const cardFooterStyles = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 'auto',
  };

  return (
    <div className="card" style={cardStyles}>
      <div>{card.name}</div>
      <div>{card.color}</div>
      <div className="card_footer" style={cardFooterStyles}>
        <div>${card.price}</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
