import { Link } from "react-router-dom";
import styles from "../styles/Tours.module.css";

const tours = [
  {
    number: "01",
    name: "Highway to Heaven",
    region: "HIMALAYAN ADVENTURE",
    description:
      "Discover dramatic valleys, mountain roads and unforgettable Himalayan landscapes.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    slug: "highway-to-heaven",
  },
  {
    number: "02",
    name: "Little Tibet Tour",
    region: "LADAKH · CULTURE · MOUNTAINS",
    description:
      "Experience the distinctive landscapes and cultural heritage of the high Himalayas.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=85",
    slug: "little-tibet-tour",
  },
  {
    number: "03",
    name: "Top of the World Tour",
    region: "HIGH PASSES · LADAKH",
    description:
      "Explore spectacular mountain scenery and the remarkable roads of the Himalayan region.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    slug: "top-of-the-world-tour",
  },
  {
    number: "04",
    name: "Goa & Authentic South India",
    region: "COASTAL ROADS · SOUTH INDIA",
    description:
      "Discover the diverse scenery, regional culture and memorable journeys of southern India.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85",
    slug: "goa-south-india-tour",
  },
  {
    number: "05",
    name: "Royal Rajasthan Tour",
    region: "HERITAGE · DESERT · CULTURE",
    description:
      "Experience Rajasthan's distinctive heritage, colourful towns and beautiful landscapes.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
    slug: "royal-rajasthan-tour",
  },
  {
    number: "06",
    name: "Goa to Kanyakumari",
    region: "SOUTH INDIA · WILDLIFE · SPICE TRAIL",
    description:
      "Explore southern India's varied landscapes and cultural experiences on an exciting journey.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    slug: "goa-to-kanyakumari",
  },
];

export default function Tours() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroImage} />

        <div className={styles.heroContent}>
          <p className={styles.label}>FIND YOUR NEXT ADVENTURE</p>

          <h1>
            THE JOURNEY
            <br />
            <span>STARTS HERE.</span>
          </h1>

          <p className={styles.heroDescription}>
            From the mighty Himalayas to the diverse landscapes of India,
            discover journeys that stay with you long after the ride ends.
          </p>

          <a href="#all-tours" className={styles.primaryButton}>
            EXPLORE TOURS <span>↓</span>
          </a>
        </div>

        <span className={styles.sideLabel}>
          RIDE · EXPLORE · DISCOVER
        </span>

        <span className={styles.heroBottom}>INDIA · BEYOND THE ORDINARY</span>
      </section>

      <section className={styles.intro}>
        <p className={styles.label}>DISCOVER HIMALAYAS · SINCE 1994</p>

        <h2>
          EVERY ROAD HAS
          <br />
          <span>A STORY TO TELL.</span>
        </h2>

        <p>
          Explore our featured journeys or contact us to discuss a trip
          tailored around your interests and travel plans.
        </p>
      </section>

      <section className={styles.tourSection} id="all-tours">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.label}>EXPLORE OUR JOURNEYS</p>
            <h2>
              PICK YOUR
              <br />
              <span>OWN ROAD.</span>
            </h2>
          </div>

          <span className={styles.tourCount}>06 JOURNEYS TO EXPLORE</span>
        </div>

        <div className={styles.tourGrid}>
          {tours.map((tour, index) => (
            <article
              className={styles.tourCard}
              key={tour.number}
              style={{ "--card-index": index }}
            >
              <Link
                to={`/tours/${tour.slug}`}
                className={styles.tourImageLink}
                aria-label={`Explore ${tour.name}`}
              >
                <img
                  src={tour.image}
                  alt={`${tour.name} destination landscape`}
                  loading="lazy"
                />

                <span className={styles.tourNumber}>{tour.number}</span>
                <span className={styles.tourArrow}>↗</span>
              </Link>

              <div className={styles.tourContent}>
                <p className={styles.region}>{tour.region}</p>
                <h3>{tour.name}</h3>
                <p className={styles.description}>{tour.description}</p>

                <Link
                  to={`/tours/${tour.slug}`}
                  className={styles.tourLink}
                >
                  EXPLORE THIS TOUR <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.customSection}>
        <div className={styles.customContent}>
          <p className={styles.label}>YOUR TRIP, YOUR WAY</p>

          <h2>
            DREAM IT.
            <br />
            <span>WE'LL PLAN IT.</span>
          </h2>

          <p>
            Have a destination in mind? Contact our team to discuss a
            customised journey around your interests and plans.
          </p>

          <Link to="/contact" className={styles.primaryButton}>
            PLAN YOUR ADVENTURE <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}