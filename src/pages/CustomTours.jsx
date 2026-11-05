import { Link } from "react-router-dom";
import styles from "./CustomTours.module.css";

const steps = [
  {
    title: "Tell us the shape of it",
    text: "Who's riding, how experienced, how many days, which month, and the kind of riding you want — high passes, desert, coast, jungle, or a mix. A short call usually settles it.",
  },
  {
    title: "We chart the route",
    text: "Within a week you get a day-by-day itinerary with distances, altitudes, hotels and a price. We revise it with you until it's right. Thirty years of knowing which roads are open in which month goes into this.",
  },
  {
    title: "We run it",
    text: "Bikes, permits, support vehicles, mechanic, lead rider, every hotel and meal. Your group gets the same crew and the same care as our scheduled tours — with nobody else on the road.",
  },
];

const cases = [
  {
    title: "[Club name], 12 riders — Zanskar and Ladakh, 16 days",
    text: "[One line: what they asked for and what made the ride theirs.]",
    variant: "blue",
  },
  {
    title: "[Family name], 6 riders and 3 pillions — Rajasthan, 10 days",
    text: "[One line.]",
    variant: "sand",
  },
  {
    title: "[Company name], 18 riders — Spiti offsite, 8 days",
    text: "[One line.]",
    variant: "green",
  },
];

const faqs = [
  {
    question: "How big a group?",
    answer:
      "From four riders up to about eighteen, with pillions on top. Below four, one of our scheduled departures is usually the better fit. Above eighteen we split into two riding groups with two lead riders.",
  },
  {
    question: "How far ahead do we need to book?",
    answer:
      "Himalayan rides in July and August: six months, because hotels at Pangong and Nubra fill. Lowland rides: three months is comfortable. Shorter notice is sometimes possible; ask.",
  },
  {
    question: "Can we mix riding levels?",
    answer:
      "Yes, within reason. We set the pace for the group and the support vehicles carry anyone who wants a day off. If the gap is very wide we'll say so and suggest a route that works for everyone.",
  },
  {
    question: "What does it cost?",
    answer:
      "Per rider it's in the same range as the scheduled tours; the exact figure depends on route, length, group size and hotel standard. The itinerary we send you comes with a firm price.",
  },
  {
    question: "Can we bring our own bikes?",
    answer:
      "[Confirm with the owner — some operators allow riders on their own motorcycles with reduced pricing; others don't for insurance reasons.]",
  },
];

export default function CustomTours() {
  return (
    <main className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroFrame}>
          <span className={styles.label}>
            Drone still: private group, remote road
          </span>
        </div>
        <div className={styles.heroCopy}>
          <div className={styles.wrap}>
            <div className={styles.since}>Custom tours</div>
            <h1>A route drawn for your group</h1>
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.lead}>
            Most of our riders now come to us as a group with an idea: a club
            that wants two weeks in the mountains on its own, a family marking
            a birthday, a company that would rather take its team over Khardung
            La than into a conference room. We build the ride around you — the
            route, the pace, the bikes, the hotels, the dates — and then we
            ride it with you.
          </p>

          {/* How it works */}
          <h2 className={styles.h2First}>How it works</h2>
          <div className={styles.steps}>
            {steps.map((step) => (
              <div key={step.title} className={styles.step}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          {/* Case studies */}
          <h2 className={styles.h2}>Rides we've built for groups</h2>
          <div className={styles.cases}>
            {cases.map((item) => (
              <Link
                key={item.title}
                to="/contact?tour=custom"
                className={styles.case}
              >
                <div className={`${styles.caseFrame} ${styles[item.variant]}`}>
                  <span className={styles.label}>Photo: the group</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>

          {/* Good to know */}
          <h2 className={styles.h2}>Good to know</h2>
          <div className={styles.faqList}>
            {faqs.map((item) => (
              <details key={item.question} className={styles.details}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <div>
              <h2>Tell us about your group</h2>
              <p>A few lines is enough to start. We reply within two working days.</p>
            </div>
            <Link to="/contact?tour=custom" className={styles.btn}>
              Start planning
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}