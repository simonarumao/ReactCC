import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductDetail from './components/productDetails'
import Basket from './components/basket';
import Checkout from './components/checkout';

import { BrowserRouter, Routes,Route } from 'react-router-dom';

// added new routers
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} /> 
        <Route path='basket' element={<Basket />} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='products/:productId' element={<ProductDetail/>} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

