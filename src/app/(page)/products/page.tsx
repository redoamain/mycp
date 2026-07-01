import { Metadata } from "next"
import ProductClient from "./productClient";

export const metadata: Metadata = {
  title: "Products | CITI PLUMB - Premium Faucets & Shower Solutions",
  description:
    "Explore CITI PLUMB's premium collection of kitchen and bathroom fixtures. Discover high-quality faucets, showers, and plumbing products designed for durability and elegance.",
  keywords:
    "CITI PLUMB products, kitchen fixtures, bathroom fixtures, faucets, showers, plumbing products, premium plumbing, Indonesia plumbing manufacturer, Lamongan products, kitchen accessories, bathroom accessories",
  openGraph: {
    title: "CITI PLUMB Products | Premium Kitchen & Bathroom Fixtures",
    description:
      "Discover our collection of premium kitchen and bathroom fixtures. Quality craftsmanship, innovative design, and lasting durability in every product.",
    type: "website",
    url: "https://citiplumb.com/products",
    siteName: "CITI PLUMB",
    images: [
      {
        url: "/img/products/BHF38101MBSD003.jpg",
        width: 1200,
        height: 630,
        alt: "CITI PLUMB - Premium Faucets & Shower Solutions",
        type: "image/jpeg",
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
    canonical: "https://citiplumb.com/products",
  },
};

export default function ProductsPage() {
  return <ProductClient/>
}
