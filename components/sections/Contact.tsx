"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { contactEmail, contactPhone, socialLinks } from "@/lib/data";

const WHATSAPP_NUMBER = "201068643407";

const socials = [
  {
    label: "Gmail",
    handle: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: "logos:google-gmail",
    color: "#EA4335",
  },
  {
    label: "WhatsApp",
    handle: contactPhone,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: "logos:whatsapp-icon",
    color: "#25D366",
  },
  {
    label: "LinkedIn",
    handle: "ali-abdelnaser",
    href: socialLinks.find((l) => l.platform === "LinkedIn")?.url ?? "#",
    icon: "logos:linkedin-icon",
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    handle: "Ali-Abdelnaser",
    href: socialLinks.find((l) => l.platform === "GitHub")?.url ?? "#",
    icon: "mdi:github",
    color: "#ffffff",
  },
];

import type { Easing } from "framer-motion";

const EASE: Easing = "easeOut";

const tile = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, ease: EASE, delay },
});

export function Contact() {
  const [message, setMessage] = useState("");

  const sendAll = () => {
    const trimmed = message.trim();
    if (!trimmed) return;
    const encodedWA = encodeURIComponent(trimmed);
    const encodedSubject = encodeURIComponent("Message from Portfolio");
    const encodedBody = encodeURIComponent(trimmed);

    // Open WhatsApp in new tab
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedWA}`, "_blank");

    // Open Gmail compose in new tab
    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&to=${contactEmail}&su=${encodedSubject}&body=${encodedBody}`,
        "_blank"
      );
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      sendAll();
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">

        <motion.p {...tile(0)} className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400/80">
          Contact
        </motion.p>
        <motion.h2 {...tile(0.07)} className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
          Let&apos;s Work Together
        </motion.h2>
        <motion.p {...tile(0.12)} className="mt-2 text-sm text-zinc-500">
          Open for freelance &amp; full-time opportunities — reply within 24h.
        </motion.p>

        <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">

          {/* WhatsApp message form */}
          <motion.div
            {...tile(0.15)}
            className="relative overflow-hidden rounded-3xl border border-zinc-800/70 bg-zinc-900/60 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-white/[0.04]"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-500/12 blur-3xl" />

            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#25D366]/15 ring-1 ring-[#25D366]/25">
                <Icon icon="logos:whatsapp-icon" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-100">Send a Message</p>
                <p className="text-xs text-zinc-500">Opens WhatsApp &amp; Gmail simultaneously</p>
              </div>
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hi Ali, I'd like to discuss a project..."
              rows={5}
              className="w-full resize-none rounded-2xl border border-zinc-700/70 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none ring-0 transition focus:border-green-500/50 focus:ring-1 focus:ring-green-500/30"
            />

            <div className="mt-3 flex items-center justify-between gap-3">
              <p className="text-[11px] text-zinc-600">Ctrl+Enter to send</p>
              <button
                type="button"
                onClick={sendAll}
                disabled={!message.trim()}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] transition hover:from-blue-500 hover:to-sky-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send to Ali
              </button>
            </div>
          </motion.div>

          {/* Social links */}
          <div className="grid grid-cols-2 gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                {...tile(0.18 + i * 0.06)}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-3xl border border-zinc-800/70 bg-zinc-900/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-white/[0.03] transition hover:border-zinc-600/80 hover:bg-zinc-800/70"
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-2xl transition"
                  style={{ background: `${s.color}18` }}
                >
                  <Icon icon={s.icon} className="h-6 w-6" />
                </span>
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">{s.label}</p>
                  <p className="mt-0.5 truncate text-sm font-semibold text-zinc-200">{s.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
