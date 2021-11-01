import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';
import { v4 as uuidv4 } from 'uuid';

export default function ListView(props) {
  // console.log('ListView_props', props);
  // console.log('ListView_props.items', props.items);
  const { items } = props;
  const shopItem = items.map((item) => <ShopItem key={uuidv4()} item={item} />);

  return <div className="list">{shopItem}</div>;
}

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
