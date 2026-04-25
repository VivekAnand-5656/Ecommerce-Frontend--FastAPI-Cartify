import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Login from './components/login'
import Signup from './components/signup' 
import AuthProvider from './context/AuthContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <ToastContainer/>
    </>
  )
}

export default App
