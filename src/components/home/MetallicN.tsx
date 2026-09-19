import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Float, Environment, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import NightMediaIcon from '../Logo/NightMediaIcon';

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const SCALE = 0.072;

/** The signature N, machined from three metallic bars matching the brand path. */
function NBars() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_state, delta) => {
    if (!ref.current || prefersReduced) return;
    ref.current.rotation.y += delta * 0.14;
  });

  const mat = (
    <meshPhysicalMaterial
      color="#C9D1D8"
      metalness={1}
      roughness={0.26}
      clearcoat={1}
      clearcoatRoughness={0.35}
      reflectivity={1}
    />
  );

  return (
    <group ref={ref} scale={SCALE}>
      {/* left vertical — full height */}
      <RoundedBox args={[7, 48, 14]} radius={2} smoothness={5} position={[-20, 0, 0]}>
        {mat}
      </RoundedBox>
      {/* diagonal — top-left to lower-right */}
      <RoundedBox args={[7, 56.57, 14]} radius={2} smoothness={5} position={[0, 4, 0]} rotation={[0, 0, -Math.PI / 4]}>
        {mat}
      </RoundedBox>
      {/* right vertical */}
      <RoundedBox args={[7, 40, 14]} radius={2} smoothness={5} position={[20, 4, 0]}>
        {mat}
      </RoundedBox>
    </group>
  );
}

function SignalField() {
  const ref = useRef<THREE.Points>(null);
  const count = prefersReduced ? 0 : 46;
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 2.6;
      const t = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4.4;
      arr[i * 3] = Math.cos(t) * r;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = Math.sin(t) * r;
    }
    return arr;
  }, [count]);

  useFrame((_s, delta) => {
    if (ref.current && !prefersReduced) ref.current.rotation.y += delta * 0.05;
  });

  if (count === 0) return null;
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#3B9EFF" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-5, -2, 3]} intensity={1.2} color="#38C9C0" />
      <pointLight position={[5, 3, 2]} intensity={1.0} color="#3B9EFF" />

      <Suspense fallback={null}>
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={2.2} color="#3B9EFF" position={[-3, 2, 4]} scale={[6, 2, 1]} />
          <Lightformer form="rect" intensity={1.6} color="#38C9C0" position={[3, -1, 3]} scale={[4, 3, 1]} />
          <Lightformer form="rect" intensity={1.2} color="#ffffff" position={[0, 4, -2]} scale={[5, 2, 1]} />
        </Environment>
        <Float speed={prefersReduced ? 0 : 1.1} rotationIntensity={prefersReduced ? 0 : 0.18} floatIntensity={prefersReduced ? 0 : 0.5}>
          <NBars />
        </Float>
        <SignalField />
      </Suspense>
    </Canvas>
  );
}

/**
 * Metallic N — lazy 3D object with an immediate SVG fallback so the
 * opening view is never blank. Defers mounting the WebGL canvas until idle.
 */
const MetallicN: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const ric = (window as any).requestIdleCallback;
    const cid = ric
      ? ric(() => setReady(true), { timeout: 1100 })
      : (setTimeout(() => setReady(true), 600) as unknown as number);
    return () => {
      if (ric) (window as any).cancelIdleCallback(cid);
      else clearTimeout(cid);
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`} aria-hidden="true">
      {/* immediate fallback */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: ready ? 0 : 1, transition: 'opacity .8s' }}>
        <NightMediaIcon variant="metallic" size={208} animated />
      </div>
      {ready && (
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MetallicN;
