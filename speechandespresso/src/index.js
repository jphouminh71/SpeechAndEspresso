import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './routes/Cart';
import Shop from './routes/Shop'; 
import ItemDetails  from './routes/ItemDetails'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>  
        <Route path='/' element={<App />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/itemdetails' element={<ItemDetails />} />
        <Route path='cart' element={<Cart />} /> 
      </Routes> 
    </BrowserRouter>
</React.StrictMode>
);

root.render(app);

