// src/components/CertificatePreview.tsx
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const certificatesData = [
  {
    id: 1,
    title: "ISO 9001:2015",
    issuer: "International Organization for Standardization",
    year: "2022",
    image: "/img/cer/1.webp",
    description: "International quality management certificate",
  },
  {
    id: 2,
    title: "Quality Certificate",
    issuer: "Quality Assurance Institute",
    year: "2026",
    image: "/img/cer/2.jpg",
    description: "Product quality certification",
  },
  {
    id: 3,
    title: "Safety Standard",
    issuer: "Safety Compliance Board",
    year: "2026",
    image: "/img/cer/3.jpg",
    description: "International safety standards compliance",
  },
  {
    id: 4,
    title: "Environmental Management",
    issuer: "Eco Certification Body",
    year: "2026",
    image: "/img/cer/4.jpg",
    description: "Environmental sustainability certification",
  },
];

export default function CertificatePreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
            <span className="text-blue-600 text-xs sm:text-sm tracking-wider font-medium">
              CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700">
              Certificates
            </span>
          </h2>
          <p className="text-black/50 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Official certifications that prove our quality and professionalism
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-black/5 hover:border-blue-400/30"
            >
              {/* Certificate Image */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-50 dark:bg-neutral-700">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

          

                {/* Year Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-blue-600/90 backdrop-blur-sm text-white text-[8px] sm:text-[10px] md:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  {cert.year}
                </div>

                {/* Status Badge - Verified */}
                <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-green-500/90 backdrop-blur-sm text-white text-[8px] sm:text-[10px] md:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20 flex items-center gap-1">
                  <svg
                    className="w-2 h-2 sm:w-3 sm:h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Link
            href="/about"
            className="inline-block rounded-lg bg-linear-to-r from-blue-800 to-blue-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            View All Certificates →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
