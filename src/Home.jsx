import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div className='vh-100'>
        <div className="body row justify-center ms-5 ">
            <div className=" col-7 col-md-7 col-sm-12">
                <div className="d-flex w-full flex-wrap">
                    <div className="col-12 justify-center mb-4">
                        <img src={'./image.jpg'} alt="image" data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="0"
                        data-aos-offset="0" 
                        data-aos-duration="1000" className='profile-img m-auto ' />
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
“Detail-oriented Computing with AI student, proficient in full-stack development and artificial intelligence. Interested in applying technical and analytical skills to innovative projects and professional growth.”</p>
                    </div>
                    <div className="col-12 pt-4">
                    <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-offset="0" 
                    data-aos-duration="2500"
                    className="submit-button text-dark text-decoration-none fw-bold rounded-5 w-100 d-block text-center" 
                    >
                    View CV
                    </a>


                    </div>
                </div>
        
            </div>
            <div className="spline-wrapper col-5 col-sm-12">
            </div>
        <spline-viewer data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" 
            data-aos-duration="3000" className="robot-3d"
            url="https://prod.spline.design/P-wj8cSkM915EGru/scene.splinecode"
        ></spline-viewer>
        </div> 
    </div>
  )
}

export default Home
