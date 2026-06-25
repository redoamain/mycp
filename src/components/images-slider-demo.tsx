// src/components/ImagesSliderDemo.tsx
"use client";
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  categoryId: number | null;
  category?: {
    id: number;
    name: string;
  };
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function ImagesSliderDemo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Hero slider images
  const heroImages = [
    "/img/header/4.jpg",
    "/img/header/5.jpg",
    "/img/header/6.jpg",
  ];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  // Filter active products
  const activeProducts = products.filter((p) => p.isActive);

  // Get TOP 4 BEST products (featured first, then newest)
  const bestProducts = activeProducts
    .sort((a, b) => {
      // Featured products first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      // Then by newest
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .slice(0, 4); // Hanya ambil 4 produk terbaik

  return (
    <div className="relative min-h-screen bg-white">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section with ImagesSlider */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <ImagesSlider className="h-full" images={heroImages}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="z-50 flex flex-col justify-center items-center text-center px-4"
          >
            {/* Optional: Tambahkan teks hero di sini */}
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Best Products Section - Only 4 Products */}
      <section
        id="products"
        className="relative z-10 -mt-20 sm:-mt-28 md:-mt-40 lg:-mt-56 px-3 sm:px-4 md:px-8 lg:px-16 pb-12 sm:pb-16 md:pb-20"
      >
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
              <span className="text-blue-400 text-xs sm:text-sm tracking-wider font-medium">
                BEST PRODUCTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
              Our{" "}
              <span className="bg-clip-text  text-white">
                Top Collections
              </span>
            </h2>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
              Discover our premium selection of the finest plumbing products
            </p>
          </motion.div>

          {/* Products Grid - 4 Products */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          ) : bestProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-black/50">No products available.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {bestProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden border border-black/5 hover:border-blue-400/30 transition-all duration-500 shadow-lg hover:shadow-2xl"
                  style={{
                    boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority={index < 2}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-[10px] sm:text-xs">No Image</span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black/70 backdrop-blur-md text-white text-[8px] sm:text-[10px] md:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10">
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-pulse" />
                        <span className="truncate max-w-10 sm:max-w-15">
                          {product.category?.name || "Uncategorized"}
                        </span>
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {product.isFeatured && (
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-white text-[8px] sm:text-[10px] md:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20 shadow-lg shadow-yellow-500/30">
                        ⭐ Best
                      </div>
                    )}

                    {/* Rank Badge */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-blue-600/90 backdrop-blur-md text-white text-[8px] sm:text-[10px] md:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/20">
                      #{index + 1}
                    </div>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Product Info */}
                  <div className="p-2 sm:p-3 md:p-4 lg:p-5 relative z-10">
                    <h3 className="text-black font-semibold text-[10px] sm:text-xs md:text-sm truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-0.5 sm:mt-1">
                      <span className="text-[8px] sm:text-[10px] md:text-xs text-black/50 truncate max-w-12.5 sm:max-w-20">
                        {product.category?.name || "No Category"}
                      </span>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full" />
                        <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400/50 rounded-full" />
                        <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400/20 rounded-full" />
                      </div>
                    </div>

                    {/* Detail Button */}
                    <Link href={`/products/${product.slug}`}>
                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="mt-1.5 sm:mt-2 md:mt-3 w-full bg-blue-500/10 hover:bg-blue-500/20 text-black/70 hover:text-black text-[8px] sm:text-[10px] md:text-xs py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm font-medium"
                      >
                        View Details →
                      </motion.button>
                    </Link>
                  </div>

                  {/* Decorative Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          )}

     
        </div>
      </section>

      {/* Hero Banner - Our Products */}
      <div className="relative bg-linear-to-r from-blue-600 to-blue-800 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/50 to-blue-800/50" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Premium Quality Since 2015
            </h2>
            <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Trusted by thousands of customers for our durable, innovative, and
              stylish plumbing solutions
            </p>
            <Link href="/products">
              <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-blue-700 rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All Products →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="relative z-10 h-12 sm:h-16 md:h-20 bg-linear-to-t from-white to-transparent" />
    </div>
  );
}
