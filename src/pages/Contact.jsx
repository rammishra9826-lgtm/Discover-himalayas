import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Motorcycle Tours",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            LET'S PLAN YOUR ADVENTURE
          </span>

          <h1>
            GET IN <span>TOUCH</span>
          </h1>

          <p>
            Have a question or a dream journey in mind?
            Let's start planning your Himalayan adventure.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionLabel}>
            WE'RE HERE TO HELP
          </span>

          <h2>
            Your Next Adventure <span>Starts Here</span>
          </h2>

          <p>
            Tell us what kind of journey you're looking for.
            Our team can help you explore tour options and plan your trip.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Contact Details with Background Image */}
          <aside className={styles.contactInfo}>
            <div className={styles.contactInfoOverlay} />

            <div className={styles.contactInfoContent}>
              <span className={styles.infoLabel}>
                CONTACT DETAILS
              </span>

              <h3>Let's talk about your journey.</h3>

              <p className={styles.infoDescription}>
                Reach out to us for tour enquiries, travel planning
                and information about your next adventure.
              </p>

              <a
                className={styles.infoItem}
                href="mailto:info@discover-himalayas.com"
              >
                <span className={styles.infoIcon}>✉</span>

                <span>
                  <small>Email Us</small>
                  <strong>info@discover-himalayas.com</strong>
                </span>
              </a>

              <a
                className={styles.infoItem}
                href="tel:+919318585385"
              >
                <span className={styles.infoIcon}>☎</span>

                <span>
                  <small>Call Us</small>
                  <strong>+91 (0) 93185 85385</strong>
                </span>
              </a>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>⌖</span>

                <span>
                  <small>Visit Us</small>
                  <strong>Ragini Cottages, Naggar</strong>

                  <span className={styles.address}>
                    Kullu District – 175130, Himachal Pradesh, India
                  </span>
                </span>
              </div>

              <div className={styles.infoBottom}>
                <span className={styles.mountainIcon}>▲</span>
                <p>Explore the mountains. Discover the extraordinary.</p>
              </div>
            </div>
          </aside>

          {/* Enquiry Form */}
          <div className={styles.formCard}>
            <span className={styles.formLabel}>SEND AN ENQUIRY</span>

            <h3>Tell us about your trip</h3>

            <p className={styles.formDescription}>
              Fill in the details below and start planning your adventure.
            </p>

            <form
              onSubmit={handleSubmit}
              className={styles.contactForm}
            >
              <div className={styles.fieldRow}>
                <label>
                  Full Name *
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className={styles.fieldRow}>
                <label>
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your contact number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  I'm Interested In
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option>Motorcycle Tours</option>
                    <option>Custom Made Tours</option>
                    <option>Mountain Destinations</option>
                    <option>Group Travel</option>
                    <option>General Enquiry</option>
                  </select>
                </label>
              </div>

              <label>
                Tell Us About Your Plans *
                <textarea
                  name="message"
                  placeholder="Where would you like to go? Tell us about your plans..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </label>

              <button type="submit" className={styles.submitButton}>
                SEND ENQUIRY <span>↗</span>
              </button>

              {submitted && (
                <p className={styles.successMessage} role="status">
                  Thanks, {formData.name}! Your form has been completed.
                  Please email us directly to send your enquiry to the team.
                </p>
              )}

              <p className={styles.formNote}>
                * Required fields. This demo form does not send or store
                your message yet.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}