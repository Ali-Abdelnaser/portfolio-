"use client";

import { motion } from "framer-motion";

const tile = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, ease: "easeOut", delay },
});

const whatIDo = [
  { icon: "📱", label: "Mobile Apps", desc: "Flutter · iOS · Android" },
  { icon: "🏗️", label: "Architecture", desc: "Clean · BLoC · GetIt" },
  { icon: "🔗", label: "Backend", desc: "Firebase · Supabase · APIs" },
];

export function About() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">

        <motion.p {...tile(0)} className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400/80">
          About
        </motion.p>
        <motion.h2 {...tile(0.07)} className="mb-10 text-2xl font-bold tracking-tight text-zinc-100 md:mb-12 md:text-3xl">
          Who I Am
        </motion.h2>

        {/* Bento grid */}
        <div className="grid auto-rows-auto gap-4 md:grid-cols-3">

          {/* Hero bio card — spans 2 cols */}
          <motion.div
            {...tile(0.1)}
            className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-[#0d1120] via-zinc-900 to-zinc-950 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.04] md:col-span-2"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -left-12 -top-12 h-52 w-52 rounded-full bg-blue-600/20 blur-[70px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full bg-sky-500/15 blur-[60px]" />

            <p className="relative mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400/70">Flutter Developer</p>
            <h3 className="relative text-3xl font-extrabold tracking-tight text-zinc-100 md:text-4xl">
              Ali <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Abdelnaser</span>
            </h3>

            <p className="relative mt-4 max-w-lg text-sm leading-7 text-zinc-400 md:text-[15px]">
              Second-year Computer &amp; Communications Engineering student at{" "}
              <span className="font-semibold text-zinc-200">MET Mansoura</span>.
              I build scalable, beautiful mobile apps using Flutter, with a focus on
              clean architecture and seamless user experiences.
            </p>

            <div className="relative mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(59,130,246,0.45)] transition hover:bg-blue-500"
              >
                Get in Touch
              </a>
              <a
                href="/cv.pdf"
                className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-800/70"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Status card */}
          <motion.div
            {...tile(0.16)}
            className="flex flex-col justify-between rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] to-emerald-900/[0.05] p-6 ring-1 ring-emerald-500/10"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Available</span>
              </div>
              <p className="mt-3 text-lg font-bold text-zinc-100">Open to work</p>
              <p className="mt-1.5 text-sm text-zinc-400">
                Looking for freelance gigs &amp; full-time Flutter roles.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-900/50 px-4 py-3">
              <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">Education</p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-200">MET Mansoura</p>
              <p className="text-xs text-zinc-500">CCE · Class of 2028</p>
            </div>
          </motion.div>

          {/* Stats row — 3 cards */}
          {[
            { value: "9+",    label: "Projects",    icon: "🚀" },
            { value: "1",     label: "Play Store App", icon: "📦" },
            { value: "2028",  label: "Graduation",  icon: "🎓" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              {...tile(0.22 + i * 0.07)}
              className="flex items-center gap-4 rounded-3xl border border-zinc-800/70 bg-zinc-900/60 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/[0.03]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-800/80 text-2xl">
                {s.icon}
              </span>
              <div>
                <p className="text-2xl font-extrabold leading-none text-zinc-100">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-zinc-500">{s.label}</p>
              </div>
            </motion.div>
          ))}

          {/* What I do — spans full width */}
          <motion.div
            {...tile(0.35)}
            className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/50 p-6 ring-1 ring-white/[0.03] md:col-span-3"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">What I Do</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {whatIDo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-800/60 bg-zinc-950/60 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-800/80 text-xl">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-zinc-100">{item.label}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
