// src/pages/upcommingTours.jsx
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Calendar, Play } from "lucide-react";
import { TOURS, ORDER, STATUS, eur } from "../data/toursData";

// Agar tumhare routes alag hain to sirf yahan badalna
const tourLink = (id) => `/tours/${id}`;
const enquireLink = (id) => `/contact?tour=${id}`;

const GRADIENTS = [
  "from-[#9FB6C1] via-[#5C7A88] to-[#3C5461]",
  "from-[#E0C9A8] via-[#B8905F] to-[#8A6238]",
  "from-[#C9DCCB] via-[#7FA389] to-[#4B6E55]",
];

function Thumb({ label, video, gradient }) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded bg-gradient-to-br ${gradient}`}
    >
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

function TourCard({ id, index }) {
  const t = TOURS[id];
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <article className="grid gap-x-9 gap-y-3 border-b border-slate-200 pb-10 last:border-b-0 dark:border-slate-700/60 lg:grid-cols-[minmax(0,460px)_1fr]">
      {/* Photos */}
      <div className="space-y-2">
        <Link
          to={tourLink(id)}
          className={`group relative block aspect-[4/3] overflow-hidden rounded bg-gradient-to-br ${gradient}`}
        >
          <span className="absolute bottom-3.5 left-4 rounded-sm bg-black/40 px-2 py-1 text-sm text-white">
            {t.region} — hero still
          </span>
          <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
        </Link>
        <div className="grid grid-cols-3 gap-2">
          <Thumb label="Video" video gradient={gradient} />
          <Thumb label="Road" gradient={gradient} />
          <Thumb label="Stay" gradient={gradient} />
        </div>
      </div>

      {/* Body */}
      <div>
        <div className="mb-1.5 flex flex-wrap items-center gap-x-2 text-sm font-semibold uppercase tracking-wider text-[#C4792E] dark:text-[#E9A862]">
          <span>{t.region}</span>·<span>{t.country}</span>·<span>{t.days} days</span>·
          <span className="inline-flex items-center gap-1">
            <Mountain size={14} /> {t.alt} max
          </span>
        </div>

        <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-4xl">
          <Link
            to={tourLink(id)}
            className="transition hover:text-[#167A88] dark:hover:text-[#5CC3D0]"
          >
            {t.name}
          </Link>
        </h2>

        <p className="mb-5 mt-3 max-w-[60ch] text-base text-slate-600 dark:text-slate-300">
          {t.blurb}
        </p>

        {/* Departures */}
        <div className="grid gap-2">
          {t.dates.map(([date, status]) => {
            const s = STATUS[status] || STATUS.open;
            const isFull = status === "full";
            return (
              <div
                key={date}
                className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 rounded border border-slate-200 bg-white px-3.5 py-2.5 dark:border-slate-700 dark:bg-slate-800/60 md:grid-cols-[1.2fr_auto_1.4fr_auto]"
              >
                <span className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                  <Calendar size={16} className="text-[#1F8A99]" />
                  {date}
                </span>
                <span
                  className={`inline-block rounded-sm px-2 py-0.5 text-sm ${s.cls}`}
                >
                  {s.label}
                </span>
                <span className="col-span-2 font-semibold text-slate-900 dark:text-white md:col-span-1">
                  {eur(t.rider)}
                  <small className="font-medium text-slate-500 dark:text-slate-400">
                    {" "}rider
                  </small>{" "}
                  · {eur(t.pillion)}
                  <small className="font-medium text-slate-500 dark:text-slate-400">
                    {" "}pillion
                  </small>
                </span>
                <Link
                  to={enquireLink(id)}
                  className={`rounded px-3.5 py-2 text-center text-sm font-semibold transition hover:opacity-85 ${
                    isFull
                      ? "border-2 border-slate-800 text-slate-800 dark:border-slate-200 dark:text-slate-200"
                      : "border-2 border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                  }`}
                >
                  {isFull ? "Waitlist" : status === "request" ? "Ask" : "Enquire"}
                </Link>
              </div>
            );
          })}
        </div>

        <Link
          to={tourLink(id)}
          className="mt-4 inline-flex items-center gap-1.5 border-b-2 border-slate-200 text-lg text-slate-900 transition hover:border-[#C4792E] dark:border-slate-600 dark:text-white"
        >
          Full itinerary <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}

export default function UpcommingTours() {
  return (
    <main className="bg-[#FBFAF7] text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {/* Hero */}
      <header className="relative flex h-[min(60vh,520px)] min-h-[340px] items-end overflow-hidden bg-gradient-to-br from-[#9FB6C1] via-[#5C7A88] to-[#3C5461]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/65" />
        <div className="relative mx-auto w-[min(1180px,100%-32px)] pb-11 text-white sm:w-[min(1180px,100%-48px)]">
          <div className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#F3D9A8]">
            Upcoming tours · 2027
          </div>
          <h1 className="text-5xl font-semibold leading-none drop-shadow-lg sm:text-6xl lg:text-8xl">
            Eight journeys
          </h1>
        </div>
      </header>

      {/* List */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto w-[min(1180px,100%-32px)] sm:w-[min(1180px,100%-48px)]">
          <p className="max-w-[66ch] text-lg text-slate-600 dark:text-slate-300">
            Each departure needs seven riders to run and takes fourteen at most.
            Prices are per person in euros; pillions ride at a lower rate. Single
            room +€595. Book with a deposit; the balance is due eight weeks before
            the start.
          </p>

          <div className="mt-10 grid gap-10">
            {ORDER.map((id, i) => (
              <TourCard key={id} id={id} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}