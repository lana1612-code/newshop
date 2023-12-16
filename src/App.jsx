import React, { useState } from 'react'
//import {Route} from './components/shared/Router.jsx'
import {RouterProvider} from "react-router-dom";
import Layout from './layouts/Layout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Catogory from './components/web/catogories/Catogory.jsx';
import Home from './components/web/home/Home.jsx';
import HomeDashboard from './components/dashboard/home/Home.jsx'
import CatogoryDashboard from './components/dashboard/catogories/Catogory.jsx'
import Register from './components/web/register/Register.jsx';
import {createBrowserRouter} from "react-router-dom";
import Login from './components/web/login/Login.jsx';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import CatogoryDetail from './components/web/catogories/CatogoryDetail.jsx';
import Product from './components/web/product/Product.jsx';
import EmailForgetPassword from './components/web/forgetpassword/EmailForgetPassword.jsx';
import ForgetPassword from './components/web/forgetpassword/ForgetPassword.jsx';
import { CartContext, CartContextProvider } from './components/context/Context.jsx';
import Cart from './components/web/cart/Cart.jsx';
import UserContextProvider, { UserContext } from './components/context/User.jsx';
import {Route} from './components/shared/Router.jsx'
import { useContext } from 'react';
export default function App() {
 let {setUserToken} = useContext(UserContext);

 useEffect(
  ()=>{
   if(localStorage.getItem('userToken') != null){
    setUserToken(localStorage.getItem('userToken'));
   }
  
  } , []
);


  return (
   
    <CartContextProvider>
    <RouterProvider router={Route} />
    </CartContextProvider>
   
  )
}
