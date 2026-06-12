import React from "react";
import { Compare } from "@/components/ui/compare";
import Link from "next/link";

export function Comparer() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-52">
      <div className="rounded-3xl border border-blue-200 bg-linear-to-br from-blue-50/50 to-white p-4 shadow-lg dark:border-blue-800/50 dark:bg-linear-to-br dark:from-blue-950/20 dark:to-neutral-900">
        {/* Header dengan Logo */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-linear-to-br from-blue-900 to-blue-400">
              <span className="text-xs font-bold text-white">C</span>
            </div>
            <span className="text-base font-bold text-blue-900 dark:text-blue-300">
              citiplumb
            </span>
          </div>
          <div className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-400">
            Evolusi Desain
          </div>
        </div>

        {/* Label Perbandingan */}
        <div className="mb-3 flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-400"></div>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Desain Sebelumnya
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Desain Terbaru citiplumb
            </span>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>

        <Compare
          firstImage="/img/products/BHF38101SSSD004.jpg"
          secondImage="/img/products/BHF3008108MB001.jpg"
          firstImageClassName="object-cover w-full h-full"
          secondImageClassname="object-cover w-full h-full"
          className="w-full h-96 md:h-120 lg:h-144 rounded-xl overflow-hidden"
          slideMode="hover"
        />

        {/* Perbandingan Evolusi Desain */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="space-y-1 rounded-lg bg-blue-50/50 p-3 dark:bg-blue-950/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📐</span>
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                Desain Sebelumnya
              </p>
            </div>
            <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Desain klasik yang familiar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Fungsi dasar yang handal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Material standar berkualitas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Telah teruji waktu</span>
              </li>
            </ul>
          </div>

          <div className="space-y-1 rounded-lg bg-green-50 p-3 dark:bg-green-950/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">✨</span>
              <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                Desain Terbaru citiplumb
              </p>
            </div>
            <ul className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Desain modern & elegan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Fungsi premium inovatif</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Material unggulan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>Inovasi teknologi terbaru</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Peningkatan & Inovasi */}
        <div className="mt-4">
          <p className="text-center text-xs font-semibold text-blue-800 mb-3 dark:text-blue-300">
            ✨ Peningkatan & Inovasi yang Hadir ✨
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-blue-50 p-2 text-center dark:bg-blue-950/30">
              <div className="text-xl mb-1">🎨</div>
              <p className="text-xs font-semibold text-blue-800 dark:text-blue-300">
                Estetika Modern
              </p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400">
                Tampilan lebih segar & kontemporer
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-2 text-center dark:bg-blue-950/30">
              <div className="text-xl mb-1">💪</div>
              <p className="text-xs font-semibold text-blue-800 dark:text-blue-300">
                Ketahanan Premium
              </p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400">
                Material anti karat berkualitas tinggi
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-2 text-center dark:bg-blue-950/30">
              <div className="text-xl mb-1">⚡</div>
              <p className="text-xs font-semibold text-blue-800 dark:text-blue-300">
                Fitur Tambahan
              </p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400">
                5 mode semprotan fleksibel
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-2 text-center dark:bg-blue-950/30">
              <div className="text-xl mb-1">💧</div>
              <p className="text-xs font-semibold text-blue-800 dark:text-blue-300">
                Efisiensi Air
              </p>
              <p className="text-[11px] text-blue-600 dark:text-blue-400">
                Teknologi hemat air 40%
              </p>
            </div>
          </div>
        </div>

        {/* Pesan Transformasi Positif */}
        <div className="mt-4 rounded-lg bg-linear-to-r from-blue-100 to-indigo-100 p-3 dark:from-blue-950/50 dark:to-indigo-950/30">
          <div className="flex items-start gap-2">
            <span className="text-lg">🚀</span>
            <div>
              <p className="text-xs font-semibold text-blue-900 dark:text-blue-300">
                Terus Berinovasi untuk yang Terbaik
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-400">
                citiplumb terus belajar dan mengembangkan diri menghadirkan
                desain terkini dengan teknologi terbaik, tanpa melupakan
                nilai-nilai kualitas yang telah terbukti.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4 text-center">
          <button className="group w-full rounded-lg bg-linear-to-r from-blue-800 to-blue-500 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
          <Link href="/portfolio">
          
            <span className="flex items-center justify-center gap-2">
              Jelajahi Koleksi Terbaru citiplumb
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
