import React, {useEffect } from 'react'
import './Slider.css';
import MovingText from 'react-moving-text'
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; 

function Slider() {

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
       navigate('/Login');
    }
},[])

  return (
    <>
    <Navbar />
      <div>
     
        <div>
          <img src="Logo.png" className="logoo" alt="" />
          
        </div>

        <div className="container">
          <img src="picture1.png" className="logo1" alt="" />
          <div className="text-block">
            <h4><b>E-Learning Solutions</b></h4>
            <p>That are technology enabled futuristic, and highly scalable</p>
            <button type="button" className="btn btn-warning" onClick={(e) => {
              e.preventDefault();
              window.location.href = 'https://www.youtube.com/watch?v=1XJpId8gf6c';
            }}> Watch Video </button>
          </div>
        </div>

        <MovingText
      type="animation_type"
      Animation name="swing"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
      Click to add more details....
    </MovingText>

        <br></br>
           <div>
           <video controls
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop src="Braodcasting_1_1.mp4"  className="vv" />
          <p className="ff"> Scenario-based learning focuses on contextualizing the activity and learning through simulated real-life scenarios. New employees judge you based on your successful onboarding program. We transform your existing onboarding program into an excellent onboarding experience to your new joiners Informed customers require informed sales training. We design and develop sales training easily adaptable to the ever-changing products, customers, and competition. </p>
           </div>
 
        <div className="aaaa">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="Reduce- Clean technology -1024x683.jpg" className="aaaa" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="beginners-and-experienced.jpg" className="aaaa" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="customer-proximity.jpg" className="aaaa" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>
        </div>
      </div><br></br>
      <div>
        <img src="40080.jpg" alt="" className="center" />
        <p className="ff"> Scenario-based learning focuses on contextualizing the activity and learning through simulated real-life scenarios.  </p>
      </div>
      <div>

      </div>
    </>
  )
}

export default Slider;