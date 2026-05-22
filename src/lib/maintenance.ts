// src/lib/maintenance.ts

export function isMaintenanceMode(): boolean {
  // Cek di browser (client side)
  if (typeof window !== "undefined") {
    const maintenanceFlag = localStorage.getItem("maintenance_bypass");
    if (maintenanceFlag === "true") {
      return false;
    }
  }

  // Cek dari environment variable
  return process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";
}

export function getMaintenanceMessage(): string {
  return (
    process.env.NEXT_PUBLIC_MAINTENANCE_MESSAGE ||
    "Website sedang dalam pemeliharaan. Kami akan segera kembali!"
  );
}

export function getMaintenanceEndTime(): string {
  return process.env.NEXT_PUBLIC_MAINTENANCE_END_TIME || "";
}

export function allowMaintenanceBypass(ip: string): boolean {
  const allowedIPs = process.env.MAINTENANCE_ALLOW_IPS?.split(",") || [];
  return allowedIPs.includes(ip);
}
