import type { Metadata } from "next";
import React from "react";
import {
  Cloud,
  Cpu,
  Smartphone,
  Network,
  BarChart3,
  Workflow,
  Sparkles,
  ShieldCheck,
  Lock,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { INNOVATION_CAPABILITIES } from "@/data/innovation";
import { TechInnovation } from "@/components/sections/TechInnovation";
import { PartnershipCta } from "@/components/sections/PartnershipCta";

const ICON_MAP: Record<string, React.ElementType> = {
  Cloud,
  Cpu,
  Smartphone,
  Network,
  BarChart3,
  Workflow,
};

export const metadata: Metadata = {
  title: "Technology & Innovation | Noorisys Healthcare",
  description:
    "Discover the engineering architecture, applied clinical AI, cloud infrastructure, and data security benchmarks that power Noorisys Healthcare products.",
};

const SECURITY_STANDARDS = [
  {
    title: "Data Encryption At-Rest & In-Flight",
    desc: "AES-256 for resting medical databases, TLS 1.3 for all live clinical streaming and API traffic.",
  },
  {
    title: "HIPAA & GDPR Privacy Principles",
    desc: "Role-based authorization matrices, patient consent tracking, and zero unauthenticated data exposure.",
  },
  {
    title: "High-Availability Multi-Tenant Cloud",
    desc: "Redundant cluster topologies designed for 99.99% uptime with automated geographical failover.",
  },
  {
    title: "Clinical Audit Logging",
    desc: "Tamper-evident access tracking for medical record changes, prescription issuance, and user sign-ins.",
  },
];

export default function InnovationPage() {
  return (
    <div className="pt-28 pb-20 bg-[#07111F]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243A] border border-[#12CDB5]/30 text-xs font-mono text-[#43E6D0] mb-4">
          <Sparkles className="h-3 w-3 text-[#12CDB5]" />
          ARCHITECTURE & ENGINEERING
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Technology Powering{" "}
          <span className="text-[#12CDB5]">Better Healthcare</span>
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Grounded in rigorous software engineering and backend scalability, our technology stack balances clinical agility with ironclad privacy.
        </p>
      </div>

      {/* Main Interactive Innovation Capabilities Section */}
      <TechInnovation />

      {/* Security & Regulatory Standards Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1929] to-[#10243A] border border-white/10 shadow-glass">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-[#12CDB5]/15 border border-[#12CDB5]/30 text-[#12CDB5]">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#43E6D0]">
                Security Framework
              </span>
              <h2 className="font-heading text-2xl font-bold text-white">
                Clinical Security & Data Integrity
              </h2>
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed max-w-3xl mb-8">
            Healthcare data demands uncompromising confidentiality. Noorisys adheres to enterprise-grade data handling principles to ensure every patient record, prescription, and consultation remains protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECURITY_STANDARDS.map((std, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#07111F]/70 border border-white/5 space-y-2"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Lock className="h-4 w-4 text-[#12CDB5]" />
                  <span>{std.title}</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership CTA */}
      <PartnershipCta />
    </div>
  );
}
