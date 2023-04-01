import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style.css'; // Update this path based on your project structure
import './responsive.css'; // Update this path based on your project structure
import { Link } from "react-router-dom";

const Header = () =>  {
  return (
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>Orthoc</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      {/* Home{' '} */}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      {' '}
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="departments.html">
                      Departments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="doctors.html">
                      Doctors
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="contact.html">
                      Contact Us <span className="sr-only">(current)</span>{' '}
                    </a>
                  </li>
                  <form className="form-inline">
                    <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </header>
  )
}

export default Header;