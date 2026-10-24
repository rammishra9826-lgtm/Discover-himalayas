import { useState } from "react";
import styles from "../styles/HighwayThroughHeaven.module.css";

const highlights = [
  {
    number: "01",
    title: "Rohtang Pass",
    detail: "Ride over the challenging 3,980 m pass into the Chandra Valley.",
  },
  {
    number: "02",
    title: "Shingo La",
    detail: "Cross the rugged high-altitude trail connecting Lahaul and Zanskar.",
  },
  {
    number: "03",
    title: "Zanskar Heritage",
    detail: "Discover Bardan Monastery, Karsha Temple and the old Zangla Palace.",
  },
  {
    number: "04",
    title: "Sisir La & Senge La",
    detail: "Take on remote mountain roads and hairpin bends into the Indus Valley.",
  },
  {
    number: "05",
    title: "Sham Valley & Likir",
    detail: "Visit the historic Basgo ruins and the famous Likir Monastery.",
  },
  {
    number: "06",
    title: "Manali–Leh Highway",
    detail: "Ride the legendary Himalayan road across dramatic high mountain passes.",
  },
];

const passes = [
  { name: "Rohtang Pass", altitude: "3,980 m" },
  { name: "Shingo La", altitude: "5,105 m" },
  { name: "Sisir La", altitude: "4,790 m" },
  { name: "Senge La", altitude: "5,060 m" },
  { name: "Tanglang La", altitude: "5,390 m" },
  { name: "Lachung La", altitude: "5,065 m" },
  { name: "Nakee La", altitude: "4,739 m" },
  { name: "Baralacha La", altitude: "5,030 m" },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival in Kullu & Naggar",
    distance: "Arrival day",
    description:
      "Arrive at Kullu from Delhi and transfer to Naggar. Enjoy the lush Kullu Valley, a welcome lunch and time to relax. Explore the traditional village, its ancient temples, rice fields and forests. Stay at Ragini Hotel and Cottages.",
  },
  {
    day: 2,
    title: "Jana Waterfall & Motorcycle Familiarisation",
    distance: "Approx. 60 km",
    description:
      "Get familiar with the Royal Enfield motorcycle and local traffic conditions. Take a short practice ride around the area, with a lunch stop near Jana Waterfall, before preparing for the mountain route ahead.",
  },
  {
    day: 3,
    title: "Naggar to Keylong via Rohtang Pass",
    distance: "Approx. 120 km",
    description:
      "Begin the motorcycle journey after breakfast. Cross Rohtang Pass, with views of the Pir Panjal Range, then descend into the drier Lahaul Valley. Follow the Chandra River past Tandi, where the Chandra and Bhaga rivers meet, and arrive in Keylong for an overnight hotel stay.",
  },
  {
    day: 4,
    title: "Exploring Lahaul Valley, Udaipur & Trilokinath",
    distance: "Approx. 150 km",
    description:
      "Explore Lahaul to help acclimatise before the higher passes. Ride beside the Chandra-Bhaga River and visit the ancient Shiva temple at Trilokinath, cared for by Buddhist monks. Across the river, discover Udaipur's old goddess temple, known for its wood carvings. Overnight in Jispa.",
  },
  {
    day: 5,
    title: "Jispa to Padum over Shingo La",
    distance: "Approx. 150 km",
    description:
      "Take on one of the tour's most demanding stages. Cross the recently opened Shingo La Pass at approximately 5,105 m, with rugged off-road sections on the way to Padum, the headquarters of Zanskar Valley. Overnight in a comfortable hotel in Padum.",
  },
  {
    day: 6,
    title: "Discover Zanskar Valley",
    distance: "Approx. 50 km",
    description:
      "Explore Zanskar's striking landscapes and Tibetan Buddhist heritage. Ride to Bardan Monastery and Karsha Temple, enjoy views across the valley and experience the culture and everyday life of the local Zanskari people. Return to your hotel in Padum.",
  },
  {
    day: 7,
    title: "Zangla Palace & the Zanskar Gorge",
    distance: "Approx. 100 km",
    description:
      "Visit the abandoned Zangla Palace, once associated with the former kingdom of Zanskar. Continue north beside the Zanskar River into a narrow gorge, where rough roads, steep slopes and occasional river crossings make the ride especially challenging. Reach Lingshed, at around 3,500 m, and stay at a monastery guesthouse.",
  },
  {
    day: 8,
    title: "Sisir La & Senge La to Tingmosgang",
    distance: "Approx. 140 km",
    description:
      "Ride across remote gravel roads and the high passes of Sisir La at approximately 4,790 m and Senge La at approximately 5,060 m. Expect dusty tracks, tight hairpin bends and rugged mountain scenery. Finish in the green oasis village of Tingmosgang and stay at a Tibetan-style boutique hotel.",
  },
  {
    day: 9,
    title: "Tingmosgang to Leh via Sham Valley & Likir",
    distance: "Approx. 100 km",
    description:
      "Ride through the western Indus Valley and visit the historic ruins of Basgo and Likir Monastery, known for its large Buddha statue. Continue via Yang Tang and Hemis Supachen, famous for its sacred juniper forest. Arrive in Leh, explore the old town and enjoy dinner. Leh sits at approximately 3,524 m and was an important centre on historic Himalayan trade routes.",
  },
  {
    day: 10,
    title: "Rest Day in Leh",
    distance: "Rest day",
    description:
      "Enjoy a free day in Leh to rest, explore the town at your own pace and prepare for the return journey across the high-altitude Manali–Leh Highway.",
  },
  {
    day: 11,
    title: "Leh to Tso Kar via Tanglang La",
    distance: "Approx. 160 km",
    description:
      "Visit Thiksey Monastery in the upper Indus Valley before joining the Manali–Leh Highway, known on this journey as the Highway through Heaven. Cross Tanglang La and ride towards the high plateau. Stay at a guesthouse near Tso Kar, a picturesque salt lake surrounded by mountains and wildlife.",
  },
  {
    day: 12,
    title: "Across the Great Himalayan Ranges",
    distance: "Approx. 230 km",
    description:
      "Start early for a long and challenging ride towards Himachal Pradesh. Cross Lachung La at approximately 5,065 m, Nakee La at approximately 4,739 m and Baralacha La at approximately 5,030 m. Mostly paved roads are interrupted by rougher sections around the passes, with spectacular high-mountain and plateau views. Overnight in Jispa.",
  },
  {
    day: 13,
    title: "Jispa to Naggar",
    distance: "Approx. 150 km",
    description:
      "Return towards the lush Kullu Valley through the Atal Tunnel. Stop for lunch near the Solang Valley ski slopes before riding back to Naggar. Overnight at Ragini Hotel and Cottages.",
  },
  {
    day: 14,
    title: "Relax & Unwind in Naggar",
    distance: "Rest day",
    description:
      "Enjoy a relaxed day at Ragini Cottages. Reflect on the journey, enjoy the local surroundings and finish the tour with local food around a campfire.",
  },
  {
    day: 15,
    title: "Departure from Kullu",
    distance: "Departure day",
    description:
      "Transfer to Kullu Airport for an early flight to Delhi. Alternatively, arrange an extended stay in Naggar, take an overnight tourist bus to Delhi or enquire about a taxi transfer.",
  },
];

const tourDates = [
  {
    dates: "4 July – 18 July 2027",
    status: "Published on original tour page",
  },
];

export default function HighwayThroughHeaven() {
  const [openDays, setOpenDays] = useState([1]);
  const [showAllDays, setShowAllDays] = useState(false);

  function toggleDay(day) {
    setOpenDays((previous) =>
      previous.includes(day)
        ? previous.filter((item) => item !== day)
        : [...previous, day]
    );
  }

  function handleEnquiry() {
    window.location.href =
      "mailto:info@discover-himalayas.com?subject=Highway%20Through%20Heaven%20Tour%20Enquiry";
  }

  const displayedItinerary = showAllDays
    ? itinerary
    : itinerary.slice(0, 5);

  return (
    <main className={styles.tourPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroImage} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            DISCOVER THE INDIAN HIMALAYAS
          </span>

          <h1>
            Highway Through <span>Heaven</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Kullu · Lahaul · Zanskar · Indus Valley
          </p>

          <p className={styles.heroDescription}>
            An unforgettable Himalayan motorcycle expedition across remote
            valleys, ancient monasteries and legendary high mountain passes.
          </p>

          <div className={styles.heroActions}>
            <button
              className={styles.primaryButton}
              onClick={handleEnquiry}
            >
              ENQUIRE ABOUT THIS TOUR <span>↗</span>
            </button>

            <a className={styles.secondaryButton} href="#itinerary">
              EXPLORE ITINERARY <span>↓</span>
            </a>
          </div>

          <div className={styles.heroFootnote}>
            A challenging adventure designed for experienced riders
          </div>
        </div>

        <div className={styles.heroScroll}>SCROLL TO EXPLORE</div>
      </section>

      {/* QUICK FACTS */}
      <section className={styles.factsSection}>
        <div className={styles.factsGrid}>
          <article className={styles.factCard}>
            <span className={styles.factIcon}>◷</span>
            <div>
              <small>TOUR DURATION</small>
              <strong>15 Days</strong>
              <span>14 riding / tour days, plus arrival and departure</span>
            </div>
          </article>

          <article className={styles.factCard}>
            <span className={styles.factIcon}>⌁</span>
            <div>
              <small>RIDE DISTANCE</small>
              <strong>Approx. 1,400 km</strong>
              <span>Across the Great Himalayas</span>
            </div>
          </article>

          <article className={styles.factCard}>
            <span className={styles.factIcon}>▲</span>
            <div>
              <small>HIGHEST PASS</small>
              <strong>5,390 m</strong>
              <span>Tanglang La — as listed on the source page</span>
            </div>
          </article>

          <article className={styles.factCard}>
            <span className={styles.factIcon}>✦</span>
            <div>
              <small>RIDING LEVEL</small>
              <strong>Experienced</strong>
              <span>High passes and rugged mountain roads</span>
            </div>
          </article>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.introCopy}>
          <span className={styles.sectionEyebrow}>THE JOURNEY</span>

          <h2>
            Where the road ends,
            <br />
            <span>the adventure begins.</span>
          </h2>

          <p>
            Explore the horizons between the Valley of the Gods and Ladakh.
            Starting in Kullu, this motorcycle expedition heads through the
            wild valleys of Lahaul and remote Zanskar before joining the
            legendary Manali–Leh Highway.
          </p>

          <p>
            Along the way, ride rugged tracks, cross high mountain passes,
            discover Buddhist monasteries and experience landscapes that
            change from green valleys to stark high-altitude plateaus.
          </p>

          <p>
            This is a demanding ride that rewards experienced motorcyclists
            with remarkable scenery, cultural discoveries and the thrill of
            travelling through some of the most remote parts of the Indian
            Himalayas.
          </p>
        </div>

        <div className={styles.introImageWrap}>
          <img
            className={styles.introImage}
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=85"
            alt="Dramatic mountain peaks in the Himalayas"
            loading="lazy"
          />

          <div className={styles.imageCaption}>
            <span>01 / THE GREAT HIMALAYAS</span>
            <strong>A journey beyond the ordinary</strong>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className={styles.highlightsSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>WHAT MAKES IT SPECIAL</span>
          <h2>Tour Highlights</h2>
          <p>
            Remote mountain roads, extraordinary scenery and a rich Himalayan
            cultural heritage.
          </p>
        </div>

        <div className={styles.highlightsGrid}>
          {highlights.map((item) => (
            <article className={styles.highlightCard} key={item.number}>
              <span className={styles.highlightNumber}>{item.number}</span>
              <div className={styles.highlightLine} />
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MOUNTAIN PASSES */}
      <section className={styles.passesSection}>
        <div className={styles.passesImage}>
          <div className={styles.passesImageOverlay} />
          <div className={styles.passesImageContent}>
            <span className={styles.sectionEyebrow}>THE HIGH ALTITUDE CHALLENGE</span>
            <h2>
              Eight passes.
              <br />
              One epic journey.
            </h2>
            <p>
              Ride across legendary Himalayan mountain passes and experience
              the dramatic changes in landscape, altitude and road conditions.
            </p>
          </div>
        </div>

        <div className={styles.passesList}>
          {passes.map((pass, index) => (
            <div className={styles.passRow} key={pass.name}>
              <span className={styles.passIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <strong>{pass.name}</strong>
              <span className={styles.passAltitude}>{pass.altitude}</span>
            </div>
          ))}

          <p className={styles.sourceNote}>
            Altitudes are reproduced from the original tour page. Actual
            conditions, access and pass status can vary by season.
          </p>
        </div>
      </section>

      {/* ITINERARY */}
      <section className={styles.itinerarySection} id="itinerary">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>YOUR JOURNEY, DAY BY DAY</span>
          <h2>The Tour Itinerary</h2>
          <p>
            From the green Kullu Valley to the remote roads of Zanskar and
            Ladakh, every stage brings a new landscape.
          </p>
        </div>

        <div className={styles.itineraryList}>
          {displayedItinerary.map((item) => {
            const isOpen = openDays.includes(item.day);

            return (
              <article
                className={`${styles.itineraryItem} ${
                  isOpen ? styles.itineraryItemOpen : ""
                }`}
                key={item.day}
              >
                <button
                  className={styles.itineraryTrigger}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleDay(item.day)}
                >
                  <span className={styles.dayNumber}>
                    DAY {String(item.day).padStart(2, "0")}
                  </span>

                  <span className={styles.itineraryTitle}>
                    <strong>{item.title}</strong>
                    <small>{item.distance}</small>
                  </span>

                  <span className={styles.itineraryToggle}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.itineraryBody}>
                    <p>{item.description}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className={styles.showDaysButton}
          onClick={() => {
            setShowAllDays((previous) => !previous);
            if (!showAllDays) {
              setOpenDays(itinerary.map((item) => item.day));
            } else {
              setOpenDays([1]);
            }
          }}
        >
          {showAllDays ? "SHOW FEWER DAYS" : "VIEW ALL 15 DAYS"}
          <span>{showAllDays ? "↑" : "↓"}</span>
        </button>

        <p className={styles.itineraryNote}>
          The route and daily distances are based on the original published
          itinerary. Actual routing, accommodation and timings may change
          with weather, road conditions and local permissions.
        </p>
      </section>

      {/* TOUR DETAILS */}
      <section className={styles.detailsSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.sectionEyebrow}>PLAN WITH CONFIDENCE</span>
          <h2>Tour Details</h2>
          <p>Important information to help you prepare for the expedition.</p>
        </div>

        <div className={styles.detailsGrid}>
          <article className={styles.detailCard}>
            <span className={styles.detailIcon}>⌂</span>
            <h3>Accommodation</h3>
            <p>
              Overnight stays in handpicked hotels, with double
              accommodation and en-suite shower/WC facilities as described
              on the original tour page. The itinerary also includes a
              monastery guesthouse and a guesthouse near Tso Kar.
            </p>
          </article>

          <article className={styles.detailCard}>
            <span className={styles.detailIcon}>✦</span>
            <h3>Meals</h3>
            <p>
              Breakfast, lunch and dinner from Naggar to Naggar, plus
              non-alcoholic beverages with meals, according to the original
              tour listing.
            </p>
          </article>

          <article className={styles.detailCard}>
            <span className={styles.detailIcon}>⚙</span>
            <h3>Motorcycle & Support</h3>
            <p>
              Royal Enfield Himalayan 411cc motorcycle with comprehensive
              insurance, support jeep for baggage and reserve pillion seats,
              plus touring gear, fuel, oil and replacement parts as listed
              by the original tour provider.
            </p>
          </article>

          <article className={styles.detailCard}>
            <span className={styles.detailIcon}>↗</span>
            <h3>Road Conditions</h3>
            <p>
              The source describes the route as approximately 60% tarmac
              and 40% narrow roads, including numerous hairpin bends and
              rugged high-altitude sections. Riding experience is important.
            </p>
          </article>
        </div>
      </section>

      {/* DATES AND PRICE */}
      <section className={styles.bookingSection} id="booking">
        <div className={styles.bookingIntro}>
          <span className={styles.sectionEyebrow}>YOUR NEXT ADVENTURE</span>
          <h2>Ready to ride the Himalayas?</h2>
          <p>
            Ask our team about places, current pricing, inclusions and
            preparations for the Highway Through Heaven tour.
          </p>

          <div className={styles.groupSize}>
            <span>MINIMUM GROUP</span>
            <strong>7 riders</strong>
            <span className={styles.groupDivider}>/</span>
            <span>MAXIMUM GROUP</span>
            <strong>14 participants</strong>
          </div>
        </div>

        <div className={styles.bookingCard}>
          <span className={styles.bookingCardLabel}>ORIGINAL LISTED PRICE</span>

          <div className={styles.priceRow}>
            <span>Rider</span>
            <strong>€2,795</strong>
          </div>

          <div className={styles.priceRow}>
            <span>Pillion passenger</span>
            <strong>€2,295</strong>
          </div>

          <div className={styles.priceRow}>
            <span>Single-room surcharge</span>
            <strong>€445</strong>
          </div>

          <div className={styles.priceDivider} />

          <span className={styles.priceDisclaimer}>
            Prices are reproduced from the original website and may be
            outdated. Confirm current rates, availability and inclusions
            directly with the tour team before booking.
          </span>

          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleEnquiry}
          >
            REQUEST CURRENT PRICES <span>↗</span>
          </button>
        </div>

        <div className={styles.datesCard}>
          <h3>Published Tour Date</h3>

          {tourDates.map((tour) => (
            <div className={styles.dateRow} key={tour.dates}>
              <span className={styles.dateDot} />
              <div>
                <strong>{tour.dates}</strong>
                <small>{tour.status}</small>
              </div>
            </div>
          ))}

          <p>
            The original page also listed a July 2026 departure, which has
            already passed. Contact the team to confirm the next available
            departure before making travel arrangements.
          </p>
        </div>
      </section>

      {/* CUSTOM TOUR CTA */}
      <section className={styles.customTourSection}>
        <div className={styles.customTourOverlay} />
        <div className={styles.customTourContent}>
          <span className={styles.sectionEyebrow}>MAKE IT YOUR OWN</span>
          <h2>
            Dreaming of a different
            <br />
            Himalayan route?
          </h2>
          <p>
            Want to explore Ladakh with friends or family on a tailor-made
            ride? Get in touch and discuss a special journey with our team.
          </p>

          <button
            type="button"
            className={styles.primaryButton}
            onClick={handleEnquiry}
          >
            PLAN A CUSTOM TOUR <span>↗</span>
          </button>
        </div>
      </section>
    </main>
  );
}