// src/components/galery.tsx (dengan background elegan)
"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { motion } from "motion/react";

const images = [
  "/img/galery/pabrik/pabrik8.webp",
  "/img/galery/pabrik/pabrik7.webp",
  "/img/galery/pabrik/pabrik6.webp",
  "/img/galery/pabrik/pabrik2.webp",
  "/img/galery/pabrik/pabrik4.webp",
  "/img/galery/pabrik/pabrik1.webp",
  "/img/galery/pabrik/pabrik3.webp",
  "/img/galery/gudang/1.webp",
  "/img/galery/gudang/2.webp",
  "/img/galery/gudang/3.webp",
  "/img/galery/gudang/4.webp",
  "/img/galery/gudang/5.webp",
  "/img/galery/gudang/6.webp",
  "/img/galery/gudang/7.webp",
];

export default function Galery() {
  return (
    <div className="relative">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl" />

      <ParallaxScroll images={images} />
    </div>
  );
}
