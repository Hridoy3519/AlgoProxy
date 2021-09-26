import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div>
      <div>

        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/"> AlgoProxy </a>

            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="/">
                  All Courses
                </a>
                <a className="nav-link" href="/">
                  Student's Feedback
                </a>
                <a className="nav-link" href="/">
                  Our Instructor
                </a>
                <a className="nav-link" href="/">
                  About Us
                </a>
                <a className="nav-link" href="/">
                  Contacts
                </a>
              </div>
              <div className="d-flex nav-buttons">
                <a className="nav-link" id="cart" href="/">
                  <i class="fas fa-shopping-cart"></i> Cart({props.cart.length})
                </a>
                <a className="nav-link" id="sign-in" href="/">
                  Sign In
                </a>
              </div>
            </div>
            
          </div>
        </nav>

        {/* Header Description */}
        <div className="text-center header-description">
          <h1>LEARN FROM THE BEST</h1>
          <h1 className="bg-color-text">
            Free Enrollment: Upto Courses worth 15000TK.
          </h1>
          <h2 className="offer">
            Get Hands On Experience in Real World Software Development from
            Industry Experts Through <br /> Practical and Real World Courses.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
