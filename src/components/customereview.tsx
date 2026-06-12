"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function CustomerReviews() {
  return (
    <div className="min-h-screen w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 flex flex-col antialiased bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-neutral-900 dark:to-blue-950 items-center justify-center relative overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-6 md:mb-8 lg:mb-10 z-10 max-w-full px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-300 mb-2 md:mb-3">
          Apa Kata Pelanggan Kami?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
          Dipercaya oleh ribuan pelanggan di Amerika Serikat
        </p>
      </div>

      {/* Stats Row - Responsive */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8 lg:mb-10">
        <div className="text-center px-3 sm:px-4">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
            10K+
          </div>
          <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-neutral-400">
            Pelanggan Puas
          </div>
        </div>
        <div className="text-center px-3 sm:px-4">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
            4.8
          </div>
          <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-neutral-400">
            Rating Rata-rata
          </div>
        </div>
        <div className="text-center px-3 sm:px-4">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
            50+
          </div>
          <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-neutral-400">
            Kota di AS
          </div>
        </div>
      </div>

      {/* Badges - Responsive wrap */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 md:mb-6">
        <div className="inline-flex items-center gap-1 sm:gap-2 bg-blue-100 dark:bg-blue-900/30 px-2 sm:px-3 py-1 rounded-full">
          <span className="text-xs sm:text-sm">🌐</span>
          <span className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-300 whitespace-nowrap">
            Diterjemahkan dari Inggris
          </span>
        </div>
        <div className="inline-flex items-center gap-1 sm:gap-2 bg-green-100 dark:bg-green-900/30 px-2 sm:px-3 py-1 rounded-full">
          <span className="text-xs sm:text-sm">★</span>
          <span className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-300 whitespace-nowrap">
            Terverifikasi 4.8/5
          </span>
        </div>
      </div>

      {/* Infinite Moving Cards Container */}
      <div className="w-full overflow-hidden">
        <InfiniteMovingCards
          items={customerReviews}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const customerReviews = [
  {
    quote:
      "Kran citiplumb benar-benar mengubah pengalaman dapur saya! Tekanan airnya luar biasa dan desainnya sangat elegan. Sudah 6 bulan pakai masih tampak baru, tidak ada karat sama sekali.",
    name: "Michael Johnson",
    title: "Pemilik Rumah - New York",
    rating: 5,
    product: "Kran Dapur",
    location: "Brooklyn, NY",
    translated: true,
  },
  {
    quote:
      "Setelah berbulan-bulan mencari sistem shower berkualitas, akhirnya saya menemukan citiplumb. Mode semprotannya luar biasa, fitur hemat airnya bekerja dengan baik, dan kamar mandi saya sekarang terasa seperti spa mewah!",
    name: "Sarah Williams",
    title: "Desainer Interior - California",
    rating: 5,
    product: "Shower Set Premium",
    location: "Los Angeles, CA",
    translated: true,
  },
  {
    quote:
      "Pelayanan pelanggan luar biasa dan pengiriman cepat! Kualitas produk sangat bagus dan pemasangannya mudah. Sangat merekomendasikan untuk siapa pun yang ingin meningkatkan kualitas perlengkapan rumah mereka.",
    name: "David Brown",
    title: "Kontraktor - Texas",
    rating: 4,
    product: "Aksesoris Kamar Mandi",
    location: "Houston, TX",
    translated: true,
  },
  {
    quote:
      "Awalnya saya ragu karena harganya, tapi ternyata sangat sepadan! Konstruksi stainless steel 304 solid, tidak ada bocor sama sekali, dan desain modernnya menambah nilai rumah saya.",
    name: "Jennifer Martinez",
    title: "Manajer Properti - Florida",
    rating: 5,
    product: "Kran Taman",
    location: "Miami, FL",
    translated: true,
  },
  {
    quote:
      "Teknologi rain kran benar-benar mengubah segalanya! Mencuci piring tidak pernah semudah ini. Tetangga saya melihatnya dan sekarang mereka juga ingin memilikinya.",
    name: "Robert Wilson",
    title: "Koki - Illinois",
    rating: 5,
    product: "Rain Teknologi Kran",
    location: "Chicago, IL",
    translated: true,
  },
  {
    quote:
      "Kualitas SS-304 sangat luar biasa - tidak ada karat meskipun terkena air terus-menerus. Desain timeless-nya cocok dengan berbagai gaya interior. Sangat worth it!",
    name: "Emily Davis",
    title: "Arsitek - Washington",
    rating: 5,
    product: "SS-304 Series",
    location: "Seattle, WA",
    translated: true,
  },
  {
    quote:
      "Pengiriman cepat, kemasan aman, dan produk melebihi ekspektasi saya. Tekanan air stabil, tidak bocor, dan mudah dibersihkan. Terima kasih citiplumb!",
    name: "Thomas Anderson",
    title: "Pemilik Bisnis - Massachusetts",
    rating: 4,
    product: "Faucet Series",
    location: "Boston, MA",
    translated: true,
  },
  {
    quote:
      "Tagihan air saya berkurang sekitar 30% setelah beralih ke citiplumb! Teknologi hemat airnya benar-benar bekerja. Produk yang luar biasa!",
    name: "Lisa Thompson",
    title: "Aktivis Lingkungan - Colorado",
    rating: 5,
    product: "Eco-Saver Series",
    location: "Denver, CO",
    translated: true,
  },
];

// Custom Card Component yang Responsive
export const ReviewCard = ({
  review,
}: {
  review: (typeof customerReviews)[0];
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-5 md:p-6 shadow-lg w-70 sm:w-[320px] md:w-95 lg:w-105 mx-2 sm:mx-3 md:mx-4 shrink-0">
      {/* Rating & Badges */}
      <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
        <div className="flex gap-0.5 sm:gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-sm sm:text-base md:text-lg text-yellow-400"
            >
              {i < review.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {review.translated && (
            <div className="bg-blue-100 dark:bg-blue-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1">
              <span className="text-[10px] sm:text-xs">🌐</span>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-blue-600">
                Terjemahan
              </span>
            </div>
          )}
          <div className="bg-green-100 dark:bg-green-900/30 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1">
            <span className="text-[10px] sm:text-xs">✓</span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-green-600">
              Terverifikasi
            </span>
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed italic line-clamp-4 sm:line-clamp-none">
        "{review.quote}"
      </p>

      {/* Divider */}
      <div className="border-t border-gray-100 dark:border-neutral-700 pt-2 sm:pt-3 mt-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="font-semibold text-blue-900 dark:text-blue-300 text-sm sm:text-base">
              {review.name}
            </p>
            <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400">
              {review.title}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <div className="inline-block text-[10px] sm:text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 sm:py-1 rounded-full">
              {review.product}
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[10px] sm:text-xs text-neutral-400">
                🇺🇸
              </span>
              <p className="text-[10px] sm:text-xs text-neutral-400">
                {review.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen InfiniteMovingCards yang Responsive (jika perlu custom)
export function ResponsiveInfiniteMovingCards() {
  return (
    <div className="w-full overflow-hidden relative">
      <div className="flex gap-3 sm:gap-4 md:gap-6 animate-scroll">
        {customerReviews.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
        {customerReviews.map((review, idx) => (
          <ReviewCard key={`dup-${idx}`} review={review} />
        ))}
      </div>

      {/* Gradient Overlay untuk efek fade di sisi kiri & kanan */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-linear-to-r from-white dark:from-neutral-900 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-linear-to-l from-white dark:from-neutral-900 to-transparent pointer-events-none" />
    </div>
  );
}

// Komponen lengkap dengan InfiniteMovingCards yang sudah responsive
export function CustomerReviewsResponsive() {
  return (
    <div className="min-h-screen w-full py-10 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 flex flex-col antialiased bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-neutral-900 dark:to-blue-950 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section - Responsive */}
      <div className="text-center mb-6 md:mb-8 lg:mb-10 z-10 relative">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-blue-100 dark:bg-blue-900/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            <span className="text-xs sm:text-sm">🌐</span>
            <span className="text-[10px] sm:text-xs font-semibold text-blue-700 dark:text-blue-300">
              Diterjemahkan dari Inggris
            </span>
          </div>
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-green-100 dark:bg-green-900/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
            <span className="text-xs sm:text-sm">★</span>
            <span className="text-[10px] sm:text-xs font-semibold text-green-700 dark:text-green-300">
              4.8/5 Terverifikasi
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-blue-300 mb-2 md:mb-3 px-2">
          Testimoni Pelanggan dari Amerika
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-sm sm:max-w-md md:max-w-2xl mx-auto px-4">
          {customerReviews.length}+ ulasan terverifikasi dari pelanggan di
          seluruh Amerika Serikat
        </p>
      </div>

      {/* Stats - Responsive Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-6 md:mb-8 lg:mb-10">
        <div className="text-center bg-white/50 dark:bg-neutral-800/50 rounded-xl p-2 sm:p-3 backdrop-blur-sm">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
            10K+
          </div>
          <div className="text-[8px] sm:text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400">
            Pelanggan Puas
          </div>
        </div>
        <div className="text-center bg-white/50 dark:bg-neutral-800/50 rounded-xl p-2 sm:p-3 backdrop-blur-sm">
          <div className="flex justify-center gap-0.5 text-sm sm:text-base md:text-lg text-yellow-400 mb-0.5">
            ★★★★★
          </div>
          <div className="text-[8px] sm:text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400">
            Rating 4.8/5
          </div>
        </div>
        <div className="text-center bg-white/50 dark:bg-neutral-800/50 rounded-xl p-2 sm:p-3 backdrop-blur-sm">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
            50+
          </div>
          <div className="text-[8px] sm:text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400">
            Kota di AS
          </div>
        </div>
      </div>

      {/* Infinite Moving Cards - Responsive */}
      <div className="w-full overflow-hidden relative">
        <InfiniteMovingCards
          items={customerReviews}
          direction="right"
          speed="slow"
        />

        {/* Gradient Overlays untuk efek smooth di mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-linear-to-r from-blue-50 dark:from-blue-950 via-transparent to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 bg-linear-to-l from-blue-50 dark:from-blue-950 via-transparent to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

// Default export untuk kemudahan import
export default CustomerReviewsResponsive;
