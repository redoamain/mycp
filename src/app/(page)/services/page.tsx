"use client";

import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "moulding",
      icon: "/img/icon/MOLDING.png",
      title: "Moulding",
      subtitle: "Mold Design & Tooling",
      description:
        "Transforming concepts into production-ready molds with precision engineering, optimized design, and reliable tooling solutions for various manufacturing applications.",
      features: [
        "Professional CAD/CAM design",
        "High precision molds",
        "Durable mold materials",
        "Customized to your needs",
        "Fast track moulding",
      ],
      image: "/img/services/moulding.webp",
    },
    {
      id: "moulding-stainles",
      icon: "/img/icon/STAINLESS.png",
      title: "Stainless Steel Moulding",
      subtitle: "Mold Design & Tooling",
      description:
        "Transforming concepts into production-ready molds with precision engineering, optimized design, and reliable tooling solutions for various manufacturing applications.",
      features: [
        "Professional CAD/CAM design",
        "High precision molds",
        "Durable mold materials",
        "Customized to your needs",
        "Fast track moulding",
      ],
      image: "/img/services/moulding-stainles.webp",
    },
    {
      id: "injection",
      icon: "/img/icon/INJECTION.png",
      title: "Injection",
      subtitle: "Plastic Injection Molding",
      description:
        "Delivering high-quality plastic components through advanced injection molding technology, efficient production processes, and strict quality control standards.",
      features: [
        "Capacity 48-280 tons",
        "High accuracy ±0.01mm",
        "Premium materials (ABS, PC, PP, Nylon)",
        "Fast cycle time",
        "Mass production",
      ],
      image: "/img/services/injeksi.webp",
    },
    {
      id: "plating",
      icon: "/img/icon/PLATING.png", // Ganti dengan path icon
      title: "Electroplating",
      subtitle: "Premium Anti-Rust Chrome Coating",
      description:
        "Providing professional surface finishing solutions that enhance product durability, corrosion resistance, and aesthetic appeal for both plastic and metal components.",
      features: [
        "Thick chrome coating",
        "Eco-friendly process",
        "Corrosion and rust resistant",
        "Premium shiny finish",
        "Strong adhesion",
      ],
      image: "/img/services/plating.webp",
    },
    {
      id: "spray",
      icon: "/img/icon/SPRAY.png", // Ganti dengan path icon
      title: "Spray Coating",
      subtitle: "Premium Paint Finishing",
      description:
        "Spray coating services with various color options and finishes that are durable, scratch-resistant, and aesthetic.",
      features: [
        "Complete color options",
        "Matte/glossy finishing",
        "Scratch and weather resistant",
        "Electrostatic technology",
        "Eco-friendly",
      ],
      image: "/img/services/spray.webp",
    },
    {
      id: "assembly",
      icon: "/img/icon/ASSEMBLY.png", // Ganti dengan path icon
      title: "Assembly",
      subtitle: "Component Assembly",
      description:
        "Component assembly services with strict quality control standards to ensure every product functions optimally.",
      features: [
        "Automated assembly line",
        "Strict quality control",
        "Product function testing",
        "Professional packaging",
        "Capacity 6,000 units/day",
      ],
      image: "/img/services/assembly.webp",
    },
    {
      id: "Quality",
      icon: "/img/icon/QC.png",
      title: "Quality Assurance",
      subtitle: "Testing & Inspection Services",
      description:
        "Maintaining consistent product quality through rigorous testing procedures, advanced inspection equipment, and continuous process improvement.",
      features: [
        "Incoming material inspection",
        "In-process quality control",
        "Functional & performance testing",
        "Advanced inspection equipment",
        "Defect analysis & corrective actions",
        "Continuous process improvement",
      ],
      image: "/img/services/qc.webp",
    },
    {
      id: "Oem",
      icon: "/img/icon/ASSEMBLY.png",
      title: "OEM & ODM Manufacturing",
      subtitle: "Custom Product Development & Assembly",
      description:
        "Delivering comprehensive OEM and ODM manufacturing solutions, from product concept, design, engineering, and prototyping to component assembly, testing, and mass production. We help customers bring high-quality products to market with reliable manufacturing support and strict quality standards.",
      features: [
        "Custom product design & development",
        "Engineering & prototyping support",
        "Component sourcing & procurement",
        "Automated component assembly",
        "Quality assurance & functional testing",
        "Mass production capacity up to 6,000 units/day",
      ],
      image: "/img/services/assembly.webp",
    },
  ];

  const processSteps = [
    { step: 1, name: "Moulding", icon: "/img/icon/MOLDING.png" },
    { step: 2, name: "Injection", icon: "/img/icon/INJECTION.png" },
    { step: 3, name: "Plating", icon: "/img/icon/PLATING.png" },
    { step: 4, name: "Spray", icon: "/img/icon/SPRAY.png" },
    { step: 5, name: "Assembly", icon: "/img/icon/ASSEMBLY.png" },
    { step: 6, name: "QC", icon: "/img/icon/QC.png" },
  ];

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
              Our Services
            </span>
            <h1 className="mt-2 text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-5xl lg:text-6xl">
              Complete &
              <br />
              <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Integrated Manufacturing Solutions
              </span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
            <p className="mx-auto mt-6 max-w-2xl text-neutral-600 dark:text-neutral-400">
              CITI PLUMB provides integrated manufacturing services from
              upstream to downstream to produce premium quality components
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Process Flow */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
              CITI PLUMB Manufacturing Process
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Supporting your business with integrated manufacturing solutions,
              from product development to mass production.
            </p>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {processSteps.map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-600 via-blue-500 to-blue-400 shadow-lg shadow-blue-500/30">
                  <img
                    src={process.icon}
                    alt={process.name}
                    className="h-10 w-10 object-contain brightness-0 invert"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-blue-800 dark:text-blue-300">
                  {process.name}
                </p>
                {idx < processSteps.length - 1 && (
                  <div className="absolute -right-4 top-8 hidden text-xl text-blue-400 md:block">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className="w-full py-16 scroll-mt-20"
        >
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 gap-12 ${idx % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2"}`}
            >
              {/* Image */}
              <div
                className={`rounded-2xl overflow-hidden shadow-xl ${idx % 2 === 1 ? "md:order-2" : ""}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  {/* Icon dengan background biru gradasi bulat */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600 via-blue-500 to-blue-400 shadow-lg shadow-blue-500/30">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-9 w-9 object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Service {idx + 1} / {services.length}
                    </span>
                    <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-300">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
                  {service.subtitle}
                </p>

                <p className="text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-neutral-600 dark:text-neutral-400">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="https://wa.me/6281335197324"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-linear-to-r from-blue-800 to-blue-500 px-6 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Consult This Service →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Production Capacity */}
      <section className="w-full py-16 bg-linear-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-neutral-900">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
              Production Capacity
            </h2>
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                label: "Injection Machines",
                value: "58 Units",
                detail: "Capacity 48-280 tons",
              },
              {
                label: "Plating Lines",
                value: "2 Lines",
                detail: "Capacity 10,000 pcs/day",
              },
              {
                label: "Assembly Lines",
                value: "3 Lines",
                detail: "Capacity 6,000 units/day",
              },
              {
                label: "Spray Booths",
                value: "5 Booths",
                detail: "Capacity 5,000 pcs/day",
              },
              {
                label: "Moulding",
                value: "800+ Molds",
                detail: "Custom design available",
              },
              {
                label: "QC Stations",
                value: "20 Stations",
                detail: "100% quality control",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-white p-6 text-center shadow-md dark:bg-neutral-800"
              >
                <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  {item.value}
                </div>
                <div className="mt-2 font-semibold text-blue-900 dark:text-blue-300">
                  {item.label}
                </div>
                <div className="text-sm text-neutral-500">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-linear-to-r from-blue-900 to-blue-600 p-8 text-white"
          >
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to Start Production?
            </h2>
            <p className="mt-2 text-blue-100">
              Consult your manufacturing needs with the CITI PLUMB expert team
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="rounded-lg bg-white px-6 py-2 font-medium text-blue-700 transition-all hover:scale-105">
                  Contact Us
                </button>
              </Link>
              <Link href="/products">
                <button className="rounded-lg border-2 border-white px-6 py-2 font-medium text-white transition-all hover:bg-white/10">
                  View Products
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
