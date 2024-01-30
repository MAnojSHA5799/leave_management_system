import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import './Login.css';

import { Link } from "react-router-dom";

function Login() {

  const [emailr, SetEmailr] = useState("");
  const [passwordr, SetPasswordr] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    window.open("https://www.blitzlearning.in/");
  };

  function enteruser() {
    console.warn({ emailr, passwordr })
    let data = { emailr, passwordr }

    fetch("https://leave-management-backend-lilac.vercel.app/datas", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(resp => {
      return resp.json();
    }).then((result) => {
      console.log("result", result);
      const message = result.message;
      if (message) {
        localStorage.setItem('token', result.token);
        navigate('/Userdata');

      } else {
        alert("User not found")
      }
    })
  }

  return (
    <>
      <a href="./"><img src="Logo.png" href="./About" className="hchild" alt="Logo Image" /></a>

      <div className="loginform">
        <h1 className="text-center" style={{ color: 'white' }}>Login</h1>
        <div className="p-3 rounded border">
          <h3 className="text-center" style={{ color: 'white' }}>Login Form</h3>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email or username</Form.Label>
            <Form.Control type="text" value={emailr} placeholder="Enter email or username" autoComplete="off"
              onChange={(e) => { SetEmailr(e.target.value) }} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={passwordr} placeholder="Password" autoComplete="off"
              onChange={(e) => { SetPasswordr(e.target.value) }} />
          </Form.Group>
          <Form.Group controlId="formSignUpButton" className="text-center">
          <Button type="button" onClick={enteruser}>
            Login
          </Button>
          </Form.Group>
        </Form>
</div>
        <p style={{ color: 'white' }}> Don't have an account? <Link to="/Signup"><b>Signup</b></Link> </p><br></br>
      </div>

      <div className="midtext">
        <p> Our full-service elearning development accelerates your <br></br>transition from print-to-digital.</p>
        <Button variant="primary" onClick={handleClick}>Visit Website</Button><br></br><br></br>
      </div>
    </>
  );
}

export default Login;
