import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import ('./scss/main.scss')

render(
  <App />,
  document.getElementById('root')
)