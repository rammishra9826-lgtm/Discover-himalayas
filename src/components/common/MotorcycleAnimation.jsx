
import { useEffect, useState } from "react";
import styles from "./MotorcycleAnimation.module.css";

export default function MotorcycleAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.rideScene} ${visible ? "" : styles.hidden}`}
      aria-hidden="true"
    >
      <div className={styles.road}>
        <div className={styles.roadLine} />
      </div>

      <div className={styles.motorcycle}>
        <span className={styles.headlight} />
        <svg
          viewBox="0 0 180 100"
          className={styles.bikeSvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className={styles.wheel}>
            <circle cx="39" cy="72" r="24" fill="#102a43" />
            <circle cx="39" cy="72" r="17" fill="#d9f0ff" stroke="#168aad" strokeWidth="3" />
            <circle cx="39" cy="72" r="5" fill="#168aad" />
            <path d="M39 55 V89 M22 72 H56 M27 60 L51 84 M51 60 L27 84" stroke="#168aad" strokeWidth="2" />
          </g>

          <g className={styles.wheel}>
            <circle cx="140" cy="72" r="24" fill="#102a43" />
            <circle cx="140" cy="72" r="17" fill="#d9f0ff" stroke="#168aad" strokeWidth="3" />
            <circle cx="140" cy="72" r="5" fill="#168aad" />
            <path d="M140 55 V89 M123 72 H157 M128 60 L152 84 M152 60 L128 84" stroke="#168aad" strokeWidth="2" />
          </g>

          <path d="M39 72 L69 43 L103 72 L72 72 L58 48 L87 42 L112 49 L140 72"
            fill="none" stroke="#168aad" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" />

          <path d="M68 43 L84 31 L108 34 L122 48 L103 55 L82 52 Z"
            fill="#102a43" stroke="#69d2ff" strokeWidth="2" />

          <path d="M82 32 L75 21 L91 19 L105 32 Z"
            fill="#168aad" stroke="#69d2ff" strokeWidth="2" />

          <path d="M108 34 L122 26 L135 29 L140 39 L124 41"
            fill="none" stroke="#102a43" strokeWidth="5" strokeLinecap="round" />

          <path d="M68 43 L57 33 L49 34"
            fill="none" stroke="#102a43" strokeWidth="5" strokeLinecap="round" />

          <circle cx="110" cy="14" r="10" fill="#d9f0ff" stroke="#168aad" strokeWidth="3" />
          <path d="M104 24 L91 37 L110 45 L121 30"
            fill="#168aad" stroke="#102a43" strokeWidth="4" strokeLinejoin="round" />

          <path d="M107 45 L126 54 L140 72 M93 39 L72 48 L58 68"
            fill="none" stroke="#102a43" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
