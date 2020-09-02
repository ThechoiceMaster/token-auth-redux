import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div>
        <Link to="/">Token-Redux</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/login">lOGIN</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
