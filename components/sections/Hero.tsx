"use client";

import { motion } from "framer-motion";
import { profileData } from "@/lib/data";
import { containerVariants, itemVariants } from "@/components/ui/SectionWrapper";
import { ShimmerImage } from "@/components/ui/ShimmerImage";

export function Hero() {
  const handleProjectsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080810] pt-28 pb-14 md:pt-32 md:pb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Dot-grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,130,255,0.22) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 85% at 50% 50%, black 25%, transparent 100%)",
        }}
      />

      {/* Top-edge spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 rounded-full bg-blue-600/28
          h-[180px] w-[280px] blur-[50px]
          md:h-[420px] md:w-[680px] md:blur-[110px]"
      />

      {/* Animated colour blobs */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 rounded-full bg-blue-600/18
          h-[240px] w-[240px] blur-[40px]
          md:h-[560px] md:w-[560px] md:blur-[130px]"
        animate={{ y: [0, -28, 0], x: [0, 20, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 rounded-full bg-sky-500/15
          h-[240px] w-[240px] blur-[40px]
          md:h-[560px] md:w-[560px] md:blur-[130px]"
        animate={{ y: [0, 28, 0], x: [0, -20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[20%] top-[30%] rounded-full bg-violet-500/10 max-md:hidden
          h-80 w-80 blur-[60px]
          md:blur-[80px]"
        animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top radial fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(59,130,246,0.22),transparent_65%)]"
      />

      {/* Film-grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.028] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ─── Content grid ─── */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-8">

        {/* Left: text */}
        <div>
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1.5 text-xs text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.14)]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            Available for freelance &amp; full-time
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-xl text-4xl font-extrabold tracking-tight text-zinc-100 md:text-[3.4rem] md:leading-[1.1]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-white via-blue-200 to-sky-300 bg-clip-text text-transparent">
              {profileData.name}
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-4 w-fit bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-[length:220%_auto] bg-clip-text text-xl font-semibold text-transparent md:text-2xl"
            animate={{ backgroundPosition: ["0% center", "220% center"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            Flutter &amp; Mobile Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 md:text-base"
          >
            I build beautiful cross-platform apps with Flutter and robust backend
            integrations, while crafting clean and modern web experiences with Next.js.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              onClick={handleProjectsClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_36px_rgba(59,130,246,0.5),0_4px_18px_rgba(59,130,246,0.3)] transition hover:from-blue-500 hover:to-sky-500"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/cv.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-6 py-3 text-sm font-semibold text-zinc-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-sm transition hover:border-zinc-500 hover:bg-zinc-800/70"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-8 border-t border-zinc-800/50 pt-7"
          >
            {[
              { num: "7+", label: "Projects Built" },
              { num: "1", label: "Published App" },
              { num: "2nd", label: "Year Student" },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold text-zinc-100">{num}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: image */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto w-full max-w-[340px] md:max-w-none"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Far ambient glow */}
          <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-blue-500/18 blur-[20px] md:blur-[60px]" />
          <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-sky-400/12 blur-[10px] md:blur-[30px]" />

          {/* Outer orbit ring */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-[-10%] rounded-full md:inset-[-12%]"
            style={{ border: "1.5px dashed rgba(99,130,246,0.28)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_14px_4px_rgba(99,130,246,0.7)]" />
          </motion.div>

          {/* Inner orbit ring */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-[-18%] rounded-full md:inset-[-22%]"
            style={{ border: "1px dashed rgba(14,165,233,0.16)" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_10px_3px_rgba(14,165,233,0.65)]" />
          </motion.div>

          {/* Image card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-2 shadow-[0_40px_90px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-zinc-800/60 bg-zinc-950">
              <ShimmerImage
                src="/assets/profile.png"
                alt="Ali Abdelnaser profile photo"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 500px"
                className="object-cover object-[50%_18%] brightness-[1.06] contrast-[1.1] saturate-[1.08] md:object-[50%_22%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/65 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4 pt-12">
                <p className="text-sm font-semibold text-zinc-100">{profileData.name}</p>
                <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-blue-200 ring-1 ring-blue-500/30">
                  Flutter Dev
                </span>
              </div>
            </div>
          </div>

          {/* Floating badge — left */}
          <motion.div
            className="absolute left-2 top-9 flex max-w-[calc(100%-1rem)] items-center gap-2 rounded-2xl border border-blue-400/25 bg-zinc-900/95 px-2.5 py-2 text-[11px] text-zinc-200 shadow-[0_8px_20px_rgba(0,0,0,0.5)] md:left-[-1.25rem] md:top-10 md:max-w-none md:bg-zinc-900/90 md:px-3 md:py-2.5 md:text-xs md:shadow-[0_14px_40px_rgba(59,130,246,0.22)] md:backdrop-blur-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-sm">🏗️</span>
            <span className="md:hidden">Clean Arch.</span>
            <span className="hidden md:inline">Clean Architecture</span>
          </motion.div>

          {/* Floating badge — right */}
          <motion.div
            className="absolute right-2 bottom-[4.5rem] flex max-w-[calc(100%-1rem)] items-center gap-2 rounded-2xl border border-sky-400/25 bg-zinc-900/95 px-2.5 py-2 text-[11px] text-zinc-200 shadow-[0_8px_20px_rgba(0,0,0,0.5)] md:right-[-1.25rem] md:bottom-16 md:max-w-none md:bg-zinc-900/90 md:px-3 md:py-2.5 md:text-xs md:shadow-[0_14px_40px_rgba(14,165,233,0.2)] md:backdrop-blur-md"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-sky-500/20 text-sm">⚡</span>
            <span className="md:hidden">BLoC · Firebase</span>
            <span className="hidden md:inline">BLoC + Firebase</span>
          </motion.div>

          {/* Floating pill — bottom */}
          <motion.div
            className="absolute bottom-2 left-1/2 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-zinc-700/55 bg-zinc-900/95 px-3 py-1.5 text-[10px] text-zinc-300 shadow-[0_6px_18px_rgba(0,0,0,0.5)] md:-bottom-4 md:max-w-none md:bg-zinc-900/90 md:px-4 md:py-2 md:text-[11px] md:shadow-[0_8px_28px_rgba(0,0,0,0.5)] md:backdrop-blur-md"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Flutter
            <span className="text-zinc-600">•</span>
            Supabase
            <span className="text-zinc-600">•</span>
            Firebase
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        onClick={handleProjectsClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-zinc-300"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to projects"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current">
          <path d="M12 5v14m0 0 6-6m-6 6-6-6" strokeWidth="1.75" />
        </svg>
        <span className="text-[9px] uppercase tracking-[0.22em]">scroll</span>
      </motion.a>
    </motion.section>
  );
}
