// src/components/maintenance-page.tsx
"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface MaintenancePageProps {
  message?: string;
  endTime?: string;
}

export default function MaintenancePage({
  message,
  endTime,
}: MaintenancePageProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    console.log("endTime received:", endTime);

    if (!endTime) {
      console.log("No endTime provided");
      return;
    }

    const targetTime = new Date(endTime).getTime();
    console.log("Target time:", new Date(targetTime));
    console.log("Current time:", new Date());

    // Fungsi untuk update timer
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      console.log("Difference:", difference, "ms");

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
        setIsExpired(false);
      } else {
        console.log("Timer expired - maintenance should end");
        setIsExpired(true);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Update timer immediately
    updateTimer();

    // Set interval untuk update timer setiap detik
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [endTime]);



  // Jika maintenance sudah expired, redirect ke home
  useEffect(() => {
    if (isExpired && endTime) {
      console.log("Maintenance expired, redirecting to home...");
      const redirectTimer = setTimeout(() => {
        window.location.href = "/";
      }, 3000);

      return () => clearTimeout(redirectTimer);
    }
  }, [isExpired, endTime]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-blue-950 dark:via-neutral-900 dark:to-blue-950">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mb-8 inline-flex items-center justify-center"
          >
            <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full" />
          </motion.div>

          <h1 className="mb-4 text-4xl font-bold text-blue-900 dark:text-blue-300 md:text-6xl lg:text-7xl">
            Server Sedang Dalam
            <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Perbaikan
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg">
            {message ||
              "Kami sedang melakukan pemeliharaan untuk meningkatkan layanan. Mohon coba kembali beberapa saat lagi."}
          </p>

          {isExpired ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div className="rounded-2xl bg-green-100 p-6 backdrop-blur-sm dark:bg-green-900/30">
                <h3 className="mb-2 text-lg font-semibold text-green-700 dark:text-green-400">
                  Maintenance Selesai!
                </h3>
                <p className="text-sm text-green-600 dark:text-green-300">
                  Mengalihkan ke halaman utama...
                </p>
              </div>
            </motion.div>
          ) : (
            endTime &&
            (timeLeft.days > 0 ||
              timeLeft.hours > 0 ||
              timeLeft.minutes > 0 ||
              timeLeft.seconds > 0) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <div className="rounded-2xl bg-white/80 p-6 backdrop-blur-sm dark:bg-neutral-800/50">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Kembali Dalam
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="min-w-20 rounded-xl bg-blue-100 p-3 dark:bg-blue-950/50">
                      <div className="text-3xl font-bold text-blue-800 dark:text-blue-300">
                        {String(timeLeft.days).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        Hari
                      </div>
                    </div>
                    <div className="min-w-20 rounded-xl bg-blue-100 p-3 dark:bg-blue-950/50">
                      <div className="text-3xl font-bold text-blue-800 dark:text-blue-300">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        Jam
                      </div>
                    </div>
                    <div className="min-w-20 rounded-xl bg-blue-100 p-3 dark:bg-blue-950/50">
                      <div className="text-3xl font-bold text-blue-800 dark:text-blue-300">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        Menit
                      </div>
                    </div>
                    <div className="min-w-20 rounded-xl bg-blue-100 p-3 dark:bg-blue-950/50">
                      <div className="text-3xl font-bold text-blue-800 dark:text-blue-300">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400">
                        Detik
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
