import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Yeti wear</h2>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Collection">Collection</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
            </ul>
          </nav>

          <button className="hire-btn">Shop Now</button>
        </div>
      </header>
    </>
  );
}

export default Header;
