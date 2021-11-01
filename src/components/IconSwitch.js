import React from 'react';
import PropTypes from 'prop-types';

export default function IconSwitch(props) {
  // console.log('IconSwitch_props', props);
  const { icon, onSwitch } = props;
  const iconStyles = {
    marginLeft: 'auto',
    width: '50px',
    padding: '10px',
  };

  return (
    <div className="icon" style={iconStyles}>
      <span
        className="material-icons"
        style={{ fontSize: '3rem' }}
        onClick={onSwitch}
      >
        {icon}
      </span>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
};
