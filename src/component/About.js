import React, { useEffect } from "react";
import Styles from './About.module.css';
import { useNavigate } from "react-router-dom";
import Front from "./Front.png"

function About() {
  const navigate = useNavigate();

  const logs = () => {
    navigate("/Login");
  };

  const logadmin = () => {
    navigate("/Admin");
  };

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const handleClick = () => {
    window.open("https://biltz-learning.vercel.app/");
  };

  return (
    <>
      <div className={Styles.heading}>  
      <img src={"Logo.png"} className={Styles.logo} alt="Logo Image" />
      <button className={Styles.headerbutton} onClick={logs}> Signup/Login </button>
      <button className={Styles.headerbutton} onClick={logadmin}> Admin </button>
      </div>

      <div className={Styles.downarea}>   
        <img src={Front} alt="check" />             
         <p><span className={Styles.big}>LEAVE MANAGEMENT SYSTEM </span><br></br><br></br>
         A leave management for office is a formal written notification that must provide to your 
         must provide to your employer if your desire to make a specific period off from work.
         <br></br><br></br>You can apply for half-day leave, one-day leave, sick leave, emergency leave,
         maternity leave, paternity leave, casual leave, vacation leave, and annual leave.
         <br></br><br></br>While you can send your leave application as a print letter, most people send an 
         email. 
         </p>
         </div>


         <div className={Styles.text2}>
         <p> Our full-service elearning develpoment accelerates your transition from
         <br></br>print-to-digital </p>
           <a onClick={handleClick}  className="btn btn-primary">Visit Website </a><br></br>
           </div>
     </>
  );
}

export default About;
