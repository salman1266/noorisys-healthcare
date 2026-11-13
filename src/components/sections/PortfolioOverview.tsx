"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, Network, Layers, CheckCircle2 } from "lucide-react";

const STATS = [
  {
    number: "15",
    label: "Healthcare Products",
    description:
      "A rich spectrum of specialized digital products engineered for clinics, pharmacies, laboratories, and patients.",
    badge: "100% Focused",
  },
  {
    number: "7",
    label: "Healthcare Domains",
    description:
      "Covering clinical management, primary care workforce, digital patient access, diagnostics, emergency response, and aviation medicine.",
    badge: "Broad Reach",
  },
  {
    number: "1",
    label: "Unified Technology Portfolio",
    description:
      "Curated and scaled under Noorisys Technologies, adhering to rigorous engineering, architecture, and security benchmarks.",
    badge: "Noorisys Engineered",
  },
];

const PILLARS = [
  {
    icon: Network,
    title: "Connected Care Philosophy",
    description:
      "Addressing critical coordination gaps across the healthcare continuum with purpose-built digital tools.",
  },
  {
    icon: Shield,
    title: "High Security & Compliance",
    description:
      "Architecture built on encryption-at-rest, role-based access control, and privacy-first data handling standards.",
  },
  {
    icon: Layers,
    title: "Domain-Specific Workflows",
    description:
      "Rejecting one-size-fits-all software in favor of customized solutions tailored to specific clinical realities.",
  },
];

export const PortfolioOverview: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0B1929] border-y border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(18,205,181,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243A] border border-[#12CDB5]/30 text-xs font-mono text-[#43E6D0] mb-4"
          >
            <Sparkles className="h-3 w-3 text-[#12CDB5]" />
            PORTFOLIO AT A GLANCE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            One Vision.{" "}
            <span className="text-[#12CDB5]">15 Healthcare Innovations.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-text-secondary mt-4 text-base sm:text-lg leading-relaxed"
          >
            Explore a verified technology portfolio addressing systemic healthcare challenges—from local GP surgeries in the UK to emergency logistics and clinical management platforms worldwide.
          </motion.p>
        </div>

        {/* 3 Large Counter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative group p-8 rounded-2xl bg-[#10243A]/80 hover:bg-[#10243A] border border-white/10 hover:border-[#12CDB5]/40 transition-all duration-300 shadow-glass"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#43E6D0] px-2.5 py-1 rounded-md bg-[#12CDB5]/10 border border-[#12CDB5]/20">
                  {stat.badge}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#12CDB5] opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              </div>

              <div className="font-heading text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight">
                {stat.number}
              </div>

              <h3 className="font-heading text-lg font-bold text-text-primary mb-3">
                {stat.label}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Supporting Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-[#12CDB5]/10 border border-[#12CDB5]/20 text-[#12CDB5] shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
