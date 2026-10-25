import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Wrench,
  BedDouble,
  Mountain,
  ArrowLeft,
  ArrowRight,
  Gauge,
  Fuel,
  Truck,
  Utensils,
  ZoomIn,
} from "lucide-react";
import styles from "../styles/HomeHero.module.css";

const tours = [
  {
    title: "Highway to Heaven",
    location: "Himalayan Adventure",
    description:
      "Ride through spectacular mountain roads and discover the magic of the Himalayas.",
    image:
      "images/homepage/heaven.jpeg",
    slug: "highway-to-heaven",
  },
  {
    title: "Little Tibet Tour",
    location: "Ladakh",
    description:
      "Explore dramatic landscapes, high mountain passes and the unique culture of Ladakh.",
    image:
      "images/homepage/tibbat.jpeg",
    slug: "little-tibet-tour",
  },
  {
    title: "Top of the World Tour",
    location: "High Mountain Routes",
    description:
      "Experience an unforgettable journey through extraordinary mountain scenery.",
    image:
      "images/homepage/top.jpeg",
    slug: "top-of-the-world-tour",
  },
];

const reasons = [
  {
    number: "01",
    title: "Local Knowledge",
    text: "Thoughtfully planned journeys informed by a deep appreciation of the mountains.",
  },
  {
    number: "02",
    title: "Adventure & Freedom",
    text: "Discover remarkable landscapes and enjoy the spirit of travelling by motorcycle.",
  },
  {
    number: "03",
    title: "Your Journey, Your Way",
    text: "Choose a tour or contact our team to discuss a customised adventure.",
  },
];

const tourHighlights = [
  {
    number: "01",
    title: "Expert Ride Leaders",
    description:
      "Professional guides with decades of experience, skilled on challenging Himalayan terrain and focused on your safety.",
    icon: Compass,
  },
  {
    number: "02",
    title: "The Freedom to Ride",
    description:
      'Enjoy a flexible "free-riding" style with designated checkpoints, giving you the freedom to ride at your own pace.',
    icon: Mountain,
  },
  {
    number: "03",
    title: "Dedicated Mechanical Support",
    description:
      "An experienced professional mechanic travels with every tour to help keep your motorcycle in top condition throughout the journey.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Hand-Picked Stays",
    description:
      "Stay in carefully selected hotels, heritage guesthouses and scenic mountain camps in breathtaking locations.",
    icon: BedDouble,
  },
  {
    number: "05",
    title: "Rides Built for Everyone",
    description:
      "Choose Adventure, Discovery, Laid-Back or a Custom Route. Every journey is designed to create lasting memories.",
    icon: ShieldCheck,
  },
];

// BIKE GALLERY: change image paths / text here
const bikes = [
  {
    name: "Himalayan 450",
    tab: "Himalayan 450",
    tagline: "Built for the high passes.",
    description:
      "The newest all-rounder in the lineup. A liquid-cooled engine, long-travel suspension and a confident stance make it a natural choice for Ladakh and Spiti, on tarmac or off it.",
    image: "/images/bikes/REHimalayan450.png",
    specs: [
      { label: "Engine", value: "452 cc" },
      { label: "Power", value: "40 PS" },
      { label: "Gearbox", value: "6-speed" },
    ],
  },
  {
    name: "Interceptor 650",
    tab: "Interceptor 650",
    tagline: "Twin-cylinder soul.",
    description:
      "A smooth parallel twin with a classic roadster look. Relaxed at cruising speed and effortless on long highway stretches, it is made for riders who love an easy, comfortable pace.",
    image: "/images/bikes/REInterceptor650.png",
    specs: [
      { label: "Engine", value: "648 cc" },
      { label: "Power", value: "47 PS" },
      { label: "Gearbox", value: "6-speed" },
    ],
  },
  {
    name: "RE 350",
    tab: "RE 350",
    tagline: "Easy to ride, hard to forget.",
    description:
      "Light, friendly and refined. Its easy handling and steady thump make it a great pick for riders who want comfort over distance and a classic Royal Enfield feel.",
    image: "/images/bikes/RE350.png",
    specs: [
      { label: "Engine", value: "349 cc" },
      { label: "Power", value: "20 PS" },
      { label: "Gearbox", value: "5-speed" },
    ],
  },
  {
    name: "RE 411",
    tab: "RE 411",
    tagline: "The proven mountain workhorse.",
    description:
      "A tough, simple and dependable air-cooled single that has carried riders across the Himalayas for years. Strong low-end pull and easy repairs make it ideal for remote roads.",
    image: "/images/bikes/RE411.png",
    specs: [
      { label: "Engine", value: "411 cc" },
      { label: "Power", value: "24 PS" },
      { label: "Gearbox", value: "5-speed" },
    ],
  },
];

const BIKE_SLIDE_MS = 5000;

// BIKE GALLERY: auto-changes every 5 seconds, tap to zoom the description
function BikeGallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hovered, setHovered] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef(null);

  const bike = bikes[index];
  const paused = hovered || zoomed;

  const goTo = (target, dir) => {
    setDirection(dir);
    setZoomed(false);
    setIndex((target + bikes.length) % bikes.length);
  };

  const goNext = () => goTo(index + 1, 1);
  const goPrev = () => goTo(index - 1, -1);

  const selectTab = (target) => {
    if (target === index) return;
    goTo(target, target > index ? 1 : -1);
  };

  const toggleZoom = () => setZoomed((value) => !value);

  const handleZoomKey = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleZoom();
    }
  };

  // Preload all bike images so slides change without flicker.
  useEffect(() => {
    bikes.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 45) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  const slideClass = direction === 1 ? styles.slideNext : styles.slidePrev;

  return (
    <section
      className={`${styles.bikeGallery} ${paused ? styles.isPaused : ""}`}
      id="bike-gallery"
      aria-labelledby="bike-gallery-title"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.bikeGalleryInner}>
        <div className={styles.bikeGalleryHeading}>
          <span className={styles.bikeGalleryEyebrow}>
            <span />
            OUR RIDES
          </span>
          <h2 id="bike-gallery-title">
            Choose your <em>machine.</em>
          </h2>
        </div>

        <div className={styles.bikeGalleryGrid}>
          {/* LEFT: description */}
          <div
            className={`${styles.bikeGalleryCopy} ${
              zoomed ? styles.isZoomed : ""
            }`}
            role="button"
            tabIndex={0}
            aria-pressed={zoomed}
            aria-label={`${bike.name} details. Tap to ${
              zoomed ? "zoom out" : "zoom in"
            }`}
            onClick={toggleZoom}
            onKeyDown={handleZoomKey}
            aria-live="polite"
          >
            <div className={`${styles.bikeGalleryCopyInner} ${slideClass}`} key={index}>
              <span className={styles.bikeGalleryCount}>
                {String(index + 1).padStart(2, "0")}
                <b> / {String(bikes.length).padStart(2, "0")}</b>
              </span>

              <h3 className={styles.bikeGalleryName}>{bike.name}</h3>
              <p className={styles.bikeGalleryTagline}>{bike.tagline}</p>
              <p className={styles.bikeGalleryText}>{bike.description}</p>

              <ul className={styles.bikeGallerySpecs}>
                {bike.specs.map((spec) => (
                  <li key={spec.label}>
                    <strong>{spec.value}</strong>
                    <span>{spec.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <span className={styles.bikeGalleryHint}>
              <ZoomIn size={15} aria-hidden="true" />
              {zoomed ? "Tap to zoom out" : "Tap to zoom"}
            </span>
          </div>

          {/* RIGHT: photo */}
          <div
            className={styles.bikeGalleryStage}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={styles.bikeGalleryPhoto}
              onClick={toggleZoom}
              aria-hidden="true"
            >
              <img
                key={index}
                className={`${styles.bikeGalleryImg} ${slideClass}`}
                src={bike.image}
                alt=""
                draggable="false"
              />
              <span className={styles.bikeGalleryGround} />
            </div>

            <div className={styles.bikeGalleryArrows}>
              <button type="button" aria-label="Previous bike" onClick={goPrev}>
                <ArrowLeft size={19} aria-hidden="true" />
              </button>
              <button type="button" aria-label="Next bike" onClick={goNext}>
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs with 5-second progress */}
        <div className={styles.bikeGalleryTabs} role="tablist" aria-label="Choose a bike">
          {bikes.map((item, i) => (
            <button
              type="button"
              role="tab"
              aria-selected={i === index}
              key={item.name}
              className={`${styles.bikeGalleryTab} ${
                i === index ? styles.tabActive : ""
              }`}
              onClick={() => selectTab(i)}
            >
              <span className={styles.bikeGalleryTabName}>{item.tab}</span>
              <span className={styles.bikeGalleryTrack}>
                {i === index && (
                  <span
                    key={`fill-${index}`}
                    className={styles.bikeGalleryFill}
                    style={{ animationDuration: `${BIKE_SLIDE_MS}ms` }}
                    onAnimationEnd={goNext}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.bikeGalleryFooter}>
          <p>Every tour includes a Royal Enfield, fuel and a mechanic on the road.</p>
          <Link to="/tours" className={styles.bikeGalleryLink}>
            SEE TOURS
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
// What the tour price covers (based on the Little Tibet tour page; check each tour for exact details).
const included = [
  {
    title: "Royal Enfield motorcycle",
    description:
      "Your bike for the whole journey, ready to ride and fully insured.",
    points: ["Comprehensive insurance", "Touring gear provided"],
    icon: Gauge,
  },
  {
    title: "Fuel and oil",
    description:
      "Every litre of fuel and oil is covered, so you never budget at the pump.",
    points: ["All fuel", "All engine oil"],
    icon: Fuel,
  },
  {
    title: "Spares and mechanic",
    description:
      "Replacement parts are included, with a professional mechanic riding along.",
    points: ["All replacement parts", "Mechanic on every tour"],
    icon: Wrench,
  },
  {
    title: "Support jeep",
    description:
      "Ride light. Your luggage travels in the support vehicle behind you.",
    points: ["Baggage carried for you", "Reserved seats for pillions"],
    icon: Truck,
  },
  {
    title: "Handpicked hotels",
    description:
      "Comfortable stays chosen for their location and warmth, shared between two riders.",
    points: ["Double accommodation", "En-suite shower and WC"],
    icon: BedDouble,
  },
  {
    title: "All your meals",
    description:
      "Breakfast, lunch and dinner from the first morning to the last, with drinks on the table.",
    points: ["Breakfast, lunch and dinner", "Non-alcoholic beverages"],
    icon: Utensils,
  },
];

// Counts up from 0 once `active` becomes true. Respects reduced-motion settings.
function CountUp({ to, suffix = "", active }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || to === 0) {
      setValue(to);
      return undefined;
    }

    let frame;
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, to]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

// WHAT'S INCLUDED — animated all-inclusive section
function WhatsIncluded() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Start all animations once the section scrolls into view.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Moves the warm spotlight inside a card to follow the cursor.
  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.included} ${visible ? styles.isVisible : ""}`}
      id="whats-included"
      aria-labelledby="included-title"
    >
      <svg
        className={styles.includedRoute}
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path d="M-40 470 C 160 330, 280 590, 480 450 S 780 280, 1000 420 S 1260 580, 1480 380" />
        <path d="M-40 560 C 200 470, 360 640, 600 540 S 900 400, 1120 520 S 1340 620, 1480 520" />
      </svg>

      <div className={styles.includedInner}>
        <div className={styles.includedHeader}>
          <div>
            <span className={styles.includedLabel}>What&apos;s included</span>
            <h2 className={styles.includedTitle} id="included-title">
              All-inclusive.
              <span>Just bring yourself.</span>
            </h2>
          </div>

          <p className={styles.includedLead}>
            One tour price covers the bike, the fuel, the spares, the hotels
            and every meal. Pack your bag, show up, and leave the logistics to
            us.
          </p>
        </div>

        <div className={styles.includedGrid}>
          {included.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={styles.includedCard}
                key={item.title}
                style={{ "--i": index }}
                onMouseMove={handleMove}
              >
                <div className={styles.includedIcon}>
                  <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <ul className={styles.includedPoints}>
                  {item.points.map((point, pointIndex) => (
                    <li key={point} style={{ "--p": pointIndex }}>
                      <svg
                        className={styles.includedTick}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <circle cx="10" cy="10" r="9" />
                        <path d="M5.8 10.4l2.9 2.9 5.6-6" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className={styles.includedBottom}>
          <ul className={styles.includedStats}>
            <li>
              <strong>
                <CountUp to={30} suffix="+" active={visible} />
              </strong>
              <span>Years on Himalayan roads</span>
            </li>
            <li>
              <strong>
                <CountUp to={14} active={visible} />
              </strong>
              <span>Riders at most in a group</span>
            </li>
            <li>
              <strong>
                <CountUp to={6} active={visible} />
              </strong>
              <span>Essentials covered in your price</span>
            </li>
          </ul>

          <div className={styles.includedActions}>
            <Link to="/tours" className={styles.includedPrimary}>
              See tour prices
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/contact" className={styles.includedGhost}>
              Ask us anything
            </Link>
          </div>
        </div>

        <p className={styles.includedNote}>
          Inclusions shown are based on our guided tours and can vary by tour.
          Please check each tour page for the full details.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Demo content: replace these sample reviews/photos with real, approved customer stories.
  const testimonials = [
    {
      name: "Bob Van Aert, ",
      location: " Belgium",
      tour: "Ladakh Expedition",
      image: "/images/review/Bob Van Aert, Belgium.avif",
      review: "The Little Tibet tour is a stunning journey where every turn reveals stunning vistas of formidable glaciers, picturesque mountains, deep gorges, and turquoise blue waters. Fantastic experience...with a very cool crew...recommended between the chaff!!!",
    },
    {
      name: "Neil",
      location: "Germany",
      tour: "Spiti Valley Tour",
      image: "/images/review/Neil, Germany.avif",
      review: "Riding the tour from Ladakh, with my father and my German friends was an experience of a lifetime ! Unique monasteries, spectacular views, friendly people…and what a ride! Vinod and his team provided a very special tour.  Everything was very well organised and prepared. Due to Vinod’s experience and his very special open and friendly nature,  we got connected to the land and its people in no time wherever we went. For sure we all will take this experience along as a treasure for the years to come.",
    },
    {
      name: "Thierry",
      location: "Belgium",
      tour: "Classic Ladakh Ride",
      image: "/images/review/Thierry, Belgium.avif",
      review: "It is unimaginable what Vinod and his crew did for us during this fabulous “Little Tibet” trip. After travelling India for many years, I thought it would be hard to impress me. I was wrong. Great bikes, great guiding, unbeatable food and accommodation and fantastic interaction with local people. I want more …",
    },
    {
      name: "Alex and Katty",
      location: "La Bourgogne",
      tour: "Himalayan Discovery",
      image: "/images/review/Alex and Katty, La Bourgogne, France.avif",
      review: "What a motorcycle trip it was  through Goa and the south of India !! Every motorcyclist can only dream of this. Vinod and Nadia took us to incredible places which filled us with delight – even as experienced India travellers (we undertook a dozen individual trips earlier).",
    },
    {
      name: "Bernie",
      location: " Belgium",
      tour: "High Mountain Routes",
      image: "/images/review/Bernie, Belgium.avif",
      review: "My experience was so amazing fantastic awesomeI have no words to explain itIm into adventure and like to take challenges I had the opportunity to ride with Vinod to Spiti Little Tibet It was all magic and Spirituality at the same time So close to mother earth all the time every night in comfortable places in beautiful nature On the way back riding over one of the most dangerous tracksin the world the ROHTANG Pass Wet to the bones defying the muddy misty Rohtang road that was fun Yeahh an absolute must to experience in a lifetime Ill be there for another trip promise",
    },
    {
      name: "Didier Ravyts, ",
      location: "Belgium",
      tour: "Spiti Adventure",
      image: "/images/review/Didier Ravyts, Belgium.avif",
      review: "Everything felt personal and well considered, from the itinerary to the little breaks along the way. The landscapes were beautiful and the experience felt truly authentic.",
    },
    {
      name: "Anders, Sweden",
      location: "Sweden",
      tour: "Ladakh Tour",
      image: "/images/review/Anders, Sweden.avif",
      review: "The perfect combination of riding, culture and breathtaking views. The crew knew the region exceptionally well and helped us enjoy the journey with confidence.",
    },
    {
      name: "Chloe Martin",
      location: "France",
      tour: "Himalayan Adventure",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=360&h=360&q=85",
      review: "I loved the feeling of being far away from everyday life. Each day brought a new view, a new road and another reason to be glad I booked this trip.",
    },
    {
      name: "James Carter",
      location: "New Zealand",
      tour: "Top of the World Tour",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=360&h=360&q=85",
      review: "A big adventure made easy by a professional team. The route was extraordinary, the logistics were reliable and the memories will stay with me for years.",
    },
    {
      name: "Aisha Khan",
      location: "United Arab Emirates",
      tour: "Custom Himalayan Ride",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=360&h=360&q=85",
      review: "The custom itinerary matched exactly what we hoped for. We got to explore at our own pace while knowing help was always nearby. I would recommend the experience to any adventure rider.",
    },
  ];

  const visibleTestimonials = 2;
  const maxTestimonialIndex = testimonials.length - visibleTestimonials;

  // Automatically advance by two testimonials every 5 seconds and loop back to the start.
  useEffect(() => {
    const autoSlide = window.setInterval(() => {
      setActiveTestimonial((currentIndex) =>
        currentIndex >= maxTestimonialIndex
          ? 0
          : Math.min(currentIndex + visibleTestimonials, maxTestimonialIndex)
      );
    }, 5000);

    return () => window.clearInterval(autoSlide);
  }, [maxTestimonialIndex]);

  const goToTestimonial = (index) => {
    setActiveTestimonial(
      Math.max(0, Math.min(maxTestimonialIndex, index))
    );
  };

  const scrollTestimonials = (direction) => {
    goToTestimonial(activeTestimonial + direction * visibleTestimonials);
  };

  return (
    <div className="home-page">
      {/* MAIN VIDEO HERO */}
      <section
        className={styles.videoHero}
        aria-label="Discover Himalayas promotional video"
      >
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.videoText}>
          <h1 className={styles.videoTitle}>DISCOVERING HIMALAYAS</h1>
          <p className={styles.videoSubtitle}>SINCE 1994</p>
        </div>

        <div className={`${styles.videoText} ${styles.secondVideoText}`}>
          <h2 className={styles.videoTitle}>
            THE HIMALAYAS ARE CALLING.
          </h2>
          <p className={styles.videoSubtitle}>
            YOUR NEXT ADVENTURE BEGINS HERE.
          </p>
        </div>
      </section>

      {/* WHY TOUR WITH US */}
      <section
        className={styles.whyTour}
        id="why-tour-with-us"
        aria-labelledby="why-tour-title"
      >
        <div className={styles.whyTourInner}>
          <div className={styles.whyTourTop}>
            <div className={styles.whyTourCopy}>
              <span className={styles.whyTourEyebrow}>
                <span className={styles.eyebrowLine} />
                DISCOVER HIMALAYAS · EST. 1994
              </span>

              <h2 className={styles.whyTourTitle} id="why-tour-title">
                WHY TOUR
                <br />
                <span>WITH US?</span>
              </h2>

              <p className={styles.whyTourLead}>
                We don&apos;t just organise rides.
                <br />
                <strong>We live for the road.</strong>
              </p>

              <p className={styles.whyTourDescription}>
                We love riding and so we bring that love of the road to our
                tours. With around 30 years of experience and uncountable
                kilometres under our belt, we take care of every possible
                detail so you can enjoy the ride carefree.
              </p>

              <p className={styles.whyTourDescription}>
                Our team pioneered many iconic rides, including Ladakh,
                Spiti and Goa, and has been connected with India&apos;s
                biking scene since the nineties.
              </p>

              <p className={styles.whyTourDescription}>
                Expect unmatched route knowledge, meticulous planning,
                attention to safety and efficient logistical support.
                Come ride with us and join a family of happy bikers.
              </p>

              <Link to="/about" className={styles.whyTourButton}>
                DISCOVER OUR STORY
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.whyTourVisual}>
              <div className={styles.whyTourImage}>
                <img
                  src="images/homepage/first.jpeg"
                  alt="Dramatic Himalayan peaks and mountain scenery"
                  loading="lazy"
                />

                <div className={styles.imageOverlay} />

                <div className={styles.imageCaption}>
                  <span>THE OPEN ROAD</span>
                  <strong>Find your kind of freedom.</strong>
                </div>
              </div>

              <div className={styles.experienceStamp}>
                <span>RIDING SINCE</span>
                <strong>1994</strong>
                <span>AND STILL EXPLORING</span>
              </div>

              <div className={styles.whyTourDecor} aria-hidden="true">
                DH<span>.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BIKE GALLERY */}
      <BikeGallery />



      {/* WHAT TO EXPECT ON THE TOUR — NEW SECTION */}
      <section
        className={styles.tourExpect}
        id="what-to-expect"
        aria-labelledby="tour-expect-title"
      >
        <div className={styles.tourExpectInner}>
          <div className={styles.tourExpectHeading}>
            <span className={styles.tourExpectEyebrow}>
              <span />
              THE DISCOVER HIMALAYAS EXPERIENCE
            </span>

            <h2 id="tour-expect-title">
              What to Expect
              <br />
              <span>on the Tour.</span>
            </h2>

            <p>
              More than just a ride. Thoughtful planning, expert support and
              the freedom to experience the Himalayas your way.
            </p>
          </div>

          <div className={styles.tourExpectGrid}>
            {tourHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className={styles.tourExpectCard}
                  key={item.number}
                >
                  <div className={styles.tourExpectCardTop}>
                    <div className={styles.tourExpectIcon}>
                      <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                    </div>
                    <span className={styles.tourExpectNumber}>
                      {item.number}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div
                    className={styles.tourExpectCardLine}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>

          <div className={styles.tourExpectBottom}>
            <div>
              <span className={styles.tourExpectBottomLabel}>
                YOUR RIDE. YOUR STORY.
              </span>
              <h3>Ready for the road less travelled?</h3>
            </div>

            <Link to="/tours" className={styles.tourExpectButton}>
              EXPLORE OUR TOURS
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section">
        <div className="section-label">BEYOND THE ORDINARY</div>

        <h2>
          The mountains are calling.
          <br />
          <span>Answer the call.</span>
        </h2>

        <p>
          At Discover Himalayas, we create adventure journeys for riders who
          want to experience more than just the road. Discover incredible
          landscapes, local culture and the freedom of the open road.
        </p>

        <Link to="/about" className="text-link">
          OUR STORY <span>→</span>
        </Link>
      </section>

      {/* FEATURED TOURS */}
      <section className="tour-section">
        <div className="section-heading">
          <div>
            <div className="section-label">FIND YOUR NEXT ADVENTURE</div>
            <h2>Journeys worth taking.</h2>
          </div>

          <Link to="/tours" className="text-link">
            VIEW ALL TOURS <span>→</span>
          </Link>
        </div>

        <div className="tour-grid">
          {tours.map((tour, index) => (
            <article className="tour-card" key={tour.slug}>
              <Link
                to={`/tours/${tour.slug}`}
                className="tour-image-link"
                aria-label={`Explore ${tour.title}`}
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <span className="tour-number">0{index + 1}</span>
              </Link>

              <div className="tour-card-content">
                <p className="tour-location">{tour.location}</p>

                <h3>
                  <Link to={`/tours/${tour.slug}`}>{tour.title}</Link>
                </h3>

                <p className="tour-description">{tour.description}</p>

                <Link
                  to={`/tours/${tour.slug}`}
                  className="tour-link"
                >
                  DISCOVER THIS TOUR <span>↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED — NEW ANIMATED SECTION (middle of the page) */}
      <WhatsIncluded />

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="experience-image">
          <img
            src="images/homepage/last.jpeg" 
            alt="A scenic mountain landscape"
            loading="lazy"
          />

          <div className="experience-badge">
            <strong>1994</strong>
            <span>THE BEGINNING OF OUR JOURNEY</span>
          </div>
        </div>

        <div className="experience-content">
          <div className="section-label">EXPERIENCE THAT MATTERS</div>

          <h2>
            Not just a ride.
            <br />
            <span>A lifetime of memories.</span>
          </h2>

          <p>
            Every great adventure begins with a route worth exploring. Our
            passion for mountain travel inspires journeys that bring together
            incredible roads, unforgettable scenery and meaningful
            experiences.
          </p>

          <Link to="/about" className="btn btn-primary">
            GET TO KNOW US <span>↗</span>
          </Link>
        </div>
      </section>

      {/* WHY TRAVEL WITH US */}
      <section className="reasons-section">
        <div className="section-heading centered">
          <div className="section-label">
            THE DISCOVER HIMALAYAS DIFFERENCE
          </div>
          <h2>Made for the love of adventure.</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.number}>
              <span className="reason-number">{reason.number}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — TWO VISIBLE AT A TIME */}
      <section
        className={styles.riderTestimonials}
        aria-labelledby="rider-testimonials-title"
      >
        <div className={styles.riderTestimonialsInner}>
          <div className={styles.riderTestimonialsHeading}>
            <span className={styles.riderTestimonialsEyebrow}>
              <span />
              WORDS FROM THE ROAD
              <span />
            </span>
            <h2 id="rider-testimonials-title">
              What makes the journey
              <br />
              <span>unforgettable?</span>
            </h2>
          </div>

          <div className={styles.riderTestimonialsToolbar}>
            <span className={styles.riderTestimonialsCount}>
              RIDER STORIES <b>·</b>{" "}
              {String(activeTestimonial + 1).padStart(2, "0")}–{String(
                Math.min(activeTestimonial + visibleTestimonials, testimonials.length)
              ).padStart(2, "0")}{" "}
              <span className={styles.riderTestimonialsCountTotal}>
                / {String(testimonials.length).padStart(2, "0")}
              </span>
            </span>
            <div className={styles.riderTestimonialsControls}>
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => scrollTestimonials(-1)}
                disabled={activeTestimonial === 0}
              >
                <ArrowLeft size={19} aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={() => scrollTestimonials(1)}
                disabled={activeTestimonial >= maxTestimonialIndex}
              >
                <ArrowRight size={19} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className={styles.riderTestimonialsGrid} aria-live="polite">
            {testimonials
              .slice(activeTestimonial, activeTestimonial + visibleTestimonials)
              .map((person) => (
                <article className={styles.riderTestimonial} key={person.name}>
                  <div className={styles.riderTestimonialProfile}>
                    <img src={person.image} alt={`${person.name} portrait`} loading="lazy" />
                    <span className={styles.riderTestimonialImageTint} aria-hidden="true" />
                  </div>
                  <div className={styles.riderTestimonialContent}>
                    <div className={styles.riderTestimonialPerson}>
                      <h3>{person.name}</h3>
                      <span>CLASS OF ‘24 · {person.location.toUpperCase()}</span>
                    </div>
                    <p>{person.review}</p>
                    <span className={styles.riderTestimonialTour}>{person.tour}</span>
                  </div>
                </article>
              ))}
          </div>

          <div className={styles.riderTestimonialsPagination} aria-label="Choose testimonial page">
            {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, index) => (
              <button
                type="button"
                key={index}
                aria-label={`Go to testimonial page ${index + 1}`}
                aria-current={Math.floor(activeTestimonial / visibleTestimonials) === index ? "true" : undefined}
                className={Math.floor(activeTestimonial / visibleTestimonials) === index ? styles.active : ""}
                onClick={() => goToTestimonial(Math.min(index * visibleTestimonials, maxTestimonialIndex))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM TOUR CTA */}
      <section className="custom-cta">
        <div>
          <div className="section-label">YOUR ADVENTURE, YOUR WAY</div>
          <h2>Dream it. Ride it. Live it.</h2>

          <p>
            Have a route in mind? Let&apos;s discuss a journey shaped around
            your interests and travel plans.
          </p>
        </div>

        <Link to="/contact" className="btn btn-primary">
          PLAN A CUSTOM TOUR <span>↗</span>
        </Link>
      </section>

      {/* HOMEPAGE BOTTOM BANNER */}
      <section
        className="home-banner-section"
        aria-label="Discover Himalayas banner"
      >
        <div className="home-banner-wrap">
          <img
            src="/images/himalayas-banner.png"
            alt="Discover the beauty of the Himalayas"
            className="home-banner-image"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}