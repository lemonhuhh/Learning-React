import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <h2>Portfolio</h2>
              <p>Building clean, modern and responsive web experiences.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <a href="/">Home</a>
              <a href="/About">About</a>
              <a href="/Collection">Collection</a>
              <a href="/Contact">Contact</a>
            </div>
            <div className="footer-social">
              <h3>Connect</h3>
              <a href="/">GitHub</a>
              <a href="/">LinkedIn</a>
              <a href="/">Instagram</a>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 Portfolio. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
