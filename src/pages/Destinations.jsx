import { Link } from "react-router-dom";
import styles from "../styles/Destinations.module.css";

const destinations = [
  {
    number: "01",
    name: "Ladakh",
    region: "The Land of High Passes",
    description:
      "Discover dramatic mountain landscapes, vast valleys, monasteries and the unforgettable atmosphere of the high Himalayas.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    tour: "Little Tibet Tour",
    slug: "little-tibet-tour",
  },
  {
    number: "02",
    name: "Spiti Valley",
    region: "A World Beyond Ordinary",
    description:
      "Explore rugged mountain scenery, quiet villages and the distinctive landscapes of this remote Himalayan valley.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    tour: "Highway to Heaven",
    slug: "highway-to-heaven",
  },
  {
    number: "03",
    name: "Himachal Pradesh",
    region: "Into the Mountains",
    description:
      "Experience forested hills, winding mountain roads and peaceful Himalayan surroundings in northern India.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    tour: "Highway to Heaven",
    slug: "highway-to-heaven",
  },
  {
    number: "04",
    name: "Rajasthan",
    region: "A Land of Royal Heritage",
    description:
      "Discover colourful traditions, historic architecture, desert landscapes and the cultural richness of western India.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
    tour: "Royal Rajasthan Tour",
    slug: "royal-rajasthan-tour",
  },
  {
    number: "05",
    name: "Goa",
    region: "Where the Road Meets the Coast",
    description:
      "Enjoy coastal scenery, a distinctive regional character and the relaxed atmosphere of India's western shoreline.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    tour: "Goa & Authentic South India",
    slug: "goa-south-india-tour",
  },
  {
    number: "06",
    name: "Southern India",
    region: "Nature, Culture & Discovery",
    description:
      "Explore changing landscapes, rich local traditions and nature-inspired journeys through India's southern regions.",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
    tour: "Goa to Kanyakumari",
    slug: "goa-to-kanyakumari",
  },
];

export default function Destinations() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
          alt="Majestic mountain landscape"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>FIND YOUR NEXT HORIZON</span>
          <h1>
            Places that
            <br />
            <span>stay with you.</span>
          </h1>
          <p>
            From mighty Himalayan peaks to colourful cultural landscapes,
            discover the places that make every journey unforgettable.
          </p>
          <a href="#destination-list" className={styles.primaryButton}>
            Explore Destinations <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.heroBottom}>
          <span>EXPLORE BEYOND THE ORDINARY</span>
          <span>INDIA · ADVENTURE · DISCOVERY</span>
        </div>
      </section>

      <section className={styles.intro}>
        <div>
          <span className={styles.eyebrow}>THE WORLD IS WAITING</span>
          <h2>
            Every destination
            <br />
            <span>has a story.</span>
          </h2>
        </div>
        <p>
          The right journey is about more than reaching a place. It is about
          the landscapes you cross, the cultures you encounter and the
          memories you bring home. Explore these destinations and find the
          adventure that speaks to you.
        </p>
      </section>

      <section
        className={styles.destinationSection}
        id="destination-list"
      >
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>EXPLORE INDIA</span>
            <h2>Choose your adventure.</h2>
          </div>
          <span className={styles.destinationCount}>06 DESTINATIONS</span>
        </div>

        <div className={styles.destinationGrid}>
          {destinations.map((destination) => (
            <article
              className={styles.destinationCard}
              key={destination.number}
            >
              <Link
                to={`/tours/${destination.slug}`}
                className={styles.imageLink}
                aria-label={`Explore ${destination.name}`}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                />
                <span className={styles.number}>
                  {destination.number}
                </span>
                <span className={styles.imageArrow} aria-hidden="true">
                  ↗
                </span>
                <span className={styles.imageOverlay} />
              </Link>

              <div className={styles.cardContent}>
                <span className={styles.region}>{destination.region}</span>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>

                <div className={styles.cardFooter}>
                  <span>{destination.tour}</span>
                  <Link
                    to={`/tours/${destination.slug}`}
                    aria-label={`View ${destination.tour}`}
                  >
                    Discover <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <span className={styles.eyebrow}>YOUR JOURNEY, YOUR WAY</span>
          <h2>
            Your dream destination
            <br />
            is just the beginning.
          </h2>
          <p>
            Tell us what inspires you, and let's discuss a journey tailored
            to your interests and travel plans.
          </p>
          <Link to="/contact" className={styles.primaryButton}>
            Plan Your Adventure <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}