// src/components/admin/ImageUpload.tsx
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { IconUpload, IconX, IconLoader2, IconCheck } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

interface ImageUploadProps {
  onImageUploaded: (url: string) => void;
  onImageRemoved?: () => void;
  currentImage?: string;
  label?: string;
  className?: string;
  compact?: boolean;
}

export default function ImageUpload({
  onImageUploaded,
  onImageRemoved,
  currentImage,
  label = "Upload Gambar",
  className = "",
  compact = false,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (file: File) => {
    // Validasi file
    if (!file.type.startsWith("image/")) {
      setError("File harus berupa gambar");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Ukuran file maksimal 5MB");
      return;
    }

    setError(null);
    setIsUploading(true);

    // Buat preview sementara
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload ke server
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const responseText = await response.text();

      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("Response tidak valid:", responseText);
        throw new Error(
          "Server merespons dengan format yang tidak valid. Silakan coba lagi.",
        );
      }

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      onImageUploaded(data.url);
      setPreview(data.url);
    } catch (error) {
      console.error("Upload error:", error);
      setError(error instanceof Error ? error.message : "Upload gagal");
      setPreview(currentImage || null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleClick = () => {
    if (!isUploading) {
      fileInputRef.current?.click();
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
    e.target.value = "";
  };

  const removeImage = () => {
    setPreview(null);
    onImageUploaded("");
    if (onImageRemoved) {
      onImageRemoved();
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setError(null);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
          {label}
        </label>
      )}

      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          relative w-full 
          rounded-2xl 
          border-2 
          border-dashed 
          transition-all 
          duration-300 
          cursor-pointer 
          overflow-hidden
          bg-white dark:bg-neutral-800/50
          ${
            isDragging
              ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 shadow-lg shadow-blue-500/20"
              : preview
                ? "border-emerald-400 dark:border-emerald-500"
                : "border-neutral-200 dark:border-neutral-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-blue-950/20"
          }
          ${isUploading ? "opacity-60 pointer-events-none" : ""}
          ${
            compact
              ? "aspect-square min-h-20 max-h-30"
              : "aspect-4/3 sm:aspect-square md:aspect-4/3 min-h-37.5 max-h-70"
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
        />

        <AnimatePresence mode="wait">
          {isUploading ? (
            <motion.div
              key="uploading"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-2"
            >
              <IconLoader2 className="w-6 h-6 text-blue-500 animate-spin" />
              <p className="mt-1 text-[10px] font-medium text-neutral-600 dark:text-neutral-400">
                Uploading...
              </p>
            </motion.div>
          ) : preview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 group"
            >
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* Actions - Selalu Terlihat */}
              <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between gap-1">
                <span className="text-white text-[10px] font-medium bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1">
                  <IconCheck className="w-2.5 h-2.5 text-emerald-400" />
                  {compact ? "" : "Terupload"}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick();
                    }}
                    className="px-2 py-0.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-[10px] font-medium rounded border border-white/30 transition-all hover:scale-105"
                  >
                    Ganti
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="p-1 bg-red-500/80 hover:bg-red-600 text-white rounded transition-all hover:scale-105"
                  >
                    <IconX className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center"
            >
              <div
                className={`
                rounded-xl flex items-center justify-center mb-1
                transition-all duration-300
                ${compact ? "w-8 h-8" : "w-12 h-12 sm:w-14 sm:h-14"}
                ${
                  isDragging
                    ? "bg-blue-500/20 dark:bg-blue-500/30 scale-110"
                    : "bg-blue-50 dark:bg-blue-900/20"
                }
              `}
              >
                <IconUpload
                  className={`
                  transition-all duration-300
                  ${compact ? "w-4 h-4" : "w-6 h-6 sm:w-7 sm:h-7"}
                  ${
                    isDragging
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-blue-500 dark:text-blue-400"
                  }
                `}
                />
              </div>

              <p
                className={`${
                  compact ? "text-[10px]" : "text-xs sm:text-sm"
                } font-semibold text-neutral-700 dark:text-neutral-300`}
              >
                {isDragging
                  ? "Lepaskan"
                  : compact
                    ? "Upload"
                    : "Klik atau drag & drop"}
              </p>

              {!compact && (
                <div className="flex flex-wrap items-center justify-center gap-1 mt-1">
                  <span className="px-1.5 py-0.5 text-[8px] font-medium bg-neutral-100 dark:bg-neutral-700/50 text-neutral-500 dark:text-neutral-400 rounded-full">
                    PNG/JPG/WEBP
                  </span>
                  <span className="px-1.5 py-0.5 text-[8px] font-medium bg-neutral-100 dark:bg-neutral-700/50 text-neutral-500 dark:text-neutral-400 rounded-full">
                    Max 5MB
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
