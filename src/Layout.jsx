import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
     <h1 className='bg-red-500'>react</h1>
     <Outlet/>
    </div>
  )
}

export default Layout
