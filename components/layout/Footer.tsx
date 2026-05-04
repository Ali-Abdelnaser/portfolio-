import { contactEmail, socialLinks as profileSocialLinks } from "@/lib/data";

const footerSocialLinks = [
  {
    label: "GitHub",
    href:
      profileSocialLinks.find((item) => item.platform === "GitHub")?.url ??
      "https://github.com/username",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.7 1.2 3.4.9.1-.8.4-1.2.7-1.5-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 6.6 7c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href:
      profileSocialLinks.find((item) => item.platform === "LinkedIn")?.url ??
      "https://linkedin.com/in/ali-abdelnaser",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM2.75 9.75h4.5V21h-4.5V9.75Zm7.25 0h4.31v1.54h.06c.6-1.13 2.06-2.31 4.23-2.31 4.52 0 5.35 2.97 5.35 6.84V21h-4.5v-4.63c0-1.1-.02-2.53-1.54-2.53-1.55 0-1.78 1.2-1.78 2.45V21h-4.5V9.75Z" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: `mailto:${contactEmail}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V6.75Zm2.25-.25a.75.75 0 0 0-.75.75v.44l8.2 5.47a.5.5 0 0 0 .6 0l8.2-5.47v-.44a.75.75 0 0 0-.75-.75H4.25Zm16.25 3.03-7.37 4.92a2 2 0 0 1-2.22 0L3.5 9.53v7.72c0 .41.34.75.75.75h15.5c.41 0 .75-.34.75-.75V9.53Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0a]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 md:flex-row md:px-8">
        <p>© {new Date().getFullYear()} Ali</p>
        <div className="flex items-center gap-4">
          {footerSocialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              className="text-zinc-400 transition hover:text-blue-400"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
