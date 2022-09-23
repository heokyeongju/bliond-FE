import React from 'react';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <Root />
  </CookiesProvider>,
  document.getElementById('root'),
);
reportWebVitals();
