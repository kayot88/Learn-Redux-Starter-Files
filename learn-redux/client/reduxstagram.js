// let's go!
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import * as Sentry from '@sentry/browser';
Sentry.init({
  dsn: 'https://7c2f9467e7a746d99623490ba03fa8f6@sentry.io/1435185'
});
// Sentry.captureException(new Error('This is my fake error message'));



const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);
render(router, document.getElementById('root'));
