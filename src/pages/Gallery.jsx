import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Gallery.module.css";

const photos = [
  {
    category: "Mountains",
    title: "The Himalayan Giants",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
    size: "tall",
  },
  {
    category: "Adventure",
    title: "Into the Unknown",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=85",
    size: "wide",
  },
  {
    category: "Nature",
    title: "A Breath of Fresh Air",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    size: "",
  },
  {
    category: "Mountains",
    title: "Above the Clouds",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
    size: "",
  },
  {
    category: "Nature",
    title: "Wild and Wonderful",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
    size: "",
  },
  {
    category: "Adventure",
    title: "The Open Road",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85",
    size: "wide",
  },
  {
    category: "Culture",
    title: "Colours of India",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
    size: "",
  },
  {
    category: "Nature",
    title: "A World of Green",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    size: "",
  },
  {
    category: "Adventure",
    title: "Chasing Horizons",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
    size: "tall",
  },
];

const categories = ["All", "Mountains", "Adventure", "Nature", "Culture"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  function showPrevious() {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.image === selectedPhoto.image
    );
    const previousIndex =
      (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[previousIndex]);
  }

  function showNext() {
    const currentIndex = filteredPhotos.findIndex(
      (photo) => photo.image === selectedPhoto.image
    );
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  }

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
          alt="Mountain peaks beneath a dramatic sky"
        />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>MOMENTS THAT LAST FOREVER</span>
          <h1>
            A world
            <br />
            <span>worth exploring.</span>
          </h1>
          <p>
            A collection inspired by mountain landscapes, open roads,
            extraordinary nature and the joy of discovering somewhere new.
          </p>
          <a href="#gallery-grid" className={styles.primaryButton}>
            Explore the Gallery <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className={styles.heroBottom}>
          <span>THE BEAUTY IS IN THE JOURNEY</span>
          <span>LANDSCAPES · CULTURE · ADVENTURE</span>
        </div>
      </section>

      <section className={styles.gallerySection} id="gallery-grid">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>THE VISUAL JOURNAL</span>
            <h2>
              See the world
              <br />
              <span>differently.</span>
            </h2>
          </div>
          <p>
            Every landscape has a story. Explore this visual collection and
            find inspiration for the journey you want to take next.
          </p>
        </div>

        <div className={styles.filters} aria-label="Filter gallery photos">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.activeFilter : ""
              }`}
              onClick={() => {
                setActiveCategory(category);
                setSelectedPhoto(null);
              }}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.photoGrid}>
          {filteredPhotos.map((photo, index) => (
            <button
              type="button"
              key={`${photo.title}-${index}`}
              className={`${styles.photoCard} ${
                photo.size === "wide" ? styles.wide : ""
              } ${photo.size === "tall" ? styles.tall : ""}`}
              onClick={() => setSelectedPhoto(photo)}
              aria-label={`View photo: ${photo.title}`}
            >
              <img src={photo.image} alt={photo.title} loading="lazy" />
              <span className={styles.photoOverlay} />
              <span className={styles.photoInfo}>
                <span>{photo.category}</span>
                <strong>{photo.title}</strong>
              </span>
              <span className={styles.zoomIcon} aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>

        <p className={styles.galleryNote}>
          Image collection for travel inspiration. Photos are illustrative
          and are not necessarily photographs of specific Discover Himalayas
          tours.
        </p>
      </section>

      <section className={styles.cta}>
        <div>
          <span className={styles.eyebrow}>INSPIRED TO EXPLORE?</span>
          <h2>
            Your own story
            <br />
            starts out there.
          </h2>
          <p>
            Turn your inspiration into a journey. Discover our tours or talk
            to us about your travel ideas.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link to="/tours" className={styles.primaryButton}>
            Explore Our Tours <span aria-hidden="true">↗</span>
          </Link>
          <Link to="/contact" className={styles.secondaryButton}>
            Contact Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {selectedPhoto && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setSelectedPhoto(null);
            if (event.key === "ArrowLeft") showPrevious();
            if (event.key === "ArrowRight") showNext();
          }}
          tabIndex={-1}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close photo"
          >
            ×
          </button>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.previousButton}`}
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <figure
            className={styles.lightboxFigure}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <figcaption>
              <span>{selectedPhoto.category}</span>
              <strong>{selectedPhoto.title}</strong>
            </figcaption>
          </figure>

          <button
            type="button"
            className={`${styles.lightboxArrow} ${styles.nextButton}`}
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}