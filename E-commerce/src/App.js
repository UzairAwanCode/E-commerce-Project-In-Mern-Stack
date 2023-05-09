import './App.css';
import Navbar from './Components/NavBar/Navbar';
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Account from '../src/Pages/Account/Account'
import Cart from '../src/Pages/Cart/Cart'
import Contact from '../src/Pages/Contact/Contact'
import Product from './Pages/Product/Product';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import Productdetails from './Pages/Product-Details/Productdetails';
import Wishlist from './Pages/Wishlist/Wishlist';
import Refrigerators from './Pages/Refrigerators/Refrigerators';
import Microwave from './Pages/Microwave/Microwave';
import Machines from './Pages/Machines/Machines';
import Reviews from './Pages/Reviews/Reviews';
import Airconditioner from './Pages/Airconditioner/Airconditioners';
import LoginAlready from './Pages/Account/LoginAlready';
import { useEffect, useState } from 'react';
import Searchbar from './Components/NavBar/Searchbar';
import Forgetpassword from './Pages/Account/Forgetpassword';

function App() {
  
  const isLoggedIn = window.localStorage.getItem("loggedIn")

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/search' element={<Searchbar/>} />
        <Route  path='/product' element={<Product/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/account' element={<Account/>} />
        <Route  path='/login' element={<LoginAlready/>} />
        <Route  path='/productdetails/:id' element={<Productdetails/>} />
        <Route  path='/refrigerators' element={<Refrigerators/>} />
        <Route  path='/microwave' element={<Microwave/>} />
        <Route  path='/user/wishlist' element={isLoggedIn=="true"? <Wishlist/> : <Account/>} />
        <Route  path='/buy/cart' element={isLoggedIn=="true" ? <Cart/> : <Account/>} />
        <Route  path='/machines' element={<Machines/>} />
        <Route  path='/product/reviews/:id' element={<Reviews/>} />
        <Route  path='/ac' element={<Airconditioner/>} />
        <Route  path='/forgot-password' element={<Forgetpassword/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
