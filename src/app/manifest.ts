// src/app/manifest.ts
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PT. CITI PLUMB - Premium Water Solutions",
    short_name: "CITI PLUMB",
    description:
      "High-quality faucets and shower solutions manufactured with advanced automation and expert craftsmanship to meet international standards. Durable SS-304 stainless steel, modern designs, and water-saving technology for residential, hospitality, and commercial projects.",
    start_url: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    background_color: "#ffffff",
    theme_color: "#1e40af",
    orientation: "portrait-primary",
    scope: "/",
    id: "/",
    categories: ["business", "manufacturing", "home-improvement", "sanitary"],
    lang: "en",
    dir: "ltr",
    icons: [
      // Apple Touch Icons
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      // Android Chrome Icons
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      // Icon for maskable (adaptive icon)
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      // Favicon 16x16
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      // Favicon 32x32
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  
   
    prefer_related_applications: false,
    related_applications: [],
  };
}
