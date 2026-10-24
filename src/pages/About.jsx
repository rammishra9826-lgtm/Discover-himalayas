
import { Link } from "react-router-dom";
import styles from "../styles/About.module.css";

const values = [
  {
    number: "01",
    title: "Local Knowledge",
    text: "Discover places and mountain landscapes with thoughtful planning and a spirit of exploration.",
    icon: "⌖",
  },
  {
    number: "02",
    title: "Adventure First",
    text: "Celebrate the freedom of the open road and the experiences that make every journey memorable.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Personal Journeys",
    text: "Discuss your interests and travel preferences to explore options that suit your adventure.",
    icon: "◇",
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* Clean, bright banner without overlay text */}
      <section className={styles.hero} aria-label="Himalayas banner">
        <img
          className={styles.heroImage}
          src="/images/himalayas-banner.png"
          alt="Discover Himalayas mountain landscape"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className={styles.storyImage}>
          <img
            src="images/aboutus/vinod.jpeg"
            alt="A beautiful landscape waiting to be explored"
            loading="lazy"
          />
          <div className={styles.imageCaption}>
            <span>THE SPIRIT OF EXPLORATION</span>
            <span>01 / OUR STORY</span>
          </div>
        </div>

        <div className={styles.storyContent}>
          <span className={styles.eyebrow}>WHO WE ARE</span>
          <h2>
            The mountains are more than a destination.
            <span> They're a feeling.</span>
          </h2>

          <p>
            Discover Himalayas has been creating adventure travel experiences
            since 1994. With a focus on the Himalayas and journeys across
            India, the brand brings together a passion for exploration,
            mountain landscapes and discovering places beyond the ordinary.
          </p>

          <p>
            From iconic riding regions such as Ladakh and Spiti to journeys
            that explore the diverse character of India, every adventure
            begins with curiosity and a desire to experience the road
            differently.
          </p>

          <Link to="/destinations" className={styles.textLink}>
            Explore our destinations <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceImage}>
          <img
            src="https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=85"
            alt="Mountain peaks stretching into the distance"
            loading="lazy"
          />
        </div>

        <div className={styles.experienceContent}>
          <span className={styles.eyebrow}>
            EXPERIENCE THAT MATTERS
          </span>
          <h2>
            Over three decades
            <br />
            of discovery.
          </h2>
          <p>
            Since 1994, Discover Himalayas has built its identity around
            adventure travel, route knowledge and the distinctive experiences
            that make exploring India memorable.
          </p>

          <div className={styles.experienceFacts}>
            <div>
              <strong>1994</strong>
              <span>Our journey began</span>
            </div>
            <div>
              <strong>Himalayas</strong>
              <span>Our spirit of adventure</span>
            </div>
            <div>
              <strong>India</strong>
              <span>A world to discover</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>WHAT DRIVES US</span>
          <h2>
            The values behind
            <br />
            <span>every adventure.</span>
          </h2>
          <p>
            Great travel is about more than the miles covered. It is about
            the planning, the people and the memories made along the way.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <article className={styles.valueCard} key={value.number}>
              <div className={styles.valueTop}>
                <span>{value.number}</span>
                <span
                  className={styles.valueIcon}
                  aria-hidden="true"
                >
                  {value.icon}
                </span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
              <div className={styles.valueLine} />
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className={styles.quoteSection}>
        <span className={styles.quoteMark} aria-hidden="true">
          “
        </span>
        <p>
          The best part of an adventure is not just where you arrive, but
          everything you discover along the way.
        </p>
        <span className={styles.quoteLabel}>
          THE DISCOVER HIMALAYAS SPIRIT
        </span>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <div>
          <span className={styles.eyebrow}>YOUR NEXT CHAPTER</span>
          <h2>
            Let's find your
            <br />
            next adventure.
          </h2>
          <p>
            Explore our journeys or contact us to discuss your travel ideas
            and preferences.
          </p>
        </div>

        <div className={styles.ctaActions}>
          <Link to="/tours" className={styles.primaryButton}>
            Discover Our Tours <span aria-hidden="true">↗</span>
          </Link>
          <Link to="/contact" className={styles.secondaryButton}>
            Get in Touch <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
