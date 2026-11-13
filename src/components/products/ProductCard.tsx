"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  Eye,
  CheckCircle2,
  Activity,
  FileSpreadsheet,
  Users,
  Stethoscope,
  Ambulance,
  QrCode,
  ShoppingBag,
  HeartPulse,
  Video,
  Truck,
  Wallet,
  PhoneCall,
  ShieldCheck,
  Plane,
  Pill,
} from "lucide-react";
import { Product } from "@/types";
import { ProductVisual3D } from "./ProductVisual3D";

const ICON_MAP: Record<string, React.ElementType> = {
  FileSpreadsheet,
  Activity,
  Users,
  Stethoscope,
  Ambulance,
  QrCode,
  ShoppingBag,
  HeartPulse,
  Video,
  Truck,
  Wallet,
  PhoneCall,
  ShieldCheck,
  Plane,
  Pill,
};

export interface ProductTheme {
  accent: string;
  gradientTo: string;
  glow: string;
  badgeBg: string;
  badgeText: string;
}

const THEME_MAP: Record<string, ProductTheme> = {
  nakbho: {
    accent: "#00E5FF",
    gradientTo: "#0077FE",
    glow: "rgba(0, 229, 255, 0.4)",
    badgeBg: "bg-[#00E5FF]",
    badgeText: "text-[#040810]",
  },
  clinicdots: {
    accent: "#10B981",
    gradientTo: "#00E5FF",
    glow: "rgba(16, 185, 129, 0.4)",
    badgeBg: "bg-[#10B981]",
    badgeText: "text-[#040810]",
  },
  "lpc-federate": {
    accent: "#8B5CF6",
    gradientTo: "#00E5FF",
    glow: "rgba(139, 92, 246, 0.4)",
    badgeBg: "bg-[#8B5CF6]",
    badgeText: "text-white",
  },
  hanadoc: {
    accent: "#38BDF8",
    gradientTo: "#818CF8",
    glow: "rgba(56, 189, 248, 0.4)",
    badgeBg: "bg-[#38BDF8]",
    badgeText: "text-[#040810]",
  },
  chapchap: {
    accent: "#F43F5E",
    gradientTo: "#FB7185",
    glow: "rgba(244, 63, 94, 0.4)",
    badgeBg: "bg-[#F43F5E]",
    badgeText: "text-white",
  },
  fastercheck: {
    accent: "#14B8A6",
    gradientTo: "#38BDF8",
    glow: "rgba(20, 184, 166, 0.4)",
    badgeBg: "bg-[#14B8A6]",
    badgeText: "text-[#040810]",
  },
  welzo: {
    accent: "#6366F1",
    gradientTo: "#A855F7",
    glow: "rgba(99, 102, 241, 0.4)",
    badgeBg: "bg-[#6366F1]",
    badgeText: "text-white",
  },
  "blood-donation": {
    accent: "#EF4444",
    gradientTo: "#F97316",
    glow: "rgba(239, 68, 68, 0.4)",
    badgeBg: "bg-[#EF4444]",
    badgeText: "text-white",
  },
  santeya: {
    accent: "#0D9488",
    gradientTo: "#14B8A6",
    glow: "rgba(13, 148, 136, 0.4)",
    badgeBg: "bg-[#0D9488]",
    badgeText: "text-white",
  },
  "coursier-medical": {
    accent: "#F59E0B",
    gradientTo: "#EAB308",
    glow: "rgba(245, 158, 11, 0.4)",
    badgeBg: "bg-[#F59E0B]",
    badgeText: "text-[#040810]",
  },
  iyara: {
    accent: "#10B981",
    gradientTo: "#06B6D4",
    glow: "rgba(16, 185, 129, 0.4)",
    badgeBg: "bg-[#10B981]",
    badgeText: "text-[#040810]",
  },
  allodocta: {
    accent: "#3B82F6",
    gradientTo: "#00E5FF",
    glow: "rgba(59, 130, 246, 0.4)",
    badgeBg: "bg-[#3B82F6]",
    badgeText: "text-white",
  },
  izikare: {
    accent: "#A855F7",
    gradientTo: "#EC4899",
    glow: "rgba(168, 85, 247, 0.4)",
    badgeBg: "bg-[#A855F7]",
    badgeText: "text-white",
  },
  aeromedical: {
    accent: "#06B6D4",
    gradientTo: "#3B82F6",
    glow: "rgba(6, 182, 212, 0.4)",
    badgeBg: "bg-[#06B6D4]",
    badgeText: "text-[#040810]",
  },
  curigo: {
    accent: "#2DD4BF",
    gradientTo: "#10B981",
    glow: "rgba(45, 212, 191, 0.4)",
    badgeBg: "bg-[#2DD4BF]",
    badgeText: "text-[#040810]",
  },
};

const DEFAULT_THEME: ProductTheme = {
  accent: "#00E5FF",
  gradientTo: "#0077FE",
  glow: "rgba(0, 229, 255, 0.4)",
  badgeBg: "bg-[#00E5FF]",
  badgeText: "text-[#040810]",
};

interface ProductCardProps {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index = 0,
  onQuickView,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const theme = THEME_MAP[product.id] || DEFAULT_THEME;
  const IconComponent = ICON_MAP[product.icon] || Activity;

  // Subtle 3D tilt calculation on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -5;
    const rY = ((x - centerX) / centerX) * 5;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${
          isHovered ? 1.015 : 1
        }, ${isHovered ? 1.015 : 1}, 1)`,
        transition: "transform 0.18s cubic-bezier(0.2, 0, 0, 1)",
      }}
      className="relative group mt-9 sm:mt-12 select-none"
    >
      {/* Outer Card Body */}
      <div
        className={`relative flex flex-col justify-between rounded-[28px] bg-gradient-to-b from-[#0E1A2C] via-[#091322] to-[#060D19] border border-white/10 p-5 sm:p-6 transition-all duration-300 overflow-visible ${
          isHovered
            ? "border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
            : "shadow-[0_12px_35px_rgba(0,0,0,0.55)]"
        }`}
      >
        {/* Dynamic ambient card glow on hover */}
        <div
          className="absolute inset-0 rounded-[28px] pointer-events-none transition-opacity duration-300 -z-10"
          style={{
            opacity: isHovered ? 0.75 : 0.15,
            background: `radial-gradient(circle at 50% 30%, ${theme.glow} 0%, transparent 70%)`,
            filter: "blur(24px)",
          }}
        />

        {/* ============================================================== */}
        {/* LOGO: CENTERED ON TOP SIDE, HALF INSIDE & HALF OUTSIDE CARD    */}
        {/* (top-0 left-1/2 -translate-x-1/2 -translate-y-1/2)             */}
        {/* ============================================================== */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
          <div
            className="h-16 sm:h-20 min-w-[180px] sm:min-w-[220px] max-w-[240px] sm:max-w-[280px] px-5 sm:px-6 py-2 sm:py-3 rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.65)] border-2 flex items-center justify-center group-hover:scale-105 transition-all duration-300"
            style={{
              borderColor: theme.accent,
              boxShadow: `0 8px 25px rgba(0,0,0,0.6), 0 0 15px ${theme.glow}`,
            }}
          >
            {product.logoUrl ? (
              <img
                src={product.logoUrl}
                alt={`${product.name} Logo`}
                className="h-10 sm:h-13 max-h-12 sm:max-h-14 w-auto max-w-[170px] sm:max-w-[220px] object-contain"
              />
            ) : (
              <div className="flex items-center gap-2 text-[#040810]">
                <IconComponent className="h-6 w-6 text-[#00E5FF]" />
                <span className="font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#040810]">
                  {product.name}
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          {/* Top Title Block (pt-9 sm:pt-12 to cleanly clear the bottom half of the centered logo) */}
          <div className="pt-9 sm:pt-12 mb-3">
            {/* Category Pill Badge - Cleanly positioned below the logo, 100% visible */}
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span
                className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase shadow-md ${theme.badgeBg} ${theme.badgeText}`}
              >
                {product.badge || product.category}
              </span>

              <span className="text-[10px] font-mono text-[#94A3B8] uppercase truncate max-w-[140px]">
                {product.category}
              </span>
            </div>

            {/* Product Name */}
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
              {product.name}
            </h3>

            {/* Tagline */}
            <p
              className="text-xs font-semibold mb-2 line-clamp-1"
              style={{ color: theme.accent }}
            >
              {product.tagline}
            </p>
          </div>

          {/* ============================================================== */}
          {/* 3D VISUAL VIEWPORT WITH LEFT-TO-RIGHT GRADIENT BORDER          */}
          {/* (Solid bright on left -> fading to transparent on right)       */}
          {/* ============================================================== */}
          <div
            className="relative rounded-[20px] p-[2px] transition-all duration-300 mb-4"
            style={{
              background: `linear-gradient(to right, ${theme.accent} 0%, ${theme.gradientTo} 40%, rgba(255, 255, 255, 0.05) 100%)`,
              boxShadow: isHovered
                ? `0 14px 30px rgba(0,0,0,0.7), -4px 0 20px ${theme.glow}`
                : `0 6px 18px rgba(0,0,0,0.5), -2px 0 10px ${theme.glow}`,
            }}
          >
            {/* Inner Visual Container */}
            <div className="relative w-full h-[195px] sm:h-[205px] rounded-[18px] bg-[#040A14]/95 overflow-hidden">
              {/* Soft radial spotlight behind mockup */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${theme.glow} 0%, transparent 65%)`,
                  opacity: isHovered ? 0.6 : 0.25,
                }}
              />

              {/* Elevated 3D Visual Content */}
              <div
                className="relative w-full h-full transition-transform duration-300"
                style={{
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                }}
              >
                <ProductVisual3D product={product} accentColor={theme.accent} />
              </div>
            </div>
          </div>

          {/* Short Verified Description */}
          <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>

          {/* Verified Feature Highlights (2 Key Capabilities) */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-white/[0.08]">
            {product.keyFeatures.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] text-[#CBD5E1]">
                <CheckCircle2
                  className="h-3.5 w-3.5 shrink-0 mt-0.5"
                  style={{ color: theme.accent }}
                />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM ACTION BAR (Rounded Pill Button + Quick View & Live)   */}
        {/* ============================================================== */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2.5">
          {/* Main Rounded Pill CTA Button */}
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-bold text-xs tracking-wide bg-white text-[#040810] hover:bg-[#00E5FF] hover:text-[#040810] shadow-md hover:shadow-[0_0_18px_rgba(0,229,255,0.4)] transition-all duration-200"
          >
            <span>View Product</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Quick View Modal Trigger */}
          {onQuickView && (
            <button
              onClick={() => onQuickView(product)}
              className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 text-[#CBD5E1] hover:text-white border border-white/10 transition-colors"
              title="Quick View Details"
              aria-label={`Quick view ${product.name}`}
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
          )}

          {/* Verified Live Link or Enterprise Status */}
          {product.verifiedUrl ? (
            <a
              href={product.verifiedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
              title="Visit Verified Live System"
              aria-label={`Launch ${product.name} verified platform`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span
              className="text-[10px] font-mono px-2 py-1 rounded bg-white/[0.04] text-[#94A3B8] border border-white/5"
              title="Enterprise Deployment"
            >
              Enterprise
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
