import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './containers/app';

import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <App />,
  document.getElementById('main')
);
