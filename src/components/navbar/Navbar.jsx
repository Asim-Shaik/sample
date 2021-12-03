import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo"
            onClick={() => {
              closeMobileMenu();
              scroll.scrollToTop();
            }}
          >
            Neowise
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="home"
                className="nav-links"
                onClick={closeMobileMenu}
                smooth="true"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                className="nav-links"
                onClick={closeMobileMenu}
                smooth="true"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="job"
                className="nav-links"
                onClick={closeMobileMenu}
                smooth="true"
              >
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-links"
                onClick={closeMobileMenu}
                smooth="true"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <NavLink
                to="/webinar"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Webinar
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
