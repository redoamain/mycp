// src/app/maintenance/page.tsx
import { PrismaClient } from "@prisma/client";
import type { Metadata } from "next";
import MaintenancePageComponent from "@/components/maintenance-page";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export const revalidate = 30; // Revalidate setiap 30 detik

export async function generateMetadata(): Promise<Metadata> {
  const maintenance = await prisma.maintenance.findFirst();

  const title = maintenance?.message
    ? `Maintenance: ${maintenance.message.substring(0, 50)}`
    : "Server Maintenance Mode";

  const description = maintenance?.message
    ? maintenance.message
    : "Website kami sedang dalam perbaikan untuk memberikan layanan yang lebih baik. Mohon maaf atas ketidaknyamanannya.";

  return {
    title: title,
    description: description,
    robots: {
      index: false, // Jangan index halaman maintenance
      follow: false,
      nocache: true,
    },
    openGraph: {
      title: title,
      description: description,
      type: "website",
      siteName: "CitiPlumb",
      images: [
        {
          url: "/maintenance-og.jpg", // Tambahkan gambar OG jika ada
          width: 1200,
          height: 630,
          alt: "Maintenance Mode",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/maintenance-og.jpg"],
    },
    alternates: {
      canonical: "https://citiplumb.id/maintenance",
    },
    metadataBase: new URL("https://citiplumb.id"),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    verification: {
      google: "your-google-verification-code", // Tambahkan jika ada
    },
    category: "maintenance",
    keywords: [
      "maintenance",
      "perbaikan server",
      "under maintenance",
      "situs sedang diperbaiki",
    ],
  };
}

export default async function MaintenancePage() {
  const maintenance = await prisma.maintenance.findFirst();

  const message = maintenance?.message;
  const endTime = maintenance?.endTime?.toISOString() || "";

  // Log untuk debugging
  console.log("Maintenance Page - EndTime:", endTime);
  console.log("Maintenance Page - Message:", message);

  return (
    <MaintenancePageComponent
      message={message || undefined}
      endTime={endTime || undefined}
    />
  );
}
