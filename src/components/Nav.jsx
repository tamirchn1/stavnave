import React from "react";


function Nav() {
  return (
<nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
      <div className="container">
        <a className="navbar-brand h1" href="/">
          Chef Stav Nave
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#topnav"
          aria-controls="topnav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse text-center flex-row-reverse"
          id="topnav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="/drawings"
              >
                Drawings
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="/paintings"
              >
                Painting
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link hover-underline-animation"
                href="/exhibitions"
              >
                Exhibitions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hover-underline-animation" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;


