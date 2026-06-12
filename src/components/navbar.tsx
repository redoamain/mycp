"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Beranda", href: "/", active: false },
    { name: "Tentang", href: "/about", active: false },
    { name: "Layanan", href: "/services", active: false },
    { name: "Portofolio", href: "/portfolio", active: false },
    { name: "Karier", href:"/karier", active: false},
    { name: "Kontak", href: "/contact", active: false },
  ];

  // Set active berdasarkan pathname saat ini
  const getActiveStatus = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-blue-200 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-blue-800/50 dark:bg-neutral-900/80 md:px-8 lg:px-16">
        {/* Logo Section - Kiri */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          {/* <div className="size-7 rounded-full bg-linear-to-br from-blue-900 to-blue-400 md:size-8" /> */}
          <img src="/logo.png" alt="logo citiplumb" className="h-8" />
          <h1 className="text-lg font-bold md:text-2xl">citiplumb</h1>
        </Link>

        {/* Desktop Navigation Links - Tengah (Simetris) */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center gap-6 md:flex lg:gap-10">
          {menuItems.map((item) => {
            const isActive = getActiveStatus(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-neutral-700 dark:text-neutral-300"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-blue-700 to-blue-400"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Section - Kosong untuk menjaga simetri */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button - Hanya tampil di mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-blue-50 md:hidden dark:text-neutral-300 dark:hover:bg-blue-950/30"
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

          {/* Placeholder untuk menjaga simetri di desktop (invisible) */}
          <div className="hidden w-32 md:block"></div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-14.25 z-40 bg-white dark:bg-neutral-900 md:hidden">
          <div className="flex flex-col space-y-1 p-4">
            {menuItems.map((item) => {
              const isActive = getActiveStatus(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-linear-to-r from-blue-50 to-blue-100 text-blue-700 dark:from-blue-950/50 dark:to-blue-900/50 dark:text-blue-400"
                      : "text-neutral-700 hover:bg-blue-50 dark:text-neutral-300 dark:hover:bg-blue-950/30"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-14.25 md:h-16" />
    </>
  );
};

export default Navbar;
