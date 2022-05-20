import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import MainLayout from './components/layout/MainLayout';

import './scss/index.scss'
import Pop from './components/pop/Pop';
document.title = 'Lee'

const store = configureStore(
  {reducer:rootReducer }
)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MainLayout/>
      <Pop/>
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
