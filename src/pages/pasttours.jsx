// src/pages/pasttours.jsx
import { Link } from "react-router-dom";
import { Play, Users } from "lucide-react";
import { TOURS, PAST } from "../data/toursData";

// mera id -> tumhare TourDetails ka slug
const SLUGS = {
  heaven: "highway-through-heaven",
  // baaki slug alag hon to yahan likho, jaise ladakh: "ladakh-expedition"
};
const tourLink = (id) => `/tours/${SLUGS[id] || id}`;

const GRADIENTS = [
  "from-[#9FB6C1] via-[#5C7A88] to-[#3C5461]",
  "from-[#E0C9A8] via-[#B8905F] to-[#8A6238]",
];

function StripItem({ label, video, gradient }) {
  return (
    <div className={`relative aspect-square overflow-hidden rounded bg-gradient-to-br ${gradient}`}>
      {video && (
        <span className="absolute inset-0 m-auto flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
          <Play size={16} className="ml-0.5 text-slate-800" fill="currentColor" />
        </span>
      )}
      <span className="absolute bottom-2 left-2 rounded-sm bg-black/40 px-1.5 py-0.5 text-xs text-white">
        {label}
      </span>
    </div>
  );
}

function PastCard({ item, index }) {
  const t = TOURS[item.tour];
  const gradient = GRADIENTS[index % 2];

  return (
    <article>
      <Link
        to={tourLink(item.tour)}
        className={`group relative block aspect-[16/10] overflow-hidden rounded bg-gradient-to-br ${gradient} text-white`}
      >
        <span className="absolute left-4 top-3.5 rounded-sm bg-black/40 px-2 py-1 text-sm">
          Group photo
        </span>
        <span className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 transition group-hover:to-black/80" />
        <div className="absolute inset-x-5 bottom-4">
          <div className="text-base font-semibold uppercase tracking-wider text-[#F3D9A8]">
            {item.when}
          </div>
          <h3 className="my-0.5 text-3xl font-semibold leading-tight drop-shadow-lg">
            {t.name}
          </h3>
          <div className="flex items-center gap-1.5 text-base opacity-90">
            <Users size={15} /> {item.riders}
          </div>
        </div>
      </Link>

      <div className="mt-2 grid grid-cols-4 gap-2">
        <StripItem label="Video" video gradient={gradient} />
        <StripItem label="Road" gradient={gradient} />
        <StripItem label="Camp" gradient={gradient} />
        <StripItem label="Pass" gradient={gradient} />
      </div>

      <p className="mt-3 max-w-[60ch] text-[15.5px] text-slate-600 dark:text-slate-300">
        {item.note}
      </p>
    </article>
  );
}

export default function PastTours() {
  return (
    <main className="bg-[#FBFAF7] text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {/* Hero */}
      <header className="relative flex h-[min(60vh,520px)] min-h-[340px] items-end overflow-hidden bg-gradient-to-br from-[#9FB6C1] via-[#5C7A88] to-[#3C5461]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/65" />
        <span className="absolute inset-0 m-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/90">
          <Play size={30} className="ml-1 text-slate-800" fill="currentColor" />
        </span>
        <div className="relative mx-auto w-[min(1180px,100%-32px)] pb-11 text-white sm:w-[min(1180px,100%-48px)]">
          <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F3D9A8]">
            Past tours
          </div>
          <h1 className="text-5xl font-semibold leading-none drop-shadow-lg sm:text-6xl lg:text-8xl">
            Thirty years of departures
          </h1>
        </div>
      </header>

      {/* Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-[min(1180px,100%-32px)] sm:w-[min(1180px,100%-48px)]">
          <div className="my-5 rounded bg-[#F3E6D4] px-4 py-3.5 text-[15.5px] text-[#5A3A12] dark:bg-[#C4792E]/20 dark:text-[#F3D9A8]">
            Placeholder entries — replace with real departures, the group photo,
            a short video and three stills from each ride. Newest first.
          </div>

          <div className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2">
            {PAST.map((item, i) => (
              <PastCard key={`${item.tour}-${item.when}-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}