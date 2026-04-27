import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
    <header><Navbar/></header>
    <main className='hero' ><Outlet/></main>
    <footer><Footer/></footer>
    </>
  )
}

export default Layout