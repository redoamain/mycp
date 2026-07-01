"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconSearch,
  IconFilter,
  IconX,
  IconGridDots,
  IconList,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import Loader from "../../loading";

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

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function ProductClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
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

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/admin/categories");
      if (response.ok) {
        const data = await response.json();
        setCategories(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      product.categoryId === parseInt(selectedCategory);
    const isActive = product.isActive;
    return matchesSearch && matchesCategory && isActive;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortBy("newest");
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="text-center max-w-md px-4">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-black mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-500 mb-6">{error}</p>
          <button
            onClick={fetchProducts}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative bg-linear-to-r from-blue-600 to-blue-800 py-16 md:py-24">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
              Discover our premium collection of plumbing products designed for
              quality and durability
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
            </select>

            {/* View toggle */}
            <div className="flex border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <IconGridDots className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <IconList className="w-4 h-4" />
              </button>
            </div>

            {/* Reset filters */}
            {(searchTerm ||
              selectedCategory !== "all" ||
              sortBy !== "newest") && (
              <button
                onClick={resetFilters}
                className="p-2 text-gray-500 hover:text-black transition-colors"
              >
                <IconX className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-500">
          {sortedProducts.length} products found
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              No products found
            </h3>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        ) : (
          <div
            className={`
            grid gap-4 md:gap-6
            ${
              viewMode === "grid"
                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1"
            }
          `}
          >
            {paginatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-400/30 transition-all duration-300 shadow-sm hover:shadow-xl ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`
                  relative overflow-hidden bg-gray-50
                  ${
                    viewMode === "list"
                      ? "w-full md:w-48 h-48 md:h-auto shrink-0"
                      : "aspect-square"
                  }
                `}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}

                  {/* Featured Badge */}
                  {product.isFeatured && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
                      ★ Featured
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="text-black font-semibold text-sm md:text-base line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {product.category?.name || "Uncategorized"}
                  </p>

                  {product.description && (
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2 flex-1">
                      {product.description}
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={`/products/${product.slug}`}
                      className="
      rounded-full bg-blue-500 text-white transition-colors hover:bg-blue-600
      px-2 py-1 text-[11px]
      sm:px-3 sm:py-1.5 sm:text-xs
      lg:px-4 lg:py-2 lg:text-sm
    "
                    >
                      <span className="lg:hidden">Details</span>
                      <span className="hidden lg:inline">View Details</span>
                    </Link>

                    <span
                      className={`
      rounded-full
      px-2 py-0.5 text-[10px]
      sm:px-2.5 sm:py-1 sm:text-xs
      ${
        product.isActive
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }
    `}
                    >
                      {product.isActive ? "Available" : "Unavailable"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <IconChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <IconChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
