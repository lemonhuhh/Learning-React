import React from "react";

function Header() {
  return (
    <>
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
          <li><a href="/Collection">Collection</a></li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header;
