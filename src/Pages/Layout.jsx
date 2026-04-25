import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <header><Navbar/></header>
    <main className='hero' ><Outlet/></main>
    <footer></footer>
    </>
  )
}

export default Layout