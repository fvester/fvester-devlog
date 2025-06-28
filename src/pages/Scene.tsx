import WorkSpace from '@/3dcomponents/WorkSpace';
import { Bird } from '@/glb_components/Bird';
import { Lamp1 } from '@/glb_components/Lamp1';
import useCameraControl from '@/hooks/useCameraControl';
// import useCameraControl from '@/hooks/useCameraControl';
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';

const Scene: React.FC = () => {
  // Camera setting
  const { setPosition, setTarget } = useCameraControl();

  useEffect(() => {
    setPosition(0, 6.7, 2.5);
    setTarget(0, 6.7, 0);
  }, []);

  return (
    <group name="scene">
      {/* Controls */}
      {/* <OrbitControls /> */}

      {/* Lights */}
      <directionalLight position={[-3, 3, 3]} intensity={0.5} />
      <ambientLight intensity={0.2} color="#ffffff" />
      {/* <pointLight
          intensity={50}
          distance={0}
          color="white"
          position={[-10, 5, 0]}
        /> */}

      {/* Models */}
      <Lamp1 debug={true} position={[-13, 0, 0]} />
      <Bird
        position={[-9.7, 11.65, 0]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, degToRad(90), 0]}
      />
      {/* <DeskSetup /> */}
      <WorkSpace />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial color="#888888" metalness={1} roughness={0.8} />
      </mesh>

      {/* Postprocess */}
      <EffectComposer>
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </group>
  );
};

export default Scene;
