// src/app/maintenance/page.tsx (dengan metadata)
import { PrismaClient } from "@prisma/client";
import type { Metadata } from "next";
import MaintenancePageComponent from "@/components/maintenance-page";

const prisma = new PrismaClient();

export const dynamic = "force-dynamic";
export const revalidate = 30; // Revalidate setiap 30 detik

export async function generateMetadata(): Promise<Metadata> {
  const maintenance = await prisma.maintenance.findFirst();

  return {
    title: "Maintenance Mode",
    description: maintenance?.message,
  };
}

export default async function MaintenancePage() {
  const maintenance = await prisma.maintenance.findFirst();

  const message = maintenance?.message;
  const endTime = maintenance?.endTime?.toISOString() || "";

  return <MaintenancePageComponent message={message} endTime={endTime} />;
}
