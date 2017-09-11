import React from 'react';
import {render} from 'react-dom';
import App from 'client/main.jsx';
import routes from 'routes/routes.js';

import 'styles/globals.scss';
import 'styles/base/fonts';

render(
  <App />, document.getElementById('app')
);
