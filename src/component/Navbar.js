import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

function Navbar() {
  const navigate = useNavigate();

    const logs = () =>{
      // localStorage.setItem('token', '');
      localStorage.removeItem('token')
      navigate('/');
    }

    
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page"> About </NavLink>
        
        </li>
        {/* <li className="nav-item">
            <NavLink to={"/Login"} className="nav-link" aria-current="page"> Login </NavLink>
        </li> */}
        {/* <li className="nav-item">
            <NavLink to={"/Slider"} className="nav-link" aria-current="page"> Slider </NavLink>
        </li> */}
        <li className="nav-item">
            <NavLink to={"/Holiday"} className="nav-link" aria-current="page"> Holiday </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to={"/Userdata"} className="nav-link" aria-current="page"> Userdata </NavLink>
        </li>
      </ul>
      <button className="oo" onClick={logs}> Logout </button>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
  </nav>

    </div>
  );
}

export default Navbar;
