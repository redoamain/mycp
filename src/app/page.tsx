// src/app/page.tsx
import CertificateSection from "@/components/CertificateSection";
import { Comparer } from "@/components/compare";
import CustomerReviewsResponsive from "@/components/customereview";
import ImagesSliderDemo from "@/components/images-slider-demo";
import MaintenanceCheck from "@/components/maintenance-check";
import { MapEx } from "@/components/map";
import { HeroSectionOne } from "@/components/ui/hero";
import ServicesPreview from "@/components/ServicesPreview"; // Import komponen baru
import CertificatePreview from "@/components/CertificatePreview";

export default async function HomePage() {
  return (
    <MaintenanceCheck>
      <div className="overflow-x-hidden">
        <ImagesSliderDemo />
        <ServicesPreview /> {/* Tambahkan di sini */}
        <CertificatePreview/>
        {/* <Comparer/> */}
        {/* <MapEx/> */}
        {/* <CustomerReviewsResponsive/> */}
      </div>
    </MaintenanceCheck>
  );
}
