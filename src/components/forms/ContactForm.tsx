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
  Building,
  User,
  Mail,
  Phone,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().min(2, "Company or organization is required"),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().min(6, "Please provide a valid phone number"),
  areaOfInterest: z.enum(
    [
      "Product Enquiry",
      "Business Partnership",
      "Technology Collaboration",
      "General Enquiry",
    ],
    { required_error: "Please select your area of interest" }
  ),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  defaultInterest?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultInterest = "Business Partnership",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      areaOfInterest: (defaultInterest as any) || "Business Partnership",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to submit enquiry");
      }

      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setServerError(
        err.message ||
          "An unexpected error occurred. Please email sales@noorisys.com directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-3xl bg-[#10243A]/90 border border-white/10 p-6 sm:p-10 shadow-glass">
      
      {/* Success Notification */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-8 p-6 rounded-2xl bg-[#12CDB5]/10 border border-[#12CDB5]/40 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#12CDB5] flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_rgba(18,205,181,0.4)]">
              <CheckCircle2 className="h-6 w-6 text-[#07111F]" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white mb-1">
              Enquiry Submitted Successfully
            </h3>
            <p className="text-xs text-text-secondary max-w-md mx-auto mb-4">
              Thank you for reaching out. Our enterprise healthcare team will review your requirements and respond promptly at your work email.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs font-semibold text-[#12CDB5] hover:underline"
            >
              Submit another enquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Notification */}
      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-xs">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Anti-spam honeypot (hidden from real users) */}
        <input
          type="text"
          {...register("honeypot")}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Row 1: Full Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-2 flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-[#12CDB5]" />
              Full Name *
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Dr. Sarah Jenkins / Alex Smith"
              className={`w-full px-4 py-3 rounded-xl bg-[#0B1929] border text-white text-sm focus:outline-none transition-all ${
                errors.fullName
                  ? "border-red-500/60 focus:border-red-500"
                  : "border-white/10 focus:border-[#12CDB5]"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-2 flex items-center gap-1.5">
              <Building className="h-3.5 w-3.5 text-[#12CDB5]" />
              Company / Organization *
            </label>
            <input
              type="text"
              {...register("company")}
              placeholder="Health System / NHS Trust / Startup"
              className={`w-full px-4 py-3 rounded-xl bg-[#0B1929] border text-white text-sm focus:outline-none transition-all ${
                errors.company
                  ? "border-red-500/60 focus:border-red-500"
                  : "border-white/10 focus:border-[#12CDB5]"
              }`}
            />
            {errors.company && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Work Email & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-text-secondary mb-2 flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[#12CDB5]" />
              Work Email *
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="name@organization.com"
              className={`w-full px-4 py-3 rounded-xl bg-[#0B1929] border text-white text-sm focus:outline-none transition-all ${
                errors.email
                  ? "border-red-500/60 focus:border-red-500"
                  : "border-white/10 focus:border-[#12CDB5]"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary mb-2 flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#12CDB5]" />
              Phone Number *
            </label>
            <input
              type="tel"
              {...register("phone")}
              placeholder="+44 20 7946 0912 / +91 ..."
              className={`w-full px-4 py-3 rounded-xl bg-[#0B1929] border text-white text-sm focus:outline-none transition-all ${
                errors.phone
                  ? "border-red-500/60 focus:border-red-500"
                  : "border-white/10 focus:border-[#12CDB5]"
              }`}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-400">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Area of Interest */}
        <div>
          <label className="block text-xs font-medium text-text-secondary mb-2 flex items-center gap-1.5">
            <HelpCircle className="h-3.5 w-3.5 text-[#12CDB5]" />
            Area of Interest *
          </label>
          <select
            {...register("areaOfInterest")}
            className="w-full px-4 py-3 rounded-xl bg-[#0B1929] border border-white/10 text-white text-sm focus:outline-none focus:border-[#12CDB5] transition-all"
          >
            <option value="Product Enquiry">Product Enquiry (15 Healthcare Solutions)</option>
            <option value="Business Partnership">Business Partnership & Co-Creation</option>
            <option value="Technology Collaboration">Technology & Engineering Collaboration</option>
            <option value="General Enquiry">General Corporate Enquiry</option>
          </select>
          {errors.areaOfInterest && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.areaOfInterest.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-text-secondary mb-2 flex items-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5 text-[#12CDB5]" />
            Message / Details *
          </label>
          <textarea
            rows={4}
            {...register("message")}
            placeholder="Tell us about your organization's goals, specific product requirements, or partnership scope..."
            className={`w-full px-4 py-3 rounded-xl bg-[#0B1929] border text-white text-sm focus:outline-none transition-all ${
              errors.message
                ? "border-red-500/60 focus:border-red-500"
                : "border-white/10 focus:border-[#12CDB5]"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#12CDB5] hover:bg-[#43E6D0] disabled:opacity-50 text-[#07111F] font-bold text-sm shadow-[0_0_25px_rgba(18,205,181,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Transmitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Healthcare Enquiry</span>
              </>
            )}
          </button>
        </div>

        {/* Note on Verified Details */}
        <p className="text-[11px] text-text-muted text-center leading-relaxed">
          Submissions are directly routed to the verified enterprise desk at{" "}
          <strong className="text-white">sales@noorisys.com</strong>.
          We respect medical data confidentiality and do not share your contact details.
        </p>
      </form>
    </div>
  );
};
