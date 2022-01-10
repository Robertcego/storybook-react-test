import React from 'react';
import PropTypes from 'prop-types';

function Button({
  label,
  color = 'black',
  backgroundColor = 'red',
  size = 'md',
  handleClick,
}) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    color,
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    borderRadius: '0.5rem',
    border: 'none',
  };

  return (
    <div>
      <button onClick={handleClick} style={style}>
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
};

export default Button;
