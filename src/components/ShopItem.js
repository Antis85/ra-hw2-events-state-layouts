import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {
  // console.log('ShopItem_props', props);
  // console.log('ShopItem_props.item', props.item);
  const { item } = props;
  const styles = {
    width: '100px',
    height: '100px',
  };

  const itemStyles = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'whitesmoke',
  };

  const buttonStyle = {
    color: 'red',
    border: '1px solid red',
    borderRadius: '25px',
    width: '125px',
    padding: '10px',
    textTransform: 'uppercase',
  };

  return (
    <div className="item" style={itemStyles}>
      <img
        style={styles}
        className="item_image"
        src={item.img}
        alt={item.name}
      />
      <div>{item.name}</div>
      <div>{item.color}</div>
      <div>${item.price}</div>
      <button style={buttonStyle}>Add to cart</button>
    </div>
  );
}

ShopItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
