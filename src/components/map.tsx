"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function MapEx() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="w-full bg-white py-20 dark:bg-black md:py-40">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xl font-bold text-black dark:text-white md:text-4xl">
          Ekspor{" "}
          <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
            {"Indonesia ke Amerika".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="mx-auto max-w-2xl py-4 text-sm text-neutral-600 dark:text-neutral-400 md:text-lg">
          <span className="font-semibold text-blue-700 dark:text-blue-400">
            citiplumb
          </span>{" "}
          menghubungkan produk air premium Indonesia ke
          pasar Amerika. Kualitas terbaik dengan desain yang mendunia.
        </p>
      </div>

      <WorldMap
        dots={[
          // Rute: Indonesia (Jakarta) ke New York
          {
            start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
            end: { lat: 40.7128, lng: -74.006 }, // New York, USA
          },
          // Indonesia ke Los Angeles
          {
              start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles, USA
            },
          // Indonesia ke San Francisco
          {
              start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
            end: { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
            },
          // Indonesia ke Chicago
          {
              start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
            end: { lat: 41.8781, lng: -87.6298 }, // Chicago, USA
            },
            // Indonesia ke Houston
          {
            start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
            end: { lat: 29.7604, lng: -95.3698 }, // Houston, USA
          },
          // Indonesia ke Seattle
          {
              start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
              end: { lat: 47.6062, lng: -122.3321 }, // Seattle, USA
          },
          // Indonesia ke Miami
          {
              start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
              end: { lat: 25.7617, lng: -80.1918 }, // Miami, USA
            },
        ]}
      />

      {/* Produk Unggulan citiplumb */}
      <div className="mx-auto mt-12 max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8 text-center"
        >
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 md:text-xl">
            Produk Ekspor Unggulan citiplumb
          </h3>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Kualitas premium untuk pasar global
          </p>
        </motion.div>

        <div className="">
     

          {/* Keran Air Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="rounded-xl border border-blue-200 bg-linear-to-br from-blue-50/50 to-white p-6 dark:border-blue-800/50 dark:from-blue-950/20 dark:to-transparent"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="text-4xl">🚰</div>
              <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300">
                Keran Air Premium
              </h4>
            </div>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Keran Stainless Steel
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Smart Water Tap
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Sensor Otomatis
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-500">✓</span> Desain Minimalis &
                Elegan
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Statistik Ekspor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { value: "7+", label: "Kota Tujuan di AS", icon: "🇺🇸" },
            { value: "1000+", label: "Container/Tahun", icon: "🚢" },
            { value: "98%", label: "Kepuasan Klien", icon: "⭐" },
            { value: "24/7", label: "Customer Support", icon: "🛡️" },
        ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-blue-200 bg-white/50 p-4 text-center backdrop-blur-sm dark:border-blue-800/50 dark:bg-black/50"
            >
              <div className="mb-2 text-2xl">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-800 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Keunggulan citiplumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="mt-8 rounded-xl bg-linear-to-r from-blue-100 to-blue-50 p-6 dark:from-blue-950/30 dark:to-blue-900/20"
        >
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="text-5xl">🏆</div>
            <div>
              <h4 className="font-bold text-blue-900 dark:text-blue-300">
                Mengapa Memilih citiplumb?
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Standar kualitas internasional, sertifikasi ekspor lengkap,
                logistic terintegrasi, dan tim profesional berpengalaman.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 text-center"
        >
        
        </motion.div>
      </div>
    </div>
          </div>
  );
}
