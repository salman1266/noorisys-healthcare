"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// =========================================================================
// 1. GENERATE HEALTHCARE SPRITE TEXTURES (Glowing Medical Cross & Bio-Cell)
// =========================================================================

// Glowing Medical Cross (+) texture for the particle point field
function createMedicalCrossTexture(): THREE.Texture | null {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const cx = 32;
  const cy = 32;
  const armLength = 24;
  const armWidth = 7;
  const radius = 2.5;

  // Outer ambient soft radial glow
  const glow = ctx.createRadialGradient(cx, cy, 2, cx, cy, 30);
  glow.addColorStop(0, "rgba(255, 255, 255, 0.95)");
  glow.addColorStop(0.25, "rgba(0, 229, 255, 0.75)");
  glow.addColorStop(0.65, "rgba(18, 205, 181, 0.25)");
  glow.addColorStop(1, "rgba(0, 0, 0, 0)");

  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(cx, cy, 31, 0, Math.PI * 2);
  ctx.fill();

  // Solid, crisp white-cyan medical cross in the center
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.shadowColor = "#00E5FF";
  ctx.shadowBlur = 6;

  // Draw rounded horizontal arm
  drawRoundedBar(ctx, cx - armLength / 2, cy - armWidth / 2, armLength, armWidth, radius);
  // Draw rounded vertical arm
  drawRoundedBar(ctx, cx - armWidth / 2, cy - armLength / 2, armWidth, armLength, radius);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Helper to draw rounded rectangle safely across all browsers
function drawRoundedBar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
}

// =========================================================================
// 2. HEALTHCARE PARTICLES FIELD (Drifting Medical Crosses with Parallax)
// =========================================================================
function HealthcareParticleField({ count = 280 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const texture = useMemo(() => createMedicalCrossTexture(), []);
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Generate 3D Positions, Colors & Speeds
  const [positions, colors, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const init = new Float32Array(count * 3);

    // Healthcare palette: Electric Cyan, Medical Teal, Clinical Mint, Pure White, Soft Azure
    const palette = [
      new THREE.Color("#00E5FF"), // Cyan
      new THREE.Color("#12CDB5"), // Medical Teal
      new THREE.Color("#43E6D0"), // Mint
      new THREE.Color("#FFFFFF"), // Crisp Luminous White
      new THREE.Color("#38BDF8"), // Soft Azure
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 52;
      const y = (Math.random() - 0.5) * 44;
      const z = (Math.random() - 0.5) * 32 - 4;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      init[i3] = x;
      init[i3 + 1] = y;
      init[i3 + 2] = z;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }

    return [pos, col, init];
  }, [count]);

  // Track window mouse move for smooth 3D parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, mouse.current.targetX, 0.03);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, mouse.current.targetY, 0.03);

    const time = state.clock.getElapsedTime();

    if (pointsRef.current) {
      // Gentle parallax & breathing drift
      pointsRef.current.rotation.y = time * 0.015 + mouse.current.x * 0.12;
      pointsRef.current.rotation.x = Math.sin(time * 0.012) * 0.04 + mouse.current.y * 0.08;

      const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Laminar laminar drift (like cellular floatation in fluid)
        array[i3 + 1] =
          initialPositions[i3 + 1] + Math.sin(time * 0.7 + initialPositions[i3]) * 0.5;
        array[i3] =
          initialPositions[i3] + Math.cos(time * 0.5 + initialPositions[i3 + 1]) * 0.35;
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.65}
        map={texture || undefined}
        vertexColors
        transparent
        opacity={0.68}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// =========================================================================
// 3. FLOATING 3D MEDICAL CROSSES (Volumetric Tumbling Cross Meshes)
// =========================================================================
function Floating3DCross({
  position,
  color,
  scale = 1,
  rotationSpeed = [0.01, 0.015, 0.008],
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  rotationSpeed?: [number, number, number];
}) {
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];
      meshRef.current.position.y = initialY + Math.sin(t * 0.8 + position[0]) * 0.4;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      {/* Horizontal Bar */}
      <mesh>
        <boxGeometry args={[1.2, 0.38, 0.38]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* Vertical Bar */}
      <mesh>
        <boxGeometry args={[0.38, 1.2, 0.38]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

function Floating3DCrosses() {
  const crosses = useMemo(
    () => [
      { pos: [-14, 8, -9] as [number, number, number], color: "#00E5FF", scale: 0.35 },
      { pos: [15, -6, -11] as [number, number, number], color: "#12CDB5", scale: 0.4 },
      { pos: [-9, -12, -7] as [number, number, number], color: "#43E6D0", scale: 0.3 },
      { pos: [12, 11, -13] as [number, number, number], color: "#00E5FF", scale: 0.32 },
      { pos: [-18, -3, -12] as [number, number, number], color: "#10B981", scale: 0.28 },
      { pos: [17, 5, -15] as [number, number, number], color: "#00E5FF", scale: 0.38 },
      { pos: [0, 15, -14] as [number, number, number], color: "#38BDF8", scale: 0.34 },
    ],
    []
  );

  return (
    <group>
      {crosses.map((c, i) => (
        <Floating3DCross key={i} position={c.pos} color={c.color} scale={c.scale} />
      ))}
    </group>
  );
}

// =========================================================================
// 4. FLOATING PHARMACEUTICAL CAPSULES (3D Pills Tumbling in Space)
// =========================================================================
function FloatingCapsule({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.3 + position[0];
      meshRef.current.rotation.y = t * 0.2 + position[2];
      meshRef.current.position.y = initialY + Math.sin(t * 0.7 + position[2]) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <capsuleGeometry args={[0.22, 0.48, 12, 16]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.38}
        blending={THREE.AdditiveBlending}
        wireframe={false}
      />
    </mesh>
  );
}

function FloatingCapsules() {
  const pills = useMemo(
    () => [
      { pos: [-16, 5, -10] as [number, number, number], color: "#00E5FF", scale: 0.9 },
      { pos: [14, -10, -12] as [number, number, number], color: "#10B981", scale: 1.1 },
      { pos: [8, 13, -11] as [number, number, number], color: "#12CDB5", scale: 0.8 },
      { pos: [-11, -9, -8] as [number, number, number], color: "#00E5FF", scale: 1.0 },
      { pos: [16, 3, -13] as [number, number, number], color: "#38BDF8", scale: 0.85 },
      { pos: [-4, 16, -14] as [number, number, number], color: "#12CDB5", scale: 0.95 },
    ],
    []
  );

  return (
    <group>
      {pills.map((p, i) => (
        <FloatingCapsule key={i} position={p.pos} color={p.color} scale={p.scale} />
      ))}
    </group>
  );
}

// =========================================================================
// 5. DNA / BIOMEDICAL MOLECULAR LATTICE (Interconnected Bio-Nodes)
// =========================================================================
function MolecularLattice() {
  const groupRef = useRef<THREE.Group>(null);

  // Define a small molecular chain (atoms + bonds)
  const [nodes, linePositions] = useMemo(() => {
    const rawNodes: [number, number, number][] = [
      [-5, -4, -11],
      [-3.5, -2.5, -10],
      [-2, -3.8, -11.5],
      [-0.5, -2.2, -10],
      [1.0, -3.5, -11],
      [2.5, -2.0, -10.5],
      [4.0, -3.3, -11.2],
    ];

    const lines: number[] = [];
    for (let i = 0; i < rawNodes.length - 1; i++) {
      lines.push(...rawNodes[i]);
      lines.push(...rawNodes[i + 1]);
    }

    return [rawNodes, new Float32Array(lines)];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      groupRef.current.rotation.y = t * 0.02;
      groupRef.current.rotation.z = Math.sin(t * 0.015) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Molecular Atoms */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#00E5FF" : "#12CDB5"}
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}

      {/* Molecular Bonds (Connecting Lines) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

// =========================================================================
// 6. ROOT 3D SCENE EXPORT
// =========================================================================
export const BackgroundParticles3D: React.FC = () => {
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

  if (hasWebGL === false) {
    return null; // Silent fallback
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        {/* Healthcare Point Field: Glowing Medical Crosses */}
        <HealthcareParticleField count={280} />

        {/* Floating 3D Medical Crosses */}
        <Floating3DCrosses />

        {/* Floating 3D Pharmaceutical Capsules */}
        <FloatingCapsules />

        {/* Biomedical Molecular Chain */}
        <MolecularLattice />
      </Canvas>
    </div>
  );
};

export default BackgroundParticles3D;
