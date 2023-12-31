import { Route } from 'react-router-dom';
import {  Routes } from 'react-router-dom';
import HomePage from './components/home-page';
import Shop from './components/pages/shop';
import SinglePrduct from './components/single-product/single-product';
import CartPage from './components/pages/cart-page/cart-page';
import SignUp from './components/sign-up/sign-up';
import SignIn from './components/sign-in/sign-in';
import Checkout from './components/checkout/checkout';
import Success from './components/checkout/stripe-checkout/success';
import NotFound from './components/not-found';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
       <ToastContainer position="top-center"/>
      <Routes>
         <Route exact path='/' element = {<HomePage/>}/>
         <Route path='/shop' element = {<Shop/>} />
         <Route path='/sign-up' element = {<SignUp/>} />
         <Route path='/sign-in' element = {<SignIn/>} /> 
         <Route path='/product/:id' element = {<SinglePrduct/>}/>
         <Route path='/cart' element = {<CartPage/>}/>
         <Route path='/checkout' element = {<Checkout/>}/>
         <Route path='/success' element = {<Success/>} />
         <Route path='*' element = {<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
