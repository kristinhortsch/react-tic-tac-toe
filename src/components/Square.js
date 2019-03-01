import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

export default class Square extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  };

  render() {
    return (
      <button className={styles.square} onClick={function() { alert('click'); }}>
        {this.props.value}
      </button>
    );
  }
}
