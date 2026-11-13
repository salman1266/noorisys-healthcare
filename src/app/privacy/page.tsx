import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Shield, Sparkles, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Noorisys Healthcare",
  description:
    "Privacy Policy for Noorisys Healthcare and parent company Noorisys Technologies Pvt. Ltd.",
};

export default function PrivacyPage() {
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
            <Shield className="h-3.5 w-3.5 text-[#12CDB5]" />
            LEGAL & PRIVACY STANDARDS
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-text-muted">
            Last Updated: November 2026 • Governed by Noorisys Technologies Pvt. Ltd.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1929]/70 border border-white/5 space-y-8 text-sm text-text-secondary leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              1. Introduction & Overview
            </h2>
            <p>
              Noorisys Healthcare is operated as a dedicated healthcare technology portfolio under <strong>Noorisys Technologies Pvt. Ltd.</strong> (&quot;Noorisys&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We respect your privacy and are committed to protecting personal and sensitive health-related data in accordance with international data protection standards, including the General Data Protection Regulation (GDPR) and Health Insurance Portability and Accountability Act (HIPAA) principles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              2. Information We Collect
            </h2>
            <p>
              When you interact with our website or submit an enquiry, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-text-muted text-xs">
              <li>Contact Details: Full name, work email address, phone number, and organization name.</li>
              <li>Enquiry Details: Areas of clinical or product interest, partnership scope, and inquiry message.</li>
              <li>Technical Telemetry: Anonymized browser type, operating system, and session timestamps used solely for website security and performance monitoring.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              3. Purpose of Processing
            </h2>
            <p>
              We process your submitted data solely to respond to your product enquiries, establish communication regarding potential business partnerships, verify authorization, and fulfill our legitimate business obligations. We do not sell, rent, or monetize your contact or organization details to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              4. Healthcare Data Confidentiality
            </h2>
            <p>
              Our product portfolio incorporates strict data isolation boundaries. Inquiries regarding specific clinical platforms (such as EMR or diagnostic integrations) are handled under strict corporate non-disclosure protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-white">
              5. Contacting the Data Controller
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your data rights, please contact our corporate desk at:
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
              <strong className="text-white block">Noorisys Technologies Pvt. Ltd.</strong>
              <span>Email: sales@noorisys.com</span><br />
              <span>Phone: +91 77966 14664</span><br />
              <span>Address: 105, Budhwar Ward, Malegaon, Maharashtra, India - 423203</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
