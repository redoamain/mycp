"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { IconX, IconZoomIn } from "@tabler/icons-react";

export default function CertificateSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

  // Certificate data with images
  const certificates = [
    {
      id: 1,
      title: "ISO 9001:2015 Certificate",
      issuer: "International Organization for Standardization",
      year: "2022",
      image: "/img/cer/1.webp",
      description: "International quality management certificate",
    },
    {
      id: 2,
      title: "Certificate of Quality",
      issuer: "Quality Assurance Institute",
      year: "2026",
      image: "/img/cer/2.jpg",
      description: "Product quality certification",
    },
    {
      id: 3,
      title: "Safety Standard Certificate",
      issuer: "Safety Compliance Board",
      year: "2026",
      image: "/img/cer/3.jpg",
      description: "International safety standards compliance",
    },
    {
      id: 4,
      title: "Environmental Management",
      issuer: "Eco Certification Body",
      year: "2026",
      image: "/img/cer/4.jpg",
      description: "Environmental sustainability certification",
    },
    {
      id: 5,
      title: "Industry Excellence Award",
      issuer: "Industry Standards Council",
      year: "2026",
      image: "/img/cer/5.jpg",
      description: "Recognition of industry excellence",
    },
  ];

  const openLightbox = (cert: any) => {
    if (cert) {
      setSelectedImage(cert.image);
      setSelectedCert(cert);
    }
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedCert(null);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-50/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
            <span className="text-blue-600 text-xs sm:text-sm tracking-wider font-medium">
              CERTIFICATIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-700">
              Certificates
            </span>
          </h2>
          <p className="text-black/50 text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-4">
            Official certifications that prove our quality and professionalism
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-black/5 hover:border-blue-400/30 cursor-pointer"
              onClick={() => openLightbox(cert)}
            >
              {/* Certificate Image */}
              <div className="relative aspect-4/3 sm:aspect-3/4 overflow-hidden bg-gray-50">
                <Image
                  src={cert.image}
                  alt={cert.title || "Certificate"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay Hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 p-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-white/30">
                    <IconZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-white text-[10px] sm:text-xs md:text-sm font-medium bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30">
                    Click to view
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-blue-600/90 backdrop-blur-sm text-white text-[8px] sm:text-[10px] md:text-xs font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20">
                  {cert.year}
                </div>
              </div>

              {/* Certificate Info - Uncomment if you want to show text below images */}
              {/* <div className="p-3 sm:p-4 md:p-5">
                <h3 className="text-black font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-black/50 text-[10px] sm:text-xs md:text-sm mt-0.5 sm:mt-1">
                  {cert.issuer}
                </p>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl sm:max-w-5xl w-full max-h-[90vh] bg-white rounded-xl sm:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors"
            >
              <IconX className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Image Container */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gray-100">
              <Image
                src={selectedImage}
                alt={selectedCert.title || "Certificate"}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Info Footer - Uncomment if needed */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 md:p-6">
              <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                {selectedCert.title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm">
                {selectedCert.issuer} • {selectedCert.year}
              </p>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
