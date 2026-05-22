// src/app/admin/page.tsx
"use client";

import { useState, useEffect } from "react";
import MaintenanceToggle from "@/components/admin/maintenance-toggle";
import LoginForm from "@/components/admin/login-form";
import Link from "next/link";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch("/api/session", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && data.isLoggedIn) {
        // Session masih valid
        setIsAuthenticated(true);
        // Set localStorage untuk keperluan UI
        localStorage.setItem("admin_logged_in", "true");
        localStorage.setItem("admin_username", data.username);
      } else {
        // Session tidak valid, bersihkan localStorage
        localStorage.removeItem("admin_logged_in");
        localStorage.removeItem("admin_username");
        localStorage.removeItem("admin_token");
      }
    } catch (error) {
      console.error("Session check failed:", error);
      localStorage.removeItem("admin_logged_in");
      localStorage.removeItem("admin_username");
      localStorage.removeItem("admin_token");
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      // Panggil API logout untuk menghapus cookie
      await fetch("/api/logout", {
        method: "POST",
      });

      // Bersihkan localStorage
      localStorage.removeItem("admin_logged_in");
      localStorage.removeItem("admin_username");
      localStorage.removeItem("admin_token");

      // Update state
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-gray-600">Memeriksa session...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 dark:bg-neutral-900">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Kembali ke Beranda
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-700 text-sm font-medium"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-300">
            Admin Panel
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Kelola pengaturan website
          </p>
        </div>

        <MaintenanceToggle />
      </div>
    </div>
  );
}
