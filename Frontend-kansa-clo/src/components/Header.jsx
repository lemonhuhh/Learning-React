import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const navbar = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/About",
    },
    {
      name: "Collection",
      to: "/Collection",
    },
    {
      name: "Contact",
      to: "/Contact",
    },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h2>Yeti wear</h2>
          </div>
          <div className="nav-links">
            {navbar.map((nav) => (
              <li
                key={nav.name}
                onClick={() => navigate(nav.to)}
                className="links"
              >
                {nav.name}
              </li>
            ))}
          </div>
          <button className="hire-btn">Shop Now</button>
        </div>
      </header>
    </>
  );
}

export default Header;
