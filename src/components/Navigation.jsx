import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'About', path: '/about', icon: 'user' },
  { label: 'Work', path: '/work', icon: 'work' },
  { label: 'Contact', path: '/contact', icon: 'contact' },
]

function NavIcon({ name }) {
  const paths = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    work: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></>,
    contact: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  }

  return (
    <svg className="mobile-nav-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') setMenuOpen(false)
      if (event.key === 'Tab') {
        const panel = document.getElementById('mobile-navigation')
        const focusable = panel?.querySelectorAll('a[href], button:not([disabled])')
        if (!focusable?.length) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar navbar-expand portfolio-nav sticky-top" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand portfolio-brand" to="/" aria-label="Vamsi Nammi home">
          VN<span>.</span>
        </Link>
        <div className="navbar-nav desktop-nav ms-auto flex-row">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <a className="nav-availability d-none d-sm-flex" href="mailto:nammivamsi131@gmail.com">
          <span /> Available for work
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
        </button>
      </div>
      {menuOpen && createPortal(
        <div className="mobile-menu-layer">
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          />
          <div
            className="mobile-menu-panel"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="mobile-menu-heading">
              <div>
                <span className="mobile-menu-kicker">PORTFOLIO</span>
                <p>Where would you<br />like to go?</p>
              </div>
              <button
                className="mobile-menu-close"
                type="button"
                aria-label="Close navigation menu"
                ref={closeButtonRef}
                onClick={closeMenu}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="mobile-menu-links">
              {navItems.map((item, index) => (
                <NavLink
                  className={({ isActive }) => `mobile-menu-link${isActive ? ' active' : ''}`}
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                >
                  <span className="mobile-menu-link-index">0{index + 1}</span>
                  <NavIcon name={item.icon} />
                  <span className="mobile-menu-link-label">{item.label}</span>
                  <span className="mobile-menu-link-arrow" aria-hidden="true">↗</span>
                </NavLink>
              ))}
            </div>
            <div className="mobile-menu-footer">
              <span><i /> Available for work</span>
              <a href="mailto:nammivamsi131@gmail.com">Let&apos;s connect ↗</a>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </nav>
  )
}
