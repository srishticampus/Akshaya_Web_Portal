import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/navbarlogo.png'
import './LandingNavbar.css'
function LandingNavbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar_bg">
      <div className="container-fluid">
        <Link to='/admin_home' className="text-decoration-none">
          <div className="navbar_logo">
            <img src={logo} className="img-fluid" alt="logo" />
           
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0 mt-3 landingnavbar_text" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item m-3">
              <Link
                to='/admin_home'
                className="nav-link landingnavbar_text"
                aria-current="page"
              
              >
                Home
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                to='/admin_home'
                className="nav-link"
                aria-current="page"
            
              >
                About
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                to='/admin_home'
                className="nav-link"
                aria-current="page"
               
              >
                Contact
              </Link>
            </li>
            <div className="dropdown-center" >
            <li className="nav-item m-3">
              <Link
                to="#"
                className="nav-link "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="text_color_white"
              >
                Services<i className="bi bi-chevron-down"></i>
              </Link>
              <ul className="dropdown-menu landing_dropdown_style" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/ad1" className="dropdown-item">
                    Add 1
                  </Link>
                </li>
               
                <li>
                  <Link to="/ad2" className="dropdown-item">
                    View
                  </Link>
                </li>

                <li>
                  <Link to="/ad3" className="dropdown-item">
                    Ed
                  </Link>
                </li>
              </ul>
            </li>
            </div>
            <div className="dropdown-center" >
            <li className="nav-item m-3">
              <Link
                to="#"
                className="nav-link "
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="text_color_white"
              >
               Login
              </Link>
              <ul className="dropdown-menu landing_dropdown_style" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/admin-login" className="dropdown-item">
                    Admin
                  </Link>
                </li>
               
                <li>
                  <Link to="/akshaya-login" className="dropdown-item">
                    Akshaya
                  </Link>
                </li>

                <li>
                  <Link to="/vo-login" className="dropdown-item">
                   Village Office
                  </Link>
                </li>
                <li>
                  <Link to="/staff-login" className="dropdown-item">
                   Office Staff
                  </Link>
                </li>
              </ul>
            </li>
            </div>
          
          </ul>
          
        </div>
      </div>
    </nav>
  </div>
)
  
}

export default LandingNavbar