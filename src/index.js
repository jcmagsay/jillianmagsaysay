import React from 'react';
import {render} from 'react-dom';
import App from 'client/main';
import routes from 'routes/routes';

// STYLES
import 'styles/base/fonts';
import 'styles/app';

render(
  <App />, document.getElementById('app')
);
