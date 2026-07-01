
import { Metadata } from "next"
import CareerClient from "./careerClient";

export const metadata: Metadata = {
  title: "Career | PT. CITI PLUMB - Join Our Team",
  description:
    "Build your career with CITI PLUMB. Explore job opportunities in precision manufacturing, engineering, quality assurance, and more. Join our team of innovators.",
  keywords:
    "CITI PLUMB career, job opportunities, manufacturing jobs, engineering jobs, quality assurance, plumbing industry career, Indonesia manufacturing, Lamongan jobs",
  openGraph: {
    title: "Career at CITI PLUMB | Join Our Manufacturing Team",
    description:
      "Discover exciting career opportunities at CITI PLUMB. We're looking for talented individuals to join our team in precision manufacturing and innovation.",
    type: "website",
    url: "https://citiplumb.id/career",
    siteName: "CITI PLUMB",
    images: [
      {
        url: "/img/galery/pabrik/pabrik8.webp",
        width: 1200,
        height: 630,
        alt: "CITI PLUMB Career",
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
    canonical: "https://citiplumb.id/career",
  },
};
export default function CareerPage() {
  return <CareerClient/>
}
