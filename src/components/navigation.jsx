import './product.css';
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand text-light ms-4" to="/flipkart_react">
            Gadgets Store
          </NavLink>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="navbar-brand text-light ms-4" to="/product/get">
                  List Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand text-light ms-4" to="/product/post">
                  Add Products
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="navbar-brand text-light ms-4" to="/login">
                  Logout
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default Navigation;