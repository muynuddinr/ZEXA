export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // SVG path
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user engagement and create memorable digital experiences.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    id: 3,
    title: "Branding",
    description: "Comprehensive branding solutions that establish your unique identity and resonate with your audience.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 4,
    title: "Digital Advertising",
    description: "Targeted advertising campaigns across multiple digital channels to maximize reach and conversion rates.",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
  },
  {
    id: 5,
    title: "SEO",
    description: "Strategic search engine optimization to improve your rankings and drive organic traffic to your website.",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    id: 6,
    title: "SMM",
    description: "Social media management and marketing strategies to grow your brand presence and engage your audience.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    id: 7,
    title: "Content Marketing",
    description: "Compelling content creation and strategy to build authority, engage audiences, and drive conversions.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    id: 8,
    title: "Video Production",
    description: "Professional video creation and editing services for marketing, promotional, and branding content.",
    icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: 9,
    title: "Photography",
    description: "Professional photography services for products, events, and branding to showcase your business visually.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    id: 10,
    title: "Analytics & Growth",
    description: "Data analytics and growth strategies to measure performance, optimize campaigns, and scale your business.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];
