// src/app/api/session/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    // Ambil token dari cookie
    const sessionToken = request.cookies.get("session_token")?.value;

    if (!sessionToken) {
      return NextResponse.json({ isLoggedIn: false });
    }

    // Decode token
    const decoded = Buffer.from(sessionToken, "base64").toString();
    const [username, timestamp] = decoded.split(":");

    // Check jika session expired (7 hari)
    const sessionAge = Date.now() - parseInt(timestamp);
    const sevenDays = 7 * 24 * 60 * 60 * 1000;

    if (sessionAge > sevenDays) {
      return NextResponse.json({ isLoggedIn: false });
    }

    // Verifikasi user masih ada di database
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return NextResponse.json({ isLoggedIn: false });
    }

    return NextResponse.json({
      isLoggedIn: true,
      username: username,
    });
  } catch (error) {
    console.error("Session check error:", error);
    return NextResponse.json({ isLoggedIn: false });
  }
}
