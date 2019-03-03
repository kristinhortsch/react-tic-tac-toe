import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

export default function Square({ value, onClick }) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};



