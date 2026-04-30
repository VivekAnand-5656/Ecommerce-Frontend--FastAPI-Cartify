import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'  
import AuthProvider from './context/AuthContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddtoCart from './Pages/AddtoCart' 
import Wishlist from './Pages/Wishlist'
import Login from './components/Login'
import Signup from './components/Signup'
import AddProduct from './AdminPages/AddProduct'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='wishlist' element={<Wishlist />} />
              <Route path='cart' element={<AddtoCart />} />
              <Route path='addproduct' element={<AddProduct/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer />
    </>
  )
}

export default App
