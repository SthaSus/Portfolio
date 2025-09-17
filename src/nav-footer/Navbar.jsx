import React from 'react'
import './Navbar.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  return (
    <header className='header-content'>
      <div className="logo-container">
        <h1 data-aos='fade-down' data-aos-duration="1500" className="logo fw-bold">MyPortfolio</h1>
      </div>
      <nav className='desktop-nav'>
        <a href="#home" data-aos='fade-down' data-aos-duration="1500" className='nav-link'>Home</a>
        <a href="#skills" data-aos='fade-down' data-aos-duration="2000" className='nav-link'>Skills</a>
        <a href="#projects" data-aos='fade-down' data-aos-duration="2500" className='nav-link'>Projects</a>
        <a href="#certificates" data-aos='fade-down' data-aos-duration="3000" className='nav-link'>Certificate</a>
      </nav>
    </header>
  )
}

export default Navbar
