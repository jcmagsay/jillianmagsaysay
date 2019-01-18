import React from 'react';
import {render} from 'react-dom';
import App from 'Scripts/main';
// import routes from 'Routes/routes';

// STYLES
import 'Styles/base/fonts';
import 'Styles/app';

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

render(
  <App />,
  document.getElementById('app'),
);
