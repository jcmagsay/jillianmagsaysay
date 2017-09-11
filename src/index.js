import React from 'react';
import {render} from 'react-dom';
import App from 'client/main.jsx';
import routes from 'routes/routes.js';

// STYLES
import 'styles/base/fonts';
import 'styles/globals.scss';

render(
  <App />, document.getElementById('app')
);
