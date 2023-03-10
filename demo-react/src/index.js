import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import Contents from './Contents';

import './style.css';

const wrap = ReactDOM.createRoot(document.getElementById('wrap'));
wrap.render(
  <React.StrictMode>
    <Header />
    <Contents />
  </React.StrictMode>,
);
