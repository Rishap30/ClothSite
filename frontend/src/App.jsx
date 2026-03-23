import React, { Component } from 'react'
import { Button } from './Components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar/><Home/></>
  },
  {
    path:'/signup',
    element:<><Signup/></>
  },
  {
    path:'/login',
    element:<><Login/></>
  }
])

 const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
