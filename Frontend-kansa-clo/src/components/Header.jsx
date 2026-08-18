import React from "react";
import { useNavigate, Link } from "react-router-dom";
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

  const heronav = () => {};

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Link to="/" className="logo-badge">Yeti Wear</Link>
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
