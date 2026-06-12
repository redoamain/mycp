"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Terima kasih telah berlangganan newsletter citiplumb!");
  };

  return (
    <footer className="w-full border-t border-blue-200 bg-white dark:border-blue-800/50 dark:bg-neutral-900">
      {/* Newsletter Section */}
      {/* <div className="border-b border-blue-100 dark:border-blue-900/50">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300">
                Newsletter citiplumb
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Dapatkan informasi produk terbaru dan penawaran spesial
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-blue-800 dark:bg-neutral-800 dark:text-white"
              />
              <button
                type="submit"
                className="rounded-lg bg-linear-to-r from-blue-800 to-blue-500 px-6 py-2 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-linear-to-br from-blue-900 to-blue-400" />
              <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300">
                citiplumb
              </h2>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Produsen kran air dan shower premium dengan standar internasional.
              Material SS-304 anti karat, teknologi hemat air, dan desain
              modern.
            </p>
            <div className="flex gap-3">
              <span className="text-xl">🏆</span>
              <span className="text-xl">⭐</span>
              <span className="text-xl">✅</span>
              <span className="text-xl">💧</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-blue-900 dark:text-blue-300">
              Tautan Cepat
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-semibold text-blue-900 dark:text-blue-300">
              Produk
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Shower Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Kran Air
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Faucet Set
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Shower Panel
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                >
                  Aksesoris Kamar Mandi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 font-semibold text-blue-900 dark:text-blue-300">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <span>📍</span>
                <span>
                  {" "}
                  Jl. Raya Plosowahyu Babat, Sawah, Plosowahyu, Kec. Lamongan,
                  Kabupaten Lamongan, Jawa Timur 622
                </span>
              </li>
              <li className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <span>📞</span>
                <span>(0322) 8802014</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <span>✉️</span>
                <span>info@citiplumb.id</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <span>🕒</span>
                <span>Senin - Jumat: 08:00 - 17:00</span>
               
              </li>
              <li className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <span>🕒</span>
                <span>Sabtu: 08:00 - 12:15</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner / Marketplace */}
        <div className="mt-8 border-t border-blue-100 pt-8 dark:border-blue-900/50">
          <h3 className="mb-4 text-center text-sm font-semibold text-blue-900 dark:text-blue-300">
            Tersedia di Marketplace
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 transition-all hover:scale-105 dark:bg-orange-950/50 dark:text-orange-400"
            >
              🛒 Amazon
            </a>
            <a
              href="#"
              className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 transition-all hover:scale-105 dark:bg-orange-950/50 dark:text-orange-400"
            >
              🏪 HomeDepot
            </a>
            <a
              href="#"
              className="rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 transition-all hover:scale-105 dark:bg-orange-950/50 dark:text-orange-400"
            >
              📦 eBay
            </a>
          </div>
        </div>

        {/* Copyright - Dynamic Year */}
        <div className="mt-8 border-t border-blue-100 pt-6 text-center dark:border-blue-900/50">
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} citiplumb - Premium Water Solutions. All rights
            reserved.
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            Designed with 💧 for better water solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
