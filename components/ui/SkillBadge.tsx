"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { itemVariants } from "@/components/ui/SectionWrapper";

interface SkillBadgeProps {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export function SkillBadge({ label, Icon }: SkillBadgeProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3"
    >
      <Icon className="h-5 w-5 text-blue-400" />
      <span className="text-sm text-zinc-200">{label}</span>
    </motion.div>
  );
}
