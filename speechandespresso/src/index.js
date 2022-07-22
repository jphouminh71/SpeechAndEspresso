import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Cart from './routes/Cart';
import Shop from './routes/Shop';
import ItemDetailsController from './routes/ItemDetailsController';
import Checkout from './routes/Checkout';
import InvalidRoute from './routes/InvalidRoute';
import Products from './routes/Products';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='shop' element={<Shop />}>
          <Route path="products" element={<Products />} />
          <Route path='itemdetails/:itemId' element={<ItemDetailsController />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>

        <Route path="*" element={<InvalidRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
root.render(app);

