"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";

// =========================================================================
// 1. ANATOMICAL HEART (Glowing, Pulsing with Natural Heartbeat)
// =========================================================================
function AnatomicalHeart({ isHovered }: { isHovered: boolean }) {
  const heartGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const glowLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Realistic double-pulse heartbeat formula (lub-dub)
    const beatCycle = (t * 2.2) % 1;
    let pulse = 0;
    if (beatCycle < 0.15) {
      pulse = Math.sin((beatCycle / 0.15) * Math.PI) * 0.28;
    } else if (beatCycle > 0.2 && beatCycle < 0.35) {
      pulse = Math.sin(((beatCycle - 0.2) / 0.15) * Math.PI) * 0.18;
    }

    const scale = 1 + pulse + (isHovered ? 0.2 : 0);

    if (heartGroupRef.current) {
      heartGroupRef.current.scale.set(scale, scale, scale);
    }

    if (coreRef.current) {
      const mat = coreRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = 1.4 + pulse * 2.5 + (isHovered ? 1.0 : 0);
    }

    if (glowLightRef.current) {
      glowLightRef.current.intensity = 2.0 + pulse * 4.0 + (isHovered ? 2.0 : 0);
    }
  });

  return (
    <group ref={heartGroupRef} position={[-0.14, 0.48, 0.12]}>
      {/* Central Ventricle Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial
          color="#FF2A55"
          emissive="#FF1035"
          emissiveIntensity={1.8}
          roughness={0.2}
          metalness={0.5}
        />
      </mesh>

      {/* Aortic Arch & Vena Cava vessels */}
      <mesh position={[0.04, 0.14, -0.02]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.05, 0.06, 0.16, 16]} />
        <meshStandardMaterial
          color="#FF3B65"
          emissive="#FF1035"
          emissiveIntensity={1.2}
        />
      </mesh>
      
      <mesh position={[-0.05, 0.13, 0.02]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.045, 0.05, 0.14, 16]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00B4D8"
          emissiveIntensity={1.4}
        />
      </mesh>

      {/* Outer Holographic Energy Aura */}
      <mesh>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshBasicMaterial
          color="#43E6D0"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Localized Pulsing Cardiac Light */}
      <pointLight
        ref={glowLightRef}
        color="#FF1E4D"
        distance={2.4}
        intensity={2.5}
      />
    </group>
  );
}

// =========================================================================
// 2. HOLOGRAPHIC TRANSLUCENT HUMAN SILHOUETTE
// =========================================================================
function HolographicHuman({ isHovered }: { isHovered: boolean }) {
  const humanGroupRef = useRef<THREE.Group>(null);
  const scanRingRef = useRef<THREE.Group>(null);
  const spineLightRef = useRef<THREE.PointLight>(null);

  // Subtle breathing and scanner cycle
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (humanGroupRef.current) {
      // Gentle rhythmic chest respiration
      const breath = Math.sin(t * 1.4) * 0.025;
      humanGroupRef.current.position.y = -1.55 + breath;
    }

    if (scanRingRef.current) {
      // Sweeping holographic diagnostic scanner bar moving up and down
      const scanY = 1.35 + Math.sin(t * 1.8) * 1.6;
      scanRingRef.current.position.y = scanY;
    }

    if (spineLightRef.current) {
      spineLightRef.current.intensity = 1.0 + Math.sin(t * 3.0) * 0.4;
    }
  });

  // Common materials for holographic render
  const holoMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#12CDB5",
        emissive: "#0B8F7D",
        emissiveIntensity: 0.75,
        transparent: true,
        opacity: 0.38,
        roughness: 0.25,
        metalness: 0.8,
      }),
    []
  );

  const wireMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#43E6D0",
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      }),
    []
  );

  const innerLatticeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#00E5FF",
        wireframe: true,
        transparent: true,
        opacity: 0.2,
      }),
    []
  );

  return (
    <group ref={humanGroupRef} position={[0, -1.55, 0]}>
      {/* ---- HEAD & CRANIUM ---- */}
      <group position={[0, 2.7, 0]}>
        {/* Cranium shell */}
        <mesh material={holoMaterial}>
          <sphereGeometry args={[0.3, 32, 32]} />
        </mesh>
        <mesh material={wireMaterial}>
          <sphereGeometry args={[0.315, 16, 16]} />
        </mesh>
        {/* Facial taper */}
        <mesh position={[0, -0.15, 0.08]} rotation={[0.2, 0, 0]} material={holoMaterial}>
          <coneGeometry args={[0.22, 0.3, 24]} />
        </mesh>
        {/* Neural Cortex core glow */}
        <mesh position={[0, 0.04, 0]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.65} />
        </mesh>
        <pointLight color="#43E6D0" intensity={1.2} distance={1.2} />
      </group>

      {/* ---- NECK & CERVICAL SPINE ---- */}
      <mesh position={[0, 2.24, 0]} material={holoMaterial}>
        <cylinderGeometry args={[0.13, 0.15, 0.26, 20]} />
      </mesh>
      <mesh position={[0, 2.24, 0]} material={wireMaterial}>
        <cylinderGeometry args={[0.135, 0.155, 0.26, 12]} />
      </mesh>

      {/* ---- TORSO, CLAVICLE & RIBCAGE ---- */}
      <group position={[0, 1.45, 0]}>
        {/* Upper Chest (Pectorals / Ribcage) */}
        <mesh position={[0, 0.35, 0]} material={holoMaterial}>
          <boxGeometry args={[0.88, 0.6, 0.44]} />
        </mesh>
        <mesh position={[0, 0.35, 0]} material={wireMaterial}>
          <boxGeometry args={[0.9, 0.62, 0.46]} />
        </mesh>

        {/* Anatomical Heart pulsing in left chest */}
        <AnatomicalHeart isHovered={isHovered} />

        {/* Mid-Abdomen (Tapered) */}
        <mesh position={[0, -0.18, 0]} material={holoMaterial}>
          <cylinderGeometry args={[0.36, 0.32, 0.52, 24]} />
        </mesh>
        <mesh position={[0, -0.18, 0]} material={wireMaterial}>
          <cylinderGeometry args={[0.375, 0.335, 0.52, 16]} />
        </mesh>

        {/* Central Glowing Spine Backbone */}
        <group position={[0, 0.1, -0.1]}>
          {[-0.35, -0.15, 0.05, 0.25, 0.45].map((y, idx) => (
            <mesh key={idx} position={[0, y, 0]}>
              <sphereGeometry args={[0.04, 12, 12]} />
              <meshBasicMaterial color="#43E6D0" />
            </mesh>
          ))}
          <pointLight ref={spineLightRef} color="#43E6D0" distance={1.8} intensity={1.0} />
        </group>
      </group>

      {/* ---- PELVIS & HIPS ---- */}
      <group position={[0, 0.95, 0]}>
        <mesh material={holoMaterial}>
          <cylinderGeometry args={[0.35, 0.38, 0.35, 24]} />
        </mesh>
        <mesh material={wireMaterial}>
          <cylinderGeometry args={[0.365, 0.395, 0.35, 16]} />
        </mesh>
      </group>

      {/* ---- SHOULDERS & ARMS (Clinical Diagnostic Posture) ---- */}
      {/* Left Arm */}
      <group position={[-0.58, 1.7, 0]}>
        {/* Shoulder */}
        <mesh material={holoMaterial}>
          <sphereGeometry args={[0.16, 16, 16]} />
        </mesh>
        {/* Upper Arm */}
        <mesh position={[-0.1, -0.38, 0]} rotation={[0, 0, 0.16]} material={holoMaterial}>
          <cylinderGeometry args={[0.11, 0.09, 0.68, 16]} />
        </mesh>
        <mesh position={[-0.1, -0.38, 0]} rotation={[0, 0, 0.16]} material={wireMaterial}>
          <cylinderGeometry args={[0.115, 0.095, 0.68, 10]} />
        </mesh>
        {/* Elbow Node */}
        <mesh position={[-0.17, -0.76, 0]} material={innerLatticeMaterial}>
          <sphereGeometry args={[0.1, 12, 12]} />
        </mesh>
        {/* Forearm angled inward */}
        <mesh position={[-0.14, -1.18, 0.12]} rotation={[-0.25, 0, 0.1]} material={holoMaterial}>
          <cylinderGeometry args={[0.085, 0.07, 0.65, 16]} />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.12, -1.54, 0.22]} material={holoMaterial}>
          <boxGeometry args={[0.08, 0.18, 0.14]} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[0.58, 1.7, 0]}>
        {/* Shoulder */}
        <mesh material={holoMaterial}>
          <sphereGeometry args={[0.16, 16, 16]} />
        </mesh>
        {/* Upper Arm */}
        <mesh position={[0.1, -0.38, 0]} rotation={[0, 0, -0.16]} material={holoMaterial}>
          <cylinderGeometry args={[0.11, 0.09, 0.68, 16]} />
        </mesh>
        <mesh position={[0.1, -0.38, 0]} rotation={[0, 0, -0.16]} material={wireMaterial}>
          <cylinderGeometry args={[0.115, 0.095, 0.68, 10]} />
        </mesh>
        {/* Elbow Node */}
        <mesh position={[0.17, -0.76, 0]} material={innerLatticeMaterial}>
          <sphereGeometry args={[0.1, 12, 12]} />
        </mesh>
        {/* Forearm angled inward */}
        <mesh position={[0.14, -1.18, 0.12]} rotation={[-0.25, 0, -0.1]} material={holoMaterial}>
          <cylinderGeometry args={[0.085, 0.07, 0.65, 16]} />
        </mesh>
        {/* Hand */}
        <mesh position={[0.12, -1.54, 0.22]} material={holoMaterial}>
          <boxGeometry args={[0.08, 0.18, 0.14]} />
        </mesh>
      </group>

      {/* ---- LEGS (Standing firmly on circular platform) ---- */}
      {/* Left Leg */}
      <group position={[-0.22, 0.65, 0]}>
        {/* Thigh */}
        <mesh position={[0, -0.45, 0]} material={holoMaterial}>
          <cylinderGeometry args={[0.15, 0.12, 0.85, 20]} />
        </mesh>
        <mesh position={[0, -0.45, 0]} material={wireMaterial}>
          <cylinderGeometry args={[0.155, 0.125, 0.85, 12]} />
        </mesh>
        {/* Knee Joint */}
        <mesh position={[0, -0.92, 0]} material={innerLatticeMaterial}>
          <sphereGeometry args={[0.12, 14, 14]} />
        </mesh>
        {/* Calf */}
        <mesh position={[0, -1.4, 0]} material={holoMaterial}>
          <cylinderGeometry args={[0.11, 0.085, 0.85, 20]} />
        </mesh>
        <mesh position={[0, -1.4, 0]} material={wireMaterial}>
          <cylinderGeometry args={[0.115, 0.09, 0.85, 12]} />
        </mesh>
        {/* Foot on platform */}
        <mesh position={[0, -1.86, 0.08]} material={holoMaterial}>
          <boxGeometry args={[0.13, 0.08, 0.32]} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group position={[0.22, 0.65, 0]}>
        {/* Thigh */}
        <mesh position={[0, -0.45, 0]} material={holoMaterial}>
          <cylinderGeometry args={[0.15, 0.12, 0.85, 20]} />
        </mesh>
        <mesh position={[0, -0.45, 0]} material={wireMaterial}>
          <cylinderGeometry args={[0.155, 0.125, 0.85, 12]} />
        </mesh>
        {/* Knee Joint */}
        <mesh position={[0, -0.92, 0]} material={innerLatticeMaterial}>
          <sphereGeometry args={[0.12, 14, 14]} />
        </mesh>
        {/* Calf */}
        <mesh position={[0, -1.4, 0]} material={holoMaterial}>
          <cylinderGeometry args={[0.11, 0.085, 0.85, 20]} />
        </mesh>
        <mesh position={[0, -1.4, 0]} material={wireMaterial}>
          <cylinderGeometry args={[0.115, 0.09, 0.85, 12]} />
        </mesh>
        {/* Foot on platform */}
        <mesh position={[0, -1.86, 0.08]} material={holoMaterial}>
          <boxGeometry args={[0.13, 0.08, 0.32]} />
        </mesh>
      </group>

      {/* ---- ANIMATED CYAN SCANNING RING (Sweeps vertically over body) ---- */}
      <group ref={scanRingRef} position={[0, 1.5, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.82, 0.016, 16, 64]} />
          <meshBasicMaterial color="#00FFFF" transparent opacity={0.85} />
        </mesh>
        {/* Planar laser beam sheet */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.8, 32]} />
          <meshBasicMaterial
            color="#43E6D0"
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
          />
        </mesh>
        <pointLight color="#00FFFF" intensity={1.8} distance={1.8} />
      </group>
    </group>
  );
}

// =========================================================================
// 3. FUTURISTIC CIRCULAR HOLOGRAPHIC EMITTER PLATFORM
// =========================================================================
function HolographicPlatform() {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const midRingRef = useRef<THREE.Mesh>(null);
  const runesRingRef = useRef<THREE.Mesh>(null);
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.2;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.z -= delta * 0.35;
    }
    if (runesRingRef.current) {
      runesRingRef.current.rotation.z += delta * 0.12;
    }
    if (beamRef.current) {
      const mat = beamRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.16 + Math.sin(state.clock.getElapsedTime() * 2.5) * 0.06;
    }
  });

  return (
    <group position={[0, -1.8, 0]}>
      {/* Base Solid Tech Plinth */}
      <mesh position={[0, -0.06, 0]}>
        <cylinderGeometry args={[1.75, 1.9, 0.12, 48]} />
        <meshStandardMaterial
          color="#07172B"
          roughness={0.4}
          metalness={0.85}
        />
      </mesh>

      {/* Outer Cyan Glowing Edge Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.78, 0.035, 16, 64]} />
        <meshBasicMaterial color="#12CDB5" />
      </mesh>

      {/* Rotating Concentric Holographic Rings */}
      <mesh ref={outerRingRef} position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.5, 1.56, 64]} />
        <meshBasicMaterial
          color="#43E6D0"
          side={THREE.DoubleSide}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh ref={midRingRef} position={[0, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.15, 1.22, 48]} />
        <meshBasicMaterial
          color="#00E5FF"
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh ref={runesRingRef} position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.7, 0.74, 32]} />
        <meshBasicMaterial
          color="#12CDB5"
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Holographic Projection Light Cylinder (Column of vertical light) */}
      <mesh ref={beamRef} position={[0, 1.6, 0]}>
        <cylinderGeometry args={[1.4, 1.65, 3.4, 32, 1, true]} />
        <meshBasicMaterial
          color="#12CDB5"
          transparent
          opacity={0.16}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Platform Upward Projector Spotlight */}
      <spotLight
        position={[0, 0.1, 0]}
        target-position={[0, 3.0, 0]}
        color="#43E6D0"
        intensity={3.5}
        distance={6.0}
        angle={Math.PI / 4}
        penumbra={0.6}
      />
    </group>
  );
}

// =========================================================================
// 4. FLOATING GLASS HEALTHCARE DASHBOARD PANELS (Live Telemetry Readouts)
// =========================================================================
function FloatingCardiacTelemetryPanel() {
  const linePoints = useMemo(() => {
    // Generate realistic EKG waveform pattern (P-Q-R-S-T)
    const pts: THREE.Vector3[] = [];
    const segments = 40;
    for (let i = 0; i <= segments; i++) {
      const x = -0.55 + (i / segments) * 1.1;
      let y = 0;
      const progress = i / segments;

      // EKG Spike
      if (progress > 0.42 && progress < 0.46) {
        y = 0.08; // P wave
      } else if (progress >= 0.46 && progress < 0.5) {
        y = -0.06; // Q dip
      } else if (progress >= 0.5 && progress < 0.56) {
        y = 0.32; // R peak
      } else if (progress >= 0.56 && progress < 0.6) {
        y = -0.12; // S dip
      } else if (progress >= 0.62 && progress < 0.7) {
        y = 0.1; // T wave
      }
      pts.push(new THREE.Vector3(x, y - 0.08, 0.02));
    }
    return pts;
  }, []);

  const ekgLine = useMemo(() => {
    const geom = new THREE.BufferGeometry().setFromPoints(linePoints);
    const mat = new THREE.LineBasicMaterial({
      color: "#FF2A55",
      linewidth: 2,
    });
    return new THREE.Line(geom, mat);
  }, [linePoints]);

  return (
    <Float speed={2.5} rotationIntensity={0.15} floatIntensity={0.4}>
      <Billboard position={[-1.75, 0.35, 0.6]}>
        <group>
          {/* Glass plate */}
          <mesh>
            <planeGeometry args={[1.5, 1.05]} />
            <meshBasicMaterial color="#0B1929" transparent opacity={0.82} />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(1.5, 1.05)]} />
            <lineBasicMaterial color="#FF2A55" transparent opacity={0.5} />
          </lineSegments>

          {/* Texts */}
          <Text
            position={[-0.64, 0.38, 0.02]}
            fontSize={0.08}
            color="#FF5E7E"
            anchorX="left"
            anchorY="middle"
          >
            CARDIAC TELEMETRY • LIVE
          </Text>

          <Text
            position={[-0.64, 0.22, 0.02]}
            fontSize={0.18}
            color="#FFFFFF"
            anchorX="left"
            anchorY="middle"
          >
            72 BPM
          </Text>
          <Text
            position={[-0.05, 0.2, 0.02]}
            fontSize={0.09}
            color="#43E6D0"
            anchorX="left"
            anchorY="middle"
          >
            SINUS RHYTHM
          </Text>

          {/* Embedded EKG Waveform */}
          <primitive object={ekgLine} />

          <Text
            position={[-0.64, -0.36, 0.02]}
            fontSize={0.075}
            color="#7F91A6"
            anchorX="left"
            anchorY="middle"
          >
            VASCULAR PERFUSION: OPTIMAL (100%)
          </Text>
        </group>
      </Billboard>
    </Float>
  );
}

function FloatingSystemicDiagnosticPanel() {
  return (
    <Float speed={2.0} rotationIntensity={0.12} floatIntensity={0.35}>
      <Billboard position={[1.75, 0.85, 0.4]}>
        <group>
          {/* Glass plate */}
          <mesh>
            <planeGeometry args={[1.45, 0.95]} />
            <meshBasicMaterial color="#0B1929" transparent opacity={0.82} />
          </mesh>
          <lineSegments>
            <edgesGeometry args={[new THREE.PlaneGeometry(1.45, 0.95)]} />
            <lineBasicMaterial color="#12CDB5" transparent opacity={0.5} />
          </lineSegments>

          {/* Readouts */}
          <Text
            position={[-0.62, 0.34, 0.02]}
            fontSize={0.075}
            color="#43E6D0"
            anchorX="left"
            anchorY="middle"
          >
            BIOMETRIC SCANNER • SYNC
          </Text>

          <Text
            position={[-0.62, 0.16, 0.02]}
            fontSize={0.13}
            color="#FFFFFF"
            anchorX="left"
            anchorY="middle"
          >
            SpO2: 99% • STABLE
          </Text>

          <Text
            position={[-0.62, -0.04, 0.02]}
            fontSize={0.11}
            color="#A5B4C5"
            anchorX="left"
            anchorY="middle"
          >
            BP: 120/80 mmHg
          </Text>

          <Text
            position={[-0.62, -0.22, 0.02]}
            fontSize={0.095}
            color="#12CDB5"
            anchorX="left"
            anchorY="middle"
          >
            TEMP: 36.8°C | NEURAL: 100%
          </Text>

          <Text
            position={[-0.62, -0.36, 0.02]}
            fontSize={0.07}
            color="#7F91A6"
            anchorX="left"
            anchorY="middle"
          >
            NOORISYS CLINICAL ENGINE v4.2
          </Text>
        </group>
      </Billboard>
    </Float>
  );
}

// =========================================================================
// 5. RISING CYAN DATA PARTICLES (Streaming upwards from platform)
// =========================================================================
function RisingCyanParticles({ count = 280 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 0.2 + Math.random() * 1.5;
      const angle = Math.random() * Math.PI * 2;
      coords[i * 3] = Math.cos(angle) * radius;
      coords[i * 3 + 1] = -1.8 + Math.random() * 3.8;
      coords[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        // Move upward
        positions[i * 3 + 1] += delta * (0.6 + (i % 5) * 0.15);
        if (positions[i * 3 + 1] > 2.2) {
          positions[i * 3 + 1] = -1.8;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.038}
        color="#43E6D0"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// =========================================================================
// 6. SCENE ROOT WITH MOUSE PARALLAX & CAMERA RESPONSIVENESS
// =========================================================================
function HologramSceneRoot() {
  const sceneGroupRef = useRef<THREE.Group>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    if (sceneGroupRef.current) {
      // Smooth mouse interaction and subtle parallax tilt
      const targetY = state.pointer.x * 0.22;
      const targetX = -state.pointer.y * 0.12;

      sceneGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        sceneGroupRef.current.rotation.y,
        targetY,
        0.05
      );
      sceneGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        sceneGroupRef.current.rotation.x,
        targetX,
        0.05
      );
    }
  });

  return (
    <group
      ref={sceneGroupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      {/* Ambient & Key Lights */}
      <ambientLight intensity={0.4} color="#0B1929" />
      <directionalLight position={[3, 5, 4]} intensity={1.5} color="#43E6D0" />
      <directionalLight position={[-4, 3, -2]} intensity={0.8} color="#12CDB5" />
      <pointLight position={[0, -1.6, 0.5]} intensity={2.5} color="#00E5FF" distance={3.5} />

      {/* Futuristic Circular Holographic Emitter Platform */}
      <HolographicPlatform />

      {/* Realistic Translucent Human Hologram with Glowing Heart */}
      <HolographicHuman isHovered={isHovered} />

      {/* Upward Streaming Cyan Data Particles */}
      <RisingCyanParticles count={260} />

      {/* Floating Glass Healthcare Dashboard Panels */}
      <FloatingCardiacTelemetryPanel />
      <FloatingSystemicDiagnosticPanel />
    </group>
  );
}

// =========================================================================
// 7. EXPORTED COMPONENT WITH WEBGL CHECK & CINEMATIC MOBILE FALLBACK
// =========================================================================
export const HolographicScene: React.FC = () => {
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

  // Graceful Fallback if WebGL is unavailable
  if (hasWebGL === false) {
    return (
      <div className="relative w-full h-[540px] lg:h-[640px] flex items-center justify-center rounded-3xl bg-gradient-to-b from-[#0B1929] to-[#07111F] border border-[#12CDB5]/30 p-8 overflow-hidden shadow-[0_0_50px_rgba(18,205,181,0.15)]">
        {/* Holographic silhouette SVG representation */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-44 h-72 flex items-center justify-center">
            {/* Glowing heart pulse */}
            <div className="absolute top-20 w-8 h-8 rounded-full bg-red-500/80 animate-ping shadow-[0_0_20px_#FF2A55]" />
            <div className="absolute top-20 w-5 h-5 rounded-full bg-red-500 shadow-[0_0_15px_#FF2A55]" />

            {/* Stylized Human Vector Hologram */}
            <svg viewBox="0 0 100 200" className="w-full h-full stroke-[#43E6D0] fill-none opacity-80">
              {/* Head */}
              <circle cx="50" cy="25" r="16" strokeWidth="2" strokeDasharray="4 2" />
              {/* Torso & Spine */}
              <path d="M50 42 L50 110 M32 55 L68 55 M28 85 L72 85" strokeWidth="2" />
              {/* Arms */}
              <path d="M32 55 L18 90 L22 125 M68 55 L82 90 L78 125" strokeWidth="2" />
              {/* Legs */}
              <path d="M40 110 L35 155 L32 195 M60 110 L65 155 L68 195" strokeWidth="2" />
            </svg>
          </div>

          {/* Circular Holographic Platform */}
          <div className="w-64 h-10 rounded-full border-2 border-[#12CDB5] bg-[#12CDB5]/10 shadow-[0_0_30px_#12CDB5] flex items-center justify-center -mt-4">
            <span className="text-[10px] font-mono text-[#43E6D0] tracking-widest uppercase">
              Holographic Diagnostic Core
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[540px] lg:h-[660px] rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Background radial lighting gradient matching dark navy cinematic reference */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(18,205,181,0.15),transparent_72%)]" />

      <Canvas
        camera={{ position: [0, 0.4, 4.8], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <HologramSceneRoot />
      </Canvas>

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#07111F]/75 backdrop-blur-md border border-[#12CDB5]/30 text-[10px] font-mono text-[#43E6D0]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A55] animate-ping" />
          Holographic Biometric Scanner • Interactive Parallax
        </span>
      </div>
    </div>
  );
};

export default HolographicScene;
