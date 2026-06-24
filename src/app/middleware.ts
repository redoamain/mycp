// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("🚨 MIDDLEWARE JALAN!");
  console.log("Path:", request.nextUrl.pathname);

  // Hardcode dulu untuk testing - SET FALSE untuk disable maintenance
  const maintenanceMode = false; // ← Ubah ke FALSE

  const pathname = request.nextUrl.pathname;

  // JANGAN redirect jika sudah di halaman maintenance atau API
  if (pathname === "/maintenance") {
    console.log("Sudah di maintenance page");
    return NextResponse.next();
  }

  // Path yang diizinkan (tambahkan /api/admin/upload)
  const allowedPaths = [
    "/api",
    "/_next",
    "/admin",
    "/favicon.ico",
    "/login",
    "/api/admin/upload", // ← Tambahkan ini
  ];

  const isAllowed = allowedPaths.some(
    (p) => pathname === p || pathname.startsWith(p),
  );

  // Redirect jika maintenance ON
  if (maintenanceMode && !isAllowed) {
    console.log("🔄 REDIRECT ke /maintenance");
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  console.log("✅ No redirect");

  // 🔥 PENTING: Tambahkan header x-pathname untuk dibaca di layout
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image).*)",
};
