// src/app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const categoryId = searchParams.get("categoryId");
    const limit = searchParams.get("limit");

    const whereClause: any = {
      isActive: true,
    };

    if (categoryId) {
      whereClause.categoryId = parseInt(categoryId);
    }

    const products = await prisma.product.findMany({
      where: whereClause,
      include: {
        category: true,
      },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
