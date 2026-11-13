"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Building,
  User,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().min(2, "Please enter your company or clinic name"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
          areaOfInterest: "Business Partnership",
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit inquiry");
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMessage(
        err.message ||
          "An unexpected error occurred. Please email sales@noorisys.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#07111F]/70 backdrop-blur-xs border-t border-white/[0.08] overflow-hidden">
      {/* Background Volumetric Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(0,229,255,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1C2E] border border-white/10 text-xs font-mono text-[#00E5FF] mb-4">
            <Sparkles className="h-3 w-3 text-[#00E5FF]" />
            CONTACT & PARTNERSHIP
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            Let&apos;s Build Better{" "}
            <span className="text-[#00E5FF]">Healthcare Technology Together.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Have a healthcare technology project or partnership opportunity? Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        {/* Two-Column Spread: Verified Business Info (Left) + Contact Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Verified Contact Information (5 Cols) with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="cad-corner p-7 sm:p-8 rounded-3xl bg-[#0D1C2E]/80 border border-white/10 shadow-glass space-y-6">
              <div>
                <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider block mb-1">
                  Corporate Inquiries
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  Noorisys Technologies Pvt. Ltd.
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Connect with our team to discuss healthcare software development, enterprise licensing, or technical collaboration.
                </p>
              </div>

              {/* Verified Contact Details List */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <a
                  href="mailto:sales@noorisys.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#07111F] hover:bg-[#07111F]/80 text-[#94A3B8] hover:text-[#00E5FF] border border-white/5 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block">Email Us</span>
                    <span className="text-xs font-mono text-white">sales@noorisys.com</span>
                  </div>
                </a>

                <a
                  href="tel:+917796614664"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#07111F] hover:bg-[#07111F]/80 text-[#94A3B8] hover:text-[#00E5FF] border border-white/5 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#12CDB5]/10 text-[#12CDB5] shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block">Call Us</span>
                    <span className="text-xs font-mono text-white">+91 77966 14664</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#07111F] border border-white/5 text-[#94A3B8]">
                  <div className="p-2 rounded-lg bg-[#D4A373]/10 text-[#D4A373] shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block">Headquarters</span>
                    <span className="text-xs text-slate-300 leading-relaxed block">
                      CTS No. 413/414, 105, Budhwar Ward, Malegaon, Maharashtra, India - 423203
                    </span>
                  </div>
                </div>
              </div>

              {/* Parent Enterprise Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]">Parent Company</span>
                <a
                  href="https://noorisys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#00E5FF] hover:underline font-semibold"
                >
                  <span>noorisys.com</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#040810]/60 border border-white/5 text-xs text-[#94A3B8] flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-[#10B981] shrink-0" />
              <span>We respect your privacy. All inquiries are handled with strict commercial confidentiality.</span>
            </div>
          </motion.div>

          {/* Right Column: Clean, Responsive Contact Form (7 Cols) with Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="cad-corner p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0D1C2E] to-[#040810] border border-[#00E5FF]/30 shadow-glass">
              
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#94A3B8] mb-6">
                Fill in the details below and our team will get back to you shortly.
              </p>

              {/* Success Message Banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Message sent successfully!</strong>
                      <span>Thank you for reaching out. A representative from Noorisys will respond to your inquiry shortly.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Message Banner */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs flex items-start gap-3"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-[#00E5FF]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="e.g. Dr. Jane Smith"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Work Email <span className="text-[#00E5FF]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="jane@healthclinic.org"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company / Clinic Field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Company or Organization <span className="text-[#00E5FF]">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#64748B]" />
                    <input
                      type="text"
                      {...register("company")}
                      placeholder="e.g. St. Jude Healthcare Network"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                    />
                  </div>
                  {errors.company && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-[#00E5FF]">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      rows={4}
                      {...register("message")}
                      placeholder="Tell us about your project, clinical requirements, or partnership idea..."
                      className="w-full p-3.5 rounded-xl bg-[#07111F] border border-white/10 text-white placeholder-[#64748B] text-xs sm:text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                    />
                  </div>
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#12CDB5] text-[#040810] text-sm font-bold shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Get In Touch</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
