import React from 'react';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';
import './index.css';

ReactDOM.render(
  <CookiesProvider>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </CookiesProvider>,
  document.getElementById('root'),
);
reportWebVitals();
