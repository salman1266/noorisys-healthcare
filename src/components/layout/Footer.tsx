"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { NoorisysLogo } from "@/components/common/NoorisysLogo";
import { PRODUCTS } from "@/data/products";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#040810]/85 backdrop-blur-xs border-t border-white/[0.08] pt-20 pb-12 overflow-hidden">
      {/* Background Subtle Coordinate Lines & Radial Teal Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(0,229,255,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/[0.08]">
          
          {/* Col 1: Brand & Parent Company Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <NoorisysLogo variant="footer" />

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              A specialized healthcare technology portfolio by{" "}
              <strong className="text-white">Noorisys Technologies Pvt. Ltd.</strong>, dedicated to advancing digital clinical management, emergency dispatch, and connected patient care.
            </p>

            {/* Parent Company Badge */}
            <div className="cad-corner p-4 rounded-2xl bg-[#07111F]/90 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#00E5FF] tracking-wider">
                  Parent Enterprise
                </span>
                <a
                  href="https://noorisys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#00E5FF] hover:underline font-semibold"
                >
                  <span>noorisys.com</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                Enterprise technology and product engineering delivered for health founders, clinics, and medical organizations.
              </p>
            </div>

            {/* Navigation Shortcuts */}
            <div className="space-y-1.5 pt-2">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-2">
                Quick Navigation
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-300">
                <Link href="/#hero" className="hover:text-[#00E5FF] transition-colors">
                  Home
                </Link>
                <Link href="/#about" className="hover:text-[#00E5FF] transition-colors">
                  About Us
                </Link>
                <Link href="/#products" className="hover:text-[#00E5FF] transition-colors">
                  Our Products
                </Link>
                <Link href="/#what-we-do" className="hover:text-[#00E5FF] transition-colors">
                  What We Do
                </Link>
                <Link href="/#contact" className="hover:text-[#00E5FF] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Col 2: Products Quick List (15 Authentic Products) (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white">
                Healthcare Products (15)
              </h4>
              <span className="text-[10px] font-mono text-[#D4A373]">
                VERIFIED SUITE
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {PRODUCTS.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.slug}`}
                  className="text-[#94A3B8] hover:text-[#00E5FF] transition-colors py-0.5 truncate flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[#00E5FF]/40" />
                  <span className="truncate">{prod.name}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/#products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF] hover:underline mt-5"
            >
              <span>Explore all products in directory</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Col 3: Verified Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-4">
              Verified Business Contact
            </h4>

            <div className="space-y-2.5 text-xs">
              <a
                href="mailto:sales@noorisys.com"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#07111F] hover:bg-[#0D1C2E] text-[#94A3B8] hover:text-[#00E5FF] border border-white/5 transition-colors"
              >
                <Mail className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span className="font-mono">sales@noorisys.com</span>
              </a>

              <a
                href="tel:+917796614664"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#07111F] hover:bg-[#0D1C2E] text-[#94A3B8] hover:text-[#00E5FF] border border-white/5 transition-colors"
              >
                <Phone className="h-4 w-4 text-[#00E5FF] shrink-0" />
                <span className="font-mono">+91 77966 14664</span>
              </a>

              <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#07111F] border border-white/5 text-[#94A3B8] text-[11px] leading-relaxed">
                <MapPin className="h-4 w-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>
                  Noorisys Technologies Pvt. Ltd., CTS No. 413/414, 105, Budhwar Ward, Malegaon, Maharashtra, India - 423203
                </span>
              </div>
            </div>

            {/* Social / Enterprise links */}
            <div className="pt-2 flex items-center gap-4 text-xs text-[#94A3B8]">
              <a
                href="https://noorisys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Noorisys.com
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/company/noorisys"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <Link href="/#contact" className="text-[#00E5FF] hover:underline font-semibold">
                Get In Touch
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>
            &copy; {new Date().getFullYear()} Noorisys Healthcare. A dedicated technology portfolio by{" "}
            <a
              href="https://noorisys.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#00E5FF] underline decoration-white/20"
            >
              Noorisys Technologies Pvt. Ltd.
            </a>{" "}
            All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[11px] font-mono text-[#10B981] flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Verified Portfolio</span>
            </span>
          </div>
        </div>

      </motion.div>
    </footer>
  );
};
