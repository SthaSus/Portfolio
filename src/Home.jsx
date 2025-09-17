import React from 'react'
import './Home.css'
import { Download } from 'lucide-react'


const Home = () => {
  return (
    <div className='vh-100'>
        <div className="row justify-center ms-5 ">
            <div className="about col-7 col-md-7 col-sm-12">
                <div className="d-flex w-full flex-wrap">
                    <div className="col-12 d-flex justify-content-center mb-4">
                        <div className="profile-border"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="0"
                            data-aos-offset="0" 
                            data-aos-duration="1000">
                            <img src={'./image.jpg'} alt="image" className="profile-img" />
                        </div>
                    </div>
                    <div className="name col-12 ">
                        <div data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0" 
                            data-aos-duration="1500"
                            className="tag-box m-auto">
                            <spam className="tag">Sushant Shrestha</spam>
                        </div>
                    </div>
                    <div className="col-12 text-center  pt-4">
                    <h1 
                    data-aos="fade-down"
                    data-aos-easing="ease-out-cubic"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    data-aos-duration="1000" 
                    className='cta-title'
                    >
                    Full-Stack Developer & UI/UX Designer
                    </h1>
                    </div>
                    <div className="description col-12 text-center">
                        <p data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0" 
                        data-aos-duration="2500" className=''>
                            “Detail-oriented Computing with AI student, proficient in full-stack development and artificial intelligence. Interested in applying technical and analytical skills to innovative projects and professional growth.”
                        </p>
                    </div>
                    <div 
                     data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0" 
                        data-aos-duration="2500"
                        className="col-12 pt-4 cv-button-container">
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="download-cv-button"
                        >
                            <Download size={20} />
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>
        
            </div>
            <div className="spline-wrapper col-5 col-sm-12">
        <spline-viewer data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" 
            data-aos-duration="3000" className="robot-3d"
            url="https://prod.spline.design/P-wj8cSkM915EGru/scene.splinecode"
            ></spline-viewer>
            </div>
        </div> 
    </div>
  )
}

export default Home
