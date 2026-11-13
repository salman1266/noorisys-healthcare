"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileSpreadsheet,
  Activity,
  Ambulance,
  PhoneCall,
  ShieldCheck,
  Server,
  Layers,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  MapPin,
  Pill,
} from "lucide-react";
import Link from "next/link";

export const WhatWeDo: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const AREAS = [
    {
      id: "software",
      number: "01",
      title: "Healthcare Software",
      tagline: "Software platforms and digital tools for healthcare workflows.",
      description:
        "We build comprehensive clinic management software and digital tools that streamline day-to-day healthcare operations. These platforms manage electronic medical records, patient scheduling, clinical consultation notes, and pharmacy dispensing, eliminating paperwork and reducing administrative delays.",
      verifiedExamples: [
        { name: "NAKBHO", role: "Cloud Electronic Medical Records (EMR)" },
        { name: "CLINICDOTS", role: "Outpatient Clinic & Hospital Suite" },
        { name: "CURIGO", role: "Digital Pharmacy Dispensation & Refills" },
      ],
      capabilities: [
        "Secure Electronic Medical Records (EMR) and fast digital charting",
        "Patient appointment scheduling and front-desk queue management",
        "Pharmacy dispensing synchronization and prescription tracking",
      ],
      // Visual 1: Clinical Workflow Screen
      visualContent: (
        <div className="rounded-2xl bg-[#040810] border border-white/10 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]" />
              <span className="text-xs font-mono font-bold text-white uppercase">
                Clinic Encounter Console
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#10B981] px-2 py-0.5 rounded bg-[#10B981]/10">
              Active Charting
            </span>
          </div>

          {/* Patient Card Preview */}
          <div className="p-3.5 rounded-xl bg-[#0D1C2E] border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">Patient Record #NK-4821</span>
              <span className="text-[#94A3B8]">Queue Pos: 02</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#94A3B8] pt-1">
              <div>Vitals: <span className="text-white">BP 120/80 • HR 72</span></div>
              <div>Consultation: <span className="text-[#00E5FF]">General Practice</span></div>
            </div>
          </div>

          {/* Clinical Actions Timeline */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-[11px]">
              <span className="text-slate-300">Prescription: Amoxicillin 500mg</span>
              <span className="text-[#10B981] font-mono text-[10px]">Verified e-Rx</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 text-[11px]">
              <span className="text-slate-300">Lab Order: Lipid Panel & HbA1c</span>
              <span className="text-[#D4A373] font-mono text-[10px]">Synchronized</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-[#94A3B8]">
            <span>System: ClinicDots Practice Core</span>
            <span className="text-[#00E5FF] font-mono">Zero Paperwork</span>
          </div>
        </div>
      ),
    },
    {
      id: "solutions",
      number: "02",
      title: "Digital Healthcare Solutions",
      tagline: "Digital experiences that help connect healthcare professionals and patients.",
      description:
        "We create accessible digital platforms that connect patients directly with care teams, emergency medical response, and diagnostic services. These solutions enable timely care consultations, rapid emergency dispatch, and direct access to health services from any device.",
      verifiedExamples: [
        { name: "CHAPCHAP", role: "Emergency Ambulance Dispatch Telemetry" },
        { name: "WELZO", role: "At-Home Diagnostic Marketplace & Lab Hub" },
        { name: "TELE-MEDIC", role: "Direct Video Telehealth Consultations" },
      ],
      capabilities: [
        "Real-time ambulance dispatch, GPS tracking, and emergency coordination",
        "At-home medical diagnostic test booking and lab results delivery",
        "Secure remote video consultations and digital patient inquiries",
      ],
      // Visual 2: Emergency & Connected Care Dispatch UI
      visualContent: (
        <div className="rounded-2xl bg-[#040810] border border-white/10 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#12CDB5] animate-pulse" />
              <span className="text-xs font-mono font-bold text-white uppercase">
                Emergency Dispatch & Care Feed
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#00E5FF] px-2 py-0.5 rounded bg-[#00E5FF]/10">
              Live Network
            </span>
          </div>

          {/* Active Unit Telemetry Card */}
          <div className="p-3.5 rounded-xl bg-[#0D1C2E] border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Ambulance className="h-4 w-4 text-[#00E5FF]" />
                <span className="font-bold text-white">Unit MED-08 (Priority 1)</span>
              </div>
              <span className="text-[#10B981] font-mono text-xs font-bold">ETA: 4 MINS</span>
            </div>
            <div className="text-[11px] text-[#94A3B8]">
              Location: Central Corridor • Destination: Regional Trauma Center
            </div>
          </div>

          {/* Patient Touchpoints */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-white/5">
              <span className="text-[10px] font-mono text-[#94A3B8] block">At-Home Diagnostics</span>
              <span className="text-white text-[11px] font-semibold">Welzo Kit Active</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5">
              <span className="text-[10px] font-mono text-[#94A3B8] block">Telehealth Connection</span>
              <span className="text-[#43E6D0] text-[11px] font-semibold">Doctor Assigned</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-[#94A3B8]">
            <span>System: ChapChap & Tele-Medic</span>
            <span className="text-[#12CDB5] font-mono">Immediate Response</span>
          </div>
        </div>
      ),
    },
    {
      id: "development",
      number: "03",
      title: "Healthcare Technology Development",
      tagline: "Designing and developing technology solutions for healthcare organizations.",
      description:
        "Backed by Noorisys Technologies, we engineer custom healthcare software architectures for healthcare networks, primary care federations, and medical organizations. We focus on scalable systems, role-based workforce rotas, regulatory compliance, and reliable data security.",
      verifiedExamples: [
        { name: "LPC FEDERATE", role: "Primary Care Network (PCN) Workforce Rota" },
        { name: "AEROMEDICAL", role: "Civil Aviation Flight Crew Medical Licensing" },
        { name: "NOORISYS CORE", role: "Enterprise Software Engineering & Cloud Backing" },
      ],
      capabilities: [
        "Primary care network workforce management and shift coverage rotas",
        "Aviation and occupational regulatory medical compliance workflows",
        "Scalable cloud architecture, encryption standards, and role-based access",
      ],
      // Visual 3: Architectural Architecture Blueprint
      visualContent: (
        <div className="rounded-2xl bg-[#040810] border border-white/10 p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373]" />
              <span className="text-xs font-mono font-bold text-white uppercase">
                Workforce & Architecture Core
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#D4A373] px-2 py-0.5 rounded bg-[#D4A373]/10">
              Enterprise Dev
            </span>
          </div>

          {/* Architecture Tier Stack */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-[#0D1C2E] border border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-200 font-semibold">Tier 1: Workforce Rota Engine</span>
              <span className="text-[10px] font-mono text-[#00E5FF]">LPC Primary Care</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0D1C2E] border border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-200 font-semibold">Tier 2: Regulatory Validation API</span>
              <span className="text-[10px] font-mono text-[#12CDB5]">CAA / EASA Standards</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0D1C2E] border border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-200 font-semibold">Tier 3: Enterprise Cloud Infrastructure</span>
              <span className="text-[10px] font-mono text-emerald-400">Noorisys Engineering</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-[#94A3B8]">
            <span>Compliance: Role-Based RBAC</span>
            <span className="text-[#D4A373] font-mono">Full Stack Engineering</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="what-we-do" className="relative py-28 bg-[#07111F]/70 backdrop-blur-xs border-t border-white/[0.08] overflow-hidden">
      {/* Background Volumetric Radiance */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
            <Sparkles className="h-3 w-3 text-[#00E5FF]" />
            WHAT WE DO
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            How We Build Better{" "}
            <span className="text-[#00E5FF]">Healthcare Experiences.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            We focus on three distinct areas of healthcare technology to support care providers, medical organizations, and patients.
          </p>
        </motion.div>

        {/* 3 Distinct Areas Layout: Interactive Tabs & Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Distinct Area Selector Cards (5 Cols) with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {AREAS.map((area, idx) => {
              const isSelected = activeArea === idx;
              return (
                <div
                  key={area.id}
                  onClick={() => setActiveArea(idx)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? "bg-[#0D1C2E] border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.18)]"
                      : "bg-[#040810]/80 hover:bg-[#0D1C2E]/60 border-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#D4A373]">
                      AREA {area.number}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[#00E5FF]/20 text-[#00E5FF]"
                          : "bg-white/5 text-[#94A3B8]"
                      }`}
                    >
                      {isSelected ? "Active View" : "Explore"}
                    </span>
                  </div>

                  <h3
                    className={`font-heading text-lg sm:text-xl font-bold mb-1 transition-colors ${
                      isSelected ? "text-[#00E5FF]" : "text-white"
                    }`}
                  >
                    {area.title}
                  </h3>

                  <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {area.tagline}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* Right Column: Detailed Presentation for the Active Area (7 Cols) with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <motion.div
              key={AREAS[activeArea].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="cad-corner p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0D1C2E] to-[#040810] border border-[#00E5FF]/30 shadow-glass space-y-6"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#00E5FF] block mb-1">
                  PRACTICE AREA {AREAS[activeArea].number}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {AREAS[activeArea].title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#12CDB5] mb-4">
                  {AREAS[activeArea].tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {AREAS[activeArea].description}
                </p>
              </div>

              {/* Distinct Interface Preview Mockup */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-2">
                  System Workflow Preview:
                </span>
                {AREAS[activeArea].visualContent}
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block">
                  Core Capabilities:
                </span>
                {AREAS[activeArea].capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Verified Product Implementations */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] block mb-2">
                  Verified In Portfolio:
                </span>
                <div className="flex flex-wrap gap-2">
                  {AREAS[activeArea].verifiedExamples.map((ex, i) => (
                    <div
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-[#040810] border border-white/10 text-xs flex items-center gap-2"
                    >
                      <span className="font-bold text-white">{ex.name}</span>
                      <span className="text-[#94A3B8] text-[11px]">— {ex.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00E5FF] text-[#040810] text-xs font-bold hover:bg-[#12CDB5] transition-all"
                >
                  <span>Discuss Your Project With Us</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
