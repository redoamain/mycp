import { Metadata } from "next"
import GalleryClient from "./galleryClient";

export const metadata: Metadata = {
  title: "Gallery | CITI PLUMB - Company, Departments & Events",
  description:
    "Explore our gallery showcasing CITI PLUMB's company culture, manufacturing facilities, department teams, and corporate events. See our journey in precision plumbing manufacturing.",
  keywords:
    "CITI PLUMB gallery, company photos, manufacturing facility, department teams, corporate events, company culture, factory tour, plumbing industry, Indonesia manufacturing, Lamongan factory, team photos, event documentation",
  openGraph: {
    title: "Gallery | CITI PLUMB - Company, Departments & Events",
    description:
      "Discover CITI PLUMB through our company gallery. View our manufacturing facilities, department teams, corporate events, and company culture in action.",
    type: "website",
    url: "https://citiplumb.id/gallery",
    siteName: "CITI PLUMB",
    images: [
      {
        url: "/img/galery/pabrik/pabrik8.webp",
        width: 1200,
        height: 630,
        alt: "CITI PLUMB Company Gallery - Facilities, Teams & Events",
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
    canonical: "https://citiplumb.id/gallery",
  },
};
export default function GalleryPage() {
return <GalleryClient/>
}
