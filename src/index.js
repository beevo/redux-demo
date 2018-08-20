import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './reducers/products-reducer';
import userReducer from './reducers/user-reducer';


const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

// p1 are reducers, p2 is initial state
const store = createStore(
  allReducers,
  {
    products: [{
      name: 'iPhone'
    }],
    user: 'Bee'
  },
  window.devToolsExtension && window.devToolsExtension()
);


const updateUserAction = {
  type: 'updateUser',
  payload: {
    user: 'notBee'
  }
}

store.dispatch(updateUserAction);

ReactDOM.render(
  <Provider store={store}>
    <App fooProp="foo" />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
