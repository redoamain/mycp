// src/app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { existsSync } from "fs";

// Konfigurasi upload
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
  "image/gif",
];

export async function POST(request: NextRequest) {
  console.log("Upload API called");

  try {
    // Coba ambil form data
    let formData;
    try {
      formData = await request.formData();
    } catch (error) {
      console.error("Error parsing form data:", error);
      return NextResponse.json(
        { error: "Invalid form data", success: false },
        { status: 400 },
      );
    }

    const file = formData.get("file") as File | null;

    if (!file) {
      console.log("No file uploaded");
      return NextResponse.json(
        { error: "No file uploaded", success: false },
        { status: 400 },
      );
    }

    console.log(
      `File received: ${file.name}, size: ${file.size}, type: ${file.type}`,
    );

    // Validasi tipe file
    if (!ALLOWED_TYPES.includes(file.type)) {
      console.log(`Invalid file type: ${file.type}`);
      return NextResponse.json(
        {
          error: `Invalid file type. Allowed: ${ALLOWED_TYPES.join(", ")}`,
          success: false,
        },
        { status: 400 },
      );
    }

    // Validasi ukuran file
    if (file.size > MAX_FILE_SIZE) {
      console.log(`File too large: ${file.size} bytes`);
      return NextResponse.json(
        {
          error: `File too large. Max size: ${MAX_FILE_SIZE / 1024 / 1024}MB`,
          success: false,
        },
        { status: 400 },
      );
    }

    // Baca file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Buat nama file unik
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const originalName = file.name;
    const extension = originalName.split(".").pop() || "jpg";
    const filename = `${timestamp}-${randomString}.${extension}`;

    // Tentukan path penyimpanan
    const uploadDir = path.join(process.cwd(), "public/uploads/products");

    // Buat direktori jika belum ada
    if (!existsSync(uploadDir)) {
      console.log(`Creating directory: ${uploadDir}`);
      await mkdir(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    console.log(`File saved: ${filePath}`);

    // Return URL gambar
    const imageUrl = `/uploads/products/${filename}`;

    return NextResponse.json({
      success: true,
      url: imageUrl,
      filename: filename,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to upload file",
        success: false,
      },
      { status: 500 },
    );
  }
}

// Handle OPTIONS request untuk CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}
