"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Stethoscope,
  Building2,
  Hotel,
  FlaskConical,
  Pill,
  Ambulance,
  HeartHandshake,
  Sparkles,
  Info,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

interface Stakeholder {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  coverage: string;
  associatedSlugs: string[];
  dataProtocols: string[];
  angle: number; // For circular radar visualization
}

const STAKEHOLDERS: Stakeholder[] = [
  {
    id: "patients",
    name: "Patients & Individuals",
    role: "Health Access & Self-Care",
    icon: Users,
    coverage:
      "Teleconsultations, at-home pathology kit orderings, mobile health lockers, and rapid emergency blood donor matching.",
    associatedSlugs: ["welzo", "santeya", "iyara", "blood-donation"],
    dataProtocols: ["Encrypted WebRTC", "Patient Vault Sync", "SMS Emergency Beacons"],
    angle: 0,
  },
  {
    id: "doctors",
    name: "Doctors & Specialists",
    role: "Clinical Consultations & Charting",
    icon: Stethoscope,
    coverage:
      "Encrypted cloud EMR charting, outpatient prescription generation, telemedicine queues, and aeromedical pilot licensing exams.",
    associatedSlugs: ["nakbho", "hanadoc", "allodocta", "aeromedical"],
    dataProtocols: ["HL7 / FHIR EMR", "Digital Rx Signature", "Clinical Audit Log"],
    angle: 45,
  },
  {
    id: "clinics",
    name: "Outpatient Clinics",
    role: "Practice Operations & Intake",
    icon: Building2,
    coverage:
      "Patient queue orchestration, self-service intake kiosks, digital consent forms, and multi-provider schedule calendars.",
    associatedSlugs: ["clinicdots", "fastercheck", "nakbho"],
    dataProtocols: ["Kiosk QR Check-In", "Calendar Sync", "Practice Billing API"],
    angle: 90,
  },
  {
    id: "hospitals",
    name: "Hospitals & NHS Trusts",
    role: "Acute & Secondary Care",
    icon: Hotel,
    coverage:
      "Primary Care Network surgery staffing, hospital trauma bed signaling, and multi-department records exchange.",
    associatedSlugs: ["lpc-federate", "chapchap", "clinicdots"],
    dataProtocols: ["NHS Spine Integration", "Trauma Bed Signals", "Federated Rota API"],
    angle: 135,
  },
  {
    id: "laboratories",
    name: "Diagnostic Laboratories",
    role: "Pathology & Specimen Analysis",
    icon: FlaskConical,
    coverage:
      "Barcode specimen ingestion, Laboratory Information System (LIS) syncing, and doctor-approved biomarker reporting.",
    associatedSlugs: ["welzo", "coursier-medical", "fastercheck"],
    dataProtocols: ["LIS Ingestion API", "ISO 15189 Validations", "Biomarker JSON"],
    angle: 180,
  },
  {
    id: "pharmacies",
    name: "Pharmacies & Dispensaries",
    role: "Prescription Dispensation",
    icon: Pill,
    coverage:
      "Electronic prescription routing, automated repeat medication schedules, and direct courier dispatch integration.",
    associatedSlugs: ["curigo", "santeya", "coursier-medical"],
    dataProtocols: ["Electronic Rx (EPS)", "Cold-Chain IoT Handshake", "Courier GPS"],
    angle: 225,
  },
  {
    id: "emergency",
    name: "Emergency Services",
    role: "Pre-Hospital Dispatch & Trauma",
    icon: Ambulance,
    coverage:
      "Sub-second ambulance GPS routing, pre-arrival hospital telemetry streaming, and urgent blood donor mobilization.",
    associatedSlugs: ["chapchap", "blood-donation"],
    dataProtocols: ["Realtime GPS Telemetry", "Priority-1 SOS Dispatch", "LifeLink Paging"],
    angle: 270,
  },
  {
    id: "workforce",
    name: "Healthcare Workforce",
    role: "Rotas & Primary Care Staffing",
    icon: HeartHandshake,
    coverage:
      "Multi-surgery shift broadcasts, locum GP credential verification, and automated compliance vaults.",
    associatedSlugs: ["lpc-federate", "izikare"],
    dataProtocols: ["GMC / NMC Verification API", "CQC Audit Vault", "Instant Shift Push"],
    angle: 315,
  },
];

export const EcosystemMap: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("doctors");

  const activeStakeholder =
    STAKEHOLDERS.find((s) => s.id === selectedId) || STAKEHOLDERS[1];
  const ActiveIcon = activeStakeholder.icon;

  const connectedProducts = PRODUCTS.filter((p) =>
    activeStakeholder.associatedSlugs.includes(p.slug)
  );

  return (
    <section className="relative py-28 bg-[#07111F] border-t border-white/[0.08] overflow-hidden">
      {/* Background CAD Matrix & Radial Teal Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(0,229,255,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-10 border-b border-white/[0.08] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-[#00E5FF]/20 text-xs font-mono text-[#00E5FF] mb-4">
              <Sparkles className="h-3 w-3 text-[#00E5FF]" />
              07 // CONNECTED HEALTHCARE ECOSYSTEM
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              An Orchestrated Continuum of{" "}
              <span className="text-[#00E5FF]">Digital Care.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94A3B8] leading-relaxed">
            Bridging patients, practitioners, outpatient clinics, acute hospitals, diagnostic labs, pharmacies, and emergency dispatch into an interconnected healthcare continuum.
          </p>
        </div>

        {/* Ecosystem Interactive Stage (Orbital Radar Left + Telemetry Readout Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: Orbital Stakeholder Loop / Radar (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl bg-[#040810]/90 border border-white/10 relative overflow-hidden min-h-[480px]">
            {/* SVG Concentric Radar Circles & Animated Data Pathways */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 600"
            >
              {/* Outer Radar Rings */}
              <circle
                cx="300"
                cy="300"
                r="220"
                fill="none"
                stroke="rgba(0, 229, 255, 0.08)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle
                cx="300"
                cy="300"
                r="150"
                fill="none"
                stroke="rgba(0, 229, 255, 0.12)"
                strokeWidth="1"
              />
              <circle
                cx="300"
                cy="300"
                r="80"
                fill="none"
                stroke="rgba(0, 229, 255, 0.2)"
                strokeWidth="1"
              />

              {/* Crosshair Lines */}
              <line
                x1="80"
                y1="300"
                x2="520"
                y2="300"
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="1"
              />
              <line
                x1="300"
                y1="80"
                x2="300"
                y2="520"
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="1"
              />
            </svg>

            {/* Central Hub: Noorisys Healthcare Core */}
            <div className="z-10 p-5 rounded-full bg-gradient-to-br from-[#0D1C2E] to-[#040810] border-2 border-[#00E5FF] shadow-[0_0_40px_rgba(0,229,255,0.35)] text-center flex flex-col items-center justify-center w-36 h-36">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mb-1" />
              <div className="text-[11px] font-bold text-white font-heading">
                NOORISYS
              </div>
              <div className="text-[9px] font-mono text-[#00E5FF] uppercase">
                HEALTHCARE CORE
              </div>
              <div className="text-[8px] font-mono text-[#94A3B8] mt-1">
                15 PRODUCTS
              </div>
            </div>

            {/* Interactive Stakeholder Nodes Grid / Orbital Quick Selector */}
            <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 z-10">
              {STAKEHOLDERS.map((st) => {
                const isSelected = st.id === selectedId;
                const NodeIcon = st.icon;

                return (
                  <button
                    key={st.id}
                    onClick={() => setSelectedId(st.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "bg-[#0D1C2E] border-[#00E5FF] text-white shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                        : "bg-[#07111F]/80 hover:bg-[#0D1C2E]/60 border-white/5 text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected
                          ? "bg-[#00E5FF] text-[#040810]"
                          : "bg-white/5 text-[#94A3B8]"
                      }`}
                    >
                      <NodeIcon className="h-4 w-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold truncate">
                        {st.name.split("&")[0]}
                      </div>
                      <div className="text-[9px] font-mono text-[#D4A373] truncate">
                        {st.role.split("&")[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Stakeholder Telemetry Dossier (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStakeholder.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="cad-corner p-7 sm:p-8 rounded-3xl bg-[#040810]/95 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6"
              >
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF]">
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#D4A373] uppercase tracking-wider">
                        ACTIVE STAKEHOLDER
                      </span>
                      <h3 className="font-heading text-xl font-extrabold text-white">
                        {activeStakeholder.name}
                      </h3>
                      <div className="text-xs text-[#00E5FF] font-medium">
                        {activeStakeholder.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clinical Workflow Coverage Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Clinical Workflow Coverage:
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {activeStakeholder.coverage}
                  </p>
                </div>

                {/* Data Exchange Protocols */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4A373] mb-2.5">
                    Data Exchange Protocols:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStakeholder.dataProtocols.map((proto, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[#0D1C2E] border border-white/10 text-white/90"
                      >
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connected Portfolio Products */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-2.5">
                    Enabling Portfolio Products:
                  </h4>
                  <div className="space-y-2">
                    {connectedProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/products/${prod.slug}`}
                        className="group flex items-center justify-between p-2.5 rounded-xl bg-[#07111F] hover:bg-[#0D1C2E] border border-white/5 hover:border-[#00E5FF]/30 transition-all text-xs"
                      >
                        <div className="flex items-center gap-2.5">
                          {prod.logoUrl ? (
                            <span className="px-1.5 py-0.5 rounded bg-white/95 inline-flex items-center shadow-2xs">
                              <img
                                src={prod.logoUrl}
                                alt={prod.name}
                                className="h-3.5 max-w-[70px] w-auto object-contain"
                              />
                            </span>
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          )}
                          <span className="font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                            {prod.name}
                          </span>
                          <span className="text-[10px] text-[#94A3B8] hidden sm:inline">
                            — {prod.tagline.slice(0, 45)}...
                          </span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-[#94A3B8] group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Explicit Ecosystem Architecture Scope Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0D1C2E]/60 border border-white/10 flex items-start gap-3 text-xs text-[#94A3B8]">
          <Info className="h-4 w-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Ecosystem Architecture Note:</strong> This visualization illustrates the broad range of healthcare stakeholders addressed across our portfolio. Individual products operate independently as specialized commercial solutions or within custom client enterprise infrastructures, rather than forming a single mandatory unified software network.
          </p>
        </div>

      </div>
    </section>
  );
};
