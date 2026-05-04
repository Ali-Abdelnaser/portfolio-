"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function SectionWrapper({
  id,
  title,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={clsx("py-12 md:py-20", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-2xl font-semibold tracking-tight text-zinc-100 md:mb-10 md:text-3xl"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
}
