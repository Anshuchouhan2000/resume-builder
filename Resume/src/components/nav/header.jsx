import React from 'react';
import './header.css'
import { Link, NavLink } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sid">
        <div className="container-fluid">
         <NavLink to='/'><a className="navbar-brand" href="#" style={{backgroundColor:red}}>Navbar</a></NavLink> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/home"><a className="nav-link active" aria-current="page" href="#">Home</a></NavLink> 
              </li>
              <li className="nav-item">
              <NavLink to="/link"> <a className="nav-link" href="#">Link</a></NavLink>
              </li>
              <li className="nav-item dropdown">
              <NavLink to="/dropdown"> <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a></NavLink>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
              <NavLink to="/disabled"> <a className="nav-link disabled" aria-disabled="true">Disabled</a></NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <NavLink to="/submit">  <button className="btn btn-outline-success" type="submit">Search</button></NavLink>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
