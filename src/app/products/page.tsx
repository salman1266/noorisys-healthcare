import type { Metadata } from "next";
import React from "react";
import { ProductShowcase } from "@/components/products/ProductShowcase";
import { PartnershipCta } from "@/components/sections/PartnershipCta";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Products (15) | Noorisys Healthcare Portfolio",
  description:
    "Explore the complete portfolio of 15 specialized healthcare products developed under Noorisys Technologies across clinical management, diagnostics, workforce, and pharmacy.",
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-16 bg-[#07111F]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243A] border border-[#12CDB5]/30 text-xs font-mono text-[#43E6D0] mb-4">
          <Sparkles className="h-3 w-3 text-[#12CDB5]" />
          PORTFOLIO CATALOGUE
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Specialized Healthcare{" "}
          <span className="text-[#12CDB5]">Product Portfolio</span>
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Comprehensive catalogue of 15 digital health innovations spanning clinical electronic records, emergency dispatch, primary care rotas, and diagnostic marketplaces.
        </p>
      </div>

      {/* Main Filterable Product Grid */}
      <ProductShowcase
        title="A Portfolio of Healthcare Innovations"
        subtitle="Filter by medical domain or search by specific feature or clinical capability."
        showFilters={true}
      />

      {/* Partnership CTA */}
      <PartnershipCta />
    </div>
  );
}
