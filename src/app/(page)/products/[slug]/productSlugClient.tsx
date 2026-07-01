// src/app/products/[slug]/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  IconArrowLeft,
  IconCheck,
  IconX,
  IconZoomIn,
  IconZoomOut,
  IconArrowsMaximize,
} from "@tabler/icons-react";

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

export default function ProductDetailClient() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Zoom states
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/products/${slug}`);

      if (response.status === 404) {
        setError("Product not found");
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);
      setSelectedImage(data.image || "");

      if (data.categoryId) {
        fetchRelatedProducts(data.categoryId, data.id);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async (
    categoryId: number,
    productId: number,
  ) => {
    try {
      const response = await fetch(`/api/products?categoryId=${categoryId}`);
      if (response.ok) {
        const data = await response.json();
        const filtered = data
          .filter((p: Product) => p.id !== productId && p.isActive)
          .slice(0, 4);
        setRelatedProducts(filtered);
      }
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  // WordPress-style zoom on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageContainerRef.current || !imageRef.current) return;

    const container = imageContainerRef.current;
    const rect = container.getBoundingClientRect();

    // Calculate mouse position percentage (0-100)
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Clamp values
    const clampedX = Math.min(Math.max(x, 0), 100);
    const clampedY = Math.min(Math.max(y, 0), 100);

    setPosition({ x: clampedX, y: clampedY });

    // Apply transform to image
    if (imageRef.current) {
      const zoomFactor = 2.5;
      const translateX = (clampedX / 100) * (100 - 100 / zoomFactor);
      const translateY = (clampedY / 100) * (100 - 100 / zoomFactor);

      imageRef.current.style.transform = `scale(${zoomFactor}) translate(-${translateX}%, -${translateY}%)`;
    }
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1) translate(0, 0)";
    }
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    if (isZoomed && imageRef.current) {
      imageRef.current.style.transform = "scale(1) translate(0, 0)";
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-black mb-2">
            Product Not Found
          </h1>
          <p className="text-gray-500 mb-6">
            {error ||
              "The product you're looking for is not available or has been removed."}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            <IconArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [product.image, ...(product.images || [])].filter(Boolean);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/products"
            className="hover:text-black transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-black font-medium truncate">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Images with WordPress-style Zoom */}
          <div className="space-y-4">
            {/* Main Image Container */}
            <div
              ref={imageContainerRef}
              className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 group"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                cursor: "zoom-in",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {selectedImage ? (
                <>
                  {/* Image with Zoom Effect */}
                  <div
                    ref={imageRef}
                    className="w-full h-full transition-transform duration-200 ease-out"
                    style={{
                      transform: isZoomed
                        ? `scale(2.5) translate(-${position.x / 2.5}%, -${position.y / 2.5}%)`
                        : "scale(1)",
                      transformOrigin: "center",
                    }}
                  >
                    <Image
                      src={selectedImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Zoom Indicator - WordPress style */}
                  {isZoomed && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full flex items-center gap-2">
                        <IconZoomIn className="w-4 h-4" />
                        <span>Zoom: 250%</span>
                      </div>
                    </div>
                  )}

                  {/* Zoom Icon Overlay - WordPress style */}
                  {!isZoomed && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/60 backdrop-blur-sm text-white p-4 rounded-full shadow-2xl">
                        <IconZoomIn className="w-8 h-8" />
                      </div>
                    </div>
                  )}

                  {/* Expand Button */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:scale-110 transition-all z-10 border border-gray-200"
                  >
                    <IconArrowsMaximize className="w-5 h-5 text-gray-700" />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(img);
                      setIsZoomed(false);
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? "border-blue-500 shadow-lg shadow-blue-500/20"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 10vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right - Info */}
          <div className="space-y-6">
            {product.category && (
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                {product.category.name}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-black">
              {product.name}
            </h1>

            {product.isFeatured && (
              <div className="flex items-center gap-2 text-yellow-600 bg-yellow-50 px-3 py-1.5 rounded-full w-fit">
                <span className="text-sm font-medium">⭐ Featured Product</span>
              </div>
            )}

            {product.description && (
              <div className="prose prose-sm max-w-none">
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {product.description}
                </p>
              </div>
            )}

            <div className="border-t border-gray-100 pt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Status:</span>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                    product.isActive
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {product.isActive ? (
                    <>
                      <IconCheck className="w-3 h-3" />
                      Available
                    </>
                  ) : (
                    <>
                      <IconX className="w-3 h-3" />
                      Unavailable
                    </>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>SKU:</span>
                <span className="font-mono text-black">{product.id}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Category:</span>
                <span>{product.category?.name || "No Category"}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
                  Contact Us
                </button>
              </Link>
              <Link href="/products">
                <button className="px-8 py-3 border border-gray-300 text-black rounded-full font-medium hover:bg-gray-50 transition-colors">
                  View Other Products
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold text-black mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((related) => (
                <Link key={related.id} href={`/products/${related.slug}`}>
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-blue-400/30 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                      {related.image ? (
                        <Image
                          src={related.image}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          No Image
                        </div>
                      )}
                    </div>
                    <div className="p-3 md:p-4">
                      <h3 className="text-black font-semibold text-sm truncate">
                        {related.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {related.category?.name || "No Category"}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal - WordPress style */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-14 right-0 text-white hover:text-gray-300 transition-colors p-2 flex items-center gap-2"
              >
                <IconX className="w-6 h-6" />
                <span className="text-sm">Close</span>
              </button>

              {/* Image Counter */}
              <div className="absolute -top-14 left-0 text-white/70 text-sm">
                {allImages.indexOf(selectedImage) + 1} / {allImages.length}
              </div>

              {/* Main Image */}
              <div className="relative w-full h-[80vh] bg-black rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Thumbnails in Lightbox */}
              {allImages.length > 1 && (
                <div className="flex justify-center gap-3 mt-6">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === img
                          ? "border-white shadow-lg shadow-white/20"
                          : "border-white/30 hover:border-white/60"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
