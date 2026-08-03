import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Luma home">
        <span className="brand-mark" aria-hidden="true">L</span>
        <span>Luma</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
      </button>

      <nav
        id="primary-navigation"
        className={menuOpen ? 'primary-nav is-open' : 'primary-nav'}
        aria-label="Primary navigation"
      >
        <a className="active" href="#home" onClick={closeMenu}>Home</a>
        <a href="#features" onClick={closeMenu}>Features</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="header-cta" href="#get-started" onClick={closeMenu}>
          Get started
          <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  )
}

export default Header
