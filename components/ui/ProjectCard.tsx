"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import type { Project } from "@/types";
import { itemVariants } from "@/components/ui/SectionWrapper";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group relative rounded-xl bg-gradient-to-br from-blue-500/35 via-zinc-800/60 to-sky-500/30 p-px shadow-[0_18px_55px_rgba(0,0,0,0.55)]"
    >
      <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.xl)-1px)] border border-zinc-800/90 bg-zinc-950/85 p-5 transition-colors duration-300 group-hover:border-blue-400/55">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(115deg, transparent 40%, rgba(99,102,241,0.18) 50%, transparent 60%)",
            backgroundSize: "220% 100%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
          transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
        />

        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/10 to-transparent" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_55%)]" />
          </div>
        </div>

        <h3 className="relative text-xl font-semibold text-zinc-100">{project.title}</h3>
        <p className="relative mt-3 line-clamp-2 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>
        <ul className="relative mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-blue-500/15 px-2.5 py-1 text-xs text-blue-300 ring-1 ring-blue-400/15 transition group-hover:bg-blue-500/25"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="relative mt-6 flex items-center gap-3 text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} GitHub`}
            className="rounded-md border border-zinc-700 bg-zinc-950/40 p-2.5 text-zinc-200 shadow-[0_0_0_rgba(59,130,246,0)] transition hover:border-blue-400 hover:text-blue-300 hover:shadow-[0_0_22px_rgba(59,130,246,0.35)]"
          >
            <CodeBracketIcon className="h-4 w-4" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} Live demo`}
            className="rounded-md border border-zinc-700 bg-zinc-950/40 p-2.5 text-zinc-200 shadow-[0_0_0_rgba(59,130,246,0)] transition hover:border-blue-400 hover:text-blue-300 hover:shadow-[0_0_22px_rgba(59,130,246,0.35)]"
          >
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
