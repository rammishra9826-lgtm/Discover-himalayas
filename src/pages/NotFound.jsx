
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-section not-found">
      <p className="eyebrow">OOPS! WRONG TURN</p>
      <h1>404 — Page Not Found</h1>
      <p>
        Looks like this trail leads nowhere. Let's get you
        back to exploring the Himalayas.
      </p>

      <Link to="/" className="hero-button">
        Back to Home
      </Link>
    </section>
  );
}
