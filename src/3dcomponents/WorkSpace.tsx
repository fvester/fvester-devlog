import * as THREE from 'three';
import React from 'react';
import { Desk } from '@/glb_components/Desk';
import { Monitor } from '@/glb_components/Monitor';
import { Screen } from './Screen';
import { degToRad } from 'three/src/math/MathUtils';
import { Monitor2 } from '@/glb_components/Monitor2';
import { BookStack } from '@/glb_components/BookStack';

const WorkSpace = (props: JSX.IntrinsicElements['group']) => {
  return (
    <group {...props} dispose={null}>
      <Desk />
      <group>
        <Monitor2
          position={[0, 5.15, -2]}
          scale={[3.3, 3.3, 3.3]}
          rotation={[0, degToRad(180), 0]}
        />
        <Screen position={[0, 6.75, -1.45]} rotation={[degToRad(-0.4), 0, 0]} />
      </group>
      <BookStack position={[-3, 3.2, 0]} scale={[3, 3, 3]} />
    </group>
  );
};

export default WorkSpace;
