import type { Metadata } from "next";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Clock,
  Sparkles,
  Shield,
  MessageSquare,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Partnership Inquiries | Noorisys Healthcare",
  description:
    "Connect with Noorisys Healthcare and parent company Noorisys Technologies for product inquiries, strategic partnerships, and healthcare software collaboration.",
};

interface Props {
  searchParams: {
    interest?: string;
    product?: string;
  };
}

export default function ContactPage({ searchParams }: Props) {
  const defaultInterest = searchParams?.interest || "Product Enquiry";

  return (
    <div className="pt-28 pb-20 bg-[#07111F]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10243A] border border-[#12CDB5]/30 text-xs font-mono text-[#43E6D0] mb-4">
          <Sparkles className="h-3 w-3 text-[#12CDB5]" />
          CONNECT WITH OUR TEAM
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Let&apos;s Discuss Your{" "}
          <span className="text-[#12CDB5]">Healthcare Goals</span>
        </h1>
        <p className="text-text-secondary max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Whether you are exploring a specific product from our 15 healthcare innovations, seeking a strategic development partnership, or planning a deployment.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Validated Enquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="font-heading text-2xl font-bold text-white mb-2">
                Send an Enterprise Enquiry
              </h2>
              <p className="text-xs text-text-muted">
                Complete the verified form below. All inquiries are reviewed directly by our healthcare technology practice leads.
              </p>
            </div>

            <ContactForm defaultInterest={defaultInterest} />
          </div>

          {/* Right Column: Verified Contact Information & Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Verified Contact Card */}
            <div className="p-8 rounded-3xl bg-[#10243A]/90 border border-white/10 shadow-glass space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#43E6D0] tracking-wider block">
                  Official Communication Channels
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">
                  Parent Company Headquarters
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:sales@noorisys.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0B1929] hover:bg-white/5 border border-white/5 text-text-secondary hover:text-[#12CDB5] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#12CDB5]/10 text-[#12CDB5]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-text-muted block">
                      Enterprise Email
                    </span>
                    <strong className="text-white text-sm">sales@noorisys.com</strong>
                  </div>
                </a>

                <a
                  href="tel:+917796614664"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0B1929] hover:bg-white/5 border border-white/5 text-text-secondary hover:text-[#12CDB5] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#12CDB5]/10 text-[#12CDB5]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-text-muted block">
                      Phone & WhatsApp Support
                    </span>
                    <strong className="text-white text-sm">+91 77966 14664</strong>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0B1929] border border-white/5 text-text-secondary">
                  <div className="p-2 rounded-lg bg-[#12CDB5]/10 text-[#12CDB5] shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-text-muted block">
                      Corporate Office
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                      Noorisys Technologies Pvt. Ltd.<br />
                      CTS No. 413/414, 105, Budhwar Ward,<br />
                      Malegaon, Maharashtra, India - 423203
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0B1929] border border-white/5 text-text-secondary">
                  <div className="p-2 rounded-lg bg-[#12CDB5]/10 text-[#12CDB5] shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-text-muted block">
                      Response Commitment
                    </span>
                    <span className="text-xs text-text-secondary">
                      Within 24 to 48 business hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Link to Parent Website */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-text-muted">Parent Entity:</span>
                <a
                  href="https://noorisys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#12CDB5] hover:underline font-semibold"
                >
                  <span>Visit noorisys.com</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Confidentiality & Security Notice */}
            <div className="p-6 rounded-3xl bg-[#0B1929] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Shield className="h-4 w-4 text-[#12CDB5]" />
                <span>NDA & Confidentiality</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                We regularly execute Non-Disclosure Agreements (NDAs) prior to discussing proprietary healthcare product roadmaps, clinician datasets, or commercial terms.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
