"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Grid,
  LayoutGrid,
  Image as ImageIcon,
} from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const categories = [
    { id: "all", label: "All" },
    { id: "building", label: "Building" },
    { id: "departments", label: "Departments" },
    { id: "facilities", label: "Facilities" },
    { id: "team", label: "Team" },
    { id: "events", label: "Events" },
  ];

  const galleryImages: GalleryImage[] = [
    // Building / Gedung
    {
      id: 1,
      src: "/img/galery/pabrik/pabrik7.webp",
      title: "Main Building",
      category: "building",
      description: "CITI PLUMB headquarters and main office",
    },
    {
      id: 2,
      src: "/img/galery/pabrik/pabrik6.webp",
      title: "Main Building",
      category: "building",
      description: "Modern architecture with sustainable design",
    },
    {
      id: 3,
      src: "/img/galery/pabrik/pabrik4.webp",
      title: "Main Building",
      category: "building",
      description: "CITI PLUMB headquarters and main office",
    },
    {
      id: 4,
      src: "/img/galery/pabrik/pabrik2.webp",
      title: "Main Building",
      category: "building",
      description: "Modern architecture with sustainable design",
    },
    {
      id: 5,
      src: "/img/galery/pabrik/pabrik3.webp",
      title: "Main Building",
      category: "building",
      description: "Modern architecture with sustainable design",
    },

    // Departments / Departemen - QC
    {
      id: 6,
      src: "/img/galery/qc/2.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 7,
      src: "/img/galery/qc/1.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 8,
      src: "/img/galery/qc/3.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 9,
      src: "/img/galery/qc/4.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 10,
      src: "/img/galery/qc/5.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 11,
      src: "/img/galery/qc/6.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 12,
      src: "/img/galery/qc/7.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 13,
      src: "/img/galery/qc/8.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 14,
      src: "/img/galery/qc/9.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 15,
      src: "/img/galery/qc/10.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
    {
      id: 16,
      src: "/img/galery/qc/11.webp",
      title: "Quality Control Department",
      category: "departments",
      description: "Ensuring product quality standards",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentImage =
    selectedImage !== null && filteredImages[selectedImage]
      ? filteredImages[selectedImage]
      : null;

  const handlePrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 pt-12">
      {/* Hero Header */}
      <section className="w-full border-b border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Gallery
            </span>
            <h1 className="mt-2 text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-5xl">
              Company Gallery
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
            <p className="mx-auto mt-6 max-w-2xl text-neutral-600 dark:text-neutral-400">
              A glimpse into our facilities, teams, and company culture
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-md p-2 transition-all ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm dark:bg-gray-700"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`rounded-md p-2 transition-all ${
                  viewMode === "masonry"
                    ? "bg-white shadow-sm dark:bg-gray-700"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            layout
            className={`${
              viewMode === "grid"
                ? "columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4"
                : "columns-1 gap-4 sm:columns-2 md:columns-3"
            }`}
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8 }}
                  className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-image.webp";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 p-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                      <span className="mt-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs">
                        {categories.find((c) => c.id === image.category)?.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <ImageIcon className="mx-auto h-16 w-16 text-gray-300" />
              <p className="mt-4 text-gray-500">
                No images found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button
              className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              disabled={selectedImage === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              disabled={selectedImage === filteredImages.length - 1}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="max-h-[80vh] w-auto rounded-lg object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-image.webp";
                }}
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg bg-linear-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-semibold text-white">
                  {currentImage.title}
                </h3>
                <p className="text-gray-300">{currentImage.description}</p>
                <span className="mt-2 inline-block rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
                  {
                    categories.find((c) => c.id === currentImage.category)
                      ?.label
                  }
                </span>
              </div>

              {/* Counter */}
              <div className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
