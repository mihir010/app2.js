import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/searchEmp" className="nav-item nav-link active">
              Search
            </Link>
            <Link to="/addEmp" className="nav-item nav-link active">
              Add
            </Link>
            <Link to="/editEmp" className="nav-item nav-link active">
              Edit
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
