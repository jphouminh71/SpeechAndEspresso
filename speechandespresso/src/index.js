import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './routes/Cart';
import Shop from './routes/Shop';
import ItemDetails from './routes/ItemDetails';
import Checkout from './routes/Checkout';
import InvalidRoute from './routes/InvalidRoute';
import Products from './routes/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<App />} />
        <Route path='shop' element={<Shop />}>
          <Route path="products" element={<Products />} />
          <Route path='itemdetails/:itemId' element={<ItemDetails />} />
        </Route>
        <Route path='cart' element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
root.render(app);

