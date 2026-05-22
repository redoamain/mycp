"use client";

import { motion } from "motion/react";
import Navbar from "../navbar";
import Link from "next/link";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center">
   

      {/* Animated Gradient Background - Blue Denim & Light Blue Theme */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-900/20 to-blue-300/20 blur-3xl" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-800/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-blue-100/30 dark:from-blue-950/20 dark:via-transparent" />
      </div>

      {/* Decorative Lines - Blue Denim Theme */}
      <div className="absolute inset-y-0 left-0 hidden h-full w-px bg-blue-200/80 dark:bg-blue-800/80 lg:block">
        <div className="absolute top-0 h-40 w-px bg-linear-to-b from-transparent via-blue-600 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden h-full w-px bg-blue-200/80 dark:bg-blue-800/80 lg:block">
        <div className="absolute bottom-0 h-40 w-px bg-linear-to-t from-transparent via-blue-400 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20 lg:py-32">
        {/* Main Heading */}
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold tracking-tight text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-200">
          {"Solusi Kran & Shower Premium untuk Rumah dan Hotel Anda"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Gradient Highlight - Blue Denim to Light Blue */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-10 mx-auto mt-4 flex justify-center"
        >
          <span className="bg-linear-to-r from-blue-900 to-blue-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-3xl lg:text-4xl dark:from-blue-400 dark:to-blue-200">
            Kualitas Terbaik • Anti Karat • Hemat Air
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-center text-base font-normal text-neutral-600 md:text-lg dark:text-neutral-400"
        >
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            citiplumb
          </span>{" "}
          adalah produsen kran air dan shower premium dengan standar
          internasional. Material SS-304 anti karat, teknologi hemat air, dan
          desain modern untuk rumah tangga, hotel, apartemen, serta resort.
        </motion.p>

        {/* CTA Buttons - Blue Denim Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group relative overflow-hidden rounded-lg bg-linear-to-r from-blue-900 to-blue-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                <Link href="/portfolio">
            <span className="relative z-10">
                
                Lihat Katalog Produk
                </span>
                </Link>
            <div className="absolute inset-0 -translate-x-full transform bg-linear-to-r from-blue-800 to-blue-700 transition-transform duration-300 group-hover:translate-x-0" />
          </button>

          <button className="transform rounded-lg border-2 border-blue-600 bg-transparent px-8 py-3 font-medium text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/30">
            Konsultasi Sekarang
          </button>
        </motion.div>

        {/* Stats Section - Blue Theme dengan data produksi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="relative z-10 mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { number: "50K+", label: "Unit Terjual", icon: "🚿" },
            { number: "500+", label: "Hotel Partner", icon: "🏨" },
            { number: "10+", label: "Tahun Pengalaman", icon: "⭐" },
            { number: "24/7", label: "Layanan Support", icon: "🛡️" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl text-blue-800 md:text-3xl dark:text-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-blue-800 md:text-3xl dark:text-blue-400">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-600 md:text-base dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Preview Image - Produk Shower citiplumb */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="relative z-10 mt-20 rounded-2xl border border-blue-200 bg-white p-2 shadow-xl dark:border-blue-800/50 dark:bg-neutral-900/50 md:p-4"
        >
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1582651300894-6a7f5d0d6b6b?q=80&w=2070&auto=format&fit=crop"
              alt="Produk Shower Premium citiplumb"
              className="aspect-video h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              height={1000}
              width={1000}
            />
            {/* Overlay Gradient - Blue Theme */}
            <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />

            {/* Badge Produk */}
            <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              Premium
            </div>
          </div>

          {/* Blue accent line at bottom of image */}
          <div className="absolute -bottom-px left-1/2 h-0.5 w-24 -translate-x-1/2 bg-linear-to-r from-transparent via-blue-500 to-transparent" />
        </motion.div>

        {/* Fitur Unggulan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="relative z-10 mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "Anti Karat", icon: "🛡️" },
            { label: "Hemat Air 40%", icon: "💧" },
            { label: "Garansi 5 Tahun", icon: "⭐" },
            { label: "Sertifikasi SNI", icon: "✅" },
            { label: "Desain Modern", icon: "✨" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
            >
              <span>{feature.icon}</span>
              <span>{feature.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator - Blue Theme */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform lg:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              Scroll untuk lihat produk
            </span>
            <div className="h-10 w-5 rounded-full border-2 border-blue-600">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-blue-600"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
