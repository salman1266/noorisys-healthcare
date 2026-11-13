"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Lock,
  Cpu,
  Layers,
  Network,
  Sparkles,
  Server,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Database,
  Radio,
  FileCode2,
} from "lucide-react";

interface ArchTier {
  id: string;
  name: string;
  badge: string;
  latency: string;
  description: string;
  nodes: { title: string; subtitle: string; icon: React.ElementType }[];
  protocols: string[];
}

const ARCH_TIERS: ArchTier[] = [
  {
    id: "edge",
    name: "01. CLIENT SURFACE & EDGE GATEWAY",
    badge: "Tier 1: Access",
    latency: "< 25ms TTFB",
    description:
      "Cross-platform clinical touchpoints optimized for low bandwidth, offline-first syncing, and biometric device authentication.",
    nodes: [
      { title: "Clinical Desktop EMR", subtitle: "macOS / Windows / Web", icon: Server },
      { title: "Paramedic Field Tablets", subtitle: "Ruggedized Android / iOS", icon: Radio },
      { title: "Patient Digital Locker", subtitle: "Biometric Mobile App", icon: Lock },
      { title: "Self-Service Kiosks", subtitle: "Touchscreen Check-In", icon: Cpu },
    ],
    protocols: ["HTTP/3", "TLS 1.3", "mTLS Edge Auth", "Wasm Client Sandbox"],
  },
  {
    id: "compute",
    name: "02. DISTRIBUTED APPLICATION & MEDIA BROKER",
    badge: "Tier 2: Compute",
    latency: "< 80ms Processing",
    description:
      "Stateless microservices cluster orchestrating real-time clinical workflows, live WebRTC video channels, and geospatial dispatch algorithms.",
    nodes: [
      { title: "Clinical Rota Engine", subtitle: "Constraint Solver Service", icon: Layers },
      { title: "WebRTC SFU Media Cluster", subtitle: "HD Low-Latency Stream", icon: Radio },
      { title: "Geospatial Dispatch Broker", subtitle: "1Hz Realtime Location", icon: Zap },
      { title: "HL7 / FHIR Transformer", subtitle: "Schema Normalization", icon: FileCode2 },
    ],
    protocols: ["gRPC", "WebSockets", "Kafka Event Bus", "WebRTC Opus/VP9"],
  },
  {
    id: "data",
    name: "03. ENCRYPTED PERSISTENCE & REGULATORY VAULT",
    badge: "Tier 3: Security",
    latency: "99.99% Availability",
    description:
      "Zero-knowledge encrypted healthcare storage with immutable audit trails, multi-region replication, and automated disaster recovery.",
    nodes: [
      { title: "Encrypted Health Store", subtitle: "AES-256 Field Level PHI", icon: Database },
      { title: "Immutable Audit Log", subtitle: "Cryptographic Tamper-Proof", icon: ShieldCheck },
      { title: "National Health Connectors", subtitle: "NHS dm+d / Spine / LIS", icon: Network },
      { title: "Zero-Trust Secret Manager", subtitle: "HSM Hardware Key Custody", icon: Lock },
    ],
    protocols: ["AES-256 GCM", "FHIR JSON", "ISO 27001", "HIPAA Cryptographic Storage"],
  },
];

const BENCHMARKS = [
  {
    title: "Zero-Knowledge PHI Encryption",
    category: "DATA PROTECTION",
    stat: "AES-256",
    statLabel: "GCM Field-Level",
    desc: "Protected Health Information (PHI) is encrypted at rest and in transit. Cryptographic keys are isolated in HSM hardware vaults with zero operator access.",
  },
  {
    title: "Sub-Second State Distribution",
    category: "REALTIME ENGINE",
    stat: "< 120ms",
    statLabel: "Global P99 Sync",
    desc: "Clinical charting updates, ambulance GPS telemetry, and urgent vacancy shift broadcasts propagate across connected clients with sub-second latency.",
  },
  {
    title: "Healthcare Interoperability",
    category: "STANDARDS COMPLIANCE",
    stat: "HL7 / FHIR",
    statLabel: "Standard Compliant",
    desc: "Seamless bidirectional exchange with Electronic Health Records (EHR), Laboratory Information Systems (LIS), and national prescription registries.",
  },
  {
    title: "High-Availability Resilience",
    category: "INFRASTRUCTURE SLA",
    stat: "99.99%",
    statLabel: "Target Uptime",
    desc: "Multi-region redundant architectures engineered to maintain clinical continuity during local network degradation or cloud provider outages.",
  },
];

export const TechInnovation: React.FC = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>("compute");

  const activeTier =
    ARCH_TIERS.find((t) => t.id === selectedTierId) || ARCH_TIERS[1];

  return (
    <section className="relative py-28 bg-[#040810] border-t border-white/[0.08] overflow-hidden">
      {/* Background CAD Blueprint Grid & Diagonal Conduit Rays */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-10 border-b border-white/[0.08] gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-[#00E5FF]/20 text-xs font-mono text-[#00E5FF] mb-4">
              <Sparkles className="h-3 w-3 text-[#00E5FF]" />
              06 // SYSTEM ARCHITECTURE & ENGINEERING RIGOR
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering Standards That Power{" "}
              <span className="text-[#00E5FF]">Mission-Critical Healthcare.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#94A3B8] leading-relaxed">
            Medical technology demands institutional stability. Backed by 15 years of software architecture pedigree at Noorisys Technologies, our systems are built on zero-trust principles and robust microservices.
          </p>
        </div>

        {/* Interactive 3-Tier System Architecture Pipeline */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4A373]">
              <Cpu className="h-4 w-4" />
              <span>INTERACTIVE SYSTEM ARCHITECTURE SCHEMATIC</span>
            </div>
            <span className="text-[10px] font-mono text-[#94A3B8]">
              Click any tier to inspect internal architecture
            </span>
          </div>

          {/* 3 Interactive Pipeline Tiers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {ARCH_TIERS.map((tier) => {
              const isSelected = tier.id === selectedTierId;

              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`cad-corner cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0D1C2E] border-[#00E5FF] shadow-[0_0_30px_rgba(0,229,255,0.25)]"
                      : "bg-[#07111F]/80 hover:bg-[#0D1C2E]/60 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div>
                    {/* Header with tier badge & latency */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40"
                            : "bg-white/5 text-[#94A3B8]"
                        }`}
                      >
                        {tier.badge}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">
                        {tier.latency}
                      </span>
                    </div>

                    <h3 className="font-heading text-sm font-bold text-white mb-2">
                      {tier.name}
                    </h3>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                      {tier.description}
                    </p>

                    {/* Nodes inside Tier */}
                    <div className="space-y-2 mb-6">
                      {tier.nodes.map((node, nIdx) => {
                        const NodeIcon = node.icon;
                        return (
                          <div
                            key={nIdx}
                            className="flex items-center gap-3 p-2 rounded-lg bg-[#040810]/70 border border-white/5"
                          >
                            <NodeIcon
                              className={`h-4 w-4 ${
                                isSelected ? "text-[#00E5FF]" : "text-[#94A3B8]"
                              }`}
                            />
                            <div>
                              <div className="text-xs font-semibold text-white">
                                {node.title}
                              </div>
                              <div className="text-[10px] text-[#94A3B8]">
                                {node.subtitle}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Protocols Pill Bar */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {tier.protocols.map((proto, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#94A3B8]"
                        >
                          {proto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Architectural Blueprint Data Sheets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENCHMARKS.map((b, idx) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="cad-corner p-6 rounded-2xl bg-[#07111F]/80 hover:bg-[#0D1C2E] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <div className="text-[10px] font-mono uppercase text-[#D4A373] tracking-wider mb-2">
                {b.category}
              </div>

              <div className="mb-4">
                <div className="text-2xl font-extrabold text-white font-mono">
                  {b.stat}
                </div>
                <div className="text-[11px] font-mono text-[#00E5FF]">
                  {b.statLabel}
                </div>
              </div>

              <h4 className="font-heading text-sm font-bold text-white mb-2">
                {b.title}
              </h4>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
