import React from 'react';
import ReactDOM from 'react-dom';
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import MainLayout from './components/layout/MainLayout';

import './index.scss'

document.title = 'Lee'

ReactDOM.render(
  <React.StrictMode>
    <MainLayout/>
  </React.StrictMode>,
  document.getElementById('root')
);
