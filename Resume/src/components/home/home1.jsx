import React from 'react'
import './home1.css'
import r1 from '../images/r1.jpg'
import r2 from '../images/r2.jpg'

export default function home1() {
  return (
    <div className='container1'>
      
      <div className="head">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Great Resume's
          </text>
        </svg>
      </div> <br /><br />
      <div className="content">
        <div className="cont1">
          <h1 >The professional <br /> resume builder</h1> <br /><br /><br /><br />
          <h2>Only 2% of resumes win. Yours will be one of them. Let´s  build you a resume that works. Easily create the perfect resume for any job using our best-in-class resume builder platform.
          </h2><br /><br />
          <div className="contain1">


            <div class="container-button">
              <div class="hover bt-1"></div>
              <div class="hover bt-2"></div>
              <div class="hover bt-3"></div>
              <div class="hover bt-4"></div>
              <div class="hover bt-5"></div>
              <div class="hover bt-6"></div>
              <button></button></div>


          </div>

          
        </div>

        <div className="cont2">
      
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
               <img src={r1} alt="" className='img1' />
              </div>
              <div class="flip-card-back">
               <img src={r2} alt="" />
                
              </div>
            </div>
          </div>

        </div>


      </div>

      

   {/* <div className="wrapper">
    <div style={{ '--a': 0 }} className="btn-sensor sensor-n"></div>
    <div style={{ '--a': 45 }} className="btn-sensor sensor-ne"></div>
    <div style={{ '--a': 90 }} className="btn-sensor sensor-e"></div>
    <div style={{ '--a': 135 }} className="btn-sensor sensor-se"></div>
    <div style={{ '--a': 180 }} className="btn-sensor sensor-s"></div>
    <div style={{ '--a': 225 }} className="btn-sensor sensor-sw"></div>
    <div style={{ '--a': 270 }} className="btn-sensor sensor-w"></div>
    <div style={{ '--a': 315 }} className="btn-sensor sensor-nw"></div>

    <button className="btn-button">
      <div className="btn-lid"></div>
      <div className="btn-pupil"></div>
    </button>

    <button className="btn-button">
      <div className="btn-lid"></div>
      <div className="btn-pupil"></div>
    </button>
  </div> */}



    </div> 
  )
}
