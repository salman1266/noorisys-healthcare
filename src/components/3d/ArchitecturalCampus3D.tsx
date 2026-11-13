"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";

// =========================================================================
// DATA RIVER SPLINE DEFINITION (Continuous sweeping curve across campus)
// =========================================================================
const SPLINE_POINTS = [
  new THREE.Vector3(-2.2, 0.45, -2.4), // 1. Diagnostic Lab
  new THREE.Vector3(-2.4, 0.4, -0.6),  // Waypoint
  new THREE.Vector3(-2.0, 0.35, 1.2),  // 2. Consultation Suite
  new THREE.Vector3(-0.8, 0.3, 1.9),   // Waypoint
  new THREE.Vector3(0.3, 0.38, 2.3),   // 3. Patient Care Nexus
  new THREE.Vector3(1.4, 0.32, 1.8),   // Waypoint
  new THREE.Vector3(2.5, 0.36, 1.2),   // 4. Emergency Care Bay
  new THREE.Vector3(2.6, 0.34, -0.4),  // Waypoint
  new THREE.Vector3(2.2, 0.42, -1.8),  // 5. Smart Dispensary
  new THREE.Vector3(0.5, 0.45, -2.6),  // Waypoint closing loop
  new THREE.Vector3(-1.2, 0.44, -2.5), // Back to Diagnostic Lab
];

// 5 Pavilion metadata definitions
const PAVILIONS = [
  {
    id: "consultation",
    number: "01",
    name: "Clinical Consultation Pavilion",
    subtitle: "Physician Workstation & EMR",
    pos: [-2.1, 0, 1.2] as [number, number, number],
    size: [1.4, 1.0, 1.2] as [number, number, number],
    color: "#12CDB5",
    accentLight: "#00E5FF",
    features: "Outpatient clinical charting, doctor consultation console, digital e-prescriptions",
  },
  {
    id: "diagnostics",
    number: "02",
    name: "Diagnostic & Laboratory Wing",
    subtitle: "Automated LIS & Analyzers",
    pos: [-2.0, 0, -2.2] as [number, number, number],
    size: [1.5, 1.2, 1.3] as [number, number, number],
    color: "#00E5FF",
    accentLight: "#38BDF8",
    features: "Sub-second LIS ingestion, digital pathology orders, biomarker tracking",
  },
  {
    id: "patient-care",
    number: "03",
    name: "Digital Patient Care Nexus",
    subtitle: "Mobile Patient Portal & Tele-Care",
    pos: [0.3, 0, 2.2] as [number, number, number],
    size: [1.2, 0.9, 1.2] as [number, number, number],
    color: "#43E6D0",
    accentLight: "#12CDB5",
    features: "Encrypted HD teleconsultations, mobile health wallet, direct patient booking",
  },
  {
    id: "pharmacy",
    number: "04",
    name: "Pharmacy & Dispensary Pavilion",
    subtitle: "Smart Inventory & Fulfillment",
    pos: [2.2, 0, -1.8] as [number, number, number],
    size: [1.4, 1.1, 1.4] as [number, number, number],
    color: "#12CDB5",
    accentLight: "#00E5FF",
    features: "Automated medication dispensation, cold-chain tracking, repeat prescription sync",
  },
  {
    id: "emergency",
    number: "05",
    name: "Emergency & Community Care Bay",
    subtitle: "Real-Time Ambulance Dispatch",
    pos: [2.5, 0, 1.2] as [number, number, number],
    size: [1.3, 1.0, 1.3] as [number, number, number],
    color: "#FF3366",
    accentLight: "#FF2A55",
    features: "Real-time ambulance GPS telemetry, hospital bed readiness, urgent blood matching",
  },
];

// =========================================================================
// 1. DATA RIVER (Extruded Luminous Spline + Traveling Light Packets)
// =========================================================================
function FlowingDataRiver({ curve }: { curve: THREE.CatmullRomCurve3 }) {
  const tubeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 180, 0.045, 12, true);
  }, [curve]);

  const packetCount = 48;
  const packetsRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Track progress along curve for each packet
  const packetProgress = useMemo(() => {
    const arr = new Float32Array(packetCount);
    for (let i = 0; i < packetCount; i++) {
      arr[i] = i / packetCount;
    }
    return arr;
  }, [packetCount]);

  useFrame((state, delta) => {
    if (packetsRef.current) {
      for (let i = 0; i < packetCount; i++) {
        packetProgress[i] = (packetProgress[i] + delta * 0.12) % 1;
        const pt = curve.getPointAt(packetProgress[i]);
        const tangent = curve.getTangentAt(packetProgress[i]);

        dummy.position.copy(pt);
        dummy.lookAt(pt.clone().add(tangent));
        dummy.scale.set(1, 1, 1.6);
        dummy.updateMatrix();
        packetsRef.current.setMatrixAt(i, dummy.matrix);
      }
      packetsRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group>
      {/* Translucent Luminous Ribbon */}
      <mesh geometry={tubeGeometry}>
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00B4D8"
          emissiveIntensity={1.2}
          transparent
          opacity={0.65}
          roughness={0.2}
        />
      </mesh>

      {/* Outer Subtle Light Halo Tube */}
      <mesh geometry={tubeGeometry}>
        <meshBasicMaterial
          color="#12CDB5"
          transparent
          opacity={0.22}
          wireframe
        />
      </mesh>

      {/* Traveling Data Packets (Glowing Light Beads) */}
      <instancedMesh
        ref={packetsRef}
        args={[undefined, undefined, packetCount]}
      >
        <sphereGeometry args={[0.075, 12, 12]} />
        <meshBasicMaterial color="#FFFFFF" />
      </instancedMesh>
    </group>
  );
}

// =========================================================================
// 2. ARCHITECTURAL GLASS PAVILION
// =========================================================================
function ArchitecturalPavilion({
  pavilion,
  isActive,
  onHover,
  onLeave,
}: {
  pavilion: (typeof PAVILIONS)[0];
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const glowLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (glowLightRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 2.5) * 0.3;
      glowLightRef.current.intensity = isActive ? 2.4 : 1.2 + pulse;
    }
  });

  const [w, h, d] = pavilion.size;

  return (
    <group
      ref={meshRef}
      position={pavilion.pos}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover();
      }}
      onPointerOut={onLeave}
    >
      {/* Plinth Base Slab */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[w + 0.15, 0.1, d + 0.15]} />
        <meshStandardMaterial
          color="#0D1C2E"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Frosted Translucent Glass Walls */}
      <mesh position={[0, h / 2 + 0.1, 0]}>
        <boxGeometry args={[w, h, d]} />
        <meshPhysicalMaterial
          color="#0B1E33"
          emissive={isActive ? pavilion.color : "#07111F"}
          emissiveIntensity={isActive ? 0.6 : 0.15}
          transmission={0.88}
          roughness={0.16}
          ior={1.48}
          transparent
          opacity={0.75}
          thickness={0.5}
        />
      </mesh>

      {/* Architectural Wireframe Edge Framework */}
      <lineSegments position={[0, h / 2 + 0.1, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(w, h, d)]} />
        <lineBasicMaterial
          color={isActive ? "#00E5FF" : pavilion.color}
          transparent
          opacity={isActive ? 0.95 : 0.45}
        />
      </lineSegments>

      {/* Pavilion Roof Cap Slab */}
      <mesh position={[0, h + 0.14, 0]}>
        <boxGeometry args={[w + 0.08, 0.06, d + 0.08]} />
        <meshStandardMaterial
          color="#07111F"
          emissive={pavilion.color}
          emissiveIntensity={isActive ? 0.5 : 0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Interior Miniature Scenes */}
      {pavilion.id === "consultation" && (
        <group position={[0, 0.2, 0]}>
          {/* Workstation Desk */}
          <mesh position={[0, 0.22, 0]}>
            <boxGeometry args={[0.6, 0.04, 0.4]} />
            <meshStandardMaterial color="#0E1E33" />
          </mesh>
          {/* Dual Monitor Displays */}
          <mesh position={[-0.12, 0.38, -0.05]} rotation={[0, 0.15, 0]}>
            <boxGeometry args={[0.22, 0.16, 0.02]} />
            <meshBasicMaterial color="#00E5FF" />
          </mesh>
          <mesh position={[0.12, 0.38, -0.05]} rotation={[0, -0.15, 0]}>
            <boxGeometry args={[0.22, 0.16, 0.02]} />
            <meshBasicMaterial color="#12CDB5" />
          </mesh>
        </group>
      )}

      {pavilion.id === "diagnostics" && (
        <group position={[0, 0.2, 0]}>
          {/* Automated Diagnostic Analyzer Racks */}
          <mesh position={[-0.25, 0.38, 0]}>
            <boxGeometry args={[0.3, 0.65, 0.35]} />
            <meshStandardMaterial color="#0A1628" />
          </mesh>
          {/* Spectrometer Laser Line */}
          <mesh position={[0.15, 0.35, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 12]} />
            <meshBasicMaterial color="#38BDF8" wireframe />
          </mesh>
        </group>
      )}

      {pavilion.id === "patient-care" && (
        <group position={[0, 0.25, 0]}>
          {/* Floating Mobile Portal Mockup */}
          <mesh position={[0, 0.4, 0]} rotation={[0.15, 0.2, 0]}>
            <boxGeometry args={[0.32, 0.6, 0.03]} />
            <meshBasicMaterial color="#43E6D0" />
          </mesh>
        </group>
      )}

      {pavilion.id === "pharmacy" && (
        <group position={[0, 0.2, 0]}>
          {/* Medication Rack Matrix */}
          <mesh position={[0, 0.42, -0.2]}>
            <boxGeometry args={[0.8, 0.7, 0.15]} />
            <meshStandardMaterial color="#0B1A2C" wireframe />
          </mesh>
        </group>
      )}

      {pavilion.id === "emergency" && (
        <group position={[0, 0.2, 0]}>
          {/* Emergency Dispatch Console */}
          <mesh position={[0, 0.35, 0]}>
            <boxGeometry args={[0.5, 0.12, 0.35]} />
            <meshStandardMaterial color="#160814" />
          </mesh>
          {/* Pulsing Beacon */}
          <mesh position={[0, 0.55, 0]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshBasicMaterial color="#FF2A55" />
          </mesh>
        </group>
      )}

      {/* Internal Pavilion Accent Spotlight */}
      <pointLight
        ref={glowLightRef}
        color={pavilion.accentLight}
        intensity={1.2}
        distance={2.8}
        position={[0, 0.6, 0]}
      />

      {/* Interactive HTML Card (Anchored above pavilion on hover) */}
      {isActive && (
        <Html
          position={[0, h + 0.45, 0]}
          center
          distanceFactor={7}
          className="pointer-events-none select-none z-50"
        >
          <div className="w-56 p-3 rounded-xl bg-[#040810]/95 border border-[#00E5FF]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,255,0.25)] backdrop-blur-xl transition-all">
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-white/10">
              <span className="text-[9px] font-mono uppercase text-[#00E5FF] tracking-wider">
                {pavilion.number} • Domain Facility
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#12CDB5] animate-ping" />
            </div>
            <h4 className="text-xs font-heading font-bold text-white mb-0.5">
              {pavilion.name}
            </h4>
            <p className="text-[10px] text-[#D4A373] font-mono mb-1.5">
              {pavilion.subtitle}
            </p>
            <p className="text-[9px] text-[#94A3B8] leading-tight">
              {pavilion.features}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}

// =========================================================================
// 3. ARCHITECTURAL CAMPUS BASE PLINTH & GROUND REFLECTIONS
// =========================================================================
function ArchitecturalGroundPlinth() {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Polished Architectural Base Platform */}
      <mesh position={[0, -0.15, 0]}>
        <cylinderGeometry args={[4.4, 4.6, 0.25, 64]} />
        <meshStandardMaterial
          color="#07111F"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* Concentric Cyan Ground Energy Guideway */}
      <mesh position={[0, -0.015, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.8, 3.86, 64]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.4} />
      </mesh>

      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.2, 4.24, 64]} />
        <meshBasicMaterial color="#12CDB5" transparent opacity={0.3} />
      </mesh>

      {/* Subtle CAD Coordinate Grid Lines */}
      <gridHelper
        args={[8.5, 24, "#00E5FF", "#0E1E33"]}
        position={[0, 0.005, 0]}
      />
    </group>
  );
}

// =========================================================================
// 4. SCENE ROOT WITH SMOOTH MOUSE PARALLAX & ATMOSPHERIC LIGHTING
// =========================================================================
function ArchitecturalSceneRoot() {
  const [activePavilion, setActivePavilion] = useState<string | null>(null);
  const campusGroupRef = useRef<THREE.Group>(null);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(SPLINE_POINTS, true, "centripetal", 0.5);
  }, []);

  useFrame((state) => {
    if (campusGroupRef.current) {
      // Damped smooth mouse parallax camera tracking (up to 8 degrees)
      const targetY = state.pointer.x * 0.16;
      const targetX = -state.pointer.y * 0.08;

      campusGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        campusGroupRef.current.rotation.y,
        targetY,
        0.04
      );
      campusGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        campusGroupRef.current.rotation.x,
        targetX,
        0.04
      );
    }
  });

  return (
    <group ref={campusGroupRef}>
      {/* Cinematic Studio Lighting (Concept C Dramatic Illumination) */}
      <ambientLight intensity={0.5} color="#0D1C2E" />
      
      {/* Key Studio Sunlight Shaft */}
      <directionalLight
        position={[6, 9, 7]}
        intensity={1.8}
        color="#F8FAFC"
        castShadow
      />

      {/* Volumetric Cyan Rim Light */}
      <directionalLight
        position={[-7, 5, -5]}
        intensity={1.2}
        color="#00E5FF"
      />

      {/* Soft Fill Light */}
      <pointLight
        position={[0, 4, 0]}
        intensity={1.0}
        color="#12CDB5"
        distance={8}
      />

      {/* Ground Architectural Plinth */}
      <ArchitecturalGroundPlinth />

      {/* Flowing Luminous Teal Data River */}
      <FlowingDataRiver curve={curve} />

      {/* 5 Distinct Architectural Pavilions */}
      {PAVILIONS.map((pavilion) => (
        <ArchitecturalPavilion
          key={pavilion.id}
          pavilion={pavilion}
          isActive={activePavilion === pavilion.id}
          onHover={() => setActivePavilion(pavilion.id)}
          onLeave={() => setActivePavilion(null)}
        />
      ))}
    </group>
  );
}

// =========================================================================
// 5. EXPORTED COMPONENT WITH WEBGL DETECTION & MOBILE FALLBACK
// =========================================================================
export const ArchitecturalCampus3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }
  }, []);

  // Graceful High-Quality SVG/Canvas Fallback for mobile or disabled WebGL
  if (hasWebGL === false) {
    return (
      <div className="relative w-full h-[520px] lg:h-[640px] flex items-center justify-center rounded-3xl bg-gradient-to-br from-[#07111F] to-[#040810] border border-white/10 p-8 overflow-hidden shadow-2xl">
        <div className="relative z-10 text-center max-w-md">
          {/* Isometric Stylized SVG Campus */}
          <div className="w-48 h-48 mx-auto mb-6 relative">
            <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#00E5FF] fill-none">
              {/* Plinth */}
              <polygon points="100,20 180,65 180,135 100,180 20,135 20,65" strokeWidth="1.5" stroke="#00E5FF" opacity="0.6" />
              {/* Pavilions */}
              <polygon points="60,60 90,45 90,75 60,90" strokeWidth="1.5" stroke="#12CDB5" fill="#0D1C2E" fillOpacity="0.8" />
              <polygon points="140,60 110,45 110,75 140,90" strokeWidth="1.5" stroke="#12CDB5" fill="#0D1C2E" fillOpacity="0.8" />
              <polygon points="100,110 130,95 130,125 100,140" strokeWidth="1.5" stroke="#43E6D0" fill="#0D1C2E" fillOpacity="0.8" />
              {/* Data River */}
              <path d="M75,70 Q100,50 125,70 T115,115" strokeWidth="3" stroke="#00E5FF" strokeDasharray="6 3" />
            </svg>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] block mb-1">
            Architectural Healthcare Campus
          </span>
          <h4 className="font-heading text-lg font-bold text-white mb-2">
            Healthcare, Connected by Intelligence
          </h4>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            Five synchronized healthcare domain pavilions: Clinical Consultation, Diagnostics, Patient Care, Smart Pharmacy, and Emergency Response.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[540px] lg:h-[660px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Background Volumetric Cyan Radial Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,229,255,0.14),transparent_70%)]" />

      <Canvas
        camera={{ position: [5.8, 5.2, 6.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ArchitecturalSceneRoot />
      </Canvas>

      {/* Interactive Helper Overlay with CAD Crosshairs */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#040810]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#00E5FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          Interactive 3D Glass Campus • Hover pavilions to inspect facilities
        </span>
      </div>
    </div>
  );
};

export default ArchitecturalCampus3D;
