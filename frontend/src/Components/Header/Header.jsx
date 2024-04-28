import React from "react";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a
          class="navbar-brand"
          href="/"
          style={{ fontSize: 35, fontFamily: "sans-serif", color: "#52BE80" }}
        >
          Jobify
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/alljobs">
                All Jobs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/myjobs">
                My Jobs
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <div class="form-inline my-2 my-lg-0">
            <li
              class="nav-item dropdown"
              style={{ listStyle: "none",  }}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
