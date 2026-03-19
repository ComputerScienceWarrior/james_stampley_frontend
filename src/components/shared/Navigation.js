import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="nav-wrapper">
      <div className="nav-inner">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          James Stampley
        </Link>

        {/* Nav Items */}
        <div className="nav-items">
          <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
          <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
          <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
          <Link className={`nav-link ${location.pathname === "/resume" ? "active" : ""}`} to="/resume">Resume</Link>
          <Link className={`nav-link ${location.pathname === "/projects" ? "active" : ""}`} to="/projects">Projects</Link>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
