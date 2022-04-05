import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../App.css';
function navbar() {
  return (
    <div>
      <nav className="navbar  navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="home-logo" src={logo} alt="" />
          </Link>

          <div className="navMenu">
            <Link className="nav-link" aria-current="page" to="/blogs">
              Users List
            </Link>

            <Link
              className="nav-link active"
              aria-current="page"
              to="/blogs/Create"
            >
              Login
            </Link>

            <Link className="nav-link" aria-current="page" to="/blogs/Edit">
              Join
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default navbar;
