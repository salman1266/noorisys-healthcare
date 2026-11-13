"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const CREDIBILITY_PILLARS = [
  {
    num: "01",
    label: "Founded in 2011",
    heading: "15 Years of Software Architecture",
    desc: "Backed by the product engineering pedigree of Noorisys Technologies, prioritizing backend stability, scalable microservices, and clean execution.",
  },
  {
    num: "02",
    label: "Global Delivery Footprint",
    heading: "500+ Products Across 25+ Countries",
    desc: "A proven track record of architecting mission-critical platforms for healthcare founders, clinics, NHS general practices, and regional health authorities.",
  },
  {
    num: "03",
    label: "Healthcare Specialization",
    heading: "15 Purpose-Built Platforms",
    desc: "Rejecting fragile, one-size-fits-all medical templates in favor of deeply customized software designed around genuine clinical workflows.",
  },
];

const TICKER_ITEMS = [
  "ELECTRONIC MEDICAL RECORDS (EMR)",
  "NHS PRIMARY CARE ROTAS",
  "EMERGENCY AMBULANCE TELEMETRY",
  "AT-HOME LABORATORY DIAGNOSTICS",
  "DIGITAL PHARMACY DISPENSATION",
  "AEROMEDICAL PILOT LICENSING",
  "CROSS-BORDER CARE FINANCING",
  "COLD-CHAIN SPECIMEN LOGISTICS",
];

export const EditorialIntro: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#07111F] border-y border-white/[0.06] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Asymmetric Editorial Header Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20 pb-12 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-white/10 text-xs font-mono text-[#D4A373] mb-5">
              <Sparkles className="h-3 w-3 text-[#D4A373]" />
              EDITORIAL MANIFESTO • PORTFOLIO INTENT
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Digital Healthcare Must Be Engineered to{" "}
              <span className="text-[#00E5FF]">Never Fail.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Healthcare operations cannot tolerate system instability. Noorisys Healthcare brings institutional discipline, verified engineering rigor, and targeted domain software to outpatient practices, emergency networks, and digital diagnostics.
            </p>
          </div>
        </div>

        {/* 3 Large Blueprint Crosshair Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {CREDIBILITY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="cad-corner group relative p-8 rounded-2xl bg-[#0D1C2E]/70 hover:bg-[#0D1C2E] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all duration-300 shadow-glass"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-[#D4A373]">
                  {pillar.num}
                </span>
                <span className="text-[10px] font-mono uppercase text-[#00E5FF] px-2.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                  {pillar.label}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors mb-3">
                {pillar.heading}
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Continuous Horizontal Ticker */}
        <div className="relative w-full overflow-hidden py-4 border-t border-b border-white/[0.06] bg-[#040810]/50 rounded-xl">
          <div className="flex w-max items-center gap-8 animate-marquee whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span
                key={i}
                className="text-[11px] font-mono tracking-widest text-[#64748B] flex items-center gap-3"
              >
                <span>{item}</span>
                <span className="text-[#00E5FF] opacity-40">•</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
