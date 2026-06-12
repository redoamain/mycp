"use client";

import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function ContactPage() {
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
              Hubungi Kami
            </span>
            <h1 className="mt-2 text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-5xl lg:text-6xl">
              Siap Bekerja Sama
              <br />
              <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                dengan citiplumb?
              </span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-lg dark:bg-neutral-800"
            >
              <h3 className="mb-4 text-xl font-bold text-blue-900 dark:text-blue-300">
                Kirim Pesan
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-blue-800 dark:bg-neutral-900"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-blue-800 dark:bg-neutral-900"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-blue-800 dark:bg-neutral-900"
                    placeholder="0812-3456-7890"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-blue-200 px-4 py-2 focus:border-blue-500 focus:outline-none dark:border-blue-800 dark:bg-neutral-900"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <button className="w-full rounded-lg bg-linear-to-r from-blue-800 to-blue-500 py-2 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  Kirim Pesan
                </button>
              </form>
            </motion.div>

            {/* Info Kontak */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-neutral-800">
                <h3 className="mb-4 text-xl font-bold text-blue-900 dark:text-blue-300">
                  Informasi Kontak
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                        Alamat Kantor
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Jl. Raya Plosowahyu Babat, Sawah, Plosowahyu, Kec.
                        Lamongan, Kabupaten Lamongan, Jawa Timur 62218
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                        Telepon
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        (0322) 8802014
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        +62813 3519 7324 (WA)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                        Email
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        pt.citiplumb@gmail.com
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        info@citiplumb.id
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        sales@citiplumb.id
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕒</span>
                    <div>
                      <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                        Jam Operasional
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Senin - Jumat: 08:00 - 16:00
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Sabtu: 08:00 - 12:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-linear-to-r from-blue-900 to-blue-600 p-6 text-white">
                <div className="text-center">
                  <div className="mb-2 text-5xl">💧</div>
                  <h4 className="text-lg font-bold">
                    Butuh Konsultasi Produk?
                  </h4>
                  <p className="mt-2 text-sm text-blue-100">
                    Tim ahli kami siap membantu Anda
                  </p>
                  <button className="mt-4 rounded-lg bg-white px-6 py-2 font-medium text-blue-700 transition-all hover:scale-105">
                    Chat Via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Location */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.187017657008!2d112.37943967580713!3d-7.104312369658333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f0dffecee3fd%3A0x7c2a0f8de8b77160!2sPT.%20Citi%20Plumb!5e0!3m2!1sen!2sid!4v1779264530764!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
