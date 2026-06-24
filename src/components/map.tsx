"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function MapEx() {
  // US cities data with coordinates
  const cities = [
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
    { name: "Chicago", lat: 41.8781, lng: -87.6298 },
    { name: "Houston", lat: 29.7604, lng: -95.3698 },
    { name: "Seattle", lat: 47.6062, lng: -122.3321 },
    { name: "Miami", lat: 25.7617, lng: -80.1918 },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="w-full bg-white py-20 dark:bg-black md:py-40">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xl font-bold text-black dark:text-white md:text-4xl">
            Exporting{" "}
            <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
              Indonesia to America
            </span>
          </p>
          <p className="mx-auto max-w-2xl py-4 text-sm text-neutral-600 dark:text-neutral-400 md:text-lg">
            <span className="font-semibold text-blue-700 dark:text-blue-400">
              CITI PLUMB
            </span>{" "}
            connects premium Indonesian water products to the American market.
            Best quality with world-class design.
          </p>
        </div>

        {/* World Map with City Labels */}
        <div className="relative">
          <WorldMap
            dots={[
              // Routes: Indonesia (Jakarta) to all US cities
              ...cities.map((city) => ({
                start: { lat: -6.2088, lng: 106.8456 }, // Jakarta, Indonesia
                end: { lat: city.lat, lng: city.lng },
              })),
            ]}
          />

          {/* US City Labels */}
          <div className="absolute inset-0 pointer-events-none">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${((city.lng + 180) / 360) * 100}%`,
                  top: `${((90 - city.lat) / 180) * 100}%`,
                }}
              >
                <div className="relative group pointer-events-auto">
                  {/* Dot Marker */}
                  <div className="w-3 h-3 bg-blue-600 rounded-full shadow-lg shadow-blue-500/50 animate-pulse" />

                  {/* City Label */}
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap">
                    <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-lg border border-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-semibold text-blue-800">
                        {city.name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Destination Cities List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 md:text-xl">
            Export Destination Cities in America
          </h3>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {cities.map((city, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-3 py-1.5 bg-blue-100/80 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full border border-blue-200/50 dark:border-blue-700/50"
              >
                🇺🇸 {city.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CITI PLUMB Premium Products */}
        <div className="mx-auto mt-12 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8 text-center"
          >
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-400 md:text-xl">
              CITI PLUMB Premium Export Products
            </h3>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Premium quality for the global market
            </p>
          </motion.div>

          <div>
            {/* Premium Faucet Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="rounded-xl border border-blue-200 bg-linear-to-br from-blue-50/50 to-white p-6 dark:border-blue-800/50 dark:from-blue-950/20 dark:to-transparent"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="text-4xl">🚰</div>
                <h4 className="text-xl font-bold text-blue-900 dark:text-blue-300">
                  Premium Water Faucet
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Stainless Steel
                  Faucet
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Smart Water Tap
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Automatic Sensor
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span> Minimalist & Elegant
                  Design
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Export Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { value: "7+", label: "US Destination Cities", icon: "🇺🇸" },
              { value: "1000+", label: "Containers/Year", icon: "🚢" },
              { value: "98%", label: "Client Satisfaction", icon: "⭐" },
              { value: "24/7", label: "Customer Support", icon: "🛡️" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-blue-200 bg-white/50 p-4 text-center backdrop-blur-sm dark:border-blue-800/50 dark:bg-black/50"
              >
                <div className="mb-2 text-2xl">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-800 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Why CITI PLUMB */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mt-8 rounded-xl bg-linear-to-r from-blue-100 to-blue-50 p-6 dark:from-blue-950/30 dark:to-blue-900/20"
          >
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="text-5xl">🏆</div>
              <div>
                <h4 className="font-bold text-blue-900 dark:text-blue-300">
                  Why Choose CITI PLUMB?
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  International quality standards, complete export
                  certifications, integrated logistics, and experienced
                  professional team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
