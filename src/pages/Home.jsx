import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  ZoomIn,
  Compass,
  Wrench,
  Package,
  Hammer,
  Truck,
  Heart,
  Wind,
} from "lucide-react";
import styles from "../styles/HomeHero.module.css"; // only the video hero still uses this file
import "../styles/homeAnimations.css";

/* ==================================================================
   DATA — change photos / text here
   Photos below use your existing /images/homepage/* files as
   temporary pictures. Replace the paths whenever you like.
================================================================== */

const IMG = {
  top: "/images/homepage/top.jpeg",
  heaven: "/images/homepage/heaven.jpeg",
  tibbat: "/images/homepage/tibbat.jpeg",
  first: "/images/homepage/first.jpeg",
  last: "/images/homepage/last.jpeg",
};

const places = [
  "Ladakh",
  "Zanskar",
  "Spiti",
  "Nepal",
  "Bhutan",
  "Rajasthan",
  "South India",
  "Goa",
  "Assam",
];

const stats = [
  { to: 30, suffix: "+", label: "Years on Himalayan roads", shape: "hex", top: "More than", num: "30", word: "Years", sub: "on the road" },
  { to: 14, suffix: "", label: "Riders at most in a group", shape: "shield", top: "At most", num: "14", word: "Riders", sub: "in a group" },
  { to: 1994, suffix: "", label: "The year of our first tour", shape: "tall", top: "Since", num: "1994", word: "First", sub: "tour" },
];

const storyGallery = [
  { label: "Drone still: Pangong Tso shoreline, bikes in frame", image: IMG.top },
  { label: "Rider portrait, Chang La", image: IMG.heaven },
  { label: "Prayer flags, Khardung La summit", image: IMG.tibbat },
  { label: "Group at Tso Moriri camp", image: IMG.first },
  { label: "Shyok road water crossing", image: IMG.last },
];

const timeline = [
  { year: "Early 1950s", text: "The Indian Army orders several hundred 350cc Bullets to patrol the new border roads." },
  { year: "1955", text: "Enfield of Redditch sets up assembly in Madras." },
  { year: "1970", text: "The English company folds. The Indian one carries on." },
  { year: "1994", text: "Eicher takes over, the same year we led our first tour." },
  { year: "2008", text: "The Classic arrives." },
  { year: "2016", text: "The Himalayan 411, the first purpose-built adventure bike." },
  { year: "Now", text: "The liquid-cooled Himalayan 450." },
];

const supportItems = [
  { label: "Mechanic", icon: Wrench },
  { label: "Spares", icon: Package },
  { label: "Tools", icon: Hammer },
  { label: "Luggage", icon: Truck },
  { label: "First aid", icon: Heart },
  { label: "Oxygen", icon: Wind },
];

const bikes = [
  {
    name: "Himalayan 450",
    tab: "Himalayan 450",
    tagline: "Built for the high passes.",
    description:
      "The newest bike on the fleet and the default on the Himalayan tours. 452cc, 40 bhp, 21-inch front wheel, 230 mm of ground clearance. Tall enough for the water crossings on the Shyok road and happy at 5,600 m. Comprehensive insurance, fuel, oil and all replacement parts are included on every tour.",
    image: "/images/bikes/RE450.png",
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
      "The bike that carried our tours for years before the 450 arrived, and still on the fleet. 411cc, air-cooled, unhurried and very hard to upset. Lower seat than the 450, which some riders prefer on the long days. Same insurance, fuel, oil and spares included.",
    image: "/images/bikes/RE411.png",
    specs: [
      { label: "Engine", value: "411 cc" },
      { label: "Power", value: "24 PS" },
      { label: "Gearbox", value: "5-speed" },
    ],
  },
];

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

const BIKE_SLIDE_MS = 5000;

/* ==================================================================
   SMALL SHARED PIECES
================================================================== */

const wrap = "mx-auto w-full max-w-7xl px-5 sm:px-8";

const btnBase =
  "dh-btn-shine dh-display inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-semibold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-0.5";
const btnPrimary = `${btnBase} bg-[#e0974f] text-[#10181c] hover:shadow-[0_18px_40px_-14px_rgba(224,151,79,0.85)]`;
const btnLight = `${btnBase} bg-white text-[#10181c] hover:shadow-[0_18px_40px_-14px_rgba(255,255,255,0.5)]`;
const btnGhost = `${btnBase} border-2 border-white/80 text-white hover:bg-white/10`;
const btnLake = `${btnBase} bg-[#167a88] text-white hover:bg-[#1b8e9f] hover:shadow-[0_18px_40px_-14px_rgba(22,122,136,0.9)]`;

// Fades / slides a block in once it scrolls into view (respects reduced motion).
function Reveal({ as: Tag = "div", className = "", delay = 0, from = "up", children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hidden = {
    up: "translate-y-10",
    left: "-translate-x-12",
    right: "translate-x-12",
    zoom: "scale-95",
  }[from];

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : `opacity-0 ${hidden}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

// Section heading. Uses real CSS classes (see homeAnimations.css) so global
// h2/h3 rules in the project can't shrink it or turn it white-on-white.
function Title({ as: Tag = "h2", light = false, size = "", id, className = "", style, children }) {
  return (
    <Tag
      id={id}
      style={style}
      className={`dh-title ${light ? "dh-title--light" : ""} ${size ? `dh-title--${size}` : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children, light = false, className = "" }) {
  return (
    <span
      className={`dh-display inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] sm:text-base ${
        light ? "text-[#e0974f]" : "text-[var(--dh-accent)]"
      } ${className}`}
    >
      <span className="h-px w-10 bg-current" />
      {children}
    </span>
  );
}

// Counts up from 0 once `active` becomes true.
function CountUp({ to, suffix = "", active }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return undefined;
    }

    let frame;
    const duration = 1800;
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

// Thin amber progress bar along the top of the page.
function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#e0974f] via-[#f3d9a8] to-[#167a88]"
    />
  );
}

// Moves a background image slower than the page for a depth effect.
function useParallax(speed = 0.12) {
  const ref = useRef(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let raf;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
        setY(offset * speed * -1);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [speed]);

  return [ref, y];
}

/* ==================================================================
   SECTIONS
================================================================== */

// Destinations painted on a moving road — text hovers above the asphalt
function Marquee() {
  const items = [...places, ...places];

  return (
    <div
      aria-label="Destinations we ride"
      className="dh-road relative z-10 overflow-hidden border-y-4 border-white/80"
    >
      <div className="dh-marquee-wrap relative py-10 sm:py-14">
        <div className="dh-marquee flex w-max items-center whitespace-nowrap">
          {items.map((place, i) => (
            <span key={`${place}-${i}`} className="flex items-center gap-12 pr-12 sm:gap-20 sm:pr-20">
              <span
                className="dh-road-text dh-display text-5xl font-bold uppercase tracking-[0.14em] sm:text-7xl"
                style={{ animationDelay: `${(i % places.length) * 0.35}s` }}
              >
                {place}
              </span>
              <span aria-hidden="true" className="h-3 w-3 shrink-0 rounded-full bg-[#e0974f] shadow-[0_0_16px_#e0974f]" />
            </span>
          ))}
        </div>

        {/* dashed lane line */}
        <div aria-hidden="true" className="dh-lane pointer-events-none absolute inset-x-0 bottom-3 h-[5px] sm:bottom-4" />
      </div>
    </div>
  );
}

// Stitched leather-patch badge (carbon texture, dashed amber stitching)
const BADGE_SHAPES = {
  hex: "100,10 186,56 186,164 100,210 14,164 14,56",
  shield: "22,26 178,26 190,38 190,128 100,212 10,128 10,38",
  tall: "100,8 168,34 184,70 184,152 100,212 16,152 16,70 32,34",
};

function StatBadge({ stat, id, active }) {
  const points = BADGE_SHAPES[stat.shape];

  return (
    <div className="group mx-auto flex w-full max-w-[250px] flex-col items-center text-center">
      <div className="relative aspect-[200/220] w-full transition duration-500 group-hover:-translate-y-2">
        <svg
          aria-hidden="true"
          viewBox="0 0 200 220"
          className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_22px_18px_rgba(0,0,0,0.38)]"
        >
          <defs>
            <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2c3438" />
              <stop offset="1" stopColor="#0a0f12" />
            </linearGradient>
            <pattern id={`${id}-weave`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="6" height="6" fill="transparent" />
              <rect width="3" height="6" fill="rgba(255,255,255,0.05)" />
              <rect x="3" width="3" height="6" fill="rgba(0,0,0,0.25)" />
            </pattern>
            <radialGradient id={`${id}-shine`} cx="50%" cy="18%" r="65%">
              <stop offset="0" stopColor="rgba(255,255,255,0.16)" />
              <stop offset="1" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* body, thick same-colour stroke rounds the corners */}
          <polygon points={points} fill={`url(#${id}-fill)`} stroke="#0a0f12" strokeWidth="12" strokeLinejoin="round" />
          <polygon points={points} fill={`url(#${id}-weave)`} stroke="#0a0f12" strokeWidth="12" strokeLinejoin="round" />
          <polygon points={points} fill={`url(#${id}-shine)`} />

          {/* stitching */}
          <g transform="translate(100 112) scale(0.9) translate(-100 -112)">
            <polygon
              points={points}
              fill="none"
              stroke="#e0974f"
              strokeWidth="2"
              strokeDasharray="7 5"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-3 pt-1">
          <span className="dh-display text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 sm:text-xs">
            {stat.top}
          </span>

          <span className="mt-1 flex w-full items-center justify-center gap-2">
            <span aria-hidden="true" className="h-[2px] w-5 -skew-x-[30deg] bg-[#e0974f]" />
            <span className="dh-display text-5xl font-bold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)] sm:text-6xl">
              {stat.num}
            </span>
            <span aria-hidden="true" className="h-[2px] w-5 skew-x-[30deg] bg-[#e0974f]" />
          </span>

          <span className="dh-display mt-1 text-3xl font-bold uppercase leading-none tracking-[0.04em] text-white sm:text-[2rem]">
            {stat.word}
          </span>
          <span className="dh-display text-sm font-medium uppercase leading-tight tracking-[0.1em] text-white/80">
            {stat.sub}
          </span>
        </div>
      </div>

      <span className="dh-display mt-8 text-4xl font-semibold leading-none text-[var(--dh-accent)] md:text-5xl">
        <CountUp to={stat.to} suffix={stat.suffix} active={active} />
      </span>
      <span className="mt-3 text-base text-[var(--dh-text)] md:text-lg">{stat.label}</span>
    </div>
  );
}

// Cinematic intro text: eyebrow line draws in, paragraph develops word by
// word out of a blur, key places glow amber, "You ride." lands last with a shimmer.
const INTRO_TEXT =
  "From the highest passes in {Ladakh} to the {Rajasthan} {desert}, the {Goa} {coast} and the jungles of {Assam}. Small groups, {Royal} {Enfields}, and a crew that has been part of the Indian biking scene since it started in the nineties. We handle the logistics, the permits and the spares.";

function IntroStory({ active }) {
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const on = active || reduce;
  const words = INTRO_TEXT.split(" ");
  const ease = "cubic-bezier(0.2, 0.7, 0.2, 1)";
  const step = 42; // ms between words
  const base = 450; // ms before the first word

  return (
    <div className="relative max-w-4xl">
      <style>{`
        @keyframes dhIntroShimmer { from { background-position: 0% center; } to { background-position: 200% center; } }
        @keyframes dhIntroGlow { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: .9; transform: scale(1.08); } }
        @media (prefers-reduced-motion: reduce) { .dh-intro-anim { animation: none !important; } }
      `}</style>

      {/* warm light that fades in behind the text, like a lamp coming on */}
      <span
        aria-hidden="true"
        className="dh-intro-anim pointer-events-none absolute -left-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(closest-side, rgba(224,151,79,0.28), rgba(224,151,79,0) 70%)",
          filter: "blur(30px)",
          opacity: on ? undefined : 0,
          animation: on && !reduce ? "dhIntroGlow 6s ease-in-out 1.5s infinite" : "none",
          transition: `opacity 1.6s ${ease}`,
        }}
      />

      {/* eyebrow */}
      <span
        className="dh-display relative inline-flex items-center gap-3 text-sm font-semibold uppercase text-[#b5651d] sm:text-base"
        style={{
          letterSpacing: on ? "0.3em" : "0.7em",
          opacity: on ? 1 : 0,
          transition: reduce ? "none" : `letter-spacing 1.4s ${ease}, opacity 1s ease`,
        }}
      >
        <span
          className="h-px bg-current"
          style={{
            width: on ? 40 : 0,
            transition: reduce ? "none" : `width 1s ${ease} 0.2s`,
          }}
        />
        Guided motorcycle tours · since 1994
      </span>

      <div className="relative mt-7 pl-6 md:pl-9">
        {/* amber rule draws top to bottom */}
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-0 top-1 w-[3px] origin-top rounded-full"
          style={{
            background: "linear-gradient(180deg, #e0974f, #b5651d 60%, rgba(181,101,29,0))",
            transform: on ? "scaleY(1)" : "scaleY(0)",
            transition: reduce ? "none" : `transform 1.6s ${ease} 0.3s`,
          }}
        />

        <p className="text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.55] text-[#0f3a48]">
          {words.map((raw, i) => {
            const hl = raw.includes("{");
            const text = raw.replace(/[{}]/g, "");
            return (
              <span key={`${text}-${i}`}>
                <span
                  className={`inline-block will-change-transform ${hl ? "font-medium text-[#b5651d]" : ""}`}
                  style={{
                    opacity: on ? 1 : 0,
                    transform: on ? "none" : "translateY(0.55em)",
                    filter: on ? "blur(0)" : "blur(10px)",
                    transition: reduce
                      ? "none"
                      : `opacity 0.9s ${ease} ${base + i * step}ms, transform 0.9s ${ease} ${base + i * step}ms, filter 0.9s ease ${base + i * step}ms`,
                  }}
                >
                  {text}
                </span>{" "}
              </span>
            );
          })}

          <span
            className="dh-display dh-intro-anim inline-block text-[1.25em] font-bold uppercase tracking-[0.08em]"
            style={{
              background: "linear-gradient(100deg, #b5651d 0%, #e0974f 30%, #ffd9a0 50%, #e0974f 70%, #b5651d 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: on ? 1 : 0,
              transform: on ? "none" : "scale(1.5) translateY(0.1em)",
              filter: on ? "blur(0)" : "blur(14px)",
              transformOrigin: "left center",
              transition: reduce
                ? "none"
                : `opacity 1.1s ${ease} ${base + words.length * step + 250}ms, transform 1.1s ${ease} ${base + words.length * step + 250}ms, filter 1.1s ease ${base + words.length * step + 250}ms`,
              animation: on && !reduce ? `dhIntroShimmer 4s linear ${(base + words.length * step) / 1000 + 1.6}s infinite` : "none",
            }}
          >
            You ride.
          </span>
        </p>
      </div>
    </div>
  );
}

// Intro paragraph + animated numbers
function Intro() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setActive(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[var(--dh-bg)] pb-40 pt-24 md:pb-52 md:pt-32">
      {/* big faded word */}
      <span
        aria-hidden="true"
        className="dh-display pointer-events-none absolute -left-4 top-6 select-none text-[22vw] font-bold uppercase leading-none text-[var(--dh-text)] opacity-[0.04]"
      >
        Ride
      </span>

      <div className={`${wrap} relative`}>
        <IntroStory active={active} />

        <div className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-6 md:mt-20 lg:gap-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} from="zoom" delay={i * 140}>
              <StatBadge stat={stat} id={`badge-${i}`} active={active} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* mountain ridge into the next section */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-24 w-full text-[var(--dh-alt)] md:h-36"
      >
        <path
          fill="currentColor"
          d="M0 140V92l110-48 90 38 130-70 120 82 100-46 140 70 120-92 130 80 110-50 130 72 130-60V140Z"
        />
      </svg>
    </section>
  );
}

// Bento photo gallery
function Gallery() {
  const spans = [
    "col-span-2 row-span-2",
    "",
    "row-span-2",
    "",
    "col-span-2 md:col-span-4",
  ];

  return (
    <section className="bg-[var(--dh-alt)] pb-24 md:pb-32">
      <div className={wrap}>
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Life on the road</Eyebrow>
            <Title className="mt-4">
              Roads that <span className="dh-accent">stay with you</span>
            </Title>
          </div>
        </Reveal>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] md:auto-rows-[230px] md:grid-cols-4 md:gap-4">
          {storyGallery.map((item, i) => (
            <Reveal
              key={item.label}
              from="zoom"
              delay={i * 90}
              className={`group relative overflow-hidden rounded-2xl bg-[#3c5461] ${spans[i]}`}
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-70 transition group-hover:opacity-100" />
              <span className="dh-display absolute bottom-4 left-4 right-4 translate-y-3 text-base uppercase tracking-[0.08em] text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// The people on the ride
function Crew() {
  return (
    <section className="bg-[var(--dh-bg)] py-24 md:py-32">
      <div className={`${wrap} grid items-center gap-16 lg:grid-cols-2`}>
        <Reveal from="left" className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-[var(--dh-accent)]/50" />
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#3c5461] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
            <img
              src={IMG.first}
              alt="Vinod briefing the group at dawn"
              loading="lazy"
              className="h-full w-full object-cover transition duration-[1400ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* spinning badge */}
          <div className="absolute -bottom-8 -right-4 sm:-right-10">
            <span className="dh-ring absolute inset-0 rounded-full border-2 border-[#e0974f]" />
            <div className="dh-floaty relative flex h-36 w-36 flex-col items-center justify-center rounded-full bg-[#e0974f] text-center text-[#10181c] shadow-2xl sm:h-44 sm:w-44">
              <span className="dh-display text-xs font-semibold uppercase tracking-[0.25em]">Riding since</span>
              <span className="dh-display text-5xl font-bold leading-none sm:text-6xl">1994</span>
              <span className="dh-display text-xs font-semibold uppercase tracking-[0.2em]">and still exploring</span>
            </div>
          </div>
        </Reveal>

        <Reveal from="right">
          <Eyebrow>The crew</Eyebrow>
          <Title className="mt-4">
            The people on the ride
          </Title>
          <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-[var(--dh-text)]">
            <p>
              We love riding, and we bring that love of the road to our tours.
              Our team pioneered many of the iconic rides — Ladakh, Spiti, Goa
              — and has been connected with the biker&apos;s scene in India
              since it started in the nineties.
            </p>
            <p>
              Thirty years on, the idea hasn&apos;t changed: a small group, a
              lead rider who knows every village on the route, a mechanic with
              the spares, and support vehicles so a pillion can rest or a rider
              can sit out a hard day. We take care of every detail so you can
              ride carefree.
            </p>
          </div>

          <blockquote className="relative mt-10 rounded-2xl border border-[var(--dh-line)] bg-[var(--dh-surface)] p-7 pl-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
            <span
              aria-hidden="true"
              className="dh-display absolute -top-5 left-6 text-7xl leading-none text-[var(--dh-accent)]"
            >
              “
            </span>
            <p className="text-lg italic leading-relaxed text-[var(--dh-text)]">
              Due to Vinod&apos;s experience and his open and friendly nature,
              we got connected to the land and its people in no time wherever
              we went.
            </p>
            <cite className="dh-display mt-4 block text-sm not-italic uppercase tracking-[0.18em] text-[var(--dh-muted)]">
              Neil, Germany — Ladakh tour
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

// The motorcycles + Why Royal Enfield + timeline
function RoyalEnfield() {
  return (
    <section className="relative overflow-hidden bg-[#0a1014] pb-14 pt-24 text-white md:pb-16 md:pt-32">
      <img
        src="public/images/bikes/RE350.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1014] via-[#0a1014]/80 to-[#0a1014]" />

      <div className={`${wrap} relative`}>
        <Reveal>
          <Eyebrow light>The bikes</Eyebrow>
          <Title light className="mt-4">
            The motorcycles
          </Title>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/75">
            Royal Enfields, because that&apos;s what the roads were built around
            and what every mechanic from Leh to Kanyakumari can fix.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="group relative mb-8 aspect-[16/9] overflow-hidden rounded-3xl">
              <img
                src="public/images/bikes/RE350.png"
                alt="Archive photo: Bullet 350 on a Himalayan road, 1990s"
                loading="lazy"
                className="h-full w-full object-cover grayscale transition duration-[1400ms] group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <Title as="h3" light size="sm">Why Royal Enfield</Title>
            <div className="mt-5 space-y-5 text-[17px] leading-[1.8] text-white/80">
              <p>
                The Bullet came to India with the army. In the early 1950s the
                Indian Army ordered several hundred 350cc Bullets for patrolling
                the new border roads, and in 1955 Enfield of Redditch set up
                assembly in Madras to supply them. The English company folded in
                1970; the Indian one carried on, building essentially the same
                motorcycle for the next fifty years. The bike was designed for
                exactly these roads, and the roads in turn were ridden on
                exactly this bike.
              </p>
              <p>
                That history is why we ride them. For decades the Bullet was the
                only motorcycle you could get fixed in a village in Ladakh, and
                every mechanic from the Rohtang to the Konkan coast learned on
                one. The engines make their power low down, where you need it
                when the air thins above 4,000 m. The riding position is upright
                and unhurried. And there is a plain pleasure in riding a
                Himalayan road on the machine that was built for it.
              </p>
              <p>
                The company has changed around the idea. Eicher took over in
                1994 — the same year we led our first tour — and the bikes have
                moved from the old cast-iron Bullet through the Classic of 2008
                to the first purpose-built adventure bike, the Himalayan 411, in
                2016, and now the liquid-cooled Himalayan 450. Lighter, more
                reliable, far better on gravel, and still a Royal Enfield:
                simple to fix, easy to live with, at home on a mountain road.
              </p>
            </div>
          </Reveal>

          {/* timeline */}
          <Reveal from="right" className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
              <span className="dh-display text-sm font-semibold uppercase tracking-[0.3em] text-[#e0974f]">
                The story in dates
              </span>
              <ol className="relative mt-8 space-y-7 border-l border-white/15 pl-8">
                {timeline.map((item, i) => (
                  <Reveal as="li" key={item.year} delay={i * 80} from="right" className="relative">
                    <span className="absolute -left-[39px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#e0974f] ring-4 ring-[#0a1014]" />
                    <span className="dh-display text-2xl font-semibold tracking-wide text-[#f3d9a8]">
                      {item.year}
                    </span>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/75">{item.text}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// BIKE GALLERY: auto-changes every 5 seconds, tap the bike to zoom
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

  const slide = direction === 1 ? "dh-slide-next" : "dh-slide-prev";

  return (
    <section
      id="bike-gallery"
      aria-labelledby="bike-gallery-title"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden bg-gradient-to-b from-[#0a1014] via-[#10202a] to-[#0a1014] pb-24 pt-6 text-white md:pb-32 md:pt-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_75%_45%,rgba(224,151,79,0.2),transparent_70%)]"
      />

      <div className={`${wrap} relative`}>
        <Reveal>
          <Eyebrow light>Our rides</Eyebrow>
          <Title id="bike-gallery-title" light className="mt-4">
            Choose your <span className="dh-accent">machine.</span>
          </Title>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: description */}
          <div aria-live="polite" className="order-2 lg:order-1">
            <div key={index} className={slide}>
              <span className="dh-display text-xl tracking-[0.2em] text-[#e0974f]">
                {String(index + 1).padStart(2, "0")}
                <b className="font-medium text-white/40"> / {String(bikes.length).padStart(2, "0")}</b>
              </span>
              <Title as="h3" light size="md" className="mt-3">{bike.name}</Title>
              <p className="mt-3 text-xl italic text-[#f3d9a8]">{bike.tagline}</p>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.8] text-white/75">{bike.description}</p>

              <ul className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                {bike.specs.map((spec) => (
                  <li
                    key={spec.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm"
                  >
                    <strong className="dh-display block text-2xl font-semibold text-white sm:text-3xl">
                      {spec.value}
                    </strong>
                    <span className="dh-display text-xs uppercase tracking-[0.2em] text-white/50">
                      {spec.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: photo */}
          <div
            className="relative order-1 lg:order-2"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <span
              aria-hidden="true"
              className="dh-display pointer-events-none absolute -top-6 right-0 max-w-full select-none whitespace-nowrap text-[18vw] font-bold uppercase leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] lg:text-[8rem]"
            >
              {bike.tab}
            </span>

            <button
              type="button"
              onClick={() => setZoomed((value) => !value)}
              aria-pressed={zoomed}
              aria-label={`${bike.name}. ${zoomed ? "Zoom out" : "Zoom in"}`}
              className="relative flex min-h-[280px] w-full cursor-zoom-in items-center justify-center sm:min-h-[400px]"
            >
              <div className={zoomed ? "scale-125 transition-transform duration-700" : "dh-floaty"}>
                <img
                  key={index}
                  src={bike.image}
                  alt=""
                  draggable="false"
                  className={`${slide} relative z-10 max-h-[260px] w-full object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.65)] sm:max-h-[400px]`}
                />
              </div>
              <span className="absolute bottom-0 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-[100%] bg-black/50 blur-xl" />
            </button>

            <div className="mt-6 flex items-center justify-between">
              <span className="dh-display inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white/50">
                <ZoomIn size={15} aria-hidden="true" />
                {zoomed ? "Tap to zoom out" : "Tap to zoom"}
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous bike"
                  onClick={goPrev}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[#e0974f] hover:bg-[#e0974f] hover:text-[#10181c]"
                >
                  <ArrowLeft size={19} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Next bike"
                  onClick={goNext}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-[#e0974f] hover:bg-[#e0974f] hover:text-[#10181c]"
                >
                  <ArrowRight size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs with 5-second progress */}
        <div
          role="tablist"
          aria-label="Choose a bike"
          className="mt-14 grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4"
        >
          {bikes.map((item, i) => (
            <button
              type="button"
              role="tab"
              aria-selected={i === index}
              key={item.name}
              onClick={() => selectTab(i)}
              className="group text-left"
            >
              <span
                className={`dh-display block text-lg font-semibold uppercase tracking-[0.12em] transition ${
                  i === index ? "text-[#e0974f]" : "text-white/50 group-hover:text-white"
                }`}
              >
                {item.tab}
              </span>
              <span className="relative mt-3 block h-[3px] w-full overflow-hidden rounded-full bg-white/15">
                {i === index && (
                  <span
                    key={`fill-${index}`}
                    className="dh-fill absolute inset-y-0 left-0 bg-[#e0974f]"
                    style={{
                      animationDuration: `${BIKE_SLIDE_MS}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                    onAnimationEnd={goNext}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="max-w-xl text-white/70">
            Every tour includes a Royal Enfield, fuel and a mechanic on the road.
          </p>
          <Link
            to="/tours"
            className="dh-display group inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.15em] text-[#e0974f]"
          >
            See tours
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Support vehicles
function SupportVehicles() {
  return (
    <section className="bg-[var(--dh-bg)] py-24 md:py-32">
      <div className={`${wrap} grid items-center gap-16 lg:grid-cols-2`}>
        <Reveal from="left">
          <Eyebrow>On the road</Eyebrow>
          <Title className="mt-4">
            Support vehicles
          </Title>
          <p className="mt-8 max-w-xl text-[17px] leading-[1.8] text-[var(--dh-text)]">
            Support vehicles ride behind the group every day with the mechanic,
            spares, tools, luggage, first aid and oxygen. They carry seats for
            pillions who&apos;d rather sit out a pass, and for any rider
            who&apos;s had enough for the day. Nobody is left to limp.
          </p>

          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {supportItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal as="li" key={item.label} delay={i * 70} from="zoom">
                  <div className="group flex items-center gap-3 rounded-2xl border border-[var(--dh-line)] bg-[var(--dh-surface)] px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--dh-accent)]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--dh-accent)]/15 text-[var(--dh-accent)] transition group-hover:bg-[var(--dh-accent)] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="dh-display text-lg font-semibold uppercase tracking-[0.08em] text-[var(--dh-text)]">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Reveal>

        <Reveal from="right" className="relative">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#3c5461] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
            <img
              src={IMG.heaven}
              alt="Support vehicles and mechanic, Tanglang La"
              loading="lazy"
              className="h-full w-full object-cover transition duration-[1400ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="dh-floaty absolute -bottom-6 left-6 rounded-2xl bg-[var(--dh-surface)] px-6 py-4 shadow-2xl ring-1 ring-[var(--dh-line)] sm:left-10">
            <span className="dh-display block text-sm uppercase tracking-[0.2em] text-[var(--dh-muted)]">
              Nobody is left to
            </span>
            <span className="dh-display text-3xl font-semibold uppercase text-[var(--dh-accent)]">limp</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// From riders who came back — two reviews at a time
function RiderStories() {
  const [active, setActive] = useState(0);

  const visible = 2;
  const maxIndex = testimonials.length - visible;
  const pages = Math.ceil(testimonials.length / visible);
  const currentPage = Math.floor(active / visible);

  // Advance by two every 5 seconds and loop back to the start.
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) =>
        current >= maxIndex ? 0 : Math.min(current + visible, maxIndex)
      );
    }, 5000);
    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const goTo = (index) => setActive(Math.max(0, Math.min(maxIndex, index)));
  const scrollBy = (direction) => goTo(active + direction * visible);

  const arrow =
    "flex h-12 w-12 items-center justify-center rounded-full border border-[var(--dh-line)] bg-[var(--dh-surface)] text-[var(--dh-text)] transition hover:border-[var(--dh-accent)] hover:bg-[var(--dh-accent)] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[var(--dh-line)] disabled:hover:bg-[var(--dh-surface)] disabled:hover:text-[var(--dh-text)]";

  return (
    <section
      aria-labelledby="rider-stories-title"
      className="relative overflow-hidden bg-[var(--dh-alt)] py-24 md:py-32"
    >
      <span
        aria-hidden="true"
        className="dh-display pointer-events-none absolute -right-6 top-4 select-none text-[28vw] font-bold leading-none text-[var(--dh-text)] opacity-[0.04]"
      >
        “
      </span>

      <div className={`${wrap} relative`}>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Words from the road</Eyebrow>
            <Title id="rider-stories-title" className="mt-4">
              From riders
              <br />
              <span className="dh-accent">who came back</span>
            </Title>
          </div>

          <div className="flex items-center gap-4">
            <span className="dh-display text-sm uppercase tracking-[0.2em] text-[var(--dh-muted)]">
              Rider stories ·{" "}
              {String(active + 1).padStart(2, "0")}–
              {String(Math.min(active + visible, testimonials.length)).padStart(2, "0")}
              <span className="opacity-60"> / {String(testimonials.length).padStart(2, "0")}</span>
            </span>
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollBy(-1)}
              disabled={active === 0}
              className={arrow}
            >
              <ArrowLeft size={19} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollBy(1)}
              disabled={active >= maxIndex}
              className={arrow}
            >
              <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </Reveal>

        <div key={active} aria-live="polite" className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
          {testimonials.slice(active, active + visible).map((person, i) => {
            const d = i * 180;
            return (
              <article
                key={person.name}
                style={{ animationDelay: `${d}ms` }}
                className="dh-fade-up group relative flex flex-col items-center rounded-3xl border border-[var(--dh-line)] bg-[var(--dh-surface)] px-7 pb-10 pt-14 text-center shadow-[0_30px_70px_-45px_rgba(0,0,0,0.6)] transition duration-500 hover:-translate-y-2 hover:border-[var(--dh-accent)] sm:px-10"
              >
                <span
                  aria-hidden="true"
                  className="dh-display absolute left-1/2 top-1 -translate-x-1/2 text-8xl leading-none text-[var(--dh-accent)] opacity-20"
                >
                  “
                </span>

                {/* centred photo with pulsing ring */}
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="dh-ring absolute inset-0 rounded-full border-2 border-[var(--dh-accent)]"
                  />
                  <img
                    src={person.image}
                    alt={`${person.name} portrait`}
                    loading="lazy"
                    style={{ animationDelay: `${d + 150}ms` }}
                    className="dh-pop relative h-28 w-28 rounded-full object-cover ring-2 ring-[var(--dh-accent)] ring-offset-4 ring-offset-[var(--dh-surface)] transition duration-500 group-hover:scale-110"
                  />
                </div>

                <Title
                  as="h3"
                  size="name"
                  className="dh-fade-up mt-6"
                  style={{ animationDelay: `${d + 350}ms` }}
                >
                  {person.name}
                </Title>

                <span
                  className="dh-fade-up dh-display mt-1 text-sm uppercase tracking-[0.2em] text-[var(--dh-muted)]"
                  style={{ animationDelay: `${d + 450}ms` }}
                >
                  CLASS OF ‘24 · {person.location.toUpperCase()}
                </span>

                <p
                  className="dh-fade-up mt-6 max-w-prose flex-1 text-[16.5px] leading-[1.85] text-[var(--dh-text)]"
                  style={{ animationDelay: `${d + 600}ms` }}
                >
                  {person.review}
                </p>

                <span
                  className="dh-fade-up dh-display mt-7 inline-flex w-fit rounded-full bg-[var(--dh-accent)]/15 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--dh-accent)] transition group-hover:bg-[var(--dh-accent)] group-hover:text-white"
                  style={{ animationDelay: `${d + 800}ms` }}
                >
                  {person.tour}
                </span>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center gap-2" aria-label="Choose testimonial page">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Go to testimonial page ${index + 1}`}
              aria-current={currentPage === index ? "true" : undefined}
              onClick={() => goTo(Math.min(index * visible, maxIndex))}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                currentPage === index
                  ? "w-10 bg-[var(--dh-accent)]"
                  : "w-2.5 bg-[var(--dh-line)] hover:bg-[var(--dh-muted)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// See upcoming tours button with an animated dashed route behind it
function UpcomingCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--dh-bg)] pb-24 md:pb-28">
      {/* road with floating destination names */}
      <Marquee />

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        className="dh-route absolute inset-x-0 bottom-0 h-56 w-full text-[var(--dh-accent)] opacity-40"
      >
        <path
          d="M-20 170 C 200 40, 360 250, 620 120 S 980 20, 1180 140 S 1380 210, 1470 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div className={`${wrap} relative pt-16 text-center md:pt-20`}>
        <Reveal>
          <Link to="/upcoming-tours" className={btnLake}>
            See upcoming tours, dates and prices
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// Not just a ride — parallax background
function Experience() {
  const [ref, y] = useParallax(0.14);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#0a1014] py-24 text-white"
    >
      <img
        src="public/images/homepage/buttom.avif"
        alt="A scenic mountain landscape"
        loading="lazy"
        style={{ transform: `translateY(${y}px) scale(1.2)` }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1014]/90 via-[#0a1014]/60 to-[#0a1014]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1014]/70 via-transparent to-transparent" />

      <div className={`${wrap} relative grid items-end gap-12 lg:grid-cols-2`}>
        <Reveal>
          <Eyebrow light>Experience that matters</Eyebrow>
          <Title light className="mt-5">
            Not just a ride.
            <br />
            <span className="dh-accent">A lifetime of memories.</span>
          </Title>
          <p className="mt-8 max-w-xl text-lg leading-[1.8] text-white/80">
            Every great adventure begins with a route worth exploring. Our
            passion for mountain travel inspires journeys that bring together
            incredible roads, unforgettable scenery and meaningful experiences.
          </p>
          <Link to="/about" className={`${btnPrimary} mt-10`}>
            Get to know us
            <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal from="right" className="hidden justify-self-end lg:block">
          <div className="dh-floaty rounded-3xl border border-white/20 bg-white/10 px-10 py-8 text-center backdrop-blur-md">
            <strong className="dh-display block text-8xl font-bold leading-none text-[#f3d9a8]">
              1994
            </strong>
            <span className="dh-display mt-3 block max-w-[14rem] text-sm uppercase tracking-[0.25em] text-white/80">
              The beginning of our journey
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Custom tours band — last section of the page
function CustomBand() {
  return (
    <section className="bg-[var(--dh-bg)] py-20 md:py-28">
      <div className={wrap}>
        <Reveal from="zoom" className="group relative flex min-h-[540px] items-end overflow-hidden rounded-[2rem] bg-[#3c5461] shadow-[0_50px_100px_-50px_rgba(0,0,0,0.8)]">
          <img
            src={IMG.top}
            alt="A private group on an unmarked road — Zanskar or Kinnaur"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[2000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080e12]/85 via-[#080e12]/50 to-[#080e12]/10 max-sm:bg-gradient-to-b max-sm:from-[#080e12]/30 max-sm:to-[#080e12]/90" />

          <Compass
            aria-hidden="true"
            size={120}
            strokeWidth={1}
            className="dh-spin-slow absolute right-8 top-8 hidden text-white/30 sm:block"
          />

          <div className="relative w-full p-7 text-white sm:p-12 lg:p-16">
            <span className="dh-display inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#f3d9a8]">
              <span className="h-px w-10 bg-current" />
              Custom tours
            </span>
            <Title light className="mt-5 max-w-[16ch]">
              Your group. Your dates. A route drawn for you.
            </Title>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Riding clubs, families, a group of friends, a company offsite on
              two wheels. Tell us who&apos;s riding and how long you have; we
              chart the route, run the logistics, and ride it with you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/custom-tours" className={btnLight}>
                How custom tours work
              </Link>
              <Link to="/contact?tour=custom" className={btnGhost}>
                Start planning
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ==================================================================
   PAGE
================================================================== */

export default function Home() {
  return (
    <div className="home-page dh-page overflow-x-clip">
      <ScrollProgress />

      {/* MAIN VIDEO HERO (unchanged) */}
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

      <Intro />
      <Gallery />
      <Crew />
      <RoyalEnfield />
      <BikeGallery />
      <SupportVehicles />
      <RiderStories />
      <UpcomingCta />
      <Experience />
      <CustomBand />
    </div>
  );
}