import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a class="navbar-brand" href="#">
            Hire Me
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        <form class="form-inline">
          {/* <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /> */}
          <ul class="navbar-nav">
            <li class="nav-item active" style={{left:"-20px",position:"relative"}}>
              <a class="nav-link" href="#">
                Login <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <button class="SigninBtn my-2 my-sm-0" type="submit">
            Login
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;