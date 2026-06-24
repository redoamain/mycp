// src/app/admin/layout.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrandTabler,
  IconSettings,
  IconLogout,
  IconTools,
  IconCategory,
  IconPackage,
  IconBriefcase, // Tambahkan ini
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("Admin");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Sembunyikan navbar dan footer saat di halaman admin
    const navbar = document.querySelector("nav");
    const footer = document.querySelector("footer");

    if (navbar) {
      navbar.style.display = "none";
    }
    if (footer) {
      footer.style.display = "none";
    }

    // Cek login status
    const isLoggedIn = localStorage.getItem("admin_logged_in");

    if (!isLoggedIn || isLoggedIn !== "true") {
      router.push("/login");
      setIsCheckingAuth(false);
      return;
    }

    // Jika sudah login, ambil username
    const storedUsername = localStorage.getItem("admin_username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    setIsCheckingAuth(false);

    return () => {
      // Tampilkan kembali navbar dan footer
      const navbar = document.querySelector("nav");
      const footer = document.querySelector("footer");

      if (navbar) {
        navbar.style.display = "flex";
      }
      if (footer) {
        footer.style.display = "block";
      }
    };
  }, [router]);

  // Jika sedang cek auth, tampilkan loading
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  // Tentukan active page berdasarkan pathname
  const getActivePage = () => {
    if (pathname === "/admin") return "dashboard";
    if (pathname === "/admin/products") return "products";
    if (pathname === "/admin/categories") return "categories";
    if (pathname === "/admin/maintenance") return "maintenance";
    if (pathname === "/admin/settings") return "settings";
    if (pathname === "/admin/career") return "career"; // Tambahkan ini
    return "dashboard";
  };

  const activePage = getActivePage();

  const handleLogout = async () => {
    if (!confirm("Are you sure you want to logout?")) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        console.error("Logout API failed:", response.status);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.clear();

      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      setIsLoading(false);
      router.push("/login");
      router.refresh();
    }
  };

  // Menu Links - Tambahkan Career
  const links = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      page: "dashboard",
    },
    {
      label: "Products",
      href: "/admin/products",
      icon: (
        <IconPackage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      page: "products",
    },
    {
      label: "Categories",
      href: "/admin/categories",
      icon: (
        <IconCategory className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      page: "categories",
    },
    {
      label: "Career", // Tambahkan menu Career
      href: "/admin/career",
      icon: (
        <IconBriefcase className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      page: "career",
    },
    {
      label: "Maintenance",
      href: "/admin/maintenance",
      icon: (
        <IconTools className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      page: "maintenance",
    },
    {
      label: "Settings",
      href: "/admin/settings",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      page: "settings",
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      page: "logout",
    },
  ];

  const handleNavigation = (link: any) => {
    if (link.page === "logout") {
      handleLogout();
    } else if (link.href && link.href !== "#") {
      router.push(link.href);
    }
  };

  const getPageTitle = () => {
    const titles = {
      dashboard: "Dashboard",
      products: "Product Management",
      categories: "Category Management",
      career: "Career Management", // Tambahkan ini
      maintenance: "Maintenance Settings",
      settings: "Settings",
    };
    return titles[activePage as keyof typeof titles] || "Dashboard";
  };

  const getPageDescription = () => {
    const descriptions = {
      dashboard: "Welcome to citiplumb admin panel",
      products: "Manage product data here",
      categories: "Manage product categories",
      career: "Manage job vacancies and applications", // Tambahkan ini
      maintenance: "Manage website maintenance mode",
      settings: "Website settings",
    };
    return descriptions[activePage as keyof typeof descriptions] || "";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleNavigation(link)}
                    className={`cursor-pointer transition-colors ${
                      activePage === link.page
                        ? "bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                        : "hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                    } ${link.page === "logout" ? "hover:bg-red-50 dark:hover:bg-red-900/20" : ""}`}
                  >
                    <SidebarLink link={link} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: username,
                  href: "#",
                  icon: (
                    <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-xs shadow-md">
                      {username?.charAt(0).toUpperCase() || "A"}
                    </div>
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                {getPageTitle()}
              </h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                {getPageDescription()}
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-4 md:p-6">
              {children}
            </div>
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="rounded-lg bg-white dark:bg-neutral-800 p-6 shadow-xl">
            <div className="flex flex-col items-center gap-4">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Logging out...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Logo Components
const Logo = () => {
  return (
    <Link
      href="/admin"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black dark:text-white"
    >
      <div className="relative h-8 w-8 md:h-10 md:w-10 shrink-0 overflow-hidden rounded-lg">
        <Image
          src="/logo.png"
          alt="citiplumb"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 32px, 40px"
        />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white text-sm md:text-base"
      >
        citiplumb Admin
      </motion.span>
    </Link>
  );
};

const LogoIcon = () => {
  return (
    <Link
      href="/admin"
      className="relative z-20 flex items-center justify-center py-1"
    >
      <div className="relative h-8 w-8 md:h-10 md:w-10 shrink-0 overflow-hidden rounded-lg">
        <Image
          src="/logo.png"
          alt="citiplumb"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 32px, 40px"
        />
      </div>
    </Link>
  );
};
