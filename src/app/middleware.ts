// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("🚨 MIDDLEWARE JALAN!");
  console.log("Path:", request.nextUrl.pathname);

  // Hardcode dulu untuk testing
  const maintenanceMode = true;

  const pathname = request.nextUrl.pathname;

  // JANGAN redirect jika sudah di halaman maintenance
  if (pathname === "/maintenance") {
    console.log("Sudah di maintenance page");
    return NextResponse.next();
  }

  // Path yang diizinkan
  const allowedPaths = ["/api", "/_next", "/admin", "/favicon.ico", "/login"];
  const isAllowed = allowedPaths.some(
    (p) => pathname === p || pathname.startsWith(p),
  );

  // Redirect jika maintenance ON
  if (maintenanceMode && !isAllowed) {
    console.log("🔄 REDIRECT ke /maintenance");
    return NextResponse.redirect(new URL("/maintenance", request.url));
  }

  console.log("✅ No redirect");
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image).*)",
};
