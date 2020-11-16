import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header'
import {BrowserRouter} from 'react-router-dom'
import NavbarRoutes from './components/Header/NavbarRoutes'
import { Provider } from 'react-redux';
import store from './store/store'

ReactDOM.render(
  
  <BrowserRouter>
    <Header/>
    <Provider store={store}>
    <NavbarRoutes/>
    </Provider>
  </BrowserRouter>

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
