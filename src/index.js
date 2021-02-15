import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import App from 'Scripts/main';
import routes from 'Routes/routes';
// import configureStore from 'Store/configureStore';
import reducers from 'Reducers/index';

// STYLES
import 'Styles/base/fonts';
import './assets/styles/app.scss';

/***** BEGIN -- MOVE TO DB DIR AND USE YARN SCRIPT TO RUN FILE *****/
// // DATABASE
// import MongoClient from 'mongodb';
// import assert from 'assert';
// // Connection URL
// var url = 'mongodb://localhost:27017/';
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   db.close();
// });
/***** END -- MOVE TO DB DIR AND USE YARN SCRIPT TO RUN FILE *****/

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(
  reducers,
  enhancer,
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
