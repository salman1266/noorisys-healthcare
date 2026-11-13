import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Stethoscope,
  Users,
  Video,
  Ambulance,
  QrCode,
  Pill,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { HEALTHCARE_DOMAINS } from "@/data/domains";
import { PRODUCTS } from "@/data/products";
import { PartnershipCta } from "@/components/sections/PartnershipCta";

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  Stethoscope,
  Users,
  Video,
  Ambulance,
  QrCode,
  Pill,
  ShieldCheck,
};

export const metadata: Metadata = {
  title: "Healthcare Domains & Solutions | Noorisys Healthcare",
  description:
    "Explore our 7 healthcare technology domains spanning Clinical Management, Healthcare Workforce, Digital Patient Access, Emergency Response, Diagnostics, Pharmacy, and Aviation Medicine.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#07111F]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243A] border border-[#12CDB5]/30 text-xs font-mono text-[#43E6D0] mb-4">
          <Sparkles className="h-3 w-3 text-[#12CDB5]" />
          DOMAIN CAPABILITIES
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Specialized Healthcare{" "}
          <span className="text-[#12CDB5]">Domains & Solutions</span>
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          From hospital rotas and clinical charting to mission-critical ambulance dispatch and certified aeromedical compliance, explore our structured healthcare engineering focus areas.
        </p>
      </div>

      {/* Domains Deep Dive List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-20">
        {HEALTHCARE_DOMAINS.map((domain, index) => {
          const IconComponent = DOMAIN_ICONS[domain.icon] || Stethoscope;
          const domainProducts = PRODUCTS.filter((p) =>
            domain.productSlugs.includes(p.slug)
          );

          return (
            <div
              key={domain.id}
              id={domain.slug}
              className="scroll-mt-32 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#10243A] to-[#0B1929] border border-white/10 shadow-glass"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Domain Overview */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-[#0B1929] border border-white/10 text-[#12CDB5]">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-[#43E6D0]">
                        Domain {index + 1}
                      </span>
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                        {domain.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-text-primary font-medium mb-4">
                    {domain.tagline}
                  </p>

                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {domain.fullDescription}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-xs font-mono uppercase text-[#43E6D0] tracking-wider mb-3">
                      Core Domain Capabilities
                    </h4>
                    {domain.keyCapabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-text-muted">
                        <CheckCircle2 className="h-4 w-4 text-[#12CDB5] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Summary */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-text-secondary">
                    <strong className="text-white block mb-1">Impact Benchmark:</strong>
                    {domain.impactSummary}
                  </div>
                </div>

                {/* Right: Featured Products in this Domain */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-[#07111F]/80 border border-white/10">
                  <h3 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Products in this Domain</span>
                    <span className="text-xs font-mono text-[#12CDB5]">
                      {domainProducts.length} Active
                    </span>
                  </h3>

                  <div className="space-y-3">
                    {domainProducts.map((p) => (
                      <div
                        key={p.id}
                        className="p-3.5 rounded-xl bg-[#10243A]/60 border border-white/5 hover:border-[#12CDB5]/40 transition-all"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <Link
                            href={`/products/${p.slug}`}
                            className="font-heading font-bold text-sm text-white hover:text-[#43E6D0] transition-colors"
                          >
                            {p.name}
                          </Link>
                          {p.badge && (
                            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#12CDB5]/10 text-[#43E6D0]">
                              {p.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-text-muted line-clamp-2 mb-2">
                          {p.tagline}
                        </p>
                        <div className="flex items-center justify-between text-[11px]">
                          <Link
                            href={`/products/${p.slug}`}
                            className="text-[#12CDB5] hover:underline flex items-center gap-1 font-medium"
                          >
                            <span>Explore details</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                          {p.verifiedUrl && (
                            <a
                              href={p.verifiedUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-text-muted hover:text-white flex items-center gap-1"
                            >
                              <span>Official Site</span>
                              <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      <PartnershipCta />
    </div>
  );
}
