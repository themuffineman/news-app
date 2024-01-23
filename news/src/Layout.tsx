import React from 'react'
import NavBar from './sections/NavBar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default Layout