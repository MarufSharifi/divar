import {createStore, applyMiddleware} from 'redux';
import Reducers from '../redux/CombinReducers';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(Reducers, applyMiddleware(...middlewares));

export default store;
