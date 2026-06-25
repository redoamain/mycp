// src/app/admin/career/page.tsx
"use client";

import { useState, useEffect } from "react";
import {
  IconPlus,
  IconEdit,
  IconTrash,
  IconRefresh,
} from "@tabler/icons-react";

interface Job {
  id: string;
  title: string;
  image: string;
  department: string;
  type: string;
  status: "open" | "closed";
  postedDate: string;
  icon: string;
  description: string;
  requirements: string[];
  skills: string[];
  guidelines: string[];
  location?: string;
  salary?: string;
  experience?: string;
  education?: string;
}

interface JobPayload {
  title: string;
  image: string;
  department: string;
  type: string;
  status: string;
  icon: string;
  description: string;
  requirements: string[];
  skills: string[];
  guidelines: string[];
  location: string | null;
  salary: string | null;
  experience: string | null;
  education: string | null;
}

interface JobPayloadWithId extends JobPayload {
  id: string;
}

export default function CareerManagement() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    department: "",
    type: "Full Time",
    status: "open",
    icon: "💼",
    description: "",
    requirementsText: "",
    skillsText: "",
    guidelinesText: "",
    location: "",
    salary: "",
    experience: "",
    education: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/career");
      const data = await response.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Hapus lowongan ini?")) return;
    try {
      await fetch(`/api/career?id=${id}`, { method: "DELETE" });
      setJobs(jobs.filter((job) => job.id !== id));
      alert("✅ Berhasil dihapus!");
    } catch (error) {
      alert("❌ Gagal menghapus");
    }
  };

  const parseTextToArray = (text: string) => {
    if (!text) return [];
    const lines = text.split("\n").filter((s) => s.trim() !== "");
    if (lines.length > 0) return lines;
    return text
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s !== "");
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formDataImage = new FormData();
      formDataImage.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formDataImage,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Gagal upload gambar");
      }

      const imageUrl = result.url;

      setFormData((prev) => ({ ...prev, image: imageUrl }));
      setImagePreview(imageUrl);
      alert("✅ Gambar berhasil diupload!");
    } catch (error: any) {
      console.error("Error uploading image:", error);
      alert("❌ " + (error.message || "Gagal upload gambar"));
    } finally {
      setIsUploading(false);
      // Reset input file
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.title ||
      !formData.department ||
      !formData.type ||
      !formData.description
    ) {
      alert("⚠️ Judul, Departemen, Tipe, dan Deskripsi wajib diisi!");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload: JobPayload = {
        title: formData.title,
        image: formData.image || "",
        department: formData.department,
        type: formData.type,
        status: formData.status,
        icon: formData.icon || "💼",
        description: formData.description,
        requirements: parseTextToArray(formData.requirementsText),
        skills: parseTextToArray(formData.skillsText),
        guidelines: parseTextToArray(formData.guidelinesText),
        location: formData.location || null,
        salary: formData.salary || null,
        experience: formData.experience || null,
        education: formData.education || null,
      };

      let finalPayload: JobPayload | JobPayloadWithId = payload;
      let url = "/api/career";
      let method = "POST";

      if (editingJob) {
        finalPayload = { ...payload, id: editingJob.id };
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal menyimpan");
      }

      await fetchJobs();
      setIsModalOpen(false);
      resetForm();
      alert(editingJob ? "✅ Update berhasil!" : "✅ Lowongan ditambahkan!");
    } catch (error: any) {
      console.error("Error:", error);
      alert("❌ " + (error.message || "Gagal menyimpan"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setEditingJob(null);
    setImagePreview(null);
    setFormData({
      title: "",
      image: "",
      department: "",
      type: "Full Time",
      status: "open",
      icon: "💼",
      description: "",
      requirementsText: "",
      skillsText: "",
      guidelinesText: "",
      location: "",
      salary: "",
      experience: "",
      education: "",
    });
  };

  const openCreateModal = () => {
    resetForm();
    setIsModalOpen(true);
  };

  const openEditModal = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title || "",
      image: job.image || "",
      department: job.department || "",
      type: job.type || "Full Time",
      status: job.status || "open",
      icon: job.icon || "💼",
      description: job.description || "",
      requirementsText: job.requirements ? job.requirements.join("\n") : "",
      skillsText: job.skills ? job.skills.join("\n") : "",
      guidelinesText: job.guidelines ? job.guidelines.join("\n") : "",
      location: job.location || "",
      salary: job.salary || "",
      experience: job.experience || "",
      education: job.education || "",
    });
    setImagePreview(job.image || null);
    setIsModalOpen(true);
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "-";
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">
            Manajemen Lowongan
          </h2>
          <p className="text-sm text-neutral-500">
            Total {jobs.length} lowongan
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <IconPlus className="w-4 h-4" />
          Tambah
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 dark:bg-neutral-900/50">
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-3 px-4">#</th>
                <th className="text-left py-3 px-4">Gambar</th>
                <th className="text-left py-3 px-4">Posisi</th>
                <th className="text-left py-3 px-4">Departemen</th>
                <th className="text-left py-3 px-4">Tipe</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Tanggal</th>
                <th className="text-center py-3 px-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-8 text-neutral-500">
                    Belum ada data
                  </td>
                </tr>
              ) : (
                jobs.map((job, index) => (
                  <tr
                    key={job.id}
                    className="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">
                      {job.image ? (
                        <img
                          src={job.image}
                          alt={job.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400">
                          📷
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 font-medium">{job.title}</td>
                    <td className="py-3 px-4">{job.department}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded text-xs">
                        {job.type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.status === "open"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {job.status === "open" ? "✅ Dibuka" : "🔒 Ditutup"}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-neutral-500">
                      {formatDate(job.postedDate)}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => openEditModal(job)}
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition"
                        >
                          <IconEdit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(job.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
                        >
                          <IconTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white dark:bg-neutral-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black dark:text-white">
                {editingJob ? "✏️ Edit Lowongan" : "➕ Tambah Lowongan"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Judul <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Departemen <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Tipe <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Shift">Shift</option>
                    <option value="Contract">Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="open">✅ Dibuka</option>
                    <option value="closed">🔒 Ditutup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Icon
                  </label>
                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) =>
                      setFormData({ ...formData, icon: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                    placeholder="💼"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Gambar Lowongan
                </label>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                      className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    <p className="text-xs text-neutral-400 mt-1">
                      Format: JPG, PNG, WebP, GIF | Max: 5MB
                    </p>
                    {isUploading && (
                      <p className="text-xs text-blue-600 mt-1">
                        ⏳ Uploading...
                      </p>
                    )}
                  </div>
                  {imagePreview && (
                    <div className="flex-shrink-0 text-center">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-lg border border-neutral-200 dark:border-neutral-700"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData({ ...formData, image: "" });
                        }}
                        className="text-xs text-red-500 hover:text-red-700 mt-1 block"
                      >
                        Hapus
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Deskripsi <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Kualifikasi (1 per baris atau dipisah koma)
                </label>
                <textarea
                  value={formData.requirementsText}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      requirementsText: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 font-mono text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Minimal S1&#10;Pengalaman 2 tahun&#10;Menguasai React, Next.js, TypeScript"
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Skills (1 per baris atau dipisah koma)
                </label>
                <textarea
                  value={formData.skillsText}
                  onChange={(e) =>
                    setFormData({ ...formData, skillsText: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 font-mono text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="JavaScript&#10;TypeScript&#10;React, Node.js, Next.js"
                />
              </div>

              {/* Guidelines */}
              <div>
                <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Kisi-kisi (1 per baris atau dipisah koma)
                </label>
                <textarea
                  value={formData.guidelinesText}
                  onChange={(e) =>
                    setFormData({ ...formData, guidelinesText: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 font-mono text-sm focus:ring-2 focus:ring-blue-500"
                  placeholder="Tes tertulis&#10;Interview teknikal&#10;Tes psikologi"
                />
              </div>

              {/* Additional Info */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Lokasi
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                    placeholder="Lamongan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Gaji
                  </label>
                  <input
                    type="text"
                    value={formData.salary}
                    onChange={(e) =>
                      setFormData({ ...formData, salary: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                    placeholder="Rp 5.000.000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                    Pendidikan
                  </label>
                  <input
                    type="text"
                    value={formData.education}
                    onChange={(e) =>
                      setFormData({ ...formData, education: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                    placeholder="Minimal S1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-neutral-700 dark:text-neutral-300">
                  Pengalaman
                </label>
                <input
                  type="text"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-900 focus:ring-2 focus:ring-blue-500"
                  placeholder="Minimal 2 tahun"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <button
                  type="submit"
                  disabled={isSubmitting || isUploading}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 font-medium"
                >
                  {isSubmitting
                    ? "Menyimpan..."
                    : editingJob
                      ? "Update"
                      : "Simpan"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition font-medium"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
