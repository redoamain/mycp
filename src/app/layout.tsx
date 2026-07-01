// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

// OPTIMASI: Tambahkan display swap dan variable
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Penting! menghindari FOIT
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"], // Hanya weight yang diperlukan
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citiplumb.id"),
  title: {
    default: "CITI PLUMB - Premium Faucets & Shower Solutions",
    template: "%s | PT. CITI PLUMB",
  },
  description:
    "High-quality faucets and shower solutions manufactured with advanced technology, precision engineering, and expert craftsmanship to meet international quality standards.",
  keywords: [
    "faucet manufacturer",
    "premium faucets",
    "shower solutions",
    "stainless steel faucet",
    "SS304 faucet",
    "bathroom fixtures",
    "sanitary ware",
    "water solutions",
    "water-saving faucet",
    "water-saving shower",
    "hotel shower system",
    "commercial bathroom fixtures",
    "bathroom accessories",
    "modern faucet design",
    "anti-rust faucet",
    "Indonesia faucet manufacturer",
    "citiplumb",
    "CITI PLUMB",
    "Pabrik faucet Lamongan",
    "pabrik sanitary ware Indonesia",
    "pabrik kran di lamongan",
  ].join(", "),
  authors: [
    {
      name: "CITI PLUMB",
      url: "https://citiplumb.id",
    },
  ],
  creator: "CITI PLUMB",
  publisher: "CITI PLUMB",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://citiplumb.id",
    siteName: "CITI PLUMB - Premium Water Solutions",
    title: "CITI PLUMB - Premium Faucets & Shower Solutions Manufacturer",
    description:
      "High-quality faucets and shower solutions manufactured with advanced technology, precision engineering, and expert craftsmanship to meet international quality standards.",
    images: [
      {
        url: "/img/products/BHF38101MBSD003.jpg",
        width: 1200,
        height: 630,
        alt: "CITI PLUMB - Premium Faucets & Shower Solutions",
        type: "image/jpeg",
      },
    ],
    emails: ["info@citiplumb.id"],
    phoneNumbers: ["+62 821-4354-5599"],
    countryName: "Indonesia",
  },
  twitter: {
    card: "summary_large_image",
    title: "CITI PLUMB - Premium Faucets & Shower Solutions",
    description:
      "High-quality faucets and shower solutions manufactured to international standards.",
    images: ["/twitter-image.jpg"],
    creator: "@citiplumb",
    site: "@citiplumb",
  },
  alternates: {
    canonical: "https://citiplumb.id",
    languages: {
      "id-ID": "https://citiplumb.id/id",
      "en-US": "https://citiplumb.id/en",
    },
  },
  verification: {
    google: "EhE5OAmY12aFr4jnmDlHTxIUh35_aT61dqhIzDknyFM",
  },
  category: "Manufacturing",
  classification:
    "Faucet Manufacturing, Shower Solutions, Bathroom Fixtures, Water Solutions",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

async function getMaintenanceStatus() {
  try {
    const maintenance = await prisma.maintenance.findFirst();
    return {
      enabled: maintenance?.enabled || false,
      message: maintenance?.message || "",
      endTime: maintenance?.endTime || null,
    };
  } catch (error) {
    console.error("Error reading maintenance:", error);
    return { enabled: false, message: "", endTime: null };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const maintenance = await getMaintenanceStatus();
  const maintenanceMode = maintenance?.enabled === true;

  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  const isMaintenancePage = pathname === "/maintenance";
  const isAuthPage =
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/admin/login") ||
    pathname === "/login" ||
    pathname?.startsWith("/register") ||
    pathname?.startsWith("/auth");
  const isAdminPage = pathname?.startsWith("/admin");

  const hideNavbarFooter =
    (maintenanceMode && !isMaintenancePage) || isAuthPage || isAdminPage;

  return (
    <html lang="id" className={cn("h-full", "antialiased")}>
      <head>
        {/* Hanya preconnect ke Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Hapus semua preload font manual - Next.js sudah handle otomatis */}
        {/* Jangan tambahkan <link rel="preload" href="/_next/static/media/..."> */}

        {/* Meta tag untuk performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body
        className={`${inter.variable} ${inter.className} min-h-full flex flex-col antialiased`}
      >
        {!hideNavbarFooter && <Navbar />}
        <main className="flex-1">{children}</main>
        {!hideNavbarFooter && <Footer />}
      </body>
    </html>
  );
}
