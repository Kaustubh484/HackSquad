import React from 'react';
import LOGO from '../hack_logo.jpg'
import {Link, useNavigate} from "react-router-dom"
function NavBar({handleLoginClick}){
  const navigate= useNavigate();
    const handleClick = ()=>{
        handleLoginClick()
    }

return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a class="navbar-brand mx-3" href="/">
      <img src={LOGO} alt="" width="70" height="64"/>
    </a>
    <a className="navbar-brand" href="/">HackSquad</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Us</a>
        </li>
      </ul>
      <li className="d-flex">
      <button  class="btn btn-primary" onClick={()=>{
       

       handleClick();
       navigate('/login');
        }}>Login/Sign up</button>
      </li>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
)}
export default NavBar;