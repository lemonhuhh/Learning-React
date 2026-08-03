import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Portfolio</h2>
          </div>

          <nav>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Collection</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>

          <button className="hire-btn">Hire Me</button>
        </div>
      </header>
    </>
  );
}

export default Header;
