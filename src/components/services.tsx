"use client";

import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-900/20 to-blue-300/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="w-full py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Layanan Kami
            </span>
            <h1 className="mt-2 text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-5xl lg:text-6xl">
              Solusi Lengkap
              <br />
              <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Kebutuhan Air Anda
              </span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* Daftar Layanan */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "🏭",
                title: "Produksi Massal",
                desc: "Kapasitas produksi besar untuk proyek hotel, apartemen, dan perumahan",
                features: ["MOQ fleksibel", "Custom design", "Fast delivery"],
              },
              {
                icon: "🔧",
                title: "Kustomisasi Produk",
                desc: "Desain sesuai kebutuhan spesifik proyek Anda dengan material premium",
                features: ["Custom logo", "Warna custom", "Ukuran khusus"],
              },
              {
                icon: "🚚",
                title: "Distribusi & Instalasi",
                desc: "Layanan pengiriman dan instalasi profesional ke seluruh Indonesia",
                features: [
                  "Pengiriman nasional",
                  "Tim teknisi",
                  "Garansi pemasangan",
                ],
              },
              {
                icon: "🛡️",
                title: "Garansi & Servis",
                desc: "Garansi resmi 5 tahun dan layanan purna jual terbaik",
                features: ["Klaim mudah", "Sparepart original", "Servis cepat"],
              },
              {
                icon: "📋",
                title: "Konsultasi Gratis",
                desc: "Tim ahli siap membantu menentukan produk terbaik untuk proyek Anda",
                features: [
                  "Survey lokasi",
                  "Rekomendasi produk",
                  "Perhitungan kebutuhan",
                ],
              },
              {
                icon: "🌏",
                title: "Ekspor Internasional",
                desc: "Melayani pengiriman produk ke Amerika dan berbagai negara",
                features: [
                  "Dokumen lengkap",
                  "Sertifikasi ekspor",
                  "Logistik terintegrasi",
                ],
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-neutral-800"
              >
                <div className="mb-4 text-5xl">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-blue-900 dark:text-blue-300">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  {service.desc}
                </p>
                <div className="space-y-1 border-t border-blue-100 pt-3 dark:border-blue-900/50">
                  {service.features.map((feature, fIdx) => (
                    <p key={fIdx} className="text-xs text-neutral-500">
                      ✓ {feature}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-linear-to-r from-blue-900 to-blue-600 p-8 text-white"
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              Butuh Layanan Khusus?
            </h2>
            <p className="mt-2 text-blue-100">
              Hubungi tim kami untuk konsultasi gratis
            </p>
            <Link href="/contact">
              <button className="mt-6 rounded-lg bg-white px-6 py-2 font-medium text-blue-700 transition-all hover:scale-105">
                Hubungi Kami
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-blue-200 bg-white py-8 dark:border-blue-800/50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-neutral-500">
          <p>
            &copy; 2024 citiplumb - Premium Water Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
