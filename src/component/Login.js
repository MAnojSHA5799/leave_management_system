import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Login.css';

import {Link} from "react-router-dom";

function Login () {

  const [emailr, SetEmailr] = useState("");
  const [passwordr, SetPasswordr] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    window.open("https://www.blitzlearning.in/");
  };

  function enteruser ()
  {
    console.warn({emailr,passwordr})
    let data = {emailr,passwordr}

    fetch("https://leave-management-backend-lilac.vercel.app/datas",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(resp=>{   
      return resp.json();
    }).then((result)=>{
      console.log("result",  result);
      const message = result.message;
      if(message){
        localStorage.setItem('token', result.token);
        navigate('/Userdata');
        
      } else {
        alert("User not found") 
      }
    })
  }

  return (
    <>
     <a href="./"><img src="Logo.png"href="./About" className="hchild" alt="Logo Image" /></a>

  <div className="loginform">


<h1 className="text-center" style={{ color: 'white' }}>Login</h1>

<input type="text" className="form-control" value={emailr} placeholder="Email or username" autoComplete="off" 
onChange={(e)=> {SetEmailr(e.target.value)}} name="emailr" /> 

<input type="password" className="form-control" value={passwordr} placeholder="Password" autoComplete="off" 
onChange={(e)=> {SetPasswordr(e.target.value)}} name="passwordr" /> 

<button type="button" onClick={enteruser} className="btn-1"> Login </button>
<p style={{ color: 'white' }}> Don't have an account? <Link to="/Signup"><b>Signup</b></Link> </p><br></br>

</div>
<div className="midtext">
  <p> Our full-service elearning develpoment accelerates your <br></br>transition from print-to-digital.</p>
  <a onClick={handleClick}  className="btn btn-primary">Visit Website </a><br></br><br></br>
</div>

</>
  );
}

export default Login;
