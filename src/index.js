import React from 'react';
import reportWebVitals from './reportWebVitals';
import Root from './Root';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import './index.css';

ReactDOM.render(
  <RecoilRoot>
    <Root />
  </RecoilRoot>,

  document.getElementById('root'),
);
reportWebVitals();
