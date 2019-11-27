import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { RootSaga } from './Middleware/index';
import createSagaMiddleware from 'redux-saga';
import { NewsReducer } from './Reducers/NewsReducer';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import './index.css';
import AppRouter from './Route/AppRouter';
import * as serviceWorker from './serviceWorker';

const saga = createSagaMiddleware();

const store = createStore(NewsReducer, applyMiddleware(saga,logger));
saga.run(RootSaga);
ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
