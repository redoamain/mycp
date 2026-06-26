"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Career", href: "/career" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contacts", href: "/contact" },
  ];

  // Set active based on current pathname
  const getActiveStatus = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if on home page
  useEffect(() => {
    setIsHomePage(pathname === "/");
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Determine navbar style
  const getNavbarStyle = () => {
    if (isScrolled || !isHomePage) {
      return "bg-white shadow-lg shadow-black/10 border-b border-black/10";
    }
    return "bg-transparent";
  };

  const getTextColor = () => {
    if (isScrolled || !isHomePage) {
      return "text-black";
    }
    return "text-white";
  };

  const getLinkColor = (isActive: boolean) => {
    if (isScrolled || !isHomePage) {
      return isActive ? "text-blue-600" : "text-black/70 hover:text-black";
    }
    return isActive ? "text-white" : "text-white/80 hover:text-white";
  };

  const getActiveLineColor = () => {
    if (isScrolled || !isHomePage) {
      return "bg-blue-600";
    }
    return "bg-white";
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 py-3 md:px-8 lg:px-16 transition-all duration-300 ${getNavbarStyle()}`}
      >
        {/* Logo Section - Left */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80 z-50"
        >
          <img src="/logo.png" alt="logo CITI PLUMB" className="h-8 md:h-10" />
          <h1
            className={`text-lg font-bold md:text-2xl transition-colors ${getTextColor()}`}
          >
            PT. CITI PLUMB
          </h1>
        </Link>

        {/* Desktop Navigation Links - Right side */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {menuItems.map((item) => {
            const isActive = getActiveStatus(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${getLinkColor(
                  isActive,
                )}`}
              >
                {item.name}
                {isActive && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${getActiveLineColor()}`}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button - Right side */}
        <div className="flex items-center gap-3 z-50 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`inline-flex items-center justify-center rounded-lg p-2 transition-all duration-300 ${
              isScrolled || !isHomePage
                ? "text-black hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer - Left Side */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-40 w-70 sm:w-[320px] bg-white shadow-2xl"
            >
              {/* Header Drawer - Hanya tombol close, tanpa logo duplikat */}
              <div className="flex items-center justify-end border-b border-black/10 p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-black/50 hover:bg-black/5 hover:text-black transition-colors"
                >
                  <svg
                    className="size-5"
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
              </div>

              {/* Menu Items Drawer */}
              <div className="flex flex-col p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
                {menuItems.map((item) => {
                  const isActive = getActiveStatus(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-linear-to-r from-blue-50 to-blue-100 text-blue-600"
                          : "text-black/70 hover:bg-black/5 hover:text-black"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="flex items-center gap-3">
                        {isActive && (
                          <span className="w-1 h-6 bg-blue-600 rounded-full" />
                        )}
                        {item.name}
                      </span>
                      {isActive && (
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600">
                          <svg
                            className="size-4"
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
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
