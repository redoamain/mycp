"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function CustomerReviews() {
  return (
    <div className="h-160 rounded-md flex flex-col antialiased bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-neutral-900 dark:to-blue-950 items-center justify-center relative overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 mb-2">
          Apa Kata Pelanggan Kami?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
          Dipercaya oleh ribuan pelanggan di Amerika Serikat
        </p>
      </div>

      <InfiniteMovingCards
        items={customerReviews}
        direction="right"
        speed="slow"
      />
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

// Custom Card Component dengan Badge Terjemahan
const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg w-95 md:w-105 mx-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              {i < review.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {review.translated && (
            <div className="bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full flex items-center gap-1">
              <span className="text-blue-600 text-xs">🌐</span>
              <span className="text-blue-600 text-xs font-semibold">
                Terjemahan
              </span>
            </div>
          )}
          <div className="bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center gap-1">
            <span className="text-green-600 text-xs">✓</span>
            <span className="text-green-600 text-xs font-semibold">
              Terverifikasi
            </span>
          </div>
        </div>
      </div>

      <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 leading-relaxed italic">
        "{review.quote}"
      </p>

      <div className="border-t border-gray-100 dark:border-neutral-700 pt-3 mt-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-blue-900 dark:text-blue-300">
              {review.name}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {review.title}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-2 py-1 rounded-full">
              {review.product}
            </div>
            <div className="flex items-center gap-1 justify-end mt-1">
              <span className="text-xs text-neutral-400 dark:text-neutral-500">
                🇺🇸
              </span>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">
                {review.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component dengan Badge Terjemahan
export function CustomerReviewsWithTranslation() {
  return (
    <div className="h-180 rounded-md flex flex-col antialiased bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-neutral-900 dark:to-blue-950 items-center justify-center relative overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-8 z-10">
        <div className="flex justify-center gap-8 mb-6 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10K+</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              Pelanggan Puas
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">4.8</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              Rating Rata-rata
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400">
              Kota di AS
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full mb-4">
          <span className="text-blue-600 text-sm">🇺🇸 → 🇮🇩</span>
          <span className="text-xs text-blue-600 font-semibold">
            Diterjemahkan dari Bahasa Inggris
          </span>
        </div>

        <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full mb-4 ml-2">
          <span className="text-green-600 text-sm">★★★★★</span>
          <span className="text-xs text-green-600 font-semibold">4.8/5</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 mb-2">
          Testimoni Pelanggan Amerika
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
          Pengalaman nyata dari pelanggan kami di Amerika Serikat yang telah
          diterjemahkan ke dalam Bahasa Indonesia
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex gap-6 animate-scroll">
          {customerReviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
          {/* Duplikat untuk infinite scroll effect */}
          {customerReviews.map((review, idx) => (
            <ReviewCard key={`dup-${idx}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Atau jika ingin menggunakan komponen InfiniteMovingCards yang sudah ada
export function CustomerReviewsWithTranslationBadge() {
  return (
    <div className="h-160 rounded-md flex flex-col antialiased bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-neutral-900 dark:to-blue-950 items-center justify-center relative overflow-hidden">
      <div className="text-center mb-8 z-10">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-sm">🌐</span>
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
              Diterjemahkan dari Bahasa Inggris
            </span>
          </div>
          <div className="bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full flex items-center gap-2">
            <span className="text-sm">✓</span>
            <span className="text-xs font-semibold text-green-700 dark:text-green-300">
              Verified Reviews
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 mb-2">
          Apa Kata Pelanggan dari Amerika?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
          {customerReviews.length}+ ulasan terverifikasi dari pelanggan di
          seluruh Amerika Serikat
        </p>
      </div>

      <InfiniteMovingCards
        items={customerReviews}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
