import React from 'react'
import Home from './Home'
import About from './components/About'
import Projects from './components/proj/Projects'
import Certificates from './components/certificates/Certificate'

const MainHome = () => {
  return (
    <div>
      {/* <div className="background">
        <img src={'./gradient.png'} className="image-gradient" alt="" />
        <div className="layer-blur"></div>
        <div className="layer-blur2"></div>
      </div> */}

            {/* Animated background */}
      <div className="background-animation">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      <Home/>
      <About/>
      <Projects/>
      <Certificates/>
    </div>
  )
}

export default MainHome
