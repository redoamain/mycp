// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

// Prisma Client akan menggunakan konfigurasi dari prisma.config.ts
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash("thinkpad", 10);

    // Create admin user
    const admin = await prisma.user.upsert({
      where: { username: "admin" },
      update: {},
      create: {
        username: "admin",
        password: hashedPassword,
        email: "admin@citiplumb.id",
        role: "admin",
      },
    });

    console.log("✅ Admin user created:", admin.username);

    // Create maintenance record
    const maintenance = await prisma.maintenance.upsert({
      where: { id: 1 },
      update: {},
      create: {
        enabled: false,
        message: "Website sedang dalam pemeliharaan. Kami akan segera kembali!",
      },
    });

    console.log("✅ Maintenance record created");

    console.log("🌱 Seed completed successfully!");
  } catch (error) {
    console.error("❌ Seed error:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
