import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "How experienced do I need to be?",
    answer:
      "Ladakh and Little Tibet are for experienced riders: long days, altitude, gravel and water crossings. Rajasthan and the two South India tours suit any confident road rider. You need a valid motorcycle licence from home plus an International Driving Permit.",
  },
  {
    question: "What bike will I ride?",
    answer:
      "A Royal Enfield Himalayan 450 or 411 with comprehensive insurance, fuel, oil and all replacement parts included. If you'd rather ride a Bullet 500 on the lowland tours, ask when you book.",
  },
  {
    question: "What about altitude?",
    answer:
      "The Ladakh tour starts at 3,500 m and reaches 5,600 m. The itinerary is built around acclimatisation — the first days ride low in the Indus valley before the high passes. We carry oxygen and the lead rider has three decades of reading how people cope. Talk to your doctor before booking if you have heart or lung conditions.",
  },
  {
    question: "Can I bring a pillion?",
    answer:
      "Yes. Pillions pay a lower rate, share the rider's room, and can swap into the support vehicle on any day they'd rather not be on the back of the bike.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Motorcycle, fuel, insurance, all hotels (double occupancy), all meals on tour with soft drinks, support vehicles, lead rider and mechanic, permits and entry fees. Not included: international flights, Indian visa, the domestic flight sector where noted, alcohol, tips, and lunches and dinners on free days in Leh or Goa.",
  },
  {
    question: "What if the tour doesn't fill?",
    answer:
      "We need seven riders for a departure to run. If a date doesn't reach seven by ten weeks before the start, we offer you a move to the next date or a full refund of your deposit.",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "Yes, and it must cover motorcycling and, for Himalayan tours, altitude above 5,000 m. We'll ask for the policy details before you ride.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faqPage}>
      <h1 className={styles.heading}>Questions riders ask</h1>

      <div className={styles.list}>
        {faqs.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}