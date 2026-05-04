"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { containerVariants, itemVariants } from "@/components/ui/SectionWrapper";

interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

const row1: SkillItem[] = [
  { name: "Flutter",         icon: "logos:flutter",              color: "#54C5F8" },
  { name: "Dart",            icon: "logos:dart",                 color: "#00B4AB" },
  { name: "Firebase",        icon: "logos:firebase",             color: "#FFA000" },
  { name: "Supabase",        icon: "logos:supabase-icon",        color: "#3ECF8E" },
  { name: "Appwrite",        icon: "simple-icons:appwrite",      color: "#F02E65" },
  { name: "SQLite",          icon: "logos:sqlite",               color: "#003B57" },
  { name: "REST APIs",       icon: "logos:postman-icon",         color: "#FF6C37" },
  { name: "Google Cloud",    icon: "logos:google-cloud",         color: "#4285F4" },
  { name: "Android Studio",  icon: "logos:android-studio",       color: "#3DDC84" },
];

const row2: SkillItem[] = [
  { name: "React",           icon: "logos:react",                color: "#61DAFB" },
  { name: "Next.js",         icon: "logos:nextjs-icon",          color: "#ffffff" },
  { name: "TailwindCSS",     icon: "logos:tailwindcss-icon",     color: "#38BDF8" },
  { name: "TypeScript",      icon: "logos:typescript-icon",      color: "#3178C6" },
  { name: "JavaScript",      icon: "logos:javascript",           color: "#F7DF1E" },
  { name: "Three.js",        icon: "logos:threejs",              color: "#ffffff" },
  { name: "Framer Motion",   icon: "logos:framer",               color: "#BB4BFF" },
  { name: "Git",             icon: "logos:git-icon",             color: "#F05032" },
  { name: "Figma",           icon: "logos:figma",                color: "#F24E1E" },
  { name: "VS Code",         icon: "logos:visual-studio-code",   color: "#007ACC" },
];

function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div
      className="group mx-2 flex shrink-0 items-center gap-3 rounded-2xl border border-zinc-800/70 bg-zinc-900/60 px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-zinc-600/80 hover:bg-zinc-800/70"
      style={{ "--skill-color": skill.color } as React.CSSProperties}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300"
        style={{ background: `${skill.color}14` }}
      >
        <Icon icon={skill.icon} width={28} height={28} />
      </span>
      <span className="whitespace-nowrap text-sm font-semibold text-zinc-300 transition-colors duration-300 group-hover:text-zinc-100">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: SkillItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="overflow-hidden"
      style={{ maskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)", WebkitMaskImage: "linear-gradient(90deg,transparent,black 12%,black 88%,transparent)" }}
    >
      <div className={reverse ? "animate-marquee-reverse flex" : "animate-marquee flex"}>
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-12 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.div variants={itemVariants} className="mb-10 md:mb-14">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400/80">
            Tech Stack
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
            Skills &amp; Tools
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-500">
            Technologies I work with daily — from mobile to web and backend.
          </p>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </motion.div>
    </motion.section>
  );
}
