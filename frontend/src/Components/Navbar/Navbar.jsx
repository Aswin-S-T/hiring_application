import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="navbar-container container-fluid">
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/alljobs">Jobs</a>
            </li>
            <li>
              <a href="/my-jobs">My jobs</a>
            </li>
            <li>
              <a href="#">Interviews</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register" className="loginBnt text-white">Sign Up</a>
            </li>
          </ul>
          <h1 class="logo">CareerLinker</h1>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
