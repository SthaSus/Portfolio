import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './components/About'
import Projects from './components/proj/Projects'
import MainHome from './MainHome'
import CreateProject from './components/proj/CreateProject'
import CreateCertificate from './components/certificates/CreateCertificate'

const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainHome/>}/>
        {/* 
        I created create project but didn't implemented in header and footer so i can directly access it for now 
        I'll update it in near future so only user with my email could open this url
        */}
        <Route path='/createproject' element={<CreateProject/>}/> 
        <Route path='/createcertificate' element={<CreateCertificate/>}/>
        
      </Routes>
    </div>
  )
}

export default MyRoute
