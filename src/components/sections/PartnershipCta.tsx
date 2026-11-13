"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Handshake,
  Mail,
  ExternalLink,
  Rocket,
  Building,
  CheckCircle2,
  Shield,
} from "lucide-react";

export const PartnershipCta: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#07111F] overflow-hidden border-t border-white/[0.08]">
      {/* Cinematic Luminous Cyan Light Sweep Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,229,255,0.12),transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,229,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,229,255,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Architectural Gateway Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cad-corner relative rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#0D1C2E] via-[#07111F] to-[#040810] border border-[#00E5FF]/30 shadow-[0_30px_90px_rgba(0,0,0,0.8),0_0_60px_rgba(0,229,255,0.15)] overflow-hidden"
        >
          {/* Luminous Light Bar */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_15px_#00E5FF]" />

          {/* Eyebrow & Title */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#040810] border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#00E5FF]" />
              09 // STRATEGIC COLLABORATION & PARTNERSHIPS
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Let&apos;s Architect the Future of Healthcare{" "}
              <span className="text-[#00E5FF]">Together.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Connect with Noorisys Technologies to explore enterprise licensing, tailored product co-creation, or strategic healthcare technology partnerships.
            </p>
          </div>

          {/* Dual Engagement Tracks (Startups vs Enterprise Health Systems) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Track 1: HealthTech Startups & Founders */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#040810]/80 border border-white/10 hover:border-[#00E5FF]/40 transition-colors space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF]">
                  <Rocket className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#D4A373] tracking-wider">
                    TRACK A // INNOVATORS
                  </span>
                  <h3 className="font-heading text-base font-bold text-white">
                    HealthTech Founders & Digital Health Scaleups
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Validate medical technology MVPs, achieve HIPAA/GDPR architectural compliance, and build scalable healthcare software on verified foundations.
              </p>

              <div className="space-y-1.5 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00E5FF]" />
                  <span>Rapid prototyping & full-stack engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#00E5FF]" />
                  <span>HIPAA, GDPR & ISO 27001 data isolation</span>
                </div>
              </div>

              <Link
                href="/contact?interest=HealthTech+Startup"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00E5FF] hover:text-[#43E6D0] transition-colors pt-2"
              >
                <span>Launch Founder Inquiry</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Track 2: Enterprise Hospitals & Health Systems */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#040810]/80 border border-white/10 hover:border-[#00E5FF]/40 transition-colors space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#D4A373] tracking-wider">
                    TRACK B // HEALTHCARE SYSTEMS
                  </span>
                  <h3 className="font-heading text-base font-bold text-white">
                    Hospitals, Trusts & Regional Health Authorities
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Deploy customized primary care rota federations, emergency ambulance telemetry dispatch, or modern outpatient clinic operating systems.
              </p>

              <div className="space-y-1.5 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>EHR & National Health Spine integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Dedicated enterprise SLA & infrastructure</span>
                </div>
              </div>

              <Link
                href="/contact?interest=Enterprise+Healthcare+System"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors pt-2"
              >
                <span>Request Enterprise Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Global Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/contact?interest=Business+Partnership"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00E5FF] hover:bg-[#43E6D0] text-[#040810] text-sm font-extrabold shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-200"
            >
              <Handshake className="h-4 w-4" />
              <span>Partner With Us</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0D1C2E] hover:bg-white/10 text-white text-sm font-semibold border border-white/15 hover:border-[#00E5FF]/40 transition-all duration-200"
            >
              <span>Explore All 15 Products</span>
            </Link>
          </div>

          {/* Parent Enterprise Note with Direct Link */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-xs text-[#94A3B8]">
            <span>A Specialized Healthcare Technology Portfolio by Noorisys Technologies Pvt. Ltd.</span>
            <span>•</span>
            <a
              href="https://noorisys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00E5FF] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>Visit Parent Enterprise at noorisys.com</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
