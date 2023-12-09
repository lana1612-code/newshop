import React from 'react'
import Footer from '../components/web/footer/Footer.jsx'
import Navbar from '../components/web/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'

export default function() {
  return (
  
        <>
        <Navbar   />
        <Outlet/>
        <Footer/>
        </>
  )
}
