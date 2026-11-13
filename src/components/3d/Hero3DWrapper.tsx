"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamic client-side import for 3D Architectural Healthcare Campus
const ArchitecturalCampus3D = dynamic(
  () => import("@/components/3d/ArchitecturalCampus3D"),
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full h-[540px] lg:h-[660px] flex items-center justify-center rounded-3xl bg-[#07111F]/60 border border-white/10 overflow-hidden">
        <div className="relative flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-2 border-[#00E5FF]/20 border-t-[#00E5FF] animate-spin" />
            <div className="absolute inset-3 rounded-full bg-[#12CDB5]/40 animate-pulse" />
          </div>
          <div className="text-center">
            <span className="text-xs font-mono text-[#00E5FF] tracking-widest uppercase block">
              Rendering Clinical Architecture...
            </span>
            <span className="text-[10px] text-[#94A3B8] mt-1 block">
              Initializing Glass Pavilions & Luminous Data River
            </span>
          </div>
        </div>
      </div>
    ),
  }
);

export const Hero3DWrapper: React.FC = () => {
  return <ArchitecturalCampus3D />;
};

export default Hero3DWrapper;
