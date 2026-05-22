import React from "react";
import { Compare } from "@/components/ui/compare";

export function Comparer() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-blue-200 bg-linear-to-br from-blue-50/50 to-white p-4 shadow-lg dark:border-blue-800/50 dark:bg-linear-to-br dark:from-blue-950/20 dark:to-neutral-900">
        {/* Header dengan Logo */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-linear-to-br from-blue-900 to-blue-400">
              <span className="text-xs font-bold text-white">F</span>
            </div>
            <span className="text-base font-bold text-blue-900 dark:text-blue-300">
              fauchet
            </span>
          </div>
          <div className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-950/50 dark:text-blue-400">
            Water Solutions
          </div>
        </div>

        {/* Label Perbandingan */}
        <div className="mb-3 flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Sebelum (Shower Biasa)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Sesudah (fauchet Shower)
            </span>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>

        <Compare
          firstImage="https://images.unsplash.com/photo-1561361398-d1f7b6cfee79?w=500&auto=format&fit=crop"
          secondImage="https://images.unsplash.com/photo-1566446896748-6075a87760c1?w=500&auto=format&fit=crop"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-62.5 w-full rounded-xl md:h-112.5"
          slideMode="hover"
        />

        {/* Perbedaan Kualitas */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="space-y-1 rounded-lg bg-red-50 p-2 dark:bg-red-950/20">
            <div className="flex items-center gap-1">
              <span className="text-sm">❌</span>
              <p className="text-xs font-semibold text-red-600 dark:text-red-400">
                Shower Biasa
              </p>
            </div>
            <ul className="ml-4 space-y-0.5 text-xs text-neutral-600 dark:text-neutral-400">
              <li>• Tekanan air lemah</li>
              <li>• Cepat berkarat</li>
              <li>• Sering bocor</li>
              <li>• Desain kuno</li>
            </ul>
          </div>
          <div className="space-y-1 rounded-lg bg-green-50 p-2 dark:bg-green-950/20">
            <div className="flex items-center gap-1">
              <span className="text-sm">✅</span>
              <p className="text-xs font-semibold text-green-600 dark:text-green-400">
                fauchet Shower
              </p>
            </div>
            <ul className="ml-4 space-y-0.5 text-xs text-neutral-600 dark:text-neutral-400">
              <li>• Tekanan air kuat</li>
              <li>• Anti karat SS-304</li>
              <li>• Teknologi anti bocor</li>
              <li>• Desain modern elegan</li>
            </ul>
          </div>
        </div>

        {/* Teknologi Unggulan */}
        <div className="mt-3 rounded-lg bg-linear-to-r from-blue-100 to-blue-50 p-2 dark:from-blue-950/50 dark:to-blue-900/30">
          <p className="text-center text-xs font-semibold text-blue-800 dark:text-blue-300">
            💧 Teknologi Rain Shower • Hemat Air 40% • 5 Mode Semprotan
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-4 text-center">
          <button className="w-full rounded-lg bg-linear-to-r from-blue-800 to-blue-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            Lihat Koleksi Shower fauchet →
          </button>
        </div>
      </div>
    </div>
  );
}
