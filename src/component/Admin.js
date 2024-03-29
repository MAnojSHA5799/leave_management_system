import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Form, Button,  Container, Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Admin() {
  const [emailadmin, setEmailadmin] = useState("");
  const [passwordadmin, setPasswordadmin] = useState("");

  const navigate = useNavigate();

  function enteruser() {
    console.warn({ emailadmin, passwordadmin });
    let data = { emailadmin, passwordadmin };

    fetch("https://leave-management-backend-yeyj.onrender.com/admin", {
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
        navigate('/Adminuserdata');
      } else {
        alert("User not found");
      }
    })
  }

  return (
    <>
      <a href="./"><img src="Logo.png" href="./About" className="hchild" alt="Logo Image" /></a>
      <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={6} xs={12}>
          <div className="p-3 rounded border">
            <h3 className="text-center" style={{ color: 'white' }}>Admin Login</h3>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  value={emailadmin}
                  placeholder="Enter your email"
                  autoComplete="off"
                  onChange={(e) => setEmailadmin(e.target.value)}
                  name="emailadmin"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={passwordadmin}
                  placeholder="Enter your password"
                  autoComplete="off"
                  onChange={(e) => setPasswordadmin(e.target.value)}
                  name="passwordadmin"
                />
              </Form.Group>

              <Form.Group controlId="formSignUpButton" className="text-center">
                <Button type="button" onClick={enteruser} className="btn-1 mt-2 " style={{ backgroundColor: '#E55A1B' , border: 'none'}}>
                  Login
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
      
    </>
  );
}

export default Admin;
