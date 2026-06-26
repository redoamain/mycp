// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://citiplumb.id"),
  title: {
    default: "CITI PLUMB - Premium Faucets & Shower Solutions",
    template: "%s | citiplumb",
  },
  description:
    "High-quality faucets and shower solutions manufactured with advanced automation and expert craftsmanship to meet international standards. Durable SS-304 stainless steel, modern designs, and water-saving technology for residential, hospitality, and commercial projects.",
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
    "cp",
    "CITI PLUMB",
    "Pabrik faucet Lamongan",
    "pabrik sanitary ware Indonesia",
    "pabrik kran di lamongan"
  ].join(", "),
  authors: [
    {
      name: "citiplumb",
      url: "https://citiplumb.id",
    },
  ],
  creator: "citiplumb",
  publisher: "citiplumb",
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
    locale: "en_US",
    url: "https://citiplumb.id",
    siteName: "citiplumb - Premium Water Solutions",
    title: "citiplumb - Premium Faucets & Shower Solutions",
    description:
      "High-quality faucets and shower solutions manufactured with advanced automation and expert craftsmanship to meet international standards.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "citiplumb Premium Water Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "citiplumb - Premium Faucets & Shower Solutions",
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
  // Baca status maintenance dari database
  const maintenance = await getMaintenanceStatus();
  const maintenanceMode = maintenance?.enabled === true;

  // Dapatkan pathname
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  // Cek apakah di halaman maintenance
  const isMaintenancePage = pathname === "/maintenance";

  // Cek apakah di halaman auth (login, register, dll)
  const isAuthPage =
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/admin/login") ||
    pathname === "/login" ||
    pathname?.startsWith("/register") ||
    pathname?.startsWith("/auth");

  // Cek apakah di halaman admin
  const isAdminPage = pathname?.startsWith("/admin");

  // Sembunyikan Navbar dan Footer jika:
  // 1. Maintenance mode AKTIF DAN sedang di halaman maintenance
  // 2. Atau maintenance mode AKTIF (untuk halaman yang akan di-redirect)
  // 3. Atau di halaman auth (login/register)
  // 4. Atau di halaman admin
  const hideNavbarFooter =
    (maintenanceMode && !isMaintenancePage) || isAuthPage || isAdminPage;
  return (
    <html lang="id" className={cn("h-full", "antialiased")}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CITI PLUMB",
              url: "https://citiplumb.id",
              logo: "https://citiplumb.id/logo.png",
              description:
                "Premium faucet and shower manufacturer producing high-quality water solutions with advanced automation and expert craftsmanship that meet international standards.",
              slogan:
                "Premium Faucets and Shower Solutions Built to International Standards",
              foundingLocation: {
                "@type": "Place",
                name: "Indonesia",
              },
              areaServed: {
                "@type": "Country",
                name: "Indonesia",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                availableLanguage: ["English", "Indonesian"],
              },
              sameAs: [
                "https://www.facebook.com/citiplumb",
                "https://www.instagram.com/citiplumb",
                "https://www.linkedin.com/company/citiplumb",
                "https://twitter.com/citiplumb",
              ],
              keywords: [
                "faucet manufacturer",
                "premium faucets",
                "shower solutions",
                "bathroom fixtures",
                "water solutions",
                "SS304 stainless steel faucet",
                "water-saving shower",
                "sanitary ware",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {/* Navbar hanya ditampilkan jika maintenance NONAKTIF */}
        {!hideNavbarFooter && <Navbar />}

        <main className={`${inter.className} flex-1`}>{children}</main>

        {/* Footer hanya ditampilkan jika maintenance NONAKTIF */}
        {!hideNavbarFooter && <Footer />}
      </body>
    </html>
  );
}