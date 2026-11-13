"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Tablet,
  Smartphone,
  Shield,
  Zap,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Lock,
  ArrowRight,
  Activity,
  Layers,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

interface UIWorkflow {
  id: string;
  name: string;
  logoUrl: string;
  category: string;
  destination: string;
  deviceType: "Desktop" | "Tablet" | "Mobile";
  badge: string;
  headline: string;
  description: string;
  keySpecs: { label: string; value: string }[];
  screenContent: React.ReactNode;
}

const UI_WORKFLOWS: UIWorkflow[] = [
  {
    id: "clinicdots",
    name: "ClinicDots",
    logoUrl: "/logos/clinicdots.png",
    category: "Clinical Practice OS",
    destination: "https://landing.clinicdots.com/",
    deviceType: "Desktop",
    badge: "Outpatient Operating System",
    headline: "Unified Clinical Charting & Practice Management",
    description:
      "A complete multi-tenant operating system for outpatient medical practices. Engineered for rapid electronic charting, multi-physician queue management, and instantaneous prescription generation.",
    keySpecs: [
      { label: "Intake Latency", value: "< 45 Seconds" },
      { label: "EMR Encryption", value: "AES-256 GCM" },
      { label: "Interoperability", value: "HL7 / FHIR Ready" },
      { label: "Architecture", value: "Cloud Multi-Tenant" },
    ],
    screenContent: (
      <div className="space-y-4">
        {/* ClinicDots Top Bar with Genuine Logo */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#040810]/80 border border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="px-3 py-1.5 rounded-lg bg-[#07111F] border border-white/10 flex items-center justify-center">
              <img
                src="/logos/clinicdots.png"
                alt="ClinicDots"
                className="h-6 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>St. Mary Outpatient Clinic • Room 4</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  LIVE SESSION
                </span>
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                Attending: Dr. Edward Davies, MBBS, MRCGP
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#00E5FF]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>QUEUE: 12 WAITING</span>
          </div>
        </div>

        {/* 3-Column Clinical Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Col 1: Queue list */}
          <div className="md:col-span-4 p-3 rounded-xl bg-[#040810]/60 border border-white/5 space-y-2">
            <div className="text-[10px] font-mono uppercase text-[#D4A373] tracking-wider mb-2">
              Patient Queue (Next Up)
            </div>
            <div className="p-2 rounded-lg bg-[#0D1C2E] border border-[#00E5FF]/30 text-xs">
              <div className="flex justify-between font-bold text-white">
                <span>Arthur Pendelton</span>
                <span className="text-[#00E5FF] font-mono">#04</span>
              </div>
              <div className="text-[10px] text-[#94A3B8]">Review: Hypertension Protocol</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] text-xs">
              <div className="flex justify-between text-white/80">
                <span>Claire Sinclair</span>
                <span className="text-[#94A3B8] font-mono">#05</span>
              </div>
              <div className="text-[10px] text-[#94A3B8]">Suture Removal (Nurse Bay)</div>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] text-xs">
              <div className="flex justify-between text-white/80">
                <span>Marcus Bennett</span>
                <span className="text-[#94A3B8] font-mono">#06</span>
              </div>
              <div className="text-[10px] text-[#94A3B8]">Pediatric General Check</div>
            </div>
          </div>

          {/* Col 2 & 3: Active Chart & Diagnostics */}
          <div className="md:col-span-8 space-y-3">
            <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#94A3B8] mb-2">
                <span>ACTIVE CLINICAL CONSULTATION</span>
                <span className="text-emerald-400">VITALS NORMAL</span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="p-2 rounded bg-[#07111F] text-center">
                  <div className="text-[9px] text-[#94A3B8]">PULSE</div>
                  <div className="font-mono text-xs font-bold text-white">68 BPM</div>
                </div>
                <div className="p-2 rounded bg-[#07111F] text-center">
                  <div className="text-[9px] text-[#94A3B8]">BP</div>
                  <div className="font-mono text-xs font-bold text-white">122/80</div>
                </div>
                <div className="p-2 rounded bg-[#07111F] text-center">
                  <div className="text-[9px] text-[#94A3B8]">SpO2</div>
                  <div className="font-mono text-xs font-bold text-[#00E5FF]">98%</div>
                </div>
                <div className="p-2 rounded bg-[#07111F] text-center">
                  <div className="text-[9px] text-[#94A3B8]">TEMP</div>
                  <div className="font-mono text-xs font-bold text-white">36.7°C</div>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#07111F] border border-white/5 text-[11px] text-[#94A3B8]">
                <strong className="text-white">Physician Impression:</strong> Patient reports steady improvement under Lisinopril 10mg. No peripheral edema noted. Routine 6-month blood panel ordered via connected laboratory module.
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0D1C2E]/70 border border-white/10 text-xs">
              <span className="text-[10px] font-mono text-[#D4A373]">
                ACTIONS: [DISPATCH RX] [DISCHARGE] [SCHEDULE FOLLOWUP]
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">
                SAVED & ARCHIVED
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "nakbho",
    name: "Nakbho",
    logoUrl: "/logos/nakbho.png",
    category: "Electronic Medical Records",
    destination: "https://nakbho.com/",
    deviceType: "Desktop",
    badge: "Core Enterprise EMR",
    headline: "Centralized Clinical Records & Clinic Synchronization",
    description:
      "Enterprise EMR platform delivering secure patient charting, encrypted history archiving, and streamlined consultation queues across outpatient medical centers.",
    keySpecs: [
      { label: "Record Standard", value: "HL7 / FHIR" },
      { label: "Data Isolation", value: "Tenant-Level PHI" },
      { label: "Availability", value: "99.99% Cloud SLA" },
      { label: "Deployment", value: "Multi-Clinic" },
    ],
    screenContent: (
      <div className="space-y-4">
        {/* Nakbho Top Bar with Genuine Logo */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#040810]/80 border border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="px-3 py-1 rounded-lg bg-[#07111F] border border-white/10 flex items-center justify-center">
              <img
                src="/logos/nakbho.png"
                alt="Nakbho Healthcare"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>NAKBHO Enterprise EMR • Station 02</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  ACTIVE CHART
                </span>
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                Centralized Health Records System
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#00E5FF]">
            SYNCED WITH NAKBHO CLOUD
          </span>
        </div>

        {/* EMR Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5 space-y-1.5">
            <div className="text-[10px] font-mono text-[#D4A373]">PATIENT RECORD</div>
            <div className="text-xs font-bold text-white">#NK-881920 (Adult)</div>
            <div className="text-[11px] text-[#94A3B8]">Primary: Hypertension Review</div>
          </div>
          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5 space-y-1.5">
            <div className="text-[10px] font-mono text-[#D4A373]">ENCOUNTER PROTOCOL</div>
            <div className="text-xs font-bold text-white">Outpatient Consultation</div>
            <div className="text-[11px] text-[#00E5FF]">Digital Rx Generated</div>
          </div>
          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5 space-y-1.5">
            <div className="text-[10px] font-mono text-[#D4A373]">DATA PRIVACY</div>
            <div className="text-xs font-bold text-emerald-400">AES-256 Encrypted</div>
            <div className="text-[11px] text-[#94A3B8]">Audit Trail Active</div>
          </div>
        </div>

        {/* Clinical Note Simulation */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/70 border border-white/10 text-xs">
          <div className="text-[10px] font-mono text-[#00E5FF] mb-1">
            CLINICAL SUMMARY ARCHIVE
          </div>
          <p className="text-[11px] text-[#94A3B8]">
            Patient intake documented paperlessly. Vital signs and lab orders linked directly to patient profile with instant pharmacy prescription routing.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "welzo",
    name: "Welzo",
    logoUrl: "/logos/welzo.webp",
    category: "Diagnostic Marketplace",
    destination: "https://welzo.com",
    deviceType: "Desktop",
    badge: "At-Home Laboratory Testing",
    headline: "Diagnostic Marketplace & Specimen Ingestion Engine",
    description:
      "A consumer health platform connecting users with accredited diagnostic laboratories, specialized blood panels, and doctor-validated pathology results.",
    keySpecs: [
      { label: "Lab Network", value: "UKAS / ISO 15189" },
      { label: "Result Turnaround", value: "24-48 Hours" },
      { label: "Doctor Review", value: "GMC Registered" },
      { label: "Specimen Tracking", value: "Unique Barcode" },
    ],
    screenContent: (
      <div className="space-y-4">
        {/* Welzo Header with Genuine Logo */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#040810]/80 border border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="px-3 py-1 rounded-lg bg-[#07111F] border border-white/10 flex items-center justify-center">
              <img
                src="/logos/welzo.webp"
                alt="Welzo"
                className="h-6 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Laboratory Specimen #WZ-71829-UK
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                Panel: Advanced Biomarker Profile (42 Markers)
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
            RESULT VERIFIED
          </span>
        </div>

        {/* Pathology Biomarker Breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Vitamin D3</div>
            <div className="text-sm font-bold text-white mt-1">78 nmol/L</div>
            <div className="text-[9px] text-emerald-400">Optimal Range</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Ferritin</div>
            <div className="text-sm font-bold text-white mt-1">112 µg/L</div>
            <div className="text-[9px] text-emerald-400">Normal Range</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">HbA1c</div>
            <div className="text-sm font-bold text-white mt-1">33 mmol/mol</div>
            <div className="text-[9px] text-emerald-400">Normal Range</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Total Cholesterol</div>
            <div className="text-sm font-bold text-[#00E5FF] mt-1">4.2 mmol/L</div>
            <div className="text-[9px] text-emerald-400">Low Risk</div>
          </div>
        </div>

        {/* Doctor Summary Review */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/70 border border-white/10 text-xs">
          <div className="flex justify-between text-[10px] font-mono text-[#D4A373] mb-1">
            <span>GMC CERTIFIED PHYSICIAN COMMENTARY</span>
            <span className="text-white">DR. HELENA LIND, MBChB</span>
          </div>
          <p className="text-[11px] text-[#94A3B8]">
            &ldquo;All key metabolic and inflammatory markers are within normal clinical thresholds. Vitamin D3 levels show healthy sufficiency following recent supplementation.&rdquo;
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "lpc-federate",
    name: "LPC Federate",
    logoUrl: "/logos/lpc-federate.svg",
    category: "Primary Care Workforce",
    destination: "https://lpc.federate.healthcare",
    deviceType: "Desktop",
    badge: "NHS PCN Rota Network",
    headline: "Federated Primary Care Staffing & Compliance Matrix",
    description:
      "Enterprise rota orchestration connecting dozens of general practices across a Primary Care Network. Enables dynamic shift broadcasts, locum GP credential verification, and automated compliance auditing.",
    keySpecs: [
      { label: "Surgeries Linked", value: "24 Practices" },
      { label: "GMC Checks", value: "Realtime API" },
      { label: "Fill Rate", value: "98.4% Compliant" },
      { label: "Role Scope", value: "GP, Nurse, ANP, Paramedic" },
    ],
    screenContent: (
      <div className="space-y-4">
        {/* LPC Top Bar with Genuine Logo */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#040810]/80 border border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="px-3 py-1 rounded-lg bg-[#07111F] border border-white/10 flex items-center justify-center">
              <img
                src="/logos/lpc-federate.svg"
                alt="LPC Federate"
                className="h-6 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Midlands Primary Care Federation
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                24 General Practices • Central Rota Dispatch
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
            NETWORK: SYNCHRONIZED
          </span>
        </div>

        {/* Rota Matrix Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-[#040810]/60 border border-amber-500/30 space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-amber-400 font-bold">URGENT VACANCY</span>
              <span className="text-white">TODAY 14:00</span>
            </div>
            <div className="text-xs font-bold text-white">Elmwood Surgery</div>
            <div className="text-[11px] text-[#94A3B8]">Duty GP Required • 6h Shift</div>
            <div className="p-1.5 rounded bg-amber-500/10 text-[10px] font-mono text-amber-300">
              Broadcasted to 14 Verified Locums
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5 space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-emerald-400 font-bold">CONFIRMED COVER</span>
              <span className="text-white">TODAY 08:30</span>
            </div>
            <div className="text-xs font-bold text-white">Kingsway Medical</div>
            <div className="text-[11px] text-[#94A3B8]">Dr. N. Shah (GP Partner)</div>
            <div className="p-1.5 rounded bg-white/5 text-[10px] font-mono text-[#00E5FF]">
              GMC Status: Validated
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5 space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-emerald-400 font-bold">CONFIRMED COVER</span>
              <span className="text-white">TOMORROW</span>
            </div>
            <div className="text-xs font-bold text-white">Bridge Road Practice</div>
            <div className="text-[11px] text-[#94A3B8]">Nurse Practitioner (ANP)</div>
            <div className="p-1.5 rounded bg-white/5 text-[10px] font-mono text-[#00E5FF]">
              NMC PIN: Checked
            </div>
          </div>
        </div>

        {/* Live Broadcast & Audit Status */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/70 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#00E5FF]" />
            <span className="text-[#94A3B8]">
              Automated GMC Register Check, DBS Status & Indemnity Vault
            </span>
          </div>
          <span className="font-mono text-emerald-400 font-bold">100% CQC READY</span>
        </div>
      </div>
    ),
  },
  {
    id: "aeromedical",
    name: "Aeromedical",
    logoUrl: "/logos/aeromedical.webp",
    category: "Aviation Medicine",
    destination: "https://aeromedical.co.uk",
    deviceType: "Desktop",
    badge: "Flight Crew Licensing",
    headline: "UK CAA & EASA Aviation Medical Certification Portal",
    description:
      "A specialized clinical examination and compliance management system designed for Aeromedical Examiners (AMEs) issuing Class 1, 2, and 3 pilot medical certificates.",
    keySpecs: [
      { label: "Regulatory Standard", value: "UK CAA & EASA" },
      { label: "Exam Classes", value: "Class 1, 2, 3, LAPL" },
      { label: "Telemetry", value: "Resting ECG & Audiogram" },
      { label: "Certification", value: "Direct Regulatory Sync" },
    ],
    screenContent: (
      <div className="space-y-4">
        {/* Aeromedical Top Bar with Genuine Logo */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#040810]/80 border border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="px-3 py-1 rounded-lg bg-[#07111F] border border-white/10 flex items-center justify-center">
              <img
                src="/logos/aeromedical.webp"
                alt="Aeromedical"
                className="h-6 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Aviation Medical Examination: Flight Crew Class 1
              </div>
              <div className="text-[10px] text-[#94A3B8]">
                Candidate: Commercial Airline Captain • Licence #UK-ATPL-9921
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
            FIT TO FLY (CLASS 1)
          </span>
        </div>

        {/* Specialized Exam Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">PULMONARY FUNCTION</div>
            <div className="text-sm font-bold text-white mt-1">FEV1 / FVC: 86%</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">Spirometry Normal</div>
          </div>
          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">AUDIOMETRY (PURE TONE)</div>
            <div className="text-sm font-bold text-white mt-1">Class 1 Compliant</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">&lt; 20 dB across 500-3000Hz</div>
          </div>
          <div className="p-3 rounded-xl bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">RESTING 12-LEAD ECG</div>
            <div className="text-sm font-bold text-white mt-1">Normal Sinus Rhythm</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">No Ischemic Changes</div>
          </div>
        </div>

        {/* Certificate Issuance Bar */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/70 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <FileCheck className="h-4 w-4 text-[#00E5FF]" />
            <span className="text-[#94A3B8]">
              UK CAA Medical Certificate Generated & Signed with Authorized AME Key
            </span>
          </div>
          <span className="font-mono text-[#00E5FF] font-bold">VALID 12 MONTHS</span>
        </div>
      </div>
    ),
  },
];

export const ProductUIShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(UI_WORKFLOWS[0].id);

  const activeWorkflow =
    UI_WORKFLOWS.find((w) => w.id === activeTab) || UI_WORKFLOWS[0];

  return (
    <section className="relative py-28 bg-[#07111F] border-t border-white/[0.08] overflow-hidden">
      {/* Background CAD Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[radial-gradient(ellipse,rgba(0,229,255,0.06)_0%,transparent_75%)] pointer-events-none blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-[#00E5FF]/20 text-xs font-mono text-[#00E5FF] mb-4">
            <Sparkles className="h-3 w-3 text-[#00E5FF]" />
            05 // PRODUCT INTERFACE SUITE
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Command Centers Built for{" "}
            <span className="text-[#00E5FF]">Clinical Precision.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8] mt-4 leading-relaxed">
            From high-density desktop clinical EMR workstations to primary care rota matrices, emergency ambulance telemetry dispatch, and aviation examination suites—explore our simulated product interfaces below.
          </p>
        </div>

        {/* Workflow Tab Selector Bar with Authentic Logos */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {UI_WORKFLOWS.map((wf) => {
            const isActive = wf.id === activeTab;

            return (
              <button
                key={wf.id}
                onClick={() => setActiveTab(wf.id)}
                className={`flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#0D1C2E] text-white border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.25)]"
                    : "bg-[#040810]/70 text-[#94A3B8] hover:text-white border-white/5 hover:bg-[#0D1C2E]/40"
                }`}
              >
                <img
                  src={wf.logoUrl}
                  alt={wf.name}
                  className="h-4 max-w-[80px] w-auto object-contain opacity-90"
                />
                <span>{wf.name}</span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded hidden sm:inline ${
                    isActive
                      ? "bg-[#00E5FF]/20 text-[#00E5FF]"
                      : "bg-white/5 text-[#94A3B8]"
                  }`}
                >
                  {wf.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Device Command Center Stage (macOS Glass Window Frame) */}
        <div className="cad-corner relative rounded-3xl bg-gradient-to-b from-[#0D1C2E] to-[#040810] border border-white/10 p-4 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(0,229,255,0.1)]">
          
          {/* Simulated macOS Window Chrome Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>

            {/* Address Bar */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#040810]/80 border border-white/10 text-[11px] font-mono text-[#94A3B8]">
              <Lock className="h-3 w-3 text-emerald-400" />
              <span className="text-white/80">
                {activeWorkflow.destination.startsWith("http")
                  ? activeWorkflow.destination
                  : `https://healthcare.noorisys.com${activeWorkflow.destination}`}
              </span>
              <span className="text-[#00E5FF]">• TLS 1.3 ENCRYPTED</span>
            </div>

            {/* Device Badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4A373]">
              <Monitor className="h-4 w-4" />
              <span>{activeWorkflow.deviceType} Viewport</span>
            </div>
          </div>

          {/* Workflow Narrative Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-6 p-5 rounded-2xl bg-[#07111F]/90 border border-white/5">
            <div className="lg:col-span-8 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#040810] border border-white/10 shrink-0">
                <img
                  src={activeWorkflow.logoUrl}
                  alt={activeWorkflow.name}
                  className="h-8 max-w-[120px] w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#00E5FF] px-2 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/20">
                  {activeWorkflow.badge}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-2">
                  {activeWorkflow.headline}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  {activeWorkflow.description}
                </p>
              </div>
            </div>

            {/* Architectural Specs */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-2 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6">
              {activeWorkflow.keySpecs.map((spec, sIdx) => (
                <div key={sIdx} className="p-2 rounded-lg bg-[#040810]/60">
                  <div className="text-[9px] font-mono text-[#94A3B8]">{spec.label}</div>
                  <div className="text-xs font-bold font-mono text-white mt-0.5">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated Screen Content Viewport */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorkflow.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-4 sm:p-6 rounded-2xl bg-[#040810]/90 border border-white/10 shadow-inner"
            >
              {activeWorkflow.screenContent}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Bar: Action Links & Destination */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero-Knowledge Encryption</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[#00E5FF]" />
                <span>Sub-Second Telemetry Sync</span>
              </span>
            </div>

            {activeWorkflow.destination.startsWith("http") ? (
              <a
                href={activeWorkflow.destination}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 border border-[#00E5FF]/30 text-xs font-bold text-[#00E5FF] transition-all"
              >
                <span>Launch Live Product Site</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                href={activeWorkflow.destination}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 border border-[#00E5FF]/30 text-xs font-bold text-[#00E5FF] transition-all"
              >
                <span>View Product Architecture</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
