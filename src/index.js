import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main/Main';
import reportWebVitals from './reportWebVitals';
import MainRouter from './Route/MainRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
);

reportWebVitals();
