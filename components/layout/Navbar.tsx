"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.15, rootMargin: "-10% 0px -55% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const scrollToSection = (hash: string, closeMenu = true) => {
    const id = hash.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      if (closeMenu) setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      scrollToSection(href, true);
    };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0a]/60 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto w-full max-w-6xl px-4 py-3 md:px-8">
        <div
          className={clsx(
            "flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 md:px-6",
            scrolled
              ? "border-zinc-700/70 bg-zinc-900/65 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
              : "border-transparent bg-transparent shadow-none"
          )}
        >
          <a
            href="#hero"
            onClick={handleNavClick("#hero")}
            aria-label="Home"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 text-sm font-bold text-white shadow-[0_4px_14px_rgba(59,130,246,0.45)] transition hover:opacity-90"
          >
            AA
          </a>

          <ul className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className={clsx(
                      "relative pb-1 transition",
                      isActive ? "text-blue-400" : "text-zinc-300 hover:text-zinc-100"
                    )}
                  >
                    {item.label}
                    <span
                      className={clsx(
                        "absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-blue-400 transition-all duration-300",
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={handleNavClick("#contact")}
              className="rounded-full border border-blue-400 px-4 py-2 text-sm font-medium text-blue-400 transition hover:bg-blue-400/10"
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-zinc-200 md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-2 rounded-2xl border border-zinc-700/80 bg-zinc-900/98 shadow-[0_16px_40px_rgba(0,0,0,0.6)] md:hidden">
            <ul className="space-y-1 p-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      className={clsx(
                        "block w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition",
                        isActive
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-zinc-100 hover:bg-zinc-800/80"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="p-3 pt-0">
              <button
                type="button"
                onClick={() => scrollToSection("#contact")}
                className="block w-full rounded-lg border border-blue-400 px-3 py-3 text-center text-sm font-medium text-blue-400 transition hover:bg-blue-400/10"
              >
                Hire me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
