// src/components/maintenance-check.tsx
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function MaintenanceCheck({
  children,
}: {
  children: React.ReactNode;
}) {
  const maintenance = await prisma.maintenance.findFirst();

  if (maintenance?.enabled) {
    redirect("/maintenance");
  }

  return <>{children}</>;
}
