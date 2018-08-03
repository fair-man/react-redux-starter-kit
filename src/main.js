import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import configureStore from './store/configureStore';

import('./scss/main.scss');

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory }>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);