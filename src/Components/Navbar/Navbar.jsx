// import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/">Products</NavLink>
              </li>
              <li>
                <NavLink to="/women">Women</NavLink>
              </li>
              <li>
                <NavLink to="/men">Men</NavLink>
              </li>
              <li>
                <NavLink to="/kids">Kids</NavLink>
              </li>
              <li>
                <NavLink to="/sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/brands">Brands</NavLink>
              </li>
              <li>
                <NavLink to="/new">New</NavLink>
              </li>
              <li>
                <NavLink to="/sale">Sale</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
