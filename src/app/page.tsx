// src/app/page.tsx
import { Comparer } from "@/components/compare";
import { CustomerReviewsWithTranslationBadge } from "@/components/customereview";

import MaintenanceCheck from "@/components/maintenance-check";
import { MapEx } from "@/components/map";
import { HeroSectionOne } from "@/components/ui/hero";

export default async function HomePage() {
  return (
    <MaintenanceCheck>
      <div className="overflow-x-hidden">
        <HeroSectionOne />
        <Comparer/>
        <MapEx/>
      <CustomerReviewsWithTranslationBadge/>
      </div>
    </MaintenanceCheck>
  );
}
