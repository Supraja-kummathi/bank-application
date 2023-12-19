import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/pages/navbar/Navbar'
import LandingPage from './components/landingpage/LandingPage'

const Layout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Layout
