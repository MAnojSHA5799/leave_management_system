import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container,Col,Row} from "react-bootstrap";
import Styles from "./Signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [phonenumber, SetPhonenumber] = useState("");
  const [dob, SetDob] = useState("");

  const navigate = useNavigate();

  function saveUser() {
    if (!firstname || !lastname || !email || !password || !phonenumber || !dob) {
      alert("All fields are required");
      return;
    }
    console.warn({ firstname, lastname, email, password, phonenumber, dob });
    let data = { firstname, lastname, email, password, phonenumber, dob };

    fetch("https://leave-management-backend-yeyj.onrender.com/sign", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        console.log("result", result.message);
        const message = result.message;
        if (message) {
          navigate("/Login");
          alert("Signup Successful");
        } else {
          alert("Please enter valid details");
        }
      });
  }

  return (
    <>
      <img src="Logo.png" className={Styles.hchild} alt="Logo Image" />

      <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={6} xs={12}>
          <div className="p-3 rounded border">
            <h3 className="text-center">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={firstname}
                  autoComplete="off"
                  required
                  onChange={(e) => SetFirstname(e.target.value)}
                  name="firstname"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={lastname}
                  required
                  autoComplete="off"
                  onChange={(e) => SetLastname(e.target.value)}
                  name="lastname"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  value={email}
                  required
                  autoComplete="off"
                  onChange={(e) => SetEmail(e.target.value)}
                  name="email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  autoComplete="off"
                  onChange={(e) => SetPassword(e.target.value)}
                  name="password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  value={phonenumber}
                  required
                  autoComplete="off"
                  onChange={(e) => SetPhonenumber(e.target.value)}
                  name="phonenumber"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  autoComplete="off"
                  required
                  onChange={(e) => SetDob(e.target.value)}
                  name="dob"
                />
              </Form.Group>

              <Form.Group className="mb-3 text-center">
                <Button
                  type="button"
                  // Assuming Styles.tton is the class for your button styling
                  className="Styles.tton"
                  onClick={saveUser}
                >
                  Sign Up
                </Button>
              </Form.Group>
            </Form>
          </div>

          <p className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 " style={{ color: 'white' }}>
            Already have an account ?<Link to="/Login" style={{ marginLeft: '7px' }}> Login Here</Link>
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Signup;
