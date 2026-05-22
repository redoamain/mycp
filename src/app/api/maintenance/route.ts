// src/app/api/maintenance/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    let maintenance = await prisma.maintenance.findFirst();

    if (!maintenance) {
      maintenance = await prisma.maintenance.create({
        data: {
          enabled: false,
          message:
            "Website sedang dalam pemeliharaan. Kami akan segera kembali!",
        },
      });
    }

    return NextResponse.json({
      enabled: maintenance.enabled,
      message: maintenance.message,
      endTime: maintenance.endTime?.toISOString() || "",
    });
  } catch (error) {
    return NextResponse.json({ enabled: false, message: "", endTime: "" });
  }
}

// src/app/api/maintenance/route.ts (pastikan sudah benar)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { enabled, message, endTime } = body;
    
    console.log("Received endTime:", endTime); // Debug
    
    let maintenance = await prisma.maintenance.findFirst();
    
    if (maintenance) {
      maintenance = await prisma.maintenance.update({
        where: { id: maintenance.id },
        data: {
          enabled: enabled,
          message: message,
          endTime: endTime ? new Date(endTime) : null,
        },
      });
    } else {
      maintenance = await prisma.maintenance.create({
        data: {
          enabled: enabled,
          message: message,
          endTime: endTime ? new Date(endTime) : null,
        },
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
