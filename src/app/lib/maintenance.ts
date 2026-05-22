// src/lib/maintenance.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function isMaintenanceMode(): Promise<boolean> {
  try {
    const maintenance = await prisma.maintenance.findFirst();
    return maintenance?.enabled || false;
  } catch (error) {
    console.error("Error checking maintenance:", error);
    return false;
  }
}

export async function getMaintenanceMessage(): Promise<string> {
  try {
    const maintenance = await prisma.maintenance.findFirst();
    return maintenance?.message || "Website sedang dalam pemeliharaan";
  } catch (error) {
    return "Website sedang dalam pemeliharaan";
  }
}
