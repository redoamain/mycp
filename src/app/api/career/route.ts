// src/app/api/career/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET - Ambil semua data career
export async function GET(request: NextRequest) {
  try {
    console.log("🔍 GET /api/career");
    
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const department = searchParams.get("department");
    const search = searchParams.get("search");

    const where: any = {};

    if (status && status !== "all") {
      where.status = status;
    }

    if (department) {
      where.department = { contains: department, mode: "insensitive" };
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { department: { contains: search, mode: "insensitive" } },
      ];
    }

    const careers = await prisma.career.findMany({
      where,
      orderBy: { postedDate: "desc" },
    });

    console.log(`✅ Found ${careers.length} careers`);
    return NextResponse.json(careers);
  } catch (error) {
    console.error("❌ Error fetching careers:", error);
    return NextResponse.json(
      { error: "Failed to fetch careers" },
      { status: 500 }
    );
  }
}

// POST - Buat career baru
export async function POST(request: NextRequest) {
  try {
    console.log("📝 POST /api/career");
    
    const body = await request.json();
    console.log("📦 Received body:", body);

    const {
      title,
      department,
      type,
      status,
      icon,
      description,
      requirements,
      skills,
      guidelines,
      location,
      salary,
      experience,
      education,
    } = body;

    // Validasi - hanya field yang wajib
    if (!title || title.trim() === "") {
      return NextResponse.json(
        { error: "Title is required" },
        { status: 400 }
      );
    }

    if (!department || department.trim() === "") {
      return NextResponse.json(
        { error: "Department is required" },
        { status: 400 }
      );
    }

    if (!type || type.trim() === "") {
      return NextResponse.json(
        { error: "Type is required" },
        { status: 400 }
      );
    }

    if (!description || description.trim() === "") {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      );
    }

    // Proses requirements, skills, guidelines
    // Jika berupa string dengan koma, split menjadi array
    // Jika sudah array, gunakan langsung
    let requirementsArray: string[] = [];
    let skillsArray: string[] = [];
    let guidelinesArray: string[] = [];

    // Handle requirements
    if (requirements) {
      if (typeof requirements === 'string') {
        requirementsArray = requirements.split(',').map(s => s.trim()).filter(s => s !== '');
      } else if (Array.isArray(requirements)) {
        requirementsArray = requirements.filter(s => s && s.trim() !== '');
      }
    }

    // Handle skills
    if (skills) {
      if (typeof skills === 'string') {
        skillsArray = skills.split(',').map(s => s.trim()).filter(s => s !== '');
      } else if (Array.isArray(skills)) {
        skillsArray = skills.filter(s => s && s.trim() !== '');
      }
    }

    // Handle guidelines
    if (guidelines) {
      if (typeof guidelines === 'string') {
        guidelinesArray = guidelines.split(',').map(s => s.trim()).filter(s => s !== '');
      } else if (Array.isArray(guidelines)) {
        guidelinesArray = guidelines.filter(s => s && s.trim() !== '');
      }
    }

    const career = await prisma.career.create({
      data: {
        title: title.trim(),
        department: department.trim(),
        type: type.trim(),
        status: status || "open",
        icon: icon || "💼",
        description: description.trim(),
        requirements: requirementsArray,
        skills: skillsArray,
        guidelines: guidelinesArray,
        location: location ? location.trim() : null,
        salary: salary ? salary.trim() : null,
        experience: experience ? experience.trim() : null,
        education: education ? education.trim() : null,
      },
    });

    console.log(`✅ Career created: ${career.id}`);
    return NextResponse.json(career, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating career:", error);
    return NextResponse.json(
      { error: "Failed to create career", details: String(error) },
      { status: 500 }
    );
  }
}

// PUT - Update career
export async function PUT(request: NextRequest) {
  try {
    console.log("📝 PUT /api/career");
    
    const body = await request.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    // Cek apakah career exists
    const existing = await prisma.career.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }

    // Proses requirements, skills, guidelines jika ada
    if (data.requirements) {
      if (typeof data.requirements === 'string') {
        data.requirements = data.requirements.split(',').map((s: string) => s.trim()).filter((s: string) => s !== '');
      }
    }

    if (data.skills) {
      if (typeof data.skills === 'string') {
        data.skills = data.skills.split(',').map((s: string) => s.trim()).filter((s: string) => s !== '');
      }
    }

    if (data.guidelines) {
      if (typeof data.guidelines === 'string') {
        data.guidelines = data.guidelines.split(',').map((s: string) => s.trim()).filter((s: string) => s !== '');
      }
    }

    const career = await prisma.career.update({
      where: { id },
      data,
    });

    console.log(`✅ Career updated: ${career.id}`);
    return NextResponse.json(career);
  } catch (error) {
    console.error("❌ Error updating career:", error);
    return NextResponse.json(
      { error: "Failed to update career" },
      { status: 500 }
    );
  }
}

// DELETE - Hapus career
export async function DELETE(request: NextRequest) {
  try {
    console.log("🗑️ DELETE /api/career");
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    // Cek apakah career exists
    const existing = await prisma.career.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Career not found" },
        { status: 404 }
      );
    }

    await prisma.career.delete({
      where: { id },
    });

    console.log(`✅ Career deleted: ${id}`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error deleting career:", error);
    return NextResponse.json(
      { error: "Failed to delete career" },
      { status: 500 }
    );
  }
}