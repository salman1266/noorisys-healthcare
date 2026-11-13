"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Building2, Stethoscope, Layers, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const AboutNoorisys: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#07111F]/70 backdrop-blur-xs border-y border-white/[0.08] overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(18,205,181,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

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
            ABOUT NOORISYS HEALTHCARE
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Technology That Makes{" "}
            <span className="text-[#00E5FF]">Healthcare Better.</span>
          </h2>
        </motion.div>

        {/* Main Composition: Story & Visual Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Clear Narrative with Smooth Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              <strong className="text-white font-semibold">Noorisys Healthcare</strong> is a dedicated healthcare technology vertical created by <strong className="text-[#00E5FF] font-semibold">Noorisys Technologies</strong>. We bring together a focused portfolio of digital solutions designed to address everyday challenges in clinical care and healthcare operations.
            </p>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Our portfolio showcases purpose-built platforms spanning electronic medical records, outpatient clinic management, primary care workforce coordination, emergency dispatch, digital pharmacy services, and patient diagnostics.
            </p>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              We aim to support doctors, nurses, clinic administrators, and healthcare organizations by reducing administrative friction, improving communication between care teams, and creating dependable digital experiences that keep patient care at the center.
            </p>

            {/* Three Foundation Pillars with Staggered Scroll Reveal */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 rounded-xl bg-[#0D1C2E]/80 border border-white/10 hover:border-[#00E5FF]/40 transition-colors"
              >
                <Building2 className="h-5 w-5 text-[#00E5FF] mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Parent Heritage</h4>
                <p className="text-xs text-[#94A3B8]">
                  Engineered with the technology backing and standards of Noorisys Technologies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 rounded-xl bg-[#0D1C2E]/80 border border-white/10 hover:border-[#12CDB5]/40 transition-colors"
              >
                <Stethoscope className="h-5 w-5 text-[#12CDB5] mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Care Focus</h4>
                <p className="text-xs text-[#94A3B8]">
                  Designed specifically around actual clinical and administrative healthcare workflows.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-4 rounded-xl bg-[#0D1C2E]/80 border border-white/10 hover:border-[#43E6D0]/40 transition-colors"
              >
                <Layers className="h-5 w-5 text-[#43E6D0] mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Diverse Portfolio</h4>
                <p className="text-xs text-[#94A3B8]">
                  15 verified products spanning clinic management, emergency care, and diagnostics.
                </p>
              </motion.div>
            </div>

            <div className="pt-2">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#00E5FF] hover:text-[#43E6D0] transition-colors"
              >
                <span>View all 15 products in our portfolio</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Strong Visual Composition with Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="cad-corner p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0D1C2E] to-[#040810] border border-[#00E5FF]/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              {/* Header inside visual card */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#12CDB5]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                    Portfolio Structure
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#D4A373]">
                  Connected Model
                </span>
              </div>

              {/* Hierarchy Visual */}
              <div className="space-y-4">
                {/* Level 1: Parent Enterprise */}
                <div className="p-4 rounded-2xl bg-[#07111F] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">Parent Enterprise</span>
                    <h4 className="text-sm font-bold text-white">Noorisys Technologies</h4>
                  </div>
                  <span className="text-[11px] font-mono text-[#00E5FF] px-2 py-0.5 rounded bg-[#00E5FF]/10">
                    Technology Backing
                  </span>
                </div>

                {/* Connector line */}
                <div className="flex justify-center">
                  <div className="w-[2px] h-4 bg-gradient-to-b from-white/20 to-[#00E5FF]" />
                </div>

                {/* Level 2: Healthcare Division */}
                <div className="p-4 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#00E5FF] block">Specialized Vertical</span>
                    <h4 className="text-sm font-extrabold text-white">Noorisys Healthcare</h4>
                  </div>
                  <span className="text-[11px] font-mono text-[#12CDB5] px-2 py-0.5 rounded bg-[#12CDB5]/10 font-bold">
                    15 Products
                  </span>
                </div>

                {/* Connector line */}
                <div className="flex justify-center">
                  <div className="w-[2px] h-4 bg-gradient-to-b from-[#00E5FF] to-white/20" />
                </div>

                {/* Level 3: Supported Ecosystem */}
                <div className="p-4 rounded-2xl bg-[#07111F] border border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-[#94A3B8] block">Supported Stakeholders</span>
                  <div className="flex flex-wrap gap-1.5 text-xs text-[#94A3B8]">
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-200">
                      Clinics & Hospitals
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-200">
                      Physicians & Specialists
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-200">
                      Primary Care Networks
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-200">
                      Patients & Families
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#94A3B8]">
                <ShieldCheck className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>Verified products with active clinical deployments.</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
