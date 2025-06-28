import React, { useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import './Screen.scss';

import * as THREE from 'three';

export function Screen(props: JSX.IntrinsicElements['group']) {
  const meshRef = useRef<THREE.Group>(null);

  return (
    <group ref={meshRef} {...props}>
      <Html
        className="screen"
        transform
        distanceFactor={0.61}
        occlude={'blending'}
      >
        <iframe src="https://inpa.tistory.com/" />
      </Html>
    </group>
  );
}
