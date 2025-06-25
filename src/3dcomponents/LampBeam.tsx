import { useTexture } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type LampBeamProps = JSX.IntrinsicElements['group'] & {
  angle?: number;
  length?: number;
  intensity?: number;
  color?: string;
};

export default function LampBeam({
  angle = 1.5, // 밑면 반지름
  length = 10, // 길이
  intensity = 1000,
  color = '#ffffcc',
  ...props
}: LampBeamProps) {
  const coneRef = useRef<THREE.ConeGeometry>(null!);
  const texture = useTexture('/images/lampBeam_texture.png');
  const opacity = intensity / 1000000;

  useEffect(() => {
    const geometry = coneRef.current;
    if (!geometry) return;

    // Remapping UV
    const uv = geometry.attributes.uv;
    const pos = geometry.attributes.position;

    for (let i = 0; i < uv.count; i++) {
      const y = pos.getY(i);
      // Increase U => for vertical gradient
      uv.setXY(i, (y + length / 2) / length, 0.5);
    }
    uv.needsUpdate = true;

    // Add texture mapping
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
  }, [length, texture]);

  return (
    <group {...props}>
      <mesh position={[0, -length / 2, 0]}>
        <coneGeometry args={[angle, length, 32, 1, true]} ref={coneRef} />;
        <meshBasicMaterial
          map={texture}
          color={color}
          transparent
          opacity={opacity}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
