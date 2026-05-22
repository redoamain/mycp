// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citiplumb.id"),
  title: {
    default: "citiplumb - Premium Water Solutions | Kran & Shower Berkualitas",
    template: "%s | citiplumb",
  },
  description:
    "citiplumb adalah produsen kran air dan shower premium dengan material SS-304 anti karat, teknologi hemat air, dan desain modern. Tersedia untuk rumah tangga, hotel, dan proyek komersial.",
  keywords: [
    "kran air",
    "shower premium",
    "citiplumb",
    "kran stainless",
    "shower hotel",
    "faucet Indonesia",
    "water solutions",
    "kran anti karat",
    "shower hemat air",
  ],
  authors: [{ name: "citiplumb", url: "https://citiplumb.id" }],
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
    locale: "id_ID",
    url: "https://citiplumb.id",
    siteName: "citiplumb - Premium Water Solutions",
    title: "citiplumb - Kran & Shower Premium Indonesia",
    description:
      "Produsen kran air dan shower premium dengan standar internasional. Material SS-304 anti karat, teknologi hemat air hingga 40%.",
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
    title: "citiplumb - Premium Water Solutions",
    description: "Produsen kran air dan shower premium berkualitas tinggi",
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
    google: "verifikasi-google-anda",
  },
  category: "business",
  classification: "Manufacturing, Water Solutions",
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
  const maintenanceMode = maintenance.enabled === true;

  // Dapatkan pathname
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const isMaintenancePage = pathname === "/maintenance";

  console.log("🔧 Layout - Maintenance Mode:", maintenanceMode);
  console.log("📍 Layout - Pathname:", pathname);
  console.log("📍 Layout - Is Maintenance Page:", isMaintenancePage);

  // Sembunyikan Navbar dan Footer jika:
  // 1. Maintenance mode AKTIF DAN sedang di halaman maintenance
  // 2. Atau maintenance mode AKTIF (untuk halaman yang akan di-redirect)
  const hideNavbarFooter = maintenanceMode && !isMaintenancePage;

  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-mono",
        jetbrainsMono.variable,
      )}
    >
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
              name: "citiplumb",
              url: "https://citiplumb.id",
              logo: "https://citiplumb.id/logo.png",
              description: "Produsen kran air dan shower premium Indonesia",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Raya Industri No. 123",
                addressLocality: "Sidoarjo",
                addressRegion: "Jawa Timur",
                postalCode: "61256",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+621234567890",
                contactType: "customer service",
                email: "info@citiplumb.id",
              },
              sameAs: [
                "https://www.facebook.com/citiplumb",
                "https://www.instagram.com/citiplumb",
                "https://www.linkedin.com/company/citiplumb",
                "https://twitter.com/citiplumb",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Navbar hanya ditampilkan jika maintenance NONAKTIF */}
        {!maintenanceMode && <Navbar />}

        <main className="flex-1">{children}</main>

        {/* Footer hanya ditampilkan jika maintenance NONAKTIF */}
        {!maintenanceMode && <Footer />}
      </body>
    </html>
  );
}