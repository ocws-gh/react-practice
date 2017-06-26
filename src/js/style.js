import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/app'; // componentsの方ではないことに注意

const store = configureStore();
const rootEl = document.getElementById('root'); // 流しこむ対象の要素
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  rootEl
);
