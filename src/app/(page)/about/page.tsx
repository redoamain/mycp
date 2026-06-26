"use client";

import { motion } from "motion/react";
import {
  Target,
  Lightbulb,
  Calendar,
  Award,
  Factory,
  Wrench,
  Shield,
  Globe,
} from "lucide-react";
import CertificateSection from "@/components/CertificateSection";

export default function AboutPage() {
  const journeyData = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "CITI PLUMB began its journey as a small factory in Lamongan, East Java.",
    },
    {
      year: "2017",
      title: "Factory Expansion",
      description:
        "Built a 50,000 m² factory and started producing showers and faucets.",
    },

    {
      year: "2026",
      title: "Continuous Innovation",
      description:
        "Continuously innovating with water-saving technology and modern designs.",
    },
  ];

  const values = [
    {
      icon: <Factory className="h-7 w-7 text-blue-600" />,
      title: "Precision Manufacturing",
      description:
        "Delivering exact specifications with cutting-edge technology",
    },
    {
      icon: <Shield className="h-7 w-7 text-blue-600" />,
      title: "Quality Assurance",
      description: "Stringent quality control at every stage of production",
    },
    {
      icon: <Wrench className="h-7 w-7 text-blue-600" />,
      title: "Integrated Solutions",
      description: "End-to-end manufacturing services from design to delivery",
    },
    {
      icon: <Globe className="h-7 w-7 text-blue-600" />,
      title: "Global Standards",
      description: "Meeting international manufacturing and safety standards",
    },
  ];

  return (
    <div className="relative mx-auto min-h-screen w-full">
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
              Get To Know
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white p-10 dark:bg-blue-900/20 shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-blue-900 dark:text-blue-300">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                To beautify and bring more functionality to every kitchen and
                bathroom through product design innovation and luxury.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-white shadow-xl p-10 dark:bg-green-900/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-600">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-green-900 dark:text-green-300">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                To realize kitchen and bathroom fixtures with innovative models,
                durability, water efficiency, and affordable prices for every
                consumer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-4xl font-bold text-blue-900 dark:text-blue-300">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              The principles that guide our manufacturing excellence
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-white p-6 text-center shadow-lg transition-transform hover:scale-105 dark:bg-gray-800"
              >
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                    {value.icon}
                  </div>
                </div>
                <h4 className="mb-2 text-xl font-semibold text-blue-900 dark:text-blue-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-3 text-4xl font-bold text-blue-900 dark:text-blue-300">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              The milestones that shaped our company's story
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-blue-300 dark:bg-blue-700" />

            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Year Circle */}
                <div className="absolute left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-blue-600 bg-white text-sm font-bold text-blue-600 dark:border-blue-400 dark:bg-gray-800 dark:text-blue-400">
                  {item.year.slice(-2)}
                </div>

                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div
                    className={`rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800 ${
                      index % 2 === 0 ? "mr-4" : "ml-4"
                    }`}
                  >
                    <h4 className="text-lg font-bold text-blue-900 dark:text-blue-300">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Stats */}
      <section className="border-t border-gray-200 py-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="container mx-auto px-4">
         <CertificateSection/>
        </div>
      </section>
    </div>
  );
}
