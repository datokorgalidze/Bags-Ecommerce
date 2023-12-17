import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsContextProvider from './context/products-context';
import CartContextProvider from './context/cart-context';
import UserContextProvider from './context/user-context';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <BrowserRouter>
        <ProductsContextProvider>
          <CartContextProvider>
            <Elements stripe={stripePromise}>
            <UserContextProvider>
             <App/>
            </UserContextProvider>
            </Elements>
          </CartContextProvider>
        </ProductsContextProvider>
      </BrowserRouter>  
  );

  reportWebVitals();
