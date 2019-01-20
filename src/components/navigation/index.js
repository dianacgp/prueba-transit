import React from "react";
import './index.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

function Nav() {

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark static-top Nav">
      <div className="container">
        <Link className="navbar-brand" to={routes.HOME}>
          <img src={logo} alt="" className="img-fluid"/>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={routes.HOME}>Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={routes.SETTINGS}>Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>    
  );
}

export default Nav;