"use client";

import React from "react";
import { Product } from "@/types";
import {
  Activity,
  Heart,
  Radio,
  Shield,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  User,
  Users,
  FileText,
  AlertTriangle,
  QrCode,
  Truck,
  Video,
  CreditCard,
  Plane,
  Pill,
  Thermometer,
  ShieldCheck,
  Stethoscope,
  Microscope,
} from "lucide-react";

interface ProductVisual3DProps {
  product: Product;
  accentColor: string;
}

export const ProductVisual3D: React.FC<ProductVisual3DProps> = ({
  product,
  accentColor,
}) => {
  // Render authentic clinical interface mockup based on product id
  switch (product.id) {
    case "nakbho":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          {/* Window Chrome Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-white/90 font-bold">EMR Station 01</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE SESSION</span>
            </div>
          </div>

          {/* Patient Card Preview */}
          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5 shadow-inner">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">#NK-881920 (Adult Male, 46y)</div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                HL7/FHIR
              </span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Primary: Outpatient Hypertension Review
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="p-1 rounded bg-white/[0.04] text-center">
                <span className="text-[8px] text-[#64748B] block">HEART RATE</span>
                <span className="text-[11px] font-mono font-bold text-white">72 BPM</span>
              </div>
              <div className="p-1 rounded bg-white/[0.04] text-center">
                <span className="text-[8px] text-[#64748B] block">BLOOD PRESS.</span>
                <span className="text-[11px] font-mono font-bold text-white">124/82</span>
              </div>
              <div className="p-1 rounded bg-white/[0.04] text-center">
                <span className="text-[8px] text-[#64748B] block">SpO2</span>
                <span className="text-[11px] font-mono font-bold text-[#00E5FF]">99%</span>
              </div>
            </div>
          </div>

          {/* Bottom Protocol Pill */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span className="text-emerald-400">✓ Digital Rx Synchronized</span>
            <span>AES-256 GCM</span>
          </div>
        </div>
      );

    case "clinicdots":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-white/90 font-bold">Outpatient Room 4</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>QUEUE: 12 WAITING</span>
            </div>
          </div>

          {/* Queue & Consultation Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1">
              <span className="text-[8px] font-mono text-[#D4A373] uppercase block">
                Next In Queue
              </span>
              <div className="text-[11px] font-bold text-white truncate">Arthur P.</div>
              <div className="text-[9px] text-[#94A3B8]">Review: BP Check</div>
              <span className="text-[8px] font-mono text-emerald-400 block pt-1">Bay 02 Ready</span>
            </div>
            <div className="p-2 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1">
              <span className="text-[8px] font-mono text-[#10B981] uppercase block">
                Pharmacy Sync
              </span>
              <div className="text-[11px] font-bold text-white truncate">Lisinopril 10mg</div>
              <div className="text-[9px] text-[#94A3B8]">Dispense: In Stock</div>
              <span className="text-[8px] font-mono text-[#10B981] block pt-1">Rx Auto-Routed</span>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Attending: Dr. E. Davies, MBBS</span>
            <span className="text-emerald-400">Zero Paperwork</span>
          </div>
        </div>
      );

    case "lpc-federate":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#A855F7]/80" />
              <span className="ml-2 text-white/90 font-bold">Midlands PCN Rota</span>
            </div>
            <span className="text-[#A855F7] font-mono text-[9px]">24 SURGERIES</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-amber-400 font-bold">URGENT VACANCY COVER</span>
              <span className="text-white">TODAY 14:00</span>
            </div>
            <div className="text-xs font-bold text-white">Elmwood Medical Centre</div>
            <div className="text-[10px] text-[#94A3B8]">
              Duty GP • Broadcasted to 14 Verified Locums
            </div>
            <div className="flex items-center gap-2 pt-1 text-[9px] font-mono text-emerald-400">
              <span>✓ GMC Register Verified</span>
              <span>•</span>
              <span>100% CQC Compliant</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Fill Rate: 98.4% Compliant</span>
            <span className="text-[#A855F7]">Live Shift Dispatch</span>
          </div>
        </div>
      );

    case "hanadoc":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]/80" />
              <span className="ml-2 text-white/90 font-bold">Clinical Network</span>
            </div>
            <span className="text-[#38BDF8] font-mono text-[9px]">PEER-TO-PEER</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-bold text-white">Clinical Referral Pathway</span>
              <span className="text-[9px] font-mono text-emerald-400">CONNECTED</span>
            </div>
            <div className="space-y-1 text-[10px] text-[#94A3B8]">
              <div className="flex justify-between p-1 rounded bg-white/[0.03]">
                <span>09:30 • Polyclinic Intake</span>
                <span className="text-emerald-400 font-mono">Confirmed</span>
              </div>
              <div className="flex justify-between p-1 rounded bg-white/[0.03]">
                <span>11:00 • Cardiology Referral</span>
                <span className="text-[#38BDF8] font-mono">Synced</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Automated Scheduling Sync</span>
            <span className="text-emerald-400">Zero Administrative Friction</span>
          </div>
        </div>
      );

    case "chapchap":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F43F5E] animate-ping" />
              <span className="ml-2 text-white/90 font-bold">Emergency GPS Radar</span>
            </div>
            <span className="text-[#F43F5E] font-mono font-bold text-[9px]">PRIORITY 1</span>
          </div>

          <div className="relative p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 overflow-hidden space-y-1.5">
            <div className="absolute right-2 -bottom-2 w-16 h-16 rounded-full border border-[#F43F5E]/20 pointer-events-none" />
            <div className="absolute right-5 1 w-10 h-10 rounded-full border border-[#F43F5E]/15 pointer-events-none" />

            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">AMBULANCE #07 DISPATCHED</div>
              <span className="text-[10px] font-mono text-[#F43F5E] font-bold">ETA 4 MINS</span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Destination: Central Trauma Center • Bed 02 Reserved
            </div>
            <div className="text-[9px] font-mono text-emerald-400 pt-0.5">
              Live Patient Telemetry Streaming to ER Bay
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Real-time GPS Telemetry</span>
            <span className="text-[#F43F5E]">Hospital Bed Locked</span>
          </div>
        </div>
      );

    case "fastercheck":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#14B8A6]/80" />
              <span className="ml-2 text-white/90 font-bold">Check-In Kiosk #03</span>
            </div>
            <span className="text-[#14B8A6] font-mono text-[9px]">UNDER 60 SEC</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 border border-[#14B8A6]/30 flex items-center justify-center shrink-0">
                <QrCode className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <div className="text-[10px]">
                <div className="font-bold text-white">Contactless QR Check-In</div>
                <div className="text-[#94A3B8]">Digital Consent Confirmed</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono px-1 py-1 rounded bg-white/[0.03]">
              <span className="text-[#94A3B8]">Acuity Priority: Level 2</span>
              <span className="text-emerald-400">EMR Synced</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Waiting Room Optimization</span>
            <span className="text-[#14B8A6]">Zero Desk Queue</span>
          </div>
        </div>
      );

    case "welzo":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#6366F1]/80" />
              <span className="ml-2 text-white/90 font-bold">Specimen #WZ-718</span>
            </div>
            <span className="text-emerald-400 font-mono text-[9px]">ISO 15189 LAB</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="text-[10px] font-bold text-white">42 Biomarker Advanced Panel</div>
            <div className="grid grid-cols-2 gap-1.5">
              <div className="p-1.5 rounded bg-white/[0.04]">
                <div className="text-[8px] text-[#64748B]">VITAMIN D3</div>
                <div className="text-xs font-bold text-white">78 nmol/L</div>
                <div className="text-[8px] text-emerald-400">Optimal Range</div>
              </div>
              <div className="p-1.5 rounded bg-white/[0.04]">
                <div className="text-[8px] text-[#64748B]">FERRITIN</div>
                <div className="text-xs font-bold text-white">112 µg/L</div>
                <div className="text-[8px] text-emerald-400">Normal Range</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>UKAS Accredited Lab</span>
            <span className="text-[#6366F1]">GMC Physician Sign-Off</span>
          </div>
        </div>
      );

    case "blood-donation":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
              <span className="ml-2 text-white/90 font-bold">Donor Geofence Radar</span>
            </div>
            <span className="text-[#EF4444] font-mono font-bold text-[9px]">URGENT MATCH</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">O-Negative Match Alert</div>
              <span className="text-[10px] font-mono text-emerald-400">3 Donors Nearby</span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Geofence Radius: 2.4 km • Trauma Ward Emergency
            </div>
            <div className="p-1 rounded bg-[#EF4444]/10 border border-[#EF4444]/20 text-[9px] font-mono text-[#EF4444]">
              Hospital Blood Bank Sync: Direct Dispatch
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Donor Number Protected</span>
            <span className="text-emerald-400">Instant Alert Push</span>
          </div>
        </div>
      );

    case "santeya":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#0D9488]/80" />
              <span className="ml-2 text-white/90 font-bold">Teleconsult Room</span>
            </div>
            <span className="text-emerald-400 font-mono text-[9px]">ENCRYPTED HD</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">Dr. A. Traore (General Practice)</div>
              <span className="text-[9px] font-mono text-[#00E5FF]">CONNECTED</span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Digital Prescription routed directly to local partner pharmacy
            </div>
            <div className="flex items-center gap-2 pt-0.5 text-[9px] font-mono text-emerald-400">
              <span>✓ Lab Requisition Linked</span>
              <span>•</span>
              <span>Health Vault Synced</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>WebRTC Secure Protocol</span>
            <span className="text-[#0D9488]">Full Care Loop</span>
          </div>
        </div>
      );

    case "coursier-medical":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]/80" />
              <span className="ml-2 text-white/90 font-bold">Cold-Chain Telemetry</span>
            </div>
            <span className="text-[#F59E0B] font-mono font-bold text-[9px]">STAT DISPATCH</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">Specimen Transit #CM-991</div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">+4.2°C STABLE</span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Threshold: 2°C to 8°C • Continuous IoT Thermal Sensor
            </div>
            <div className="text-[9px] font-mono text-amber-400 pt-0.5">
              Digital Chain of Custody: Signature Verified
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Live GPS Route Tracking</span>
            <span className="text-emerald-400">Tamper-Evident</span>
          </div>
        </div>
      );

    case "iyara":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#22C55E]/80" />
              <span className="ml-2 text-white/90 font-bold">Mobile Health Wallet</span>
            </div>
            <span className="text-[#22C55E] font-mono text-[9px]">CONTACTLESS NFC</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#94A3B8]">Dedicated Medical Fund</span>
              <span className="text-[9px] font-mono text-emerald-400">SECURE ESCROW</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold text-white">
              <span>Health Pass Verified</span>
              <span className="font-mono text-emerald-400">Instant QR Pay</span>
            </div>
            <div className="text-[9px] text-[#94A3B8]">
              Direct settlement at partner clinics & registered pharmacies
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Biometric Touch ID</span>
            <span className="text-[#22C55E]">Mobile Health Fintech</span>
          </div>
        </div>
      );

    case "allodocta":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]/80" />
              <span className="ml-2 text-white/90 font-bold">Telehealth Portal</span>
            </div>
            <span className="text-[#3B82F6] font-mono text-[9px]">LOW-LATENCY</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">Licensed Doctor Consultation</div>
              <span className="text-[9px] font-mono text-emerald-400">ACTIVE</span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Preliminary clinical symptom triage & remote diagnosis advice
            </div>
            <div className="text-[9px] font-mono text-[#3B82F6] pt-0.5">
              Adaptive Bandwidth: Optimized for Rural & Remote Access
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Digital Medical Certificate</span>
            <span className="text-emerald-400">24/7 Access</span>
          </div>
        </div>
      );

    case "izikare":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#C084FC]/80" />
              <span className="ml-2 text-white/90 font-bold">Care Voucher Portal</span>
            </div>
            <span className="text-[#C084FC] font-mono text-[9px]">DIASPORA CARE</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">Family Health Voucher #IK-5921</div>
              <span className="text-[9px] font-mono text-emerald-400">VERIFIED</span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Funded abroad • Direct clinic redemption without cash leakage
            </div>
            <div className="text-[9px] font-mono text-purple-300 pt-0.5">
              100% Care Directed: Partner Hospital & Pharmacy Network
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Real-Time Expense Transparency</span>
            <span className="text-emerald-400">Direct Care Settlement</span>
          </div>
        </div>
      );

    case "aeromedical":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#06B6D4]/80" />
              <span className="ml-2 text-white/90 font-bold">Aviation Medicine Portal</span>
            </div>
            <span className="text-emerald-400 font-mono text-[9px]">FIT TO FLY</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">UK CAA & EASA Regulatory Sync</div>
              <span className="text-[9px] font-mono text-[#06B6D4]">AME CERTIFIED</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[9px] font-mono">
              <div className="p-1 rounded bg-white/[0.04]">
                <span className="text-[#64748B] block">ECG STATUS</span>
                <span className="text-emerald-400 font-bold">Sinus Rhythm Normal</span>
              </div>
              <div className="p-1 rounded bg-white/[0.04]">
                <span className="text-[#64748B] block">AUDIOMETRY</span>
                <span className="text-white font-bold">&lt; 20 dB Pass</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Authorized AeMC Centre</span>
            <span className="text-[#06B6D4]">Valid 12 Months</span>
          </div>
        </div>
      );

    case "curigo":
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF]/80" />
              <span className="ml-2 text-white/90 font-bold">EPS NHS Dispensary</span>
            </div>
            <span className="text-emerald-400 font-mono text-[9px]">GPhC REGISTERED</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-white">Electronic Prescription #CG-4491</div>
              <span className="text-[9px] font-mono text-[#2DD4BF]">DISPATCHED</span>
            </div>
            <div className="text-[10px] text-[#94A3B8]">
              Automated NHS Repeat Refill • Discreet Tracked Delivery
            </div>
            <div className="text-[9px] font-mono text-emerald-400 pt-0.5">
              Clinical Pharmacist Medication Review: Completed
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>Tracked Doorstep Fulfillment</span>
            <span className="text-[#2DD4BF]">NHS Synced</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full p-3 flex flex-col justify-between text-left select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
            <div className="flex items-center gap-1.5 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{product.name} • HEALTHCARE OS</span>
            </div>
            <span className="text-[#00E5FF] px-1.5 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30">
              VERIFIED
            </span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#030914]/85 border border-white/10 space-y-1">
            <div className="text-xs font-bold text-white">{product.tagline}</div>
            <div className="text-[10px] text-[#94A3B8] line-clamp-2">
              {product.shortDescription}
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-[#94A3B8] px-1">
            <span>{product.category}</span>
            <span className="text-emerald-400">{product.status}</span>
          </div>
        </div>
      );
  }
};
