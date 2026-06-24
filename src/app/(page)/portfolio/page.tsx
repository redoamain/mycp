"use client";

import { useState, useRef, WheelEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/navbar";
import { Comparer } from "@/components/compare";
import { MapEx } from "@/components/map";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import SEO from "@/components/SEO";

// Product Type
type Product = {
  id: number;
  name: string;
  category: string;
  priceUSD: number;
  priceIDR: string;
  image: string;
  features: string[];
  description: string;
  amazonLink?: string;
  homedepotLink?: string;
  ebayLink?: string;
  specs: {
    material: string;
    warranty: string;
    certification: string;
    color: string;
    pressure: string;
    flowRate?: string;
    includes?: string;
    features?: string;
    weatherResistant?: string;
    mode?: string;
  };
};

// Product Data
const products: Product[] = [
  {
    id: 1,
    name: "",
    category: "Shower",
    priceUSD: 54.99,
    priceIDR: "Rp 850.000",
    image: "/img/products/BHF3008108MB001.jpg",
    features: [
      "5 Spray Modes",
      "40% Water Saving",
      "Rust-proof SS-304",
      "5 Year Warranty",
    ],
    description:
      "Premium rain shower with water-saving technology and 5 adjustable spray modes.",
    amazonLink: "https://amazon.com/fauchet-shower-premium",
    homedepotLink: "https://homedepot.com/fauchet-shower-premium",
    ebayLink: "https://ebay.com/fauchet-shower-premium",
    specs: {
      material: "Stainless Steel SS-304",
      warranty: "5 Years",
      certification: "SNI, ISO 9001",
      color: "Chrome, Matt Black, Gold",
      pressure: "0.5 - 5 Bar",
      flowRate: "8 L/min (40% saving)",
    },
  },
  {
    id: 2,
    name: "",
    category: "Faucet",
    priceUSD: 29.99,
    priceIDR: "Rp 450.000",
    image: "/img/products/BHF3004316MB005.jpg",
    features: ["360° Rotation", "Elegant Design", "Rust-proof", "Easy Install"],
    description:
      "Modern faucet with 360-degree rotation for everyday convenience.",
    amazonLink: "https://amazon.com/fauchet-faucet-modern",
    homedepotLink: "https://homedepot.com/fauchet-faucet-modern",
    ebayLink: "https://ebay.com/fauchet-faucet-modern",
    specs: {
      material: "Stainless Steel SS-304",
      warranty: "3 Years",
      certification: "SNI",
      color: "Chrome, Matt Black",
      pressure: "0.5 - 5 Bar",
      flowRate: "6 L/min",
    },
  },
  {
    id: 3,
    name: "",
    category: "Shower Set",
    priceUSD: 79.99,
    priceIDR: "Rp 1.200.000",
    image: "/img/products/BHF38101SSSD004.jpg",
    features: [
      "Complete Set",
      "Premium Quality",
      "Rust-proof",
      "5 Year Warranty",
    ],
    description:
      "Complete shower set for hotels and resorts. Includes shower head, hand shower, hose, and bracket.",
    amazonLink: "https://amazon.com/fauchet-shower-set",
    homedepotLink: "https://homedepot.com/fauchet-shower-set",
    ebayLink: "https://ebay.com/fauchet-shower-set",
    specs: {
      material: "Stainless Steel SS-304",
      warranty: "5 Years",
      certification: "SNI, ISO 9001",
      color: "Chrome, Gold, Rose Gold",
      pressure: "0.5 - 5 Bar",
      includes: "Shower head, Hand shower, 1.5m Hose, Bracket",
    },
  },
  {
    id: 4,
    name: "",
    category: "Kitchen Faucet",
    priceUSD: 36.99,
    priceIDR: "Rp 550.000",
    image: "/img/products/MS-4224CPA.jpg",
    features: ["Dual Mode", "Strong Pressure", "Rust-proof", "360° Rotation"],
    description:
      "Kitchen faucet with dual spray modes (stream & spray). Pull-out design makes sink cleaning easy.",
    amazonLink: "https://amazon.com/fauchet-kitchen-faucet",
    homedepotLink: "https://homedepot.com/fauchet-kitchen-faucet",
    ebayLink: "https://ebay.com/fauchet-kitchen-faucet",
    specs: {
      material: "Stainless Steel SS-304",
      warranty: "5 Years",
      certification: "SNI",
      color: "Chrome, Matt Black, Brushed Nickel",
      pressure: "0.5 - 5 Bar",
      mode: "Stream & Spray",
    },
  },
  {
    id: 5,
    name: "",
    category: "Shower Panel",
    priceUSD: 169.99,
    priceIDR: "Rp 2.500.000",
    image: "/img/products/MS-4224ZMB.jpg",
    features: ["Waterfall", "LED Light", "Bluetooth", "5 Modes"],
    description:
      "Luxury shower panel with waterfall feature, LED lights, and Bluetooth speaker.",
    amazonLink: "https://amazon.com/fauchet-shower-panel",
    homedepotLink: "https://homedepot.com/fauchet-shower-panel",
    ebayLink: "https://ebay.com/fauchet-shower-panel",
    specs: {
      material: "Stainless Steel + Tempered Glass",
      warranty: "3 Years",
      certification: "ISO 9001",
      color: "Chrome, Black",
      pressure: "0.5 - 5 Bar",
      features: "Waterfall, LED, Bluetooth, 5 Mode shower",
    },
  },
  {
    id: 6,
    name: "",
    category: "Outdoor Faucet",
    priceUSD: 22.99,
    priceIDR: "Rp 350.000",
    image: "/img/products/MS-4224ZSS.jpg",
    features: ["Anti UV", "Weather Resistant", "Rust-proof", "Anti Crack"],
    description:
      "Special outdoor faucet with weather-resistant and anti-UV material. Perfect for gardens, yards, and outdoor areas.",
    amazonLink: "https://amazon.com/fauchet-outdoor-faucet",
    homedepotLink: "https://homedepot.com/fauchet-outdoor-faucet",
    ebayLink: "https://ebay.com/fauchet-outdoor-faucet",
    specs: {
      material: "Brass + Powder Coating",
      warranty: "2 Years",
      certification: "SNI",
      color: "Matt Black, Dark Green",
      pressure: "0.5 - 5 Bar",
      weatherResistant: "Yes",
    },
  },
  {
    id: 7,
    name: "",
    category: "Smart Faucet",
    priceUSD: 89.99,
    priceIDR: "Rp 1.350.000",
    image: "/img/products/MS-8237CP.jpg",
    features: ["Touch Sensor", "LED Indicator", "Smart Control", "Rust-proof"],
    description:
      "Smart faucet with touch sensor and LED indicator. Easily control temperature and water flow.",
    amazonLink: "https://amazon.com/fauchet-smart-faucet",
    homedepotLink: "https://homedepot.com/fauchet-smart-faucet",
    ebayLink: "https://ebay.com/fauchet-smart-faucet",
    specs: {
      material: "Stainless Steel SS-304",
      warranty: "3 Years",
      certification: "SNI, CE",
      color: "Chrome, Matt Black",
      pressure: "0.5 - 5 Bar",
      flowRate: "5 L/min",
    },
  },
  {
    id: 8,
    name: "",
    category: "Shower Set",
    priceUSD: 99.99,
    priceIDR: "Rp 1.500.000",
    image: "/img/products/BHF38101MBSD003.jpg",
    features: ["Rain + Hand Shower", "Brass Body", "Rust-proof", "Easy Clean"],
    description:
      "Combination of rain shower and hand shower with quality brass material.",
    amazonLink: "https://amazon.com/fauchet-rain-combo",
    homedepotLink: "https://homedepot.com/fauchet-rain-combo",
    ebayLink: "https://ebay.com/fauchet-rain-combo",
    specs: {
      material: "Brass + Chrome Plated",
      warranty: "5 Years",
      certification: "SNI",
      color: "Chrome",
      pressure: "0.5 - 5 Bar",
      flowRate: "9 L/min",
    },
  },
  {
    id: 9,
    name: "",
    category: "Kitchen Faucet",
    priceUSD: 129.99,
    priceIDR: "Rp 1.950.000",
    image: "/img/products/BHF3004316SS006.jpg",
    features: ["High Arc", "Spring Design", "Commercial Grade", "Dual Mode"],
    description:
      "Commercial kitchen faucet with spring design and high arc, perfect for restaurants.",
    amazonLink: "https://amazon.com/fauchet-commercial-faucet",
    homedepotLink: "https://homedepot.com/fauchet-commercial-faucet",
    ebayLink: "https://ebay.com/fauchet-commercial-faucet",
    specs: {
      material: "Stainless Steel",
      warranty: "5 Years",
      certification: "NSF, SNI",
      color: "Brushed Nickel",
      pressure: "0.5 - 5 Bar",
      mode: "Stream & Spray",
    },
  },
  {
    id: 10,
    name: "",
    category: "Shower",
    priceUSD: 149.99,
    priceIDR: "Rp 2.250.000",
    image: "/img/products/BHF3008108SS002.jpg",
    features: [
      "Thermostatic Control",
      "Anti Scald",
      "High Pressure",
      "LED Display",
    ],
    description:
      "Shower with thermostatic control keeps water temperature stable and safe.",
    amazonLink: "https://amazon.com/fauchet-thermostatic-shower",
    homedepotLink: "https://homedepot.com/fauchet-thermostatic-shower",
    ebayLink: "https://ebay.com/fauchet-thermostatic-shower",
    specs: {
      material: "Stainless Steel + Brass",
      warranty: "5 Years",
      certification: "CE, SNI",
      color: "Chrome, Black",
      pressure: "0.5 - 5 Bar",
      flowRate: "10 L/min",
    },
  },
];

export default function PortfolioPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "unset";
  };

  // Zoom function with pointer (mouse wheel / scroll)
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.min(Math.max(zoomLevel + delta, 1), 4);
    setZoomLevel(newZoom);
  };

  // Zoom In function
  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 0.25, 4));
  };

  // Zoom Out function
  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 0.25, 1));
  };

  // Reset Zoom
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  // Drag for zoomed image
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Limit movement
      const maxX = (zoomLevel - 1) * 200;
      const maxY = (zoomLevel - 1) * 200;

      setPosition({
        x: Math.min(Math.max(newX, -maxX), maxX),
        y: Math.min(Math.max(newY, -maxY), maxY),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col items-center">
      <SEO
        title="fauchet Product Collection - Premium Faucets & Showers | Starting $22.99"
        description="View the complete collection of fauchet products: premium rain showers, modern faucets, hotel shower sets, and bathroom accessories. Available on Amazon, HomeDepot, and eBay."
        keywords="faucet collection, premium shower, fauchet products, faucet collection, stainless faucet, hotel shower"
        image="https://citiplumb.id/images/MS-4224CPA.jpg"
        url="https://citiplumb.id/portfolio"
        type="website"
      />
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-blue-900/20 to-blue-300/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="w-full py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Featured Products
            </span>
            <h1 className="mt-2 text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-5xl lg:text-6xl">
              Best Collection
              <br />
              <span className="bg-linear-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                fauchet
              </span>
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-blue-400" />
            <p className="mx-auto mt-6 max-w-2xl text-neutral-600 dark:text-neutral-400">
              Discover the premium collection of fauchet showers and faucets for
              your comfort
            </p>
            {/* <div className="mt-4 flex justify-center gap-4">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                🛒 Amazon
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                🏪 HomeDepot
              </span>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                📦 eBay
              </span>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="w-full py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300">
              All Products ({products.length})
            </h2>
            <p className="text-sm text-neutral-500">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (idx % productsPerPage) * 0.1,
                }}
                viewport={{ once: true }}
                onClick={() => openModal(product)}
                className="cursor-pointer"
              >
                <DirectionAwareHover imageUrl={product.image}>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">
                      {product.name}
                    </p>
                    {/* <p className="text-sm text-blue-200">{product.category}</p>
                    <p className="mt-1 text-base font-semibold text-yellow-300">
                      ${product.priceUSD}
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <span key={i} className="text-xs text-white/80">
                          • {feature}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </DirectionAwareHover>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  currentPage === 1
                    ? "cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800"
                }`}
              >
                ← Previous
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`h-9 w-9 rounded-lg text-sm font-medium transition-all ${
                        currentPage === page
                          ? "bg-linear-to-r from-blue-800 to-blue-500 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                  currentPage === totalPages
                    ? "cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-800"
                }`}
              >
                Next →
              </button>
            </nav>
          </div>

          <p className="mt-6 text-center text-xs text-neutral-500">
            Showing {indexOfFirstProduct + 1} -{" "}
            {Math.min(indexOfLastProduct, products.length)} of {products.length}{" "}
            products
          </p>
        </div>
      </section>

      {/* Modal - Image with Zoom (Pointer + Mouse Wheel) */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -right-12 -top-12 z-10 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:scale-110"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Zoom Control Buttons */}
              <div className="absolute -left-16 top-1/2 flex -translate-y-1/2 flex-col gap-3">
                <button
                  onClick={handleZoomIn}
                  className="rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:scale-110"
                  title="Zoom In (Scroll up)"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:scale-110"
                  title="Zoom Out (Scroll down)"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                {zoomLevel > 1 && (
                  <button
                    onClick={handleResetZoom}
                    className="rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70 hover:scale-110"
                    title="Reset Zoom"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Zoom Info */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
                {Math.round(zoomLevel * 100)}% • Scroll mouse to zoom
              </div>

              {/* Product Name */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/50 px-4 py-1 text-sm font-medium text-white">
                {selectedProduct.name}
              </div>

              {/* Image Container with Zoom & Drag */}
              <div
                ref={containerRef}
                className="overflow-hidden rounded-xl"
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{
                  cursor: zoomLevel > 1 ? "grab" : "default",
                  maxWidth: "85vw",
                  maxHeight: "85vh",
                }}
              >
                <div
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
                    transition: isDragging ? "none" : "transform 0.1s ease-out",
                    transformOrigin: "center center",
                  }}
                >
                  <img
                    ref={imageRef}
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="max-h-[85vh] max-w-[85vw] rounded-xl object-contain select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
