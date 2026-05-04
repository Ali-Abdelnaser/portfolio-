import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ali.dev"),
  title: "Ali | Flutter & Mobile Developer",
  description:
    "Ali is a Flutter and mobile developer building polished cross-platform apps and modern web experiences.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ali | Flutter & Mobile Developer",
    description:
      "Explore Ali's portfolio with Flutter, mobile, and web projects built for real-world impact.",
    url: "https://ali.dev",
    siteName: "Ali Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali | Flutter & Mobile Developer",
    description:
      "Flutter and mobile developer portfolio featuring shipped apps and web builds.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0a0a0a] text-zinc-100">{children}</body>
    </html>
  );
}
