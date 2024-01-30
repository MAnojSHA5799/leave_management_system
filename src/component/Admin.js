import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Login.css';

function Admin () {

  const [emailadmin, SetEmailadmin] = useState("");
  const [passwordadmin, SetPasswordadmin] = useState("");
 
//   const [clock,setClock] = useState(20)

  const navigate = useNavigate();

  function enteruser ()
  {
    console.warn({emailadmin,passwordadmin})
    let data = {emailadmin,passwordadmin}

    fetch("https://leave-management-backend-lilac.vercel.app/admin",{
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
        navigate('/Adminuserdata');
        
      } else {
        alert("User not found") 
      }
    })
  }

//   let increment = () =>{

//     setClock(clock+1);
//   }

  return (
    <>
 <a href="./"><img src="Logo.png"href="./About" className="hchild" alt="Logo Image" /></a>
  <div className="loginform">

<h3 className="text-center">Admin Login</h3>
<input type="text" value={emailadmin} placeholder="Enter your email" autoComplete="off" onChange={(e)=> {SetEmailadmin(e.target.value)}} name="emailadmin" /> 

<input type="password" value={passwordadmin} placeholder="Enter your password" autoComplete="off" onChange={(e)=> {SetPasswordadmin(e.target.value)}} name="passwordadmin" />

<button type="button" onClick={enteruser} className="btn-1"> Login </button>


</div>
<br></br><br></br><br></br><br></br><br></br>
<br></br>






</>
  );
}

export default Admin;
