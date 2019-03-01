import React from 'react';
import { render } from 'react-dom';
import Game from './components/Game';
// import { Provider } from 'react-redux';
// import store from './store';
import 'normalize.css';

render(
  <Game />,
  document.getElementById('root')
);
