"use client";

import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "injection",
      icon: "💉",
      title: "Injection Moulding",
      subtitle: "Cetakan Plastik Presisi Tinggi",
      description:
        "Proses injection moulding dengan mesin canggih untuk menghasilkan komponen plastik berkualitas tinggi dengan akurasi dan konsistensi terbaik.",
      features: [
        "Kapasitas 100-1000 ton",
        "Akurasi tinggi ±0.01mm",
        "Material premium (ABS, PC, PP, Nylon)",
        "Cycle time cepat",
        "Produksi massal",
      ],
      image:
        "https://images.unsplash.com/photo-1532187866126-d3d23d6e2ef6?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "plating",
      icon: "✨",
      title: "Plating / Electroplating",
      subtitle: "Lapisan Chrome Premium Anti Karat",
      description:
        "Teknologi electroplating modern untuk memberikan lapisan chrome berkualitas tinggi yang mengkilap, tahan karat, dan tahan lama.",
      features: [
        "Lapisan chrome tebal",
        "Proses ramah lingkungan",
        "Tahan korosi dan karat",
        "Finish mengkilap premium",
        "Daya rekat kuat",
      ],
      image:
        "https://images.unsplash.com/photo-1581092335871-4b3e4b8ad9e3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "moulding",
      icon: "🏭",
      title: "Moulding",
      subtitle: "Pembuatan Cetakan Custom",
      description:
        "Desain dan pembuatan cetakan custom sesuai spesifikasi produk Anda, didukung tim engineer berpengalaman.",
      features: [
        "Desain CAD/CAM profesional",
        "Cetakan presisi tinggi",
        "Material cetakan tahan lama",
        "Custom sesuai kebutuhan",
        "Fast track moulding",
      ],
      image:
        "https://images.unsplash.com/photo-1581092335871-4b3e4b8ad9e3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "assembly",
      icon: "🔧",
      title: "Assembly",
      subtitle: "Perakitan Komponen",
      description:
        "Layanan perakitan komponen dengan standar quality control ketat untuk memastikan setiap produk berfungsi optimal.",
      features: [
        "Line assembly otomatis",
        "Quality control ketat",
        "Tes fungsi produk",
        "Packaging profesional",
        "Kapasitas 10.000 unit/hari",
      ],
      image:
        "https://images.unsplash.com/photo-1581092335871-4b3e4b8ad9e3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "spray",
      icon: "🎨",
      title: "Spray Coating",
      subtitle: "Finishing Cat Premium",
      description:
        "Layanan spray coating dengan berbagai pilihan warna dan finishing yang tahan lama, anti gores, dan estetis.",
      features: [
        "Pilihan warna lengkap",
        "Finishing matte/glossy",
        "Tahan gores dan cuaca",
        "Teknologi electrostatic",
        "Ramah lingkungan",
      ],
      image:
        "https://images.unsplash.com/photo-1581092335871-4b3e4b8ad9e3?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center">
      <Navbar />

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-900/20 to-blue-300/20 blur-3xl" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-800/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      {/* Hero Section */}
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
              Solusi Manufaktur
              <br />
              <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Lengkap & Terintegrasi
              </span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
            <p className="mx-auto mt-6 max-w-2xl text-neutral-600 dark:text-neutral-400">
              citiplumb menyediakan layanan manufaktur terintegrasi dari hulu ke
              hilir untuk memproduksi komponen berkualitas premium
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proses Manufaktur Flow */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
              Proses Manufaktur citiplumb
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {[
              {
                step: 1,
                name: "Injection",
                icon: "💉",
                color: "from-blue-900 to-blue-700",
              },
              {
                step: 2,
                name: "Plating",
                icon: "✨",
                color: "from-blue-800 to-blue-600",
              },
              {
                step: 3,
                name: "Moulding",
                icon: "🏭",
                color: "from-blue-700 to-blue-500",
              },
              {
                step: 4,
                name: "Assembly",
                icon: "🔧",
                color: "from-blue-600 to-blue-400",
              },
              {
                step: 5,
                name: "Spray",
                icon: "🎨",
                color: "from-blue-500 to-blue-300",
              },
            ].map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`flex h-20 w-20 flex-col items-center justify-center rounded-full bg-linear-to-br ${process.color} text-white shadow-lg`}
                >
                  <div className="text-2xl">{process.icon}</div>
                  <div className="text-xs font-bold">{process.step}</div>
                </div>
                <p className="mt-2 text-sm font-semibold text-blue-800 dark:text-blue-300">
                  {process.name}
                </p>
                {idx < 4 && (
                  <div className="absolute -right-4 top-8 hidden text-xl text-blue-400 md:block">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Layanan */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className="w-full py-16 scroll-mt-20"
        >
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 gap-12 ${idx % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2"}`}
            >
              {/* Gambar */}
              <div
                className={`rounded-2xl overflow-hidden shadow-xl ${idx % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Konten */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-5xl">{service.icon}</div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Layanan {idx + 1} / 5
                    </span>
                    <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
                  {service.subtitle}
                </p>

                <p className="text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button className="rounded-lg bg-linear-to-r from-blue-800 to-blue-500 px-6 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    Konsultasi Layanan Ini →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Kapasitas Produksi */}
      <section className="w-full py-16 bg-linear-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-neutral-900">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
              Kapasitas Produksi
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                label: "Mesin Injection",
                value: "15 Unit",
                detail: "Kapasitas 50-1000 ton",
              },
              {
                label: "Line Plating",
                value: "5 Line",
                detail: "Kapasitas 50.000 pcs/hari",
              },
              {
                label: "Assembly Line",
                value: "8 Line",
                detail: "Kapasitas 10.000 unit/hari",
              },
              {
                label: "Spray Booth",
                value: "10 Booth",
                detail: "Kapasitas 20.000 pcs/hari",
              },
              {
                label: "Moulding",
                value: "50+ Mold",
                detail: "Custom design available",
              },
              {
                label: "QC Station",
                value: "20 Station",
                detail: "100% quality control",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-6 text-center shadow-md dark:bg-neutral-800"
              >
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {item.value}
                </div>
                <div className="mt-2 font-semibold text-blue-900 dark:text-blue-300">
                  {item.label}
                </div>
                <div className="text-sm text-neutral-500">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Siap Memulai Produksi?
            </h2>
            <p className="mt-2 text-blue-100">
              Konsultasikan kebutuhan manufaktur Anda dengan tim ahli citiplumb
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="rounded-lg bg-white px-6 py-2 font-medium text-blue-700 transition-all hover:scale-105">
                  Hubungi Kami
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="rounded-lg border-2 border-white px-6 py-2 font-medium text-white transition-all hover:bg-white/10">
                  Lihat Produk
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

  

    </div>
  );
}
