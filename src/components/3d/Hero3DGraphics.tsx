import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const PrimaryShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[3, 1, -2]} scale={0.9}>
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial 
          color="#8b5cf6" // Violet
          emissive="#3b82f6" // blue
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.1} 
          roughness={0.4} 
          distort={0.4} 
          speed={2} 
        />
      </mesh>
    </Float>
  );
};

const SecondaryShape = () => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={[-3, -1, -4]} scale={0.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial 
          color="#f43f5e" // Rose
          emissive="#be123c"
          envMapIntensity={0.8}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          metalness={0.1}
          roughness={0.5}
          distort={0.3}
          speed={3}
        />
      </mesh>
    </Float>
  );
};

const TertiaryShape = () => {
  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={3}>
      <mesh position={[-1, 2, -6]} scale={0.5}>
        <octahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial 
          color="#f59e0b" // Amber
          emissive="#d97706"
          envMapIntensity={0.8}
          clearcoat={0.9}
          clearcoatRoughness={0.1}
          metalness={0.2}
          roughness={0.3}
          distort={0.2}
          speed={2.5}
        />
      </mesh>
    </Float>
  );
};

export const Hero3DGraphics: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#f43f5e" />
        
        <PrimaryShape />
        <SecondaryShape />
        <TertiaryShape />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Hero3DGraphics;
