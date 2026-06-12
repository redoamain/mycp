// app/karir/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Tipe data lowongan
interface Job {
  id: string;
  title: string;
  department: string;
  type: string;
  status: "open" | "closed";
  postedDate: string;
  icon: string;
  description: string;
  requirements: string[];
  skills: string[];
  guidelines: string[];
}

// Data lowongan
const jobsData: Job[] = [
  {
    id: "1",
    title: "Administrator Department",
    department: "Administrasi & HR",
    type: "Full Time",
    status: "closed",
    postedDate: "15 Juni 2026",
    icon: "📋",
    description:
      "Mengelola administrasi departemen, koordinasi antar divisi, dan mendukung operasional pabrik faucet & kran.",
    requirements: [
      "Minimal D3/S1 Administrasi/Manajemen/Psikologi",
      "Pengalaman administrasi di pabrik manufacturing minimal 1 tahun",
      "Mahir menggunakan Microsoft Office (Excel, Word, PowerPoint)",
      "Memiliki kemampuan komunikasi dan koordinasi yang baik",
      "Teliti dan mampu bekerja dengan target deadline",
    ],
    skills: [
      "Administrasi perkantoran",
      "Pengarsipan dokumen",
      "Koordinasi lintas departemen",
      "Pelaporan dan rekapitulasi data",
      "Manajemen waktu",
    ],
    guidelines: [
      "Microsoft Excel (pivot, VLOOKUP, formula dasar)",
      "Tata kelola dokumen pabrik (SOP, formulir produksi)",
      "Komunikasi efektif di lingkungan industri",
      "Dasar-dasar manajemen SDM dan administrasi kepegawaian",
      "Etika kerja di pabrik manufacturing",
    ],
  },
  {
    id: "2",
    title: "Engineering SolidWorks",
    department: "Engineering",
    type: "Full Time",
    status: "closed",
    postedDate: "14 Juni 2026",
    icon: "🔧",
    description:
      "Merancang dan mengembangkan desain 3D produk faucet & kran menggunakan SolidWorks untuk kebutuhan produksi massal.",
    requirements: [
      "D4/S1 Teknik Mesin / Teknik Industri",
      "Memahami proses manufacturing (casting, machining, assembly)",
      "Bisa membuat drawing teknis dan Bill of Materials (BOM)",
      "Pernah mendesain produk sanitary/faucet lebih diutamakan",
    ],
    skills: [
      "SolidWorks (Part, Assembly, Drawing)",
      "Geometric Dimensioning & Tolerancing (GD&T)",
      "3D modeling untuk produk faucet",
      "Rendering produk",
      "Analisis dasar (Simulation)",
    ],
    guidelines: [
      "SolidWorks advanced (sweep, loft, revolve) untuk body faucet",
      "Membuat drawing 2D dengan standar ISO",
      "Desain komponen cartridge dan handle",
      "Studi kasus: redesign komponen kran",
    ],
  },
  {
    id: "3",
    title: "Operator Produksi",
    department: "Produksi",
    type: "Shift",
    status: "closed",
    postedDate: "13 Juni 2026",
    icon: "🏭",
    description:
      "Mengoperasikan mesin produksi dan melakukan perakitan komponen faucet & kran dengan standar kualitas pabrik.",
    requirements: [
      "Minimal SMA/SMK (Teknik Mesin/Perakitan lebih diutamakan)",
      "Pengalaman operator produksi di pabrik manufacturing minimal 1 tahun",
      "Teliti, disiplin, dan mampu bekerja dalam tim",
      "Siap bekerja shift (3 shift)",
      "Sehat jasmani dan rohani",
    ],
    skills: [
      "Perakitan komponen",
      "Penggunaan alat tangan (obeng, kunci, tang)",
      "Quality check produk",
      "Mesin press / assembly line",
      "Keselamatan kerja",
    ],
    guidelines: [
      "Jenis-jenis faucet (kitchen, bathroom, basin)",
      "Komponen kran (cartridge, body, aerator, handle)",
      "Prosedur perakitan standar",
      "Pengujian kebocoran (leak test) sederhana",
      "Tes praktik: merakit faucet dalam waktu 10 menit",
      "Keselamatan kerja di area produksi",
    ],
  },
  {
    id: "4",
    title: "Finance Staff",
    department: "Keuangan & Akuntansi",
    type: "Full Time",
    status: "closed",
    postedDate: "16 Juni 2026",
    icon: "💰",
    description:
      "Mengelola administrasi keuangan perusahaan, pembukuan, pelaporan pajak, dan analisa keuangan. Posisi ini membutuhkan kemampuan berbahasa Inggris aktif karena akan berkomunikasi dengan mitra luar negeri dan menyusun laporan keuangan bilingual.",
    requirements: [
      "Minimal S1 Akuntansi/Keuangan/Manajemen Keuangan",
      "IPK minimal 3.00 dari 4.00",
      "Fasih berbahasa Inggris (lisan dan tulisan) - TOEFL/IELTS nilai baik",
      "Pengalaman di bidang finance minimal 1 tahun (fresh graduate dengan kemampuan English baik dipersilakan)",
      "Memahami standar akuntansi (PSAK/IFRS)",
      "Teliti, jujur, dan mampu bekerja di bawah tekanan deadline",
      "Bisa mengoperasikan software akuntansi (accurate/jurnal/myob) dan microsoft excel (advanced)",
    ],
    skills: [
      "Pembukuan & jurnal umum",
      "Laporan keuangan (neraca, laba rugi, arus kas)",
      "Perpajakan (PPh, PPN)",
      "Analisa keuangan & budgeting",
      "English correspondence (email, memo, laporan bilingual)",
      "Microsoft Excel (pivot, VLOOKUP, formula kompleks)",
    ],
    guidelines: [
      "Tes Tertulis:",
      "• Psikotes dan tes kemampuan numerik",
      "• Tes bahasa Inggris (TOEIC/TOEFL structure, reading comprehension)",
      "• Studi kasus akuntansi (membuat jurnal, neraca saldo, laporan laba rugi sederhana)",
      "Tes Interview:",
      "• Wawancara HR & user dalam bahasa Inggris",
      "• Presentasi singkat analisa keuangan dalam bahasa Inggris",
      "• Tes penyusunan laporan keuangan bilingual (Indonesia - Inggris)",
      "Materi yang diujikan:",
      "• Dasar-dasar akuntansi (debit kredit, jurnal, posting buku besar)",
      "• Penyusunan laporan keuangan sesuai PSAK/IFRS",
      "• Perhitungan pajak (PPh 21/23/25, PPN)",
      "• Rekonsiliasi bank",
      "• Arus kas dan analisa rasio keuangan",
      "• Business English & financial terminology",
    ],
  },
];

// Email tujuan (HRD)
const HRD_EMAIL = "citiplumb.hrd@gmail.com";

// Fungsi untuk membuka mail client dengan subject dan body yang sudah diisi
const sendEmailApplication = (jobTitle: string, department: string) => {
  const subject = encodeURIComponent(`Lamaran Pekerjaan - ${jobTitle}`);
  const body = encodeURIComponent(`
Yth. Tim HRD Citiplumb,

Saya mengajukan lamaran untuk posisi ${jobTitle} di departemen ${department}.

Berkas lamaran (CV, portfolio, dan dokumen pendukung) akan saya kirimkan sebagai lampiran email ini.

Informasi diri:
Nama: [Nama lengkap]
Email: [Email aktif]
No. Telepon: [Nomor yang dapat dihubungi]

Demikian lamaran ini saya sampaikan. Besar harapan saya untuk dapat mengikuti proses seleksi lebih lanjut.

Hormat saya,
[Nama lengkap]

---
Dikirim melalui halaman karir Citiplumb
  `);

  // Membuka mail client default (mailto:)
  window.location.href = `mailto:${HRD_EMAIL}?subject=${subject}&body=${body}`;
};

// Badge Status Component
const StatusBadge = ({ status }: { status: "open" | "closed" }) => {
  if (status === "open") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        DIBUKA
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
      🔒 DITUTUP
    </span>
  );
};

// Job Card Component dengan Motion
const JobCard = ({ job, index }: { job: Job; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleApply = () => {
    if (job.status === "open") {
      // Buka email client
      sendEmailApplication(job.title, job.department);

      // Tampilkan toast notifikasi
      setToastMessage(`📨 Membuka email untuk lamaran ${job.title}...`);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        {/* Header */}
        <motion.div className="p-5 pb-3" whileTap={{ scale: 0.99 }}>
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-start gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-3xl"
              >
                {job.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {job.department}
                  </span>
                  <span className="text-xs text-gray-400">{job.type}</span>
                </div>
              </div>
            </div>
            <StatusBadge status={job.status} />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              📅 {job.postedDate}
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="px-5 pb-3">
          <p className="text-gray-600 text-sm">{job.description}</p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {job.skills.slice(0, 3).map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 + i * 0.05 }}
                className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
              >
                {skill}
              </motion.span>
            ))}
            {job.skills.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-400 px-2.5 py-1 rounded-full">
                +{job.skills.length - 3} lainnya
              </span>
            )}
          </div>
        </div>

        {/* Expandable Details dengan AnimatePresence */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="px-5 pb-3 space-y-4 border-t border-gray-100 pt-3"
            >
              {/* Kualifikasi */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-semibold text-sm text-gray-800 mb-2 flex items-center gap-2">
                  📋 Kualifikasi yang Diinginkan
                </h4>
                <ul className="space-y-1.5">
                  {job.requirements.map((req, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-green-500 text-sm">✓</span>
                      <span>{req}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Kisi-kisi */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="font-semibold text-sm text-gray-800 mb-2 flex items-center gap-2">
                  📖 Kisi-kisi & Materi Ujian
                </h4>
                <ul className="space-y-1.5">
                  {job.guidelines.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + i * 0.05 }}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-blue-400 text-sm">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-gray-100 flex justify-between items-center">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            {isExpanded ? <>▲ Sembunyikan</> : <>▼ Lihat Detail</>}
          </motion.button>
          <motion.button
            onClick={handleApply}
            disabled={job.status === "closed"}
            whileHover={job.status === "open" ? { scale: 1.02 } : {}}
            whileTap={job.status === "open" ? { scale: 0.98 } : {}}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              job.status === "open"
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {job.status === "open" ? "📨 Lamar Sekarang" : "🔒 Ditutup"}
          </motion.button>
        </div>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 text-sm"
          >
            <span>✉️</span>
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Main Page Component
export default function KarierPage() {
  const [filter, setFilter] = useState<"all" | "open" | "closed">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    const matchesFilter = filter === "all" || job.status === filter;
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  });

  const openCount = jobsData.filter((j) => j.status === "open").length;
  const closedCount = jobsData.filter((j) => j.status === "closed").length;

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative pt-16 pb-8 text-center px-4"
      >
        {/* Background decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Karir di{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Citiplumb
            </span>{" "}
            Pabrik Faucet & Kran
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 max-w-md mx-auto"
          >
            Bergabunglah dengan tim kami. Kirim lamaran Anda melalui email ke{" "}
            <a
              href={`mailto:${HRD_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {HRD_EMAIL}
            </a>
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mx-auto px-4 mb-8"
      >
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              icon: "💼",
              label: "Total Lowongan",
              value: jobsData.length,
              color: "blue",
            },
            { icon: "🟢", label: "Dibuka", value: openCount, color: "green" },
            { icon: "🔒", label: "Ditutup", value: closedCount, color: "gray" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Filter & Search Section */}
      <div className="max-w-4xl mx-auto px-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-1 bg-gray-100 p-1 rounded-xl w-full sm:w-auto"
          >
            {[
              { key: "all", label: `Semua (${jobsData.length})` },
              { key: "open", label: `Dibuka (${openCount})` },
              { key: "closed", label: `Ditutup (${closedCount})` },
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setFilter(tab.key as any)}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filter === tab.key
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="relative w-full sm:w-72"
          >
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Cari posisi, departemen, atau skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </motion.div>
        </div>

        {/* Job Listings */}
        <AnimatePresence mode="wait">
          {filteredJobs.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="text-center py-16 bg-white rounded-2xl border border-gray-100"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
                className="text-5xl mb-4"
              >
                🏭
              </motion.div>
              <p className="text-gray-400">Tidak ada lowongan yang ditemukan</p>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Email Info Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-4 bg-blue-50 rounded-xl text-center"
        >
          <p className="text-sm text-gray-600">
            ✉️ Kirim lamaran Anda ke{" "}
            <a
              href={`mailto:${HRD_EMAIL}`}
              className="font-semibold text-blue-600 hover:underline"
            >
              {HRD_EMAIL}
            </a>{" "}
            dengan subjek:{" "}
            <span className="font-mono text-xs bg-white px-2 py-1 rounded">
              Lamaran - [Posisi]
            </span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Sertakan CV, portofolio (jika ada), dan dokumen pendukung lainnya.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
