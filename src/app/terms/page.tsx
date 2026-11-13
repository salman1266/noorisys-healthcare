import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Noorisys Healthcare",
  description:
    "Terms and Conditions governing the use of the Noorisys Healthcare website and product portfolio showcases.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#07111F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-[#12CDB5] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#10243A]/90 border border-white/10 shadow-glass mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1929] border border-[#12CDB5]/30 text-xs font-mono text-[#43E6D0] mb-4">
            <FileText className="h-3.5 w-3.5 text-[#12CDB5]" />
            TERMS OF USE
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Terms & Conditions
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: November 2026 • Published by Noorisys Technologies Pvt. Ltd.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1929]/70 border border-white/5 space-y-8 text-sm text-text-secondary leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions. This website is owned and operated by <strong>Noorisys Technologies Pvt. Ltd.</strong> as an informational and portfolio showcase representing its specialized digital healthcare products and engineering capabilities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              2. Nature of Portfolio Information
            </h2>
            <p>
              The product information, case studies, and capability overviews displayed on this website are provided for institutional, business, and informational purposes. While we strive to maintain accurate and up-to-date descriptions, individual product availability, licensing models, and deployment configurations are subject to direct enterprise agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              3. No Medical Advice Disclaimer
            </h2>
            <p>
              Noorisys Technologies is a technology and software development partner. Nothing on this website constitutes professional medical advice, clinical diagnosis, or medical treatment plans. Always consult certified healthcare professionals for medical conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              4. Intellectual Property
            </h2>
            <p>
              All trademarks, product names, logos, and UI designs displayed on this website belong to Noorisys Technologies Pvt. Ltd. or their respective registered product entities. Unauthorized copying or redistribution without written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              5. Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Maharashtra, India.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
