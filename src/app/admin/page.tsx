// src/app/admin/page.tsx
"use client";

import React, { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ products: 0, categories: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        fetch("/api/admin/products"),
        fetch("/api/admin/categories"),
      ]);

      const products = await productsRes.json();
      const categories = await categoriesRes.json();

      setStats({
        products: Array.isArray(products) ? products.length : 0,
        categories: Array.isArray(categories) ? categories.length : 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
        Welcome to Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-sm text-neutral-600 dark:text-neutral-400">
            Total Products
          </h3>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {stats.products}
          </p>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-sm text-neutral-600 dark:text-neutral-400">
            Total Categories
          </h3>
          <p className="text-2xl font-bold text-green-600 dark:text-green-400">
            {stats.categories}
          </p>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <h3 className="text-sm text-neutral-600 dark:text-neutral-400">
            Status
          </h3>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            Online
          </p>
        </div>
      </div>
    </div>
  );
}
