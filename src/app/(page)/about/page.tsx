"use client";

import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Link from "next/link";
import CertificateSection from "@/components/CertificateSection";

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="mt-2 text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-5xl lg:text-6xl">
              Get to Know
              <br />
              <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                CITI PLUMB
              </span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg dark:bg-neutral-800/50"
            >
              <div className="mb-4 text-5xl">🎯</div>
              <h3 className="mb-3 text-2xl font-bold text-blue-900 dark:text-blue-300">
                Vision
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                To beautify and bring more functionality to every kitchen and
                bathroom through product design innovation and luxury.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-8 shadow-lg dark:bg-neutral-800/50"
            >
              <div className="mb-4 text-5xl">🚀</div>
              <h3 className="mb-3 text-2xl font-bold text-blue-900 dark:text-blue-300">
                Mission
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                To realize kitchen and bathroom fixtures with innovative models,
                durability, water efficiency, and affordable prices for every
                consumer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-linear-to-br from-blue-50 to-white p-8 shadow-lg dark:from-blue-950/20 dark:to-neutral-800/50"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="text-4xl">📖</div>
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
                CITI PLUMB Journey
              </h2>
            </div>

            <div className="relative border-l-2 border-blue-200 pl-6 dark:border-blue-800">
              <div className="mb-8">
                <div className="absolute -left-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                  2015 - Founding
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  CITI PLUMB began its journey as a small factory in Lamongan,
                  East Java.
                </p>
              </div>
              <div className="mb-8">
                <div className="absolute -left-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                  2017 - Factory Expansion
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Built a 50,000 m² factory and started producing showers and
                  faucets.
                </p>
              </div>
              <div>
                <div className="absolute -left-2 mt-1 h-4 w-4 rounded-full bg-blue-600 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                  2026 - Continuous Innovation
                </h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  Continuously innovating with water-saving technology and
                  modern designs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4 pb-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { number: "10+", label: "Years of Experience", icon: "⭐" },
              { number: "50K+", label: "Units Sold", icon: "🚿" },
              { number: "500+", label: "Hotel Partners", icon: "🏨" },
              { number: "100%", label: "Client Satisfaction", icon: "😊" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-6 text-center shadow-md dark:bg-neutral-800"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      <CertificateSection/>
      </section>
    </div>
  );
}
