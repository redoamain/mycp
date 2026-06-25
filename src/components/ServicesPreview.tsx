// src/components/ServicesPreview.tsx
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const servicesData = [
  {
    id: "moulding",
    icon: "/img/icon/MOLDING.png",
    title: "Moulding",
    description:
      "Design and manufacture custom molds according to your product specifications.",
  },
  {
    id: "injection",
    icon: "/img/icon/INJECTION.png",
    title: "Injection Moulding",
    description:
      "Injection moulding process with advanced machinery to produce high-quality.",
  },
  {
    id: "plating",
    icon: "/img/icon/PLATING.png",
    title: "Plating / Electroplating",
    description:
      "Modern electroplating technology to provide high-quality chrome coating.",
  },
  {
    id: "spray",
    icon: "/img/icon/SPRAY.png",
    title: "Spray Coating",
    description:
      "Spray coating services with various color options and finishes that are durable, scratch-resistant, and aesthetic.",
  },
  {
    id: "assembly",
    icon: "/img/icon/ASSEMBLY.png",
    title: "Assembly",
    description:
      "Component assembly services with strict quality control standards.",
  },
];

export default function ServicesPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
      return () => {
        scrollElement.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
      scrollRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-neutral-900/50 overflow-hidden">
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
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
            Manufacturing{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700">
              Solutions
            </span>
          </h2>
          <p className="text-black/50 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Integrated manufacturing services from upstream to downstream for
            premium quality components
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Scroll left"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {servicesData.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="min-w-65 sm:min-w-70 md:min-w-[320px] lg:min-w-87.5 bg-white dark:bg-neutral-800 rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 shrink-0 snap-start hover:-translate-y-1 group"
              >
                {/* Icon dengan background biru gradasi bulat */}
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 shadow-lg shadow-blue-500/30 mb-3 sm:mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="h-7 w-7 sm:h-8 sm:w-8 object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 dark:text-blue-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-3 sm:mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-xs sm:text-sm hover:text-blue-800 dark:hover:text-blue-300 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  Learn More
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110"
              aria-label="Scroll right"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/services"
            className="inline-block rounded-lg bg-linear-to-r from-blue-800 to-blue-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
