import type { ProfileData, Project, Skill, SocialLink } from "@/types";

export const profileData: ProfileData = {
  name: "Ali Abdelnaser",
  role: "Flutter & Mobile Developer",
  bio: "Second-year Computer and Communications Engineering student focused on Flutter development, building scalable mobile apps with clean architecture and modern UX.",
};

export const projects: Project[] = [
  {
    id: "five2ten",
    title: "Five2Ten",
    description:
      "Nutrition and habit app with Gemini + ML Kit OCR, gamified daily tasks, and Firebase-secured architecture using BLoC/Cubit.",
    tags: ["Flutter", "Firebase", "BLoC", "Gemini API", "Hive"],
    images: [
      "/projects/five2ten-1.png",
      "/projects/five2ten-2.png",
      "/projects/five2ten-3.png",
    ],
    image: "/projects/five2ten-1.png",
    github: "https://github.com/username/five2ten",
    playStore: "https://play.google.com/store/apps/details?id=com.aliabdelnaser.five2ten",
    category: "flutter",
  },
  {
    id: "smart-mail",
    title: "Smart Mail System",
    description:
      "A production-grade team email management and marketing campaign system. It streamlines communication workflows with real-time campaign tracking, automated data imports, and a secure role-based approval flow.",
    tags: ["Flutter", "Firebase", "BLoC", "Clean Architecture", "GoRouter"],
    images: [
      "/projects/smart-mail-1.png",
      "/projects/smart-mail-2.png",
      "/projects/smart-mail-3.png",
    ],
    image: "/projects/smart-mail-1.png",
    github: "#",
    category: "flutter",
  },
  {
    id: "health-band",
    title: "Health Band Tracker",
    description:
      "A real-time health monitoring application seamlessly synced with custom wearable hardware. It leverages Firebase live listeners to instantly display and track biometric data streams.",
    tags: ["Flutter", "Firebase", "IoT", "Hardware Integration", "Real-time"],
    images: [
      "/projects/health-band-1.png",
      "/projects/health-band-2.png",
      "/projects/health-band-3.png",
    ],
    image: "/projects/health-band-1.png",
    github: "#",
    category: "flutter",
  },
  {
    id: "mie-attendance-app",
    title: "MIE Attendance App",
    description:
      "Offline-first QR attendance system with Supabase auth/database, Hive local cache, and real-time synchronization.",
    tags: ["Flutter", "Supabase", "Hive", "QR Scanner", "Riverpod"],
    images: [
      "/projects/mie-app-1.png",
      "/projects/mie-app-2.png",
      "/projects/mie-app-3.png",
    ],
    image: "/projects/mie-app-1.png",
    github: "https://github.com/username/mie-app",
    live: "https://example.com/mie-app",
    category: "flutter",
  },
  {
    id: "registration-app",
    title: "Registration Management",
    description:
      "A comprehensive attendee registration and management application. It features real-time data sync via Supabase, seamless QR code check-ins, and automated data export to Excel along with intuitive analytics dashboards.",
    tags: ["Flutter", "Supabase", "BLoC", "QR Scanner", "Excel Export"],
    images: [
      "/projects/registration-app-1.png",
      "/projects/registration-app-2.png",
      "/projects/registration-app-3.png",
    ],
    image: "/projects/registration-app-1.png",
    github: "https://github.com/Ali-Abdelnaser/Registrations-",
    category: "flutter",
  },
  {
    id: "cars-app",
    title: "Cars App",
    description:
      "A full-featured mobile application designed for browsing and managing car listings. It leverages Flutter for a seamless UI, integrated with Firebase for secure authentication, real-time database sync via Cloud Firestore, and image handling through Firebase Storage.",
    tags: ["Flutter", "Firebase", "Provider", "Firestore"],
    images: [
      "/projects/cars-app-1.png",
      "/projects/cars-app-2.png",
      "/projects/cars-app-3.png",
    ],
    image: "/projects/cars-app-1.png",
    github: "https://github.com/Ali-Abdelnaser/cars_app",
    category: "flutter",
  },
  {
    id: "breaking-bad-characters",
    title: "Breaking Bad Characters",
    description:
      "A responsive Flutter application that fetches and displays character details from the Breaking Bad universe. It features robust state management with BLoC, efficient API requests via Dio, and seamless offline capabilities enhanced with Lottie animations for an engaging user experience.",
    tags: ["Flutter", "BLoC", "Dio", "Offline Support", "Lottie"],
    images: [
      "/projects/breaking-bad-characters-1.png",
      "/projects/breaking-bad-characters-2.png",
      "/projects/breaking-bad-characters-3.png",
    ],
    image: "/projects/breaking-bad-characters-1.png",
    github: "https://github.com/Ali-Abdelnaser/breaking-bad-character",
    category: "flutter",
  },
  {
    id: "ieee-met-sb",
    title: "IEEE MET SB",
    description:
      "The official website for the IEEE MET Student Branch in Mansoura. A vibrant, interactive platform built with React, featuring 3D elements via Three.js, smooth animations, and a secure event registration system powered by Supabase.",
    tags: ["React", "Supabase", "Three.js", "Framer Motion", "Vite"],
    images: [],
    image: "/projects/ieee-met-sb-1.png",
    github: "https://github.com/Ali-Abdelnaser/WebMaster",
    live: "https://ieeemet.org",
    category: "web",
  },
  {
    id: "ieee-eru",
    title: "IEEE ERU Official Website",
    description:
      "The official digital headquarters for the IEEE ERU Student Branch, featuring an immersive cyber-tactical aesthetic. It serves as a central hub for community operations, showcasing top members, mission briefings (events), and a dynamic recruitment portal.",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion", "Supabase"],
    images: [],
    image: "/projects/ieee-eru-1.png",
    github: "https://github.com/Ali-Abdelnaser/IEEE-ERU-Website",
    live: "https://ieee-eru.org/",
    category: "web",
  },
  
];

export const skills: Skill[] = [
  { name: "Flutter", icon: "flutter" },
  { name: "Dart", icon: "dart" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Firebase", icon: "firebase" },
  { name: "Git", icon: "git" },
];

export const contactEmail = "alinaserhema60@gmail.com";

export const contactPhone = "+201068643407";

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Ali-Abdelnaser" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ali-abdelnaser-947230295/" },
];
