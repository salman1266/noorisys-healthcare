import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import {
  Building2,
  ExternalLink,
  Shield,
  Sparkles,
  Users,
  Award,
  Globe2,
  Cpu,
  ArrowRight,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { PartnershipCta } from "@/components/sections/PartnershipCta";

export const metadata: Metadata = {
  title: "About Noorisys Healthcare | A Noorisys Technologies Portfolio",
  description:
    "Learn about Noorisys Healthcare, presented as a dedicated healthcare technology portfolio under parent company Noorisys Technologies Pvt. Ltd.",
};

const PARENT_FACTS = [
  {
    label: "Company Founded",
    value: "2011",
    sub: "Over a decade of software excellence",
  },
  {
    label: "Global Reach",
    value: "25+ Countries",
    sub: "Delivering digital products internationally",
  },
  {
    label: "Products Delivered",
    value: "500+",
    sub: "SaaS, mobile apps, & enterprise platforms",
  },
  {
    label: "Healthcare Innovations",
    value: "15 Products",
    sub: "Covering 7 core healthcare domains",
  },
];

const GUIDING_VALUES = [
  {
    title: "Domain Precision",
    desc: "We avoid superficial generic templates. Every healthcare product is designed around authentic clinical realities—whether that means GP locum rotas in the UK or ambulance geolocation in West Africa.",
  },
  {
    title: "Backend-First Resilience",
    desc: "Healthcare apps cannot crash during patient emergencies. Our architectural ethos guarantees robust databases, low latencies, and high data security from day one.",
  },
  {
    title: "Authentic Partnership",
    desc: "We work side-by-side with healthcare founders, medical directors, and healthcare technology operators to engineer scalable products and accelerate clinical adoption.",
  },
  {
    title: "Uncompromising Ethics & Compliance",
    desc: "Patient privacy is paramount. We build software that complies with healthcare data standards, maintains immutable audit trails, and upholds medical ethics.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#07111F]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243A] border border-[#12CDB5]/30 text-xs font-mono text-[#43E6D0] mb-4">
          <Sparkles className="h-3 w-3 text-[#12CDB5]" />
          ABOUT OUR PORTFOLIO
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Healthcare Technology.{" "}
          <span className="text-[#12CDB5]">Beyond Boundaries.</span>
        </h1>
        <p className="text-text-secondary max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Noorisys Healthcare is presented as a dedicated healthcare technology portfolio under parent company{" "}
          <strong className="text-white">Noorisys Technologies Pvt. Ltd.</strong>, unifying 15 specialized digital health products.
        </p>
      </div>

      {/* Parent Company & Portfolio Relationship */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#10243A] to-[#0B1929] border border-white/10 shadow-glass">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase text-[#43E6D0] tracking-wider block">
                Parent Company Pedigree
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Engineered by Noorisys Technologies
              </h2>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Founded in 2011, <strong>Noorisys Technologies</strong> is an established startup product engineering and software development partner known for backend-first architecture, scalable cloud engineering, and disciplined digital execution.
              </p>

              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Having delivered over 500 digital products to clients across 25+ countries, Noorisys identified the urgent necessity for specialized digital tools within the healthcare ecosystem. Rather than offering generic software, Noorisys Healthcare curates a focused portfolio of 15 targeted products that solve real problems for patients, physicians, clinics, and health systems.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href="https://noorisys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#12CDB5] hover:bg-[#43E6D0] text-[#07111F] text-xs font-bold shadow-[0_0_20px_rgba(18,205,181,0.3)] transition-all"
                >
                  <span>Visit Parent Website (noorisys.com)</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#07111F] hover:bg-white/5 text-white text-xs font-semibold border border-white/10 transition-all"
                >
                  <span>Connect With Leadership</span>
                </Link>
              </div>
            </div>

            {/* Right: Parent Company Highlights */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {PARENT_FACTS.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#07111F]/80 border border-white/5 space-y-1.5"
                >
                  <div className="font-heading text-3xl font-extrabold text-[#12CDB5]">
                    {fact.value}
                  </div>
                  <div className="text-xs font-bold text-white">
                    {fact.label}
                  </div>
                  <div className="text-[11px] text-text-muted leading-tight">
                    {fact.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Guiding Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase text-[#43E6D0] tracking-wider block mb-2">
            Engineering Values
          </span>
          <h2 className="font-heading text-3xl font-bold text-white">
            Our Guiding Healthcare Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {GUIDING_VALUES.map((val, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-[#10243A]/80 border border-white/10 space-y-3"
            >
              <div className="flex items-center gap-2.5 text-[#12CDB5]">
                <CheckCircle2 className="h-5 w-5" />
                <h3 className="font-heading text-lg font-bold text-white">
                  {val.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <PartnershipCta />
    </div>
  );
}
