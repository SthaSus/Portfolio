import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MyRoute from './MyRoute'
import Navbar from './nav-footer/Navbar'
import Footer from './nav-footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <MyRoute/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
