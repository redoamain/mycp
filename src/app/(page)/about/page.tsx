
import { Metadata } from "next";
import AboutClient from "./aboutClient";
export const metadata: Metadata = {
  title: "About Us | PT. CITI PLUMB", 
  description:
    "Get to know CITI PLUMB, a leading manufacturer of kitchen and bathroom fixtures with precision manufacturing, quality assurance, and global standards since 2015.",
  keywords:
    "CITI PLUMB, about us, kitchen fixtures, bathroom fixtures, precision manufacturing, quality assurance, plumbing manufacturer, Indonesia",
  openGraph: {
    title: "About CITI PLUMB",
    description:
      "Learn about CITI PLUMB's vision, mission, core values, and journey in delivering innovative kitchen and bathroom solutions.",
    type: "website",
    url: "https://citiplumb.id/about",
    siteName: "CITI PLUMB",
    images: [
      {
        url: "/img/galery/pabrik/pabrik8.webp",
        width: 1200,
        height: 630,
        alt: "CITI PLUMB About Us",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://citiplumb.id/about",
  },
};
export default function AboutPage() {
 
 return <AboutClient/>
}
