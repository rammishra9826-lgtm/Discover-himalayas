import { Link, useParams } from "react-router-dom";
import styles from "../styles/Tourdetails.module.css";

const tours = {
  "highway-to-heaven": {
    number: "01",
    title: "Highway to Heaven",
    subtitle: "Ride beyond the ordinary.",
    region: "Himalayas, India",
    category: "Motorcycle Adventure",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85",
    description:
      "Discover the thrill of mountain roads, dramatic landscapes and the freedom of travelling through the Himalayas. This tour is designed for riders who want to experience the journey as much as the destination.",
    highlights: [
      "Spectacular mountain scenery",
      "Memorable high-altitude road experiences",
      "Opportunities to discover local culture",
      "A motorcycle adventure with a spirit of exploration",
    ],
    overview:
      "A mountain journey focused on scenic roads, exploration and the unforgettable atmosphere of the Himalayas.",
  },
  "little-tibet-tour": {
    number: "02",
    title: "Little Tibet Tour",
    subtitle: "Discover a world apart.",
    region: "Ladakh, India",
    category: "Culture & Motorcycle Adventure",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85",
    description:
      "Explore the distinctive landscapes and cultural character of Ladakh, a Himalayan region known for rugged mountains, peaceful monasteries and wide-open valleys.",
    highlights: [
      "Explore Ladakh's dramatic mountain scenery",
      "Discover Himalayan cultural traditions",
      "Experience remote landscapes and open valleys",
      "Enjoy the spirit of adventure and discovery",
    ],
    overview:
      "A journey inspired by Ladakh's unique blend of high mountain landscapes, cultural heritage and remote Himalayan settings.",
  },
  "top-of-the-world-tour": {
    number: "03",
    title: "Top of the World Tour",
    subtitle: "Find your horizon.",
    region: "High Himalayas, India",
    category: "High-Altitude Adventure",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2000&q=85",
    description:
      "Set your sights on the high Himalayas, where rugged peaks, winding mountain roads and expansive views create a powerful sense of adventure.",
    highlights: [
      "Impressive Himalayan mountain views",
      "A journey shaped by adventure and discovery",
      "Explore dramatic high-mountain landscapes",
      "Capture unforgettable moments along the way",
    ],
    overview:
      "A high-mountain adventure celebrating the scale, beauty and challenge of the Himalayas.",
  },
  "goa-south-india-tour": {
    number: "04",
    title: "Goa & Authentic South India",
    subtitle: "Follow the road to the coast.",
    region: "Goa & South India",
    category: "Road Trip & Cultural Discovery",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85",
    description:
      "Discover a different side of India through coastal scenery, regional culture and the distinctive atmosphere of Goa and South India.",
    highlights: [
      "Discover coastal landscapes",
      "Experience regional culture and traditions",
      "Explore the character of southern India",
      "Enjoy a journey beyond the usual tourist route",
    ],
    overview:
      "A road-trip concept bringing together coastal scenery, regional character and cultural discovery in southern India.",
  },
  "royal-rajasthan-tour": {
    number: "05",
    title: "Royal Rajasthan Tour",
    subtitle: "Travel through living history.",
    region: "Rajasthan, India",
    category: "Heritage & Road Trip",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=2000&q=85",
    description:
      "Experience the colourful character of Rajasthan, a region celebrated for its historic architecture, desert landscapes, forts and royal heritage.",
    highlights: [
      "Discover historic forts and architecture",
      "Explore Rajasthan's colourful heritage",
      "Experience distinctive regional traditions",
      "Enjoy the changing landscapes of western India",
    ],
    overview:
      "A heritage-focused journey through Rajasthan's history, architecture, regional culture and striking landscapes.",
  },
  "goa-to-kanyakumari": {
    number: "06",
    title: "Goa to Kanyakumari",
    subtitle: "A Wildlife Spice Trail",
    region: "Western & Southern India",
    category: "Nature & Road Trip",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2000&q=85",
    description:
      "Follow a journey concept inspired by nature, wildlife and spice-growing regions, travelling through the varied landscapes of western and southern India.",
    highlights: [
      "Discover lush natural landscapes",
      "Explore the character of spice-growing regions",
      "Appreciate India's biodiversity",
      "Experience the changing scenery along the route",
    ],
    overview:
      "A nature-inspired road-trip concept connecting Goa with India's southern tip through varied landscapes and regional experiences.",
  },
};

export default function TourDetails() {
  const { slug } = useParams();
  const tour = tours[slug];

  if (!tour) {
    return (
      <section className={styles.notFound}>
        <span className={styles.eyebrow}>DISCOVER HIMALAYAS</span>
        <h1>Tour not found</h1>
        <p>
          This tour may have moved, or the link may be incorrect. Explore our
          available tour collection to find your next adventure.
        </p>
        <Link to="/tours" className={styles.primaryButton}>
          Explore All Tours <span aria-hidden="true">→</span>
        </Link>
      </section>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src={tour.image}
          alt={`${tour.title} — travel landscape`}
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <Link to="/tours" className={styles.backLink}>
            <span aria-hidden="true">←</span> All Tours
          </Link>

          <p className={styles.eyebrow}>
            {tour.category} <span>·</span> {tour.region}
          </p>

          <span className={styles.tourNumber}>TOUR {tour.number}</span>
          <h1>{tour.title}</h1>
          <p className={styles.subtitle}>{tour.subtitle}</p>

          <Link to="/contact" className={styles.primaryButton}>
            Enquire About This Tour <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.heroBottom}>
          <span>YOUR NEXT ADVENTURE STARTS HERE</span>
          <span className={styles.scrollMark}>↓ EXPLORE</span>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.overviewIntro}>
          <span className={styles.eyebrow}>THE JOURNEY</span>
          <h2>
            More than a destination.
            <br />
            <span>A story waiting to unfold.</span>
          </h2>
        </div>

        <div className={styles.overviewText}>
          <p>{tour.description}</p>
          <p>{tour.overview}</p>
          <p className={styles.note}>
            Looking for confirmed dates, duration, inclusions or route details?
            Contact our team for current tour information and availability.
          </p>
        </div>
      </section>

      <section className={styles.highlightsSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>WHAT TO LOOK FORWARD TO</span>
            <h2>Journey highlights</h2>
          </div>
          <p>
            Every journey has its own character. Here are some of the
            experiences this tour is designed to celebrate.
          </p>
        </div>

        <div className={styles.highlightGrid}>
          {tour.highlights.map((highlight, index) => (
            <article className={styles.highlightCard} key={highlight}>
              <span className={styles.highlightNumber}>
                0{index + 1}
              </span>
              <span className={styles.highlightIcon} aria-hidden="true">
                {["✳", "⌁", "◇", "↗"][index]}
              </span>
              <h3>{highlight}</h3>
              <span className={styles.cardLine} />
            </article>
          ))}
        </div>
      </section>

      <section className={styles.customSection}>
        <div className={styles.customImageWrap}>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
            alt="Scenic landscape for a travel adventure"
            loading="lazy"
          />
        </div>

        <div className={styles.customContent}>
          <span className={styles.eyebrow}>MAKE IT YOURS</span>
          <h2>Your journey. Your way.</h2>
          <p>
            Have a particular destination in mind, or want to discuss travel
            dates and arrangements? Get in touch with Discover Himalayas to
            discuss your preferences and available options.
          </p>
          <Link to="/contact" className={styles.primaryButton}>
            Plan Your Adventure <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className={styles.moreTours}>
        <div>
          <span className={styles.eyebrow}>KEEP EXPLORING</span>
          <h2>The mountains are calling.</h2>
        </div>
        <Link to="/tours" className={styles.outlineButton}>
          Discover All Tours <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}