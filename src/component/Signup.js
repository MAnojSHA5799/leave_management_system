import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Signup.module.css";
import { Link } from "react-router-dom";

function Signup() {
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [phonenumber, SetPhonenumber] = useState("");
  const [dob, SetDob] = useState("");

  function saveUser() {
    console.warn({ firstname, lastname, email, password, phonenumber, dob });
    let data = { firstname, lastname, email, password, phonenumber, dob };

    fetch("https://leave-management-backend-lilac.vercel.app/sign", {
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

  const navigate = useNavigate();

  return (
    <>
      <img src="Logo.png" className={Styles.hchild} alt="Logo Image" />
     
      <div className={Styles.maintext}>
        <h2> <b> Sign Up </b> </h2>
        <p>Please fill in this form to create an account</p>
            <input
              type="text" placeholder="First name" 
              value={firstname}
              autoComplete="off"
              onChange={(e) => {
                SetFirstname(e.target.value);
              }}
              name="firstname"
            />
            <br></br>
            <input
              type="text" placeholder="Last name"
              value={lastname}
              autoComplete="off"
              onChange={(e) => {
                SetLastname(e.target.value);
              }}
              name="lastname"
            />
            <br></br>
            <input
              type="text" placeholder="Email"
              value={email}
              autoComplete="off"
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
              name="email"
            /><br></br>
            <input
              type="password" placeholder="password"
              value={password}
              autoComplete="off"
              onChange={(e) => {
                SetPassword(e.target.value);
              }}
              name="password"
            />
            <br></br>
            <input
              type="tel" placeholder="Phone Number"
              value={phonenumber}
              autoComplete="off"
              onChange={(e) => {
                SetPhonenumber(e.target.value);
              }}
              name="phonenumber"
            />
            <br></br>
            <input
              type="date"
              value={dob}
              autoComplete="off"
              onChange={(e) => {
                SetDob(e.target.value);
              }}
              name="dob"
            />
                          <button
                type="button" className={Styles.tton}
                onClick={saveUser}>
                Signup
              </button>
            
            <p className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              Already have an account?<Link to="/Login"> Login Here</Link>
            </p>
            </div>
    </>
  );
}

export default Signup;
