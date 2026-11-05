import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import styles from "./Header.module.css";

const navLinks = [
  { name: "Past Tours", path: "/past-tours" },
  { name: "Upcoming Tours", path: "/upcoming-tours" },
  { name: "Custom Tours", path: "/custom-tours" },
  { name: "Journal", path: "/journal" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [bikePosition, setBikePosition] = useState(0);
  const [positionReady, setPositionReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activePath = location.pathname;

  // Header shrinks + turns glassy once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const updateBikePosition = () => {
      const nav = navRef.current;
      const activeLink = linkRefs.current[activePath];

      // Agar current page navbar me nahi hai (jaise Home), bike chhupa do
      if (!nav || !activeLink) {
        setPositionReady(false);
        return;
      }

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setBikePosition(linkRect.left - navRect.left + linkRect.width / 2);
      setPositionReady(true);
    };

    updateBikePosition();

    const frame = requestAnimationFrame(updateBikePosition);
    window.addEventListener("resize", updateBikePosition);

    // Web font load hone par link widths badalti hain, isliye bike ko dobara align karo
    if (document.fonts?.ready) {
      document.fonts.ready.then(updateBikePosition);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateBikePosition);
    };
  }, [activePath]);

  return (
    <header className={`${styles.siteHeader} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo lockup */}
      <NavLink to="/" className={styles.siteLogo} aria-label="Discover Himalayas Home">
        <span className={styles.logoMark}>
          <img src="/images/logo.png" alt="" className={styles.logoImage} />
        </span>

        <span className={styles.logoText}>
          <span className={styles.logoDiscover}>DISCOVER</span>
          <span className={styles.logoHimalayas}>HIMALAYAS</span>
          <span className={styles.logoTag}>Motorcycle tours · Est. 1994</span>
        </span>
      </NavLink>

      {/* Main navigation */}
      <nav
        ref={navRef}
        className={`${styles.bikeNav} ${positionReady ? styles.roadOn : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={link.path}
            to={link.path}
            ref={(element) => {
              linkRefs.current[link.path] = element;
            }}
            style={{ "--i": i }}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}

        {/* Ask about a tour button */}
        <Link to="/contact" className={styles.askButton}>
          Ask about a tour
          <ArrowUpRight size={18} strokeWidth={2.4} className={styles.askArrow} />
        </Link>

        {/* Animated bike indicator */}
        <div
          className={`${styles.bikeMarker} ${positionReady ? styles.bikeReady : ""}`}
          style={{ left: `${bikePosition}px` }}
          aria-hidden="true"
        >
          <span className={styles.bikeGlow} />
          <img src="/images/nav-sticker.png" alt="" className={styles.bikeImage} />
        </div>
      </nav>
    </header>
  );
}