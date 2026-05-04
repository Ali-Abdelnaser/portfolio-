"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/types";
import { ShimmerImage } from "@/components/ui/ShimmerImage";

function WebPreviewCard({ project }: { project: Project }) {
  const domain = project.live && project.live !== "#"
    ? new URL(project.live).hostname.replace("www.", "")
    : "preview";

  return (
    <div className="group relative mx-auto w-full overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.65)] transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_24px_70px_rgba(139,92,246,0.18)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-zinc-900/80 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-2 flex-1 rounded-md bg-zinc-800/80 px-3 py-1 text-center text-[11px] text-zinc-500">
          {domain}
        </div>
      </div>

      {/* Body */}
      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-[#0d0d1a] to-zinc-950 md:h-64">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-600/15 blur-3xl" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Project name */}
        <div className="relative z-10 text-center px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-400/70">
            Web Project
          </p>
          <p className="mt-2 text-lg font-bold tracking-tight text-zinc-100 md:text-xl">
            {project.title}
          </p>
        </div>

        {/* Hover overlay */}
        {project.live && project.live !== "#" ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 backdrop-blur-[0px] transition-all duration-300 group-hover:bg-black/55 group-hover:backdrop-blur-[2px]"
            aria-label={`Open ${project.title} preview`}
          >
            <span className="flex translate-y-3 items-center gap-2 rounded-2xl border border-violet-400/40 bg-violet-500/15 px-5 py-2.5 text-sm font-semibold text-violet-100 opacity-0 shadow-[0_0_30px_rgba(139,92,246,0.35)] backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Open Preview
              <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden />
            </span>
          </a>
        ) : (
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-2 rounded-2xl border border-zinc-600/50 bg-zinc-800/80 px-5 py-2.5 text-sm font-semibold text-zinc-400 backdrop-blur-md">
              Coming Soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

interface AppShowcaseProps {
  projects: Project[];
}

interface ActiveGalleryState {
  projectId: string;
  startIndex: number;
}

export function AppShowcase({ projects }: AppShowcaseProps) {
  const [activeGallery, setActiveGallery] = useState<ActiveGalleryState | null>(null);
  const galleryTrackRef = useRef<HTMLDivElement | null>(null);

  const activeProject = useMemo(
    () =>
      activeGallery ? projects.find((project) => project.id === activeGallery.projectId) : undefined,
    [projects, activeGallery]
  );

  useEffect(() => {
    if (!activeGallery || !activeProject || !galleryTrackRef.current) return;

    const track = galleryTrackRef.current;
    const target = track.querySelector<HTMLElement>(
      `[data-gallery-index="${activeGallery.startIndex}"]`
    );
    if (!target) return;

    requestAnimationFrame(() => {
      track.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    });
  }, [activeGallery, activeProject]);

  useEffect(() => {
    if (!activeGallery) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGallery(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeGallery]);

  return (
    <>
      <div className="space-y-8 md:space-y-12">
        {projects.map((project, projectIndex) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: projectIndex * 0.04 }}
            className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-[#05070d] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.62)] ring-1 ring-white/[0.04] before:pointer-events-none before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent md:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl"
            />
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12">
              <div className="order-2 text-center md:order-1 md:text-left">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-100 md:text-4xl">
                  {project.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-300 md:mx-0 md:text-base">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                  {project.tags.map((technology) => (
                    <li
                      key={`${project.id}-${technology}`}
                      className="rounded-lg border border-white/[0.09] bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:border-rose-300/20 hover:text-zinc-200 md:text-[11px] md:tracking-[0.16em]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                {project.playStore ? (
                  <div className="mt-7 flex justify-center md:justify-start">
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} on Google Play`}
                      className="group inline-flex max-w-full items-center gap-3 rounded-2xl border border-zinc-700/90 bg-zinc-950/80 px-4 py-3 pr-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-black/40 backdrop-blur-sm transition hover:border-zinc-500 hover:bg-zinc-900/90"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                        <Icon icon="logos:google-play-icon" className="h-7 w-7" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 text-left leading-tight">
                        <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                          Get it on
                        </span>
                        <span className="block text-[15px] font-semibold tracking-tight text-zinc-100">
                          Google Play
                        </span>
                      </span>
                      <ArrowTopRightOnSquareIcon
                        className="h-5 w-5 shrink-0 text-zinc-500 transition group-hover:text-zinc-300"
                        aria-hidden
                      />
                    </a>
                  </div>
                ) : null}
              </div>

              <div className="order-1 md:order-2">
                {project.category === "web" ? (
                  <WebPreviewCard project={project} />
                ) : (
                  <div className="relative mx-auto h-[19rem] w-[19rem] md:h-[25rem] md:w-[25rem]">
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),transparent_62%)] blur-2xl" />
                    {(project.images ?? []).map((image, imageIndex) => {
                      const shotNumber =
                        Number(image.match(/-(\d+)(?=\.[^.]+$)/)?.[1] ?? "0") || 0;
                      const isSecondShot = shotNumber === 2;
                      const isPriority =
                        projectIndex === 0 && shotNumber === 2;
                      const baseZ =
                        shotNumber === 2 ? "z-40" : shotNumber === 3 ? "z-20" : "z-10";
                      const positionClass =
                        shotNumber === 1
                          ? "left-0 top-14 rotate-[-8deg] md:left-3 md:top-16"
                          : shotNumber === 2
                            ? "left-1/2 top-0 z-40 -translate-x-1/2 md:top-2"
                            : "right-0 top-14 rotate-[8deg] md:right-3 md:top-16";

                      return (
                        <button
                          key={`${project.id}-screen-${imageIndex}`}
                          type="button"
                          onClick={() =>
                            setActiveGallery({ projectId: project.id, startIndex: imageIndex })
                          }
                          className={[
                            "group/img absolute block h-56 w-32 md:h-72 md:w-40",
                            baseZ,
                            positionClass,
                            isSecondShot ? "-translate-y-2 md:-translate-y-4" : "",
                          ].join(" ")}
                          aria-label={`Open ${project.title} screenshot ${imageIndex + 1}`}
                        >
                          <span className="pointer-events-none absolute inset-x-2 bottom-3 z-10 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white opacity-0 backdrop-blur-md transition duration-300 group-hover/img:opacity-100 md:text-xs">
                            View
                          </span>
                          <ShimmerImage
                            src={image}
                            alt={`${project.title} screenshot ${imageIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 128px, 160px"
                            loading={isPriority ? "eager" : "lazy"}
                            imageKey={`${project.id}-${image}`}
                            className="object-contain"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {activeGallery && activeProject && activeProject.category !== "web" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-md"
          onClick={() => setActiveGallery(null)}
        >
          <div
            className="flex min-h-full items-center justify-center px-4 py-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full max-w-3xl rounded-3xl border border-zinc-800/70 bg-zinc-950/55 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl md:max-w-4xl md:p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-zinc-200 md:text-base">
                  {activeProject.title} Screenshots
                </p>
                <button
                  type="button"
                  onClick={() => setActiveGallery(null)}
                  className="rounded-full border border-zinc-600 bg-zinc-900/80 px-4 py-1.5 text-sm text-zinc-100 transition hover:bg-zinc-800"
                >
                  Close
                </button>
              </div>

              <div
                ref={galleryTrackRef}
                className="gallery-scroll mt-4 flex max-h-[min(70vh,720px)] flex-col gap-4 overflow-y-auto overscroll-contain pr-1 [-webkit-overflow-scrolling:touch]"
              >
                {(activeProject.images ?? []).map((image, index) => (
                  <div
                    key={`${activeProject.id}-gallery-${index}`}
                    data-gallery-index={index}
                    className="w-full"
                  >
                    <div className="relative mx-auto h-[min(52vh,620px)] w-full max-w-[420px] md:h-[min(56vh,680px)] md:max-w-[460px]">
                      <ShimmerImage
                        src={image}
                        alt={`${activeProject.title} gallery screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 92vw, 460px"
                        loading="eager"
                        imageKey={`${activeProject.id}-gallery-${image}`}
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-center text-xs text-zinc-400 md:text-sm">
                اسكرول لتحت/لفوق لمشاهدة باقي الصور
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
