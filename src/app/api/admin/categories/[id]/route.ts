// src/app/api/admin/categories/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET - Ambil kategori berdasarkan ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params; // <-- Tambahkan await

    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: {
        products: true,
      },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      { error: "Failed to fetch category" },
      { status: 500 },
    );
  }
}

// PUT - Update kategori
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params; // <-- Tambahkan await
    const body = await request.json();
    const { name, slug, description, image } = body;

    // Validasi
    if (!name || !slug) {
      return NextResponse.json(
        { error: "Name and slug are required" },
        { status: 400 },
      );
    }

    // Cek apakah kategori exists
    const existing = await prisma.category.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    // Cek slug duplicate (kecuali untuk kategori ini sendiri)
    const duplicateSlug = await prisma.category.findFirst({
      where: {
        slug,
        id: { not: parseInt(id) },
      },
    });

    if (duplicateSlug) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 400 },
      );
    }

    const category = await prisma.category.update({
      where: { id: parseInt(id) },
      data: {
        name,
        slug,
        description: description || null,
        image: image || null,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 },
    );
  }
}

// DELETE - Hapus kategori
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params; // <-- Tambahkan await

    // Cek apakah kategori exists
    const existing = await prisma.category.findUnique({
      where: { id: parseInt(id) },
      include: {
        products: true,
      },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    // Cek apakah ada produk yang menggunakan kategori ini
    if (existing.products.length > 0) {
      return NextResponse.json(
        { error: "Cannot delete category with existing products" },
        { status: 400 },
      );
    }

    await prisma.category.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 },
    );
  }
}
