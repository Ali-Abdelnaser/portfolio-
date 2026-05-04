"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { containerVariants, itemVariants } from "@/components/ui/SectionWrapper";
import { AppShowcase } from "@/components/sections/AppShowcase";

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-12 md:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.02 }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-2xl font-semibold tracking-tight text-zinc-100 md:mb-10 md:text-3xl"
        >
          My Projects
        </motion.h2>

        <div>
          <AppShowcase projects={projects} />
        </div>
      </div>
    </motion.section>
  );
}
