"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "motion/react";

function Particles({ count = 4000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 100;
      p[i * 3 + 1] = (Math.random() - 0.5) * 100;
      p[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return p;
  }, [count]);

  const matRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    matRef.current.uTime = time;
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={matRef}
        transparent
        uniforms={{
          uTime: { value: 0 },
          uColors: { value: [
            new THREE.Color("#FF9900"), // Amazon Orange/Gold
            new THREE.Color("#febd69"), // Amazon Gold
            new THREE.Color("#007185"), // Amazon Teal
            new THREE.Color("#ffffff")  // White
          ] },
        }}
        vertexShader={`
          uniform float uTime;
          varying float vSize;
          varying vec3 vColor;
          void main() {
            vec3 p = position;
            p.y += sin(uTime * 0.3 + p.x * 0.1) * 3.0;
            p.z += cos(uTime * 0.2 + p.y * 0.1) * 3.0;
            vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
            float dist = length(p);
            vSize = (3.0 + sin(uTime * 2.5 + p.x) * 1.5) * (30.0 / -mvPosition.z);
            gl_PointSize = vSize;
            gl_Position = projectionMatrix * mvPosition;
          }
        `}
        fragmentShader={`
          uniform float uTime;
          void main() {
            float dist = distance(gl_PointCoord, vec2(0.5));
            if (dist > 0.5) discard;
            float shimmer = 0.9 + 0.1 * sin(uTime * 6.0 + dist * 15.0);
            
            vec3 gold = vec3(1.0, 0.6, 0.0);
            vec3 lightGold = vec3(0.99, 0.74, 0.41);
            vec3 teal = vec3(0.0, 0.44, 0.52);
            vec3 deepTeal = vec3(0.0, 0.4, 0.75);
            vec3 white = vec3(1.0, 1.0, 1.0);
            
            float colorSelect = mod(dist * 0.8 + uTime * 0.2, 5.0);
            vec3 color;
            if (colorSelect < 1.0) color = gold;
            else if (colorSelect < 2.0) color = lightGold;
            else if (colorSelect < 3.0) color = teal;
            else if (colorSelect < 4.0) color = deepTeal;
            else color = white;
            
            gl_FragColor = vec4(color, shimmer * (1.0 - (dist * 2.0)) * 1.0);
          }
        `}
      />
    </points>
  );
}

function ElectricShimmer() {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} position={[0, 0, -10]}>
      <planeGeometry args={[200, 200]} />
      <shaderMaterial
        transparent
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;
          
          void main() {
            vec2 p = vUv * 2.0 - 1.0;
            float pulse = sin(uTime * 0.6) * 0.5 + 0.5;
            float wave1 = sin(p.x * 4.0 + uTime * 0.3) * cos(p.y * 4.0 - uTime * 0.2);
            float wave2 = sin(p.y * 6.0 - uTime * 0.4) * cos(p.x * 2.0 + uTime * 0.5);
            float wave = (wave1 + wave2) * 0.5;
            
            vec3 white = vec3(0.98, 0.99, 1.0);
            vec3 softGold = vec3(1.0, 0.97, 0.92);
            vec3 softAmber = vec3(1.0, 0.95, 0.88);
            vec3 softTeal = vec3(0.92, 0.98, 0.98);
            
            float mix1 = sin(uTime * 0.2 + p.x) * 0.5 + 0.5;
            float mix2 = cos(uTime * 0.3 + p.y) * 0.5 + 0.5;
            
            vec3 finalColor = mix(white, iceBlue, pulse * 0.6);
            finalColor = mix(finalColor, softPink, wave * 0.2 * mix1);
            finalColor = mix(finalColor, softCyan, wave * 0.2 * mix2);
            
            gl_FragColor = vec4(finalColor, 0.6);
          }
        `}
      />
    </mesh>
  );
}

function OrbitRing({ radius, color, rotation = [Math.PI / 2, 0, 0] }) {
  return (
    <group rotation={rotation}>
      {/* Primary Ultra-Bright Neon Stroke */}
      <mesh>
        <ringGeometry args={[radius - 0.02, radius + 0.02, 128]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={1.0} 
          side={THREE.DoubleSide} 
        />
      </mesh>
      {/* Outer Bloom Glow */}
      <mesh>
        <ringGeometry args={[radius - 0.1, radius + 0.1, 128]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.4} 
          side={THREE.DoubleSide} 
        />
      </mesh>
      {/* Distant Aura */}
      <mesh>
        <ringGeometry args={[radius - 0.3, radius + 0.3, 128]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.1} 
          side={THREE.DoubleSide} 
        />
      </mesh>
    </group>
  );
}

function OrbitCore() {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z = 1 + Math.sin(t * 3) * 0.08;
  });

  return (
    <group>
      {/* Glossy AI Core */}
      <mesh ref={mesh}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.1}
          metalness={0.5}
          emissive="#FF9900"
          emissiveIntensity={2}
        />
      </mesh>
      {/* Core Energy Aura */}
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial 
          color="#007185" 
          transparent 
          opacity={0.15} 
          side={THREE.BackSide}
        />
      </mesh>
      <pointLight intensity={12} distance={10} color="#FF9900" />
    </group>
  );
}

function OrbitingBall({ radius, speed, size, color, offset = 0 }) {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    mesh.current.position.x = Math.cos(t) * radius;
    mesh.current.position.y = Math.sin(t) * radius * 0.2; 
    mesh.current.position.z = Math.sin(t) * radius;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={20}
        toneMapped={false}
      />
      <pointLight intensity={8} distance={size * 40} color={color} />
    </mesh>
  );
}

export function SpaceBackground() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-50 bg-[#eaeded]"></div>;

  return (
    <div className="fixed inset-0 -z-50 bg-[#eaeded] overflow-hidden">
      {/* 1. Deep Cinematic Foundation - High Contrast */}
      <div className="absolute inset-0 z-0 bg-[#eaeded]"></div>
      
      {/* 1.5. Intense Futuristic Orbit Zone - MAIN CENTERPIECE Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,153,0,0.06)_0%,transparent_70%)]"></div>
         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-multiply"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF9900]/5 blur-[200px] rounded-full animate-pulse"></div>
         <div className="absolute inset-0 border-y border-[#FF9900]/10 bg-grid-slate-900/[0.015]"></div>
         
         {/* Futuristic Light Streaks (CSS) */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#FF9900]/10 to-transparent rotate-12 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#007185]/10 to-transparent -rotate-12 animate-pulse"></div>
         </div>
      </div>
      
      {/* 2. Floating Blue Shimmer Blobs (CSS) - MORE VIBRANT */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <motion.div 
            animate={{ 
               scale: [1, 1.5, 1],
               x: [0, 100, 0],
               y: [0, -80, 0],
               opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-[#febd69]/30 blur-[150px] rounded-full"
         />
         <motion.div 
            animate={{ 
               scale: [1, 1.6, 1],
               x: [0, -100, 0],
               y: [0, 100, 0],
               opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] bg-[#007185]/20 blur-[180px] rounded-full"
         />
         <motion.div 
            animate={{ 
               scale: [1, 1.4, 1],
               opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-[#FF9900]/10 blur-[200px] rounded-full"
         />
      </div>

      {/* 3. Three.js Layer for Stars and Electric Waves */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <React.Suspense fallback={null}>
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={75} />
            <ambientLight intensity={0.3} />
            <ElectricShimmer />
            <OrbitCore />
            <Particles count={3500} />
            
            {/* HUD-Style High-Visibility Orbit Rings */}
            <OrbitRing radius={5} color="#FF9900" />
            <OrbitRing radius={9} color="#007185" />
            <OrbitRing radius={13} color="#febd69" />
            
            {/* Futuristic Energy Hubs */}
            <OrbitingBall radius={5} speed={1.2} size={0.3} color="#FF9900" offset={0} />
            <OrbitingBall radius={9} speed={0.8} size={0.22} color="#007185" offset={2} />
            <OrbitingBall radius={13} speed={0.6} size={0.25} color="#febd69" offset={4} />
            
            {/* Light Streaks & Sparkles */}
            <OrbitingBall radius={11} speed={-1.5} size={0.08} color="#ffffff" offset={1} /> 
            <OrbitingBall radius={18} speed={0.2} size={0.12} color="#FF9900" offset={3} />
            <OrbitingBall radius={6} speed={2.0} size={0.05} color="#007185" offset={5} />
          </Canvas>
        </React.Suspense>
      </div>

      {/* 4. Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 5. Bottom Atmospheric Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/40 via-transparent to-transparent opacity-80"></div>
    </div>
  );
}
