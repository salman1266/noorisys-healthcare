"use client";

import React from "react";
import dynamic from "next/dynamic";

const BackgroundParticles3D = dynamic(
  () => import("@/components/3d/BackgroundParticles3D"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const BackgroundParticlesWrapper: React.FC = () => {
  return <BackgroundParticles3D />;
};

export default BackgroundParticlesWrapper;
