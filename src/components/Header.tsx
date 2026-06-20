import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-logo">
          <span className="logo-icon">🗂️</span>
          <div>
            <div className="logo-text">CLASSIFIED ARCHIVE</div>
            <div className="logo-sub">EYES ONLY — CLEARANCE REQUIRED</div>
          </div>
        </Link>

        <nav className="header-nav">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Archive
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            About
          </Link>
        </nav>

        <div className="header-status">
          <span className="status-dot" />
          <span>SECURE CONNECTION</span>
        </div>
      </div>
    </header>
  );
}
