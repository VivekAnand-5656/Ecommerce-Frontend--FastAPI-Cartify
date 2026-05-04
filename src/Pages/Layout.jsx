import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
      <header className=' fixed top-0 w-full z-50  ' ><Navbar /></header>
      <main  className='hero mt-[10vh] ' ><Outlet /></main>
      <footer><Footer /></footer>
    </>
  )
}

export default Layout