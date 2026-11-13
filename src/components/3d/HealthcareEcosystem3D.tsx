"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

// Stakeholder nodes in 3D coordinate space around central core
const NODES = [
  { name: "Patients", pos: [2.8, 1.2, 0.5], color: "#12CDB5", type: "Care" },
  { name: "Doctors", pos: [-2.6, 1.8, 0.8], color: "#43E6D0", type: "Clinical" },
  { name: "Hospitals", pos: [2.2, -1.9, 1.2], color: "#12CDB5", type: "Acute" },
  { name: "Clinics", pos: [-2.9, -1.2, -0.6], color: "#43E6D0", type: "Outpatient" },
  { name: "Laboratories", pos: [0.6, 2.7, -1.4], color: "#12CDB5", type: "Diagnostic" },
  { name: "Pharmacies", pos: [-1.4, -2.6, 1.5], color: "#43E6D0", type: "Dispensary" },
  { name: "Emergency", pos: [1.8, 0.2, -2.5], color: "#FF5E7E", type: "Critical" },
  { name: "Workforce", pos: [-1.8, 1.5, -2.0], color: "#43E6D0", type: "Operations" },
];

// Inner Central Core
function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.3;
      wireframeRef.current.rotation.z += delta * 0.2;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group>
      {/* Dense pulsating energy sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#12CDB5"
          emissive="#12CDB5"
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Futuristic wireframe icosahedron cage */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial
          color="#43E6D0"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Orbiting data ring */}
      <group ref={outerRingRef} rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <ringGeometry args={[1.8, 1.84, 64]} />
          <meshBasicMaterial
            color="#12CDB5"
            side={THREE.DoubleSide}
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>

      <pointLight color="#43E6D0" intensity={3} distance={6} />
    </group>
  );
}

// Particle field
function ParticleDust({ count = 220 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#43E6D0"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Connected node with dynamic lines to center
function StakeholderNode({
  node,
  hovered,
  setHovered,
}: {
  node: (typeof NODES)[0];
  hovered: string | null;
  setHovered: (name: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const isSelected = hovered === node.name;

  useFrame((state) => {
    if (meshRef.current) {
      const scale = isSelected ? 1.4 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  // Calculate line points from center [0,0,0] to node position
  const lineGeometry = useMemo(() => {
    const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...(node.pos as [number, number, number]))];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [node.pos]);

  return (
    <group position={node.pos as [number, number, number]}>
      {/* Node sphere */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(node.name);
        }}
        onPointerOut={() => setHovered(null)}
      >
        <sphereGeometry args={[0.26, 24, 24]} />
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isSelected ? 1.8 : 0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Subtle outer halo */}
      <mesh>
        <sphereGeometry args={[0.38, 16, 16]} />
        <meshBasicMaterial
          color={node.color}
          wireframe
          transparent
          opacity={isSelected ? 0.6 : 0.25}
        />
      </mesh>

      {/* Floating Billboard Label */}
      <Billboard follow lockX={false} lockY={false} lockZ={false}>
        <group position={[0, 0.45, 0]}>
          <Text
            fontSize={0.22}
            color="#FFFFFF"
            anchorX="center"
            anchorY="middle"
          >
            {node.name}
          </Text>
          <Text
            position={[0, -0.16, 0]}
            fontSize={0.12}
            color="#43E6D0"
            anchorX="center"
            anchorY="middle"
          >
            {node.type}
          </Text>
        </group>
      </Billboard>

      {/* Connection line back to core */}
      <primitive
        object={
          new THREE.Line(
            lineGeometry,
            new THREE.LineBasicMaterial({
              color: isSelected ? "#43E6D0" : "#12CDB5",
              transparent: true,
              opacity: isSelected ? 0.8 : 0.28,
            })
          )
        }
        position={[-node.pos[0], -node.pos[1], -node.pos[2]]}
      />
    </group>
  );
}

// Floating HUD data panels in 3D
function FloatingGlassPanel({
  position,
  title,
  metric,
  sub,
}: {
  position: [number, number, number];
  title: string;
  metric: string;
  sub: string;
}) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Billboard position={position}>
        <group>
          {/* Glass background plate */}
          <mesh position={[0, 0, -0.02]}>
            <planeGeometry args={[1.6, 0.8]} />
            <meshBasicMaterial
              color="#0B1929"
              transparent
              opacity={0.8}
            />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(1.6, 0.8)]} />
            <lineBasicMaterial color="#12CDB5" transparent opacity={0.4} />
          </lineSegments>

          <Text
            position={[-0.68, 0.22, 0]}
            fontSize={0.11}
            color="#A5B4C5"
            anchorX="left"
            anchorY="middle"
          >
            {title}
          </Text>
          <Text
            position={[-0.68, 0.02, 0]}
            fontSize={0.18}
            color="#43E6D0"
            anchorX="left"
            anchorY="middle"
          >
            {metric}
          </Text>
          <Text
            position={[-0.68, -0.18, 0]}
            fontSize={0.09}
            color="#7F91A6"
            anchorX="left"
            anchorY="middle"
          >
            {sub}
          </Text>
        </group>
      </Billboard>
    </Float>
  );
}

// Scene Root
function SceneContent() {
  const [hovered, setHovered] = useState<string | null>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle parallax with mouse
      const targetY = state.pointer.x * 0.35;
      const targetX = -state.pointer.y * 0.25;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFFFFF" />

      {/* Central Noorisys digital core */}
      <CentralCore />

      {/* Floating particles */}
      <ParticleDust count={240} />

      {/* Stakeholder nodes */}
      {NODES.map((node) => (
        <StakeholderNode
          key={node.name}
          node={node}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}

      {/* Floating HUD glass telemetry panels */}
      <FloatingGlassPanel
        position={[3.2, 2.2, -0.5]}
        title="PORTFOLIO COVERAGE"
        metric="15 INNOVATIONS"
        sub="Connected Ecosystem"
      />
      <FloatingGlassPanel
        position={[-3.3, -2.1, 0.2]}
        title="SECURITY & PRIVACY"
        metric="ENCRYPTED CORE"
        sub="HIPAA / GDPR Ready"
      />
    </group>
  );
}

export const HealthcareEcosystem3D: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  // Non-WebGL or Low-power graceful fallback
  if (hasWebGL === false) {
    return (
      <div className="relative w-full h-full min-h-[460px] flex items-center justify-center rounded-3xl bg-gradient-to-br from-[#0B1929] to-[#07111F] border border-white/10 p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(18,205,181,0.15),transparent_70%)]" />
        <div className="relative z-10 text-center max-w-sm">
          <div className="mx-auto w-24 h-24 rounded-full bg-[#12CDB5]/10 border border-[#12CDB5]/40 flex items-center justify-center shadow-[0_0_30px_rgba(18,205,181,0.3)] mb-6 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-[#12CDB5] flex items-center justify-center text-[#07111F] font-bold text-lg">
              15
            </div>
          </div>
          <h4 className="font-heading text-lg font-bold text-white mb-2">
            Connected Healthcare Ecosystem
          </h4>
          <p className="text-xs text-text-muted leading-relaxed">
            Synchronizing patients, physicians, laboratories, pharmacies, and emergency services under one unified portfolio.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[520px] lg:h-[620px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Soft ambient background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(18,205,181,0.12),transparent_75%)]" />

      <Canvas
        camera={{ position: [0, 0, 7.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <SceneContent />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07111F]/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-[#12CDB5] animate-ping" />
          Interactive 3D Ecosystem • Drag to rotate
        </span>
      </div>
    </div>
  );
};

export default HealthcareEcosystem3D;
