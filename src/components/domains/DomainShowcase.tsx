"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  CheckCircle2,
  Activity,
  Layers,
  Shield,
  Clock,
  MapPin,
  Heart,
  Plane,
  FileText,
} from "lucide-react";
import { HEALTHCARE_DOMAINS } from "@/data/domains";
import { PRODUCTS } from "@/data/products";

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  Stethoscope,
  Users,
  Video,
  Ambulance,
  QrCode,
  Pill,
  ShieldCheck,
};

// Custom interactive simulated clinical scenario vignettes for each domain
const SCENARIO_VIGNETTES: Record<
  string,
  {
    stageTitle: string;
    stageSubtitle: string;
    telemetryTag: string;
    renderVisual: () => React.ReactNode;
  }
> = {
  "clinical-management": {
    stageTitle: "EMR Practice Command Hub",
    stageSubtitle: "Encrypted Outpatient Charting & Prescription Matrix",
    telemetryTag: "EMR_SECURE // TLS 1.3 // HL7 FHIR",
    renderVisual: () => (
      <div className="space-y-4">
        {/* Top patient chart header */}
        <div className="p-3.5 rounded-xl bg-[#040810]/80 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] font-mono text-xs font-bold">
              PT
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Patient ID: #NX-88204</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  ACTIVE CHART
                </span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                Consultation: Dr. Sarah Vance • General Practice
              </div>
            </div>
          </div>
          <div className="text-right font-mono text-[11px] text-[#00E5FF]">
            10:42:15 UTC
          </div>
        </div>

        {/* Live vitals & clinical notes simulation */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Heart Rate</div>
            <div className="text-base font-bold text-white font-mono mt-0.5 flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              <span>72 BPM</span>
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8] uppercase">Blood Pressure</div>
            <div className="text-base font-bold text-white font-mono mt-0.5">118/76</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8] uppercase">SpO2 Oxygen</div>
            <div className="text-base font-bold text-[#00E5FF] font-mono mt-0.5">99%</div>
          </div>
        </div>

        {/* Prescription Safety Check Protocol */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/80 border border-[#00E5FF]/20">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-mono text-[10px] text-[#D4A373] uppercase tracking-wider">
              Rx Verification Pipeline
            </span>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> 0 Contraindications
            </span>
          </div>
          <div className="text-xs text-white font-medium">
            Amoxicillin 500mg • 3x Daily with Food • 7-Day Cycle
          </div>
          <div className="text-[10px] text-[#94A3B8] mt-1">
            Validated against NHS dm+d and international contraindication database.
          </div>
        </div>
      </div>
    ),
  },
  "workforce-infrastructure": {
    stageTitle: "Primary Care Rota Orchestrator",
    stageSubtitle: "GP Federation Shift Broadcast & GMC Credential Vault",
    telemetryTag: "PCN_DISPATCH // 24 SURGERIES // LIVE SYNC",
    renderVisual: () => (
      <div className="space-y-4">
        {/* Rota Alert Banner */}
        <div className="p-3.5 rounded-xl bg-[#040810]/80 border border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono text-xs font-bold">
              NHS
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>St. Jude Medical Centre</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 font-mono">
                  URGENT COVER
                </span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                Duty GP Shift: 14:00 - 20:00 (6 hrs)
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-white px-2 py-1 rounded bg-white/10">
              £95 / hr
            </span>
          </div>
        </div>

        {/* Active Clinicians Shift Matrix */}
        <div className="space-y-2">
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white font-medium">Dr. M. Campbell (GP Partner)</span>
            </div>
            <span className="font-mono text-[11px] text-[#00E5FF]">Surgery Room 3 • Active</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white font-medium">Dr. R. Al-Mansoor (Locum GP)</span>
            </div>
            <span className="font-mono text-[11px] text-[#00E5FF]">GMC #728109 • Confirmed</span>
          </div>
        </div>

        {/* Compliance Assurance Vault */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/80 border border-[#00E5FF]/20 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#D4A373] uppercase tracking-wider">
              Compliance Vault
            </div>
            <div className="text-xs text-white mt-0.5">Automated GMC & DBS Record Checks</div>
          </div>
          <div className="text-right font-mono text-xs text-emerald-400 font-bold">
            100% VERIFIED
          </div>
        </div>
      </div>
    ),
  },
  "patient-care": {
    stageTitle: "Encrypted Patient Consultation Portal",
    stageSubtitle: "HD WebRTC Telehealth & Cross-Border Health Locker",
    telemetryTag: "WEBRTC_SECURE // AES-256 // ZERO BUFFER",
    renderVisual: () => (
      <div className="space-y-4">
        {/* Teleconsultation Video Frame Simulation */}
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#040810] to-[#0D1C2E] border border-[#00E5FF]/30 p-4">
          <div className="flex items-center justify-between text-xs mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="font-mono text-[10px] text-white font-semibold">
                ENCRYPTED CALL IN PROGRESS
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#00E5FF]">00:14:32 • 1080p</span>
          </div>

          <div className="p-4 rounded-lg bg-[#07111F]/90 border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#12CDB5]/20 border border-[#12CDB5]/40 flex items-center justify-center text-[#12CDB5]">
              <Video className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Dr. Amina Touré, MD</div>
              <div className="text-[11px] text-[#94A3B8]">Pediatric & Family Telemedicine</div>
              <div className="text-[10px] font-mono text-emerald-400 mt-0.5">
                ● Audio: Crisp (Opus 48kHz) • Latency: 24ms
              </div>
            </div>
          </div>
        </div>

        {/* Digital Prescription & Medical Locker */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Digital Rx Delivery</div>
            <div className="text-xs font-bold text-white mt-1">Instant to Patient App</div>
            <div className="text-[10px] text-[#00E5FF] mt-0.5">QR Code Ready</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Micro-Payment</div>
            <div className="text-xs font-bold text-white mt-1">Multi-Currency Wallet</div>
            <div className="text-[10px] text-emerald-400 mt-0.5">Instant Settlement</div>
          </div>
        </div>
      </div>
    ),
  },
  "emergency-community": {
    stageTitle: "Emergency Dispatch & LifeLink Matrix",
    stageSubtitle: "Sub-Second GPS Ambulance Tracking & Blood Mobilization",
    telemetryTag: "DISPATCH_RADAR // PRIORITY_1 // LIVE GPS",
    renderVisual: () => (
      <div className="space-y-4">
        {/* Urgent Emergency Beacon */}
        <div className="p-3.5 rounded-xl bg-[#040810]/80 border border-red-500/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-mono text-xs font-bold">
              SOS
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Ambulance Unit Alpha-7</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-red-500/20 text-red-400 font-mono">
                  EN ROUTE
                </span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                Trauma Center: Central Hospital Bay 2
              </div>
            </div>
          </div>
          <div className="text-right font-mono text-xs font-bold text-emerald-400">
            ETA 4.2 MIN
          </div>
        </div>

        {/* LifeLink Blood Donor Mobilization Grid */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/80 border border-[#00E5FF]/20">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-mono text-[10px] text-[#D4A373] uppercase tracking-wider">
              LifeLink Blood Match
            </span>
            <span className="text-[10px] text-red-400 font-mono font-bold flex items-center gap-1">
              <Heart className="h-3 w-3 fill-red-400" /> Type O-Negative Urgent
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 rounded bg-[#040810]/60">
              <div className="text-white font-mono font-bold">14</div>
              <div className="text-[9px] text-[#94A3B8]">Donors Alerted</div>
            </div>
            <div className="p-2 rounded bg-[#040810]/60">
              <div className="text-emerald-400 font-mono font-bold">6</div>
              <div className="text-[9px] text-[#94A3B8]">Accepted</div>
            </div>
            <div className="p-2 rounded bg-[#040810]/60">
              <div className="text-[#00E5FF] font-mono font-bold">&lt;15m</div>
              <div className="text-[9px] text-[#94A3B8]">Donor Distance</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "digital-diagnostics": {
    stageTitle: "Laboratory Diagnostic Intake",
    stageSubtitle: "Barcode Specimen Tracking & Automated LIS Ingestion",
    telemetryTag: "LIS_INGEST // ISO 15189 // ACCREDITED",
    renderVisual: () => (
      <div className="space-y-4">
        {/* Specimen Barcode Tube Header */}
        <div className="p-3.5 rounded-xl bg-[#040810]/80 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
              <QrCode className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Barcode: #WLZ-9042-BIO</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-400 font-mono">
                  IN LAB PROCESSING
                </span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">Panel: Comprehensive Thyroid Profile</div>
            </div>
          </div>
          <div className="text-right font-mono text-[11px] text-emerald-400">
            Validated
          </div>
        </div>

        {/* Biomarker Telemetry Matrix */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">TSH Level</div>
            <div className="text-sm font-bold text-white font-mono mt-0.5">2.14 mIU/L</div>
            <div className="text-[9px] text-emerald-400">Normal Range</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Free T4</div>
            <div className="text-sm font-bold text-white font-mono mt-0.5">14.8 pmol/L</div>
            <div className="text-[9px] text-emerald-400">Normal Range</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Physician Review</div>
            <div className="text-sm font-bold text-[#00E5FF] font-mono mt-0.5">Dr. K. Patel</div>
            <div className="text-[9px] text-[#94A3B8]">Auto-Released</div>
          </div>
        </div>

        {/* Self-Service Check-In Kiosk */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/80 border border-[#00E5FF]/20 flex items-center justify-between text-xs">
          <div>
            <div className="text-[10px] font-mono text-[#D4A373] uppercase tracking-wider">
              Contactless Intake Kiosk
            </div>
            <div className="text-white mt-0.5">Patient Arrival to Check-in Complete</div>
          </div>
          <span className="font-mono text-[#00E5FF] font-bold">&lt; 45 Seconds</span>
        </div>
      </div>
    ),
  },
  "pharmacy-wellness": {
    stageTitle: "Digital Pharmacy Fulfillment",
    stageSubtitle: "Prescription Dispensing & Cold-Chain Delivery Routing",
    telemetryTag: "DISPENSE_OS // DIRECT COURIER // COLD CHAIN",
    renderVisual: () => (
      <div className="space-y-4">
        {/* Prescription Fulfillment Status */}
        <div className="p-3.5 rounded-xl bg-[#040810]/80 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Pill className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Order #CUR-4491-RX</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                  DISPATCH READY
                </span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                Verified by: Supervised Clinical Pharmacist
              </div>
            </div>
          </div>
          <div className="text-right font-mono text-[11px] text-[#00E5FF]">
            Locked Box #B-12
          </div>
        </div>

        {/* Cold-Chain IoT Sensor Readout */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/80 border border-[#00E5FF]/20">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-mono text-[10px] text-[#D4A373] uppercase tracking-wider">
              IoT Cold-Chain Telemetry
            </span>
            <span className="text-[10px] text-emerald-400 font-mono font-bold">
              Temp: +4.2°C (Optimal 2-8°C)
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-[#00E5FF] w-3/4 rounded-full" />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-[#94A3B8] mt-1.5">
            <span>Vaccine Package Thermal Seal</span>
            <span>Tamper Sensor: Sealed</span>
          </div>
        </div>

        {/* Repeat Prescription Automation */}
        <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5 flex items-center justify-between text-xs">
          <span className="text-white">Repeat Cycle Sync: 28 Days</span>
          <span className="text-emerald-400 font-mono text-[11px]">Next Refill: 14 Nov</span>
        </div>
      </div>
    ),
  },
  "specialized-services": {
    stageTitle: "Aeromedical Pilot Certification",
    stageSubtitle: "UK CAA & EASA Flight Crew Medical Examinations",
    telemetryTag: "CAA_EASA_COMPLIANT // CLASS 1 // AUDIOGRAM SYNC",
    renderVisual: () => (
      <div className="space-y-4">
        {/* Flight Crew License Dossier Header */}
        <div className="p-3.5 rounded-xl bg-[#040810]/80 border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF]">
              <Plane className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Flight Crew Class 1 Medical</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-[#00E5FF] font-mono">
                  REGULATORY AUDIT
                </span>
              </div>
              <div className="text-[11px] text-[#94A3B8]">
                Authority: UK Civil Aviation Authority (CAA)
              </div>
            </div>
          </div>
          <div className="text-right font-mono text-[11px] text-emerald-400">
            PASSED
          </div>
        </div>

        {/* Aviation Examination Telemetry */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Audiogram</div>
            <div className="text-xs font-bold text-white font-mono mt-0.5">20 dB Threshold</div>
            <div className="text-[9px] text-emerald-400">Class 1 Fit</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Resting ECG</div>
            <div className="text-xs font-bold text-white font-mono mt-0.5">Normal Sinus</div>
            <div className="text-[9px] text-emerald-400">Telemetry Sync</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#040810]/60 border border-white/5">
            <div className="text-[10px] font-mono text-[#94A3B8]">Ishihara Color</div>
            <div className="text-xs font-bold text-white font-mono mt-0.5">15/15 Plates</div>
            <div className="text-[9px] text-emerald-400">Full Standard</div>
          </div>
        </div>

        {/* Chain-of-Custody Logistics */}
        <div className="p-3 rounded-xl bg-[#0D1C2E]/80 border border-[#00E5FF]/20 flex items-center justify-between text-xs">
          <div>
            <div className="text-[10px] font-mono text-[#D4A373] uppercase tracking-wider">
              Specialized Biological Couriers
            </div>
            <div className="text-white mt-0.5">Certified Chain of Custody & IoT Handover</div>
          </div>
          <span className="font-mono text-emerald-400 font-bold">UN3373 Certified</span>
        </div>
      </div>
    ),
  },
};

export const DomainShowcase: React.FC = () => {
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);

  const activeDomain = HEALTHCARE_DOMAINS[activeDomainIndex];
  const IconComponent = DOMAIN_ICONS[activeDomain.icon] || Stethoscope;
  const vignette =
    SCENARIO_VIGNETTES[activeDomain.id] || SCENARIO_VIGNETTES["clinical-management"];

  const associatedProducts = PRODUCTS.filter((p) =>
    activeDomain.productSlugs.includes(p.slug)
  );

  return (
    <section className="relative py-28 bg-[#040810] border-t border-white/[0.08] overflow-hidden">
      {/* Background CAD Matrix Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.012)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(0,229,255,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with CAD Crosshair Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-10 border-b border-white/[0.08] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-[#00E5FF]/20 text-xs font-mono text-[#00E5FF] mb-4">
              <Sparkles className="h-3 w-3 text-[#00E5FF]" />
              04 // CLINICAL DOMAIN ARCHITECTURE
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Specialized Care Domains.{" "}
              <span className="text-[#00E5FF]">Engineered for Clinical Truth.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94A3B8] leading-relaxed">
            Rather than generic medical software, each Noorisys Healthcare solution resolves operational friction within a dedicated clinical environment. Explore our 7 core domains below.
          </p>
        </div>

        {/* Domain Navigation Tabs (Horizontal Scroll / Clickable Timeline) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {HEALTHCARE_DOMAINS.map((domain, idx) => {
            const TabIcon = DOMAIN_ICONS[domain.icon] || Stethoscope;
            const isActive = idx === activeDomainIndex;

            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomainIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#0D1C2E] text-white border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.2)]"
                    : "bg-[#07111F]/70 text-[#94A3B8] hover:text-white border-white/5 hover:bg-[#0D1C2E]/50"
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${
                    isActive ? "text-[#00E5FF]" : "text-[#94A3B8]"
                  }`}
                >
                  0{idx + 1}
                </span>
                <TabIcon
                  className={`h-4 w-4 ${
                    isActive ? "text-[#00E5FF]" : "text-[#94A3B8]"
                  }`}
                />
                <span className="whitespace-nowrap">{domain.title.split("&")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Clinical Scenario Stage (Vignette Left + Dossier Right) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="cad-corner grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 rounded-3xl bg-[#07111F]/90 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Left Column: Simulated Clinical Interface Vignette */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#040810] border border-white/10 relative overflow-hidden">
              {/* Background ambient gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle,rgba(0,229,255,0.08)_0%,transparent_70%)] pointer-events-none blur-2xl" />

              <div>
                {/* Vignette Stage Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[10px] text-[#00E5FF] tracking-wider uppercase">
                      {vignette.telemetryTag}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4A373] px-2 py-0.5 rounded bg-white/5">
                    SIMULATION
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  {vignette.stageTitle}
                </h3>
                <p className="text-xs text-[#94A3B8] mb-6">{vignette.stageSubtitle}</p>

                {/* Render the specialized interactive visual */}
                {vignette.renderVisual()}
              </div>

              {/* Bottom metadata */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#94A3B8]">
                <div className="flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-[#00E5FF]" />
                  <span>Clinical Audit Trail Active</span>
                </div>
                <span className="font-mono text-[#D4A373]">Domain 0{activeDomainIndex + 1} of 07</span>
              </div>
            </div>

            {/* Right Column: Detailed Clinical Domain Dossier */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Eyebrow & Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#0D1C2E] border border-white/10 text-[#00E5FF]">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#D4A373]">
                      DOMAIN SPECIFICATION
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      {activeDomain.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-[#00E5FF] mb-4">
                  &ldquo;{activeDomain.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {activeDomain.fullDescription}
                </p>

                {/* Key Engineered Capabilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3">
                    Architectural Capabilities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeDomain.keyCapabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-[#0D1C2E]/60 border border-white/5 text-xs text-[#94A3B8]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 leading-tight">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Products in this Domain */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D4A373] mb-3">
                    Verified Portfolio Products in this Domain:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {associatedProducts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.slug}`}
                        className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0D1C2E] hover:bg-[#00E5FF]/10 border border-white/10 hover:border-[#00E5FF]/40 text-xs font-medium text-white transition-all duration-200"
                      >
                        {p.logoUrl ? (
                          <span className="px-1.5 py-0.5 rounded bg-white/95 inline-flex items-center shadow-2xs">
                            <img
                              src={p.logoUrl}
                              alt={p.name}
                              className="h-3.5 max-w-[70px] w-auto object-contain"
                            />
                          </span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        )}
                        <span>{p.name}</span>
                        <ArrowRight className="h-3 w-3 text-[#94A3B8] group-hover:text-[#00E5FF] group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/solutions#${activeDomain.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#00E5FF] hover:text-[#43E6D0] transition-colors"
                >
                  <span>Explore Full Domain Deep Dive</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActiveDomainIndex((prev) =>
                        prev === 0 ? HEALTHCARE_DOMAINS.length - 1 : prev - 1
                      )
                    }
                    className="p-2 rounded-lg bg-[#0D1C2E] border border-white/10 text-white hover:border-[#00E5FF]/40 text-xs transition-colors"
                    aria-label="Previous domain"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setActiveDomainIndex((prev) =>
                        (prev + 1) % HEALTHCARE_DOMAINS.length
                      )
                    }
                    className="p-2 rounded-lg bg-[#0D1C2E] border border-white/10 text-white hover:border-[#00E5FF]/40 text-xs transition-colors"
                    aria-label="Next domain"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
