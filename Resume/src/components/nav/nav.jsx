import React from 'react';
import './nav.css';
import { Link, NavLink } from "react-router";
import logo from '../images/logo1.png'
import "bootstrap/dist/css/bootstrap.min.css";



const Navbar = () => {
  return (
    <nav className="nav-bare">
      
      <NavLink to="/" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}> <div className="nav1">Resume Build
      </div></NavLink>
  

      <ul className="nave">
      <NavLink to="/home" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger" }`}><li>Home</li></NavLink>
        <NavLink to="/templates" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}><li>Templates</li></NavLink>
        <NavLink to="/about"  className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`} ><li >About</li></NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}><li>Contact</li></NavLink>
        <NavLink to="/services" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}><li>services</li></NavLink>
        <NavLink to="/login" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}><li>Login</li></NavLink>
       
      </ul>
    </nav>
  );
};

export default Navbar;
