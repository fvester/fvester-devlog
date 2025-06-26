import * as THREE from 'three';
import React from 'react';
import { Desk } from '@/glb_components/Desk';
import { Monitor } from '@/glb_components/Monitor';
import { Screen } from './Screen';
import { degToRad } from 'three/src/math/MathUtils';

const WorkSpace = (props: JSX.IntrinsicElements['group']) => {
  return (
    <group {...props} dispose={null}>
      <Desk />
      <Monitor position={[0, 5.15, -1.5]} scale={[3, 3, 3]} />
      <Screen position={[0, 6.92, -1.45]} rotation={[degToRad(-0.4), 0, 0]} />
    </group>
  );
};

export default WorkSpace;
