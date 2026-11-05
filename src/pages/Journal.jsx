import styles from "./Journal.module.css";

const posts = [
  {
    kicker: "Route guide",
    title:
      "Khardung La: what the highest road on earth is actually like to ride",
    text: "Altitude, road surface, timing, and why we don't go up on day one.",
    published: true,
  },
  {
    kicker: "Preparation",
    title:
      "Altitude on a motorcycle tour: how we acclimatise and what to expect",
    text: "Thirty years of reading how riders cope above 4,000 m.",
  },
  {
    kicker: "The bike",
    title: "Royal Enfield Himalayan 450 in Ladakh: what breaks and what doesn't",
    text: "Honest notes from the mechanic's seat in the support vehicle.",
  },
  {
    kicker: "Route guide",
    title:
      "The Shyok road from Nubra to Pangong: water crossings and when to ride them",
    text: "Afternoon melt changes the road. Here's the timing.",
  },
  {
    kicker: "Preparation",
    title: "Licence, IDP, permits and insurance for foreign riders in India",
    text: "Everything a European rider needs before they land in Delhi.",
  },
  {
    kicker: "Comparison",
    title: "Ladakh or Spiti for your first Himalayan ride?",
    text: "Two different mountains, two different trips. How to choose.",
  },
  {
    kicker: "Ride report",
    title:
      "Ladakh, August 2026: eleven riders, four lakes, one snowstorm on Tanglang La",
    text: "Photos and notes from the summer's second departure.",
  },
  {
    kicker: "Route guide",
    title: "Rajasthan in January: the back roads between Jodhpur and Bikaner",
    text: "Where the desert rides are, away from the highways.",
  },
  {
    kicker: "Preparation",
    title: "What to pack for a Ladakh motorcycle tour in July",
    text: "Layers, gloves, and the two things everyone forgets.",
  },
];

export default function Journal() {
  return (
    <main className={styles.page}>
      <section className={styles.section}>
        <div className={styles.wrap}>
          <h1>Journal</h1>
          <p className={styles.lead}>
            Route knowledge from thirty years on these roads. Written by the
            people who lead the rides, for the people planning one.
          </p>

          <div className={styles.postList}>
            {posts.map((post, index) => (
              <article key={post.title} className={styles.post}>
                <div
                  className={`${styles.frame} ${
                    index % 3 === 1 ? styles.frameSand : ""
                  }`}
                >
                  <span className={styles.label}>Photo</span>
                </div>

                <div>
                  <span className={styles.kicker}>{post.kicker}</span>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  {!post.published && (
                    <span className={styles.soon}>Coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}