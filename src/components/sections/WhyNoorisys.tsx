"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Stethoscope,
  Layout,
  Cpu,
  Users2,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { NoorisysLogo } from "@/components/common/NoorisysLogo";

export const WhyNoorisys: React.FC = () => {
  const PRINCIPLES = [
    {
      icon: Stethoscope,
      title: "Healthcare-Focused Technology Development",
      description:
        "We design digital tools specifically around clinical realities, medical workflows, and administrative demands rather than relying on generic software templates.",
    },
    {
      icon: Layout,
      title: "User-Friendly Digital Experiences",
      description:
        "Healthcare technology should reduce cognitive load, not add to it. We prioritize clean, intuitive interfaces that clinicians, staff, and patients can navigate without friction.",
    },
    {
      icon: Cpu,
      title: "Scalable Software Architecture",
      description:
        "Our platforms are built on modular, cloud-ready architectures that grow alongside clinical practices, primary care networks, and medical organizations.",
    },
    {
      icon: Users2,
      title: "Collaborative Development",
      description:
        "We work closely with healthcare founders, doctors, and organizations to validate requirements and build software that solves actual operational challenges.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Improvement",
      description:
        "Healthcare delivery continually evolves. We emphasize steady enhancements, security updates, and regular capability refinements to ensure long-term dependability.",
    },
  ];

  return (
    <section id="why-noorisys" className="relative py-28 bg-[#040810]/75 backdrop-blur-xs border-t border-white/[0.08] overflow-hidden">
      {/* Background Volumetric Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-10 border-b border-white/[0.08] gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
              <Sparkles className="h-3 w-3 text-[#00E5FF]" />
              DEVELOPMENT PRINCIPLES
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Why Work With{" "}
              <span className="text-[#00E5FF]">Noorisys?</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Our approach combines deep healthcare domain focus with disciplined software engineering principles backed by Noorisys Technologies.
          </p>
        </motion.div>

        {/* Simple, Non-Repetitive Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Organization & Heritage Overview (4 Cols) with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="cad-corner p-7 rounded-3xl bg-[#07111F] border border-white/10 shadow-glass space-y-5">
              <NoorisysLogo variant="standalone" />

              <h3 className="font-heading text-lg font-bold text-white">
                Engineering Backed by Noorisys Technologies
              </h3>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Noorisys Healthcare brings institutional discipline, verified engineering standards, and dedicated healthcare focus to clinic practices, emergency systems, and digital health scaleups.
              </p>

              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://noorisys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00E5FF] hover:underline font-semibold"
                >
                  <span>Visit Parent Company: noorisys.com</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1C2E]/60 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#10B981]">
                <ShieldCheck className="h-4 w-4" />
                <span>Our Engineering Commitment</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                We believe healthcare systems should be reliable, secure, and clear. We measure success by how well our software supports care teams in their daily work.
              </p>
            </div>
          </motion.div>

          {/* Right Column: 5 Development Principles (8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="p-6 rounded-2xl bg-[#07111F]/80 hover:bg-[#0D1C2E] border border-white/[0.08] hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-5"
                >
                  <div className="p-3 rounded-xl bg-[#0D1C2E] border border-white/10 text-[#00E5FF] shrink-0 self-start">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-white">
                        {principle.title}
                      </h4>
                      <span className="text-[11px] font-mono text-[#D4A373]">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
