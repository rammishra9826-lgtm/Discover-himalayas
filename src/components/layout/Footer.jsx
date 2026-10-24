
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          DISCOVER <span>HIMALAYAS</span>
        </Link>

        <p>
          Explore the mountains. Discover the extraordinary.
        </p>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/tours">Our Tours</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="copyright">
          © {new Date().getFullYear()} Discover Himalayas.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
