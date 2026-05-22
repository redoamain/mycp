// src/app/api/login/route.ts (update bagian akhir)
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  console.log("🔐 API Login dengan Prisma");

  try {
    const body = await request.json();
    const { username, password } = body;

    console.log("Username:", username);

    // Cari user di database
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      await prisma.loginLog.create({
        data: {
          username: username,
          success: false,
          ipAddress: request.headers.get("x-forwarded-for") || "unknown",
        },
      });

      return NextResponse.json(
        { success: false, message: "Username atau password salah" },
        { status: 401 },
      );
    }

    // Verifikasi password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      await prisma.loginLog.create({
        data: {
          username: username,
          success: false,
          ipAddress: request.headers.get("x-forwarded-for") || "unknown",
        },
      });

      return NextResponse.json(
        { success: false, message: "Username atau password salah" },
        { status: 401 },
      );
    }

    // Log successful login
    await prisma.loginLog.create({
      data: {
        username: username,
        success: true,
        ipAddress: request.headers.get("x-forwarded-for") || "unknown",
      },
    });

    // Generate token sederhana
    const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");

    // Buat response dengan cookie
    const response = NextResponse.json({
      success: true,
      token: token,
      message: "Login berhasil",
    });

    // Set cookie session
    response.cookies.set("session_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 hari
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server" },
      { status: 500 },
    );
  }
}
