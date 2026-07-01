import { Metadata } from "next"
import ContactClient from "./contactClient";

export const metadata: Metadata = {
  title: "Contact Us | CITI PLUMB - Get in Touch",
  description:
    "Contact CITI PLUMB for inquiries about our kitchen and bathroom fixtures, manufacturing services, or partnerships. We're here to help with your plumbing needs.",
  keywords:
    "CITI PLUMB contact, contact us, plumbing manufacturer, kitchen fixtures, bathroom fixtures, customer support, Indonesia plumbing, Lamongan",
  openGraph: {
    title: "Contact CITI PLUMB | Get in Touch With Us",
    description:
      "Reach out to CITI PLUMB for product inquiries, partnerships, or any questions about our precision manufacturing services.",
    type: "website",
    url: "https://citiplumb.id/contact",
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
    canonical: "https://citiplumb.id/contact",
  },
};

export default function ContactPage() {
 return <ContactClient/>
}
