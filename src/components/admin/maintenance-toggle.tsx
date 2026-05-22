// src/components/admin/maintenance-toggle.tsx
"use client";

import { useState, useEffect } from "react";

export default function MaintenanceToggle() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [message, setMessage] = useState("");
  const [endTime, setEndTime] = useState("");
  const [endTimeDate, setEndTimeDate] = useState("");
  const [endTimeTime, setEndTimeTime] = useState("23:59");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/maintenance");
      const data = await res.json();
      setIsEnabled(data.enabled || false);
      setMessage(data.message || "");

      // Parse endTime dengan benar
      if (data.endTime) {
        const date = new Date(data.endTime);
        setEndTimeDate(date.toISOString().split("T")[0]);
        setEndTimeTime(date.toTimeString().slice(0, 5));
        setEndTime(data.endTime);
      } else {
        setEndTimeDate("");
        setEndTimeTime("23:59");
        setEndTime("");
      }
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  const toggleMaintenance = async () => {
    setLoading(true);
    try {
      // Gabungkan tanggal dan waktu
      let fullEndTime = "";
      if (endTimeDate) {
        fullEndTime = `${endTimeDate}T${endTimeTime}:00`;
      }

      const res = await fetch("/api/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enabled: !isEnabled,
          message: message,
          endTime: fullEndTime,
        }),
      });

      if (res.ok) {
        const newStatus = !isEnabled;
        setIsEnabled(newStatus);
        alert(`Maintenance mode ${newStatus ? "diaktifkan" : "dinonaktifkan"}`);
        window.location.href = newStatus ? "/maintenance" : "/";
      } else {
        alert("Gagal mengubah status maintenance");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    setLoading(true);
    try {
      // Gabungkan tanggal dan waktu
      let fullEndTime = "";
      if (endTimeDate) {
        fullEndTime = `${endTimeDate}T${endTimeTime}:00`;
      }

      const res = await fetch("/api/maintenance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enabled: isEnabled,
          message: message,
          endTime: fullEndTime,
        }),
      });

      if (res.ok) {
        setEndTime(fullEndTime);
        alert("Pengaturan berhasil disimpan");
      } else {
        alert("Gagal menyimpan pengaturan");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg border border-blue-200 bg-white p-6 shadow-lg dark:border-blue-800 dark:bg-neutral-800">
      <h3 className="mb-4 text-xl font-bold text-blue-900 dark:text-blue-300">
        🔧 Maintenance Mode
      </h3>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          Status Maintenance
        </span>
        <button
          onClick={toggleMaintenance}
          disabled={loading}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            isEnabled ? "bg-red-600" : "bg-gray-300 dark:bg-gray-600"
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isEnabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm text-neutral-600 dark:text-neutral-400">
          Pesan Maintenance
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-blue-200 p-2 dark:border-blue-800 dark:bg-neutral-900"
          rows={3}
          placeholder="Masukkan pesan maintenance..."
          disabled={loading}
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm text-neutral-600 dark:text-neutral-400">
          Tanggal Selesai
        </label>
        <input
          type="date"
          value={endTimeDate}
          onChange={(e) => setEndTimeDate(e.target.value)}
          className="w-full rounded-lg border border-blue-200 p-2 dark:border-blue-800 dark:bg-neutral-900"
          disabled={loading}
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm text-neutral-600 dark:text-neutral-400">
          Waktu Selesai
        </label>
        <input
          type="time"
          value={endTimeTime}
          onChange={(e) => setEndTimeTime(e.target.value)}
          className="w-full rounded-lg border border-blue-200 p-2 dark:border-blue-800 dark:bg-neutral-900"
          disabled={loading}
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={saveSettings}
          disabled={loading}
          className="flex-1 rounded-lg bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600 disabled:opacity-50"
        >
          Simpan Pengaturan
        </button>
      </div>

      {endTime && (
        <div className="mt-3 text-xs text-neutral-500">
          Maintenance akan berakhir: {new Date(endTime).toLocaleString()}
        </div>
      )}

      <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          Status:{" "}
          {isEnabled ? (
            <span className="font-semibold text-red-600 dark:text-red-400">
              🔴 Maintenance AKTIF
            </span>
          ) : (
            <span className="font-semibold text-green-600 dark:text-green-400">
              🟢 Maintenance NONAKTIF
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
