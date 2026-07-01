import { Metadata } from "next";
import ServiceClient from "./serviceClient";

export const metadata: Metadata = {
  title: "Services | CITI PLUMB - Integrated Manufacturing Solutions",
  description:
    "Discover CITI PLUMB's complete integrated manufacturing services including moulding, injection molding, electroplating, spray coating, assembly, quality assurance, and OEM/ODM solutions for kitchen and bathroom fixtures.",
  keywords:
    "CITI PLUMB services, manufacturing services, moulding, injection molding, electroplating, spray coating, assembly services, quality assurance, OEM manufacturing, ODM manufacturing, plastic injection, chrome plating, Indonesia manufacturing, Lamongan factory, custom manufacturing",
  openGraph: {
    title: "CITI PLUMB Services | Complete Manufacturing Solutions",
    description:
      "Explore our comprehensive manufacturing services from moulding and injection to plating, assembly, and quality assurance. End-to-end solutions for premium kitchen and bathroom fixtures.",
    type: "website",
    url: "https://citiplumb.com/services",
    siteName: "CITI PLUMB",
    images: [
      {
        url: "/img/galery/pabrik/pabrik8.webp",
        width: 1200,
        height: 630,
        alt: "CITI PLUMB Manufacturing Services",
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
    canonical: "https://citiplumb.com/services",
  },
};
export default function ServicesPage() {
 return <ServiceClient/>

}
