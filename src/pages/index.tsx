import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Canvas } from '@react-three/fiber';
import '@/pages/index.scss';
import { Lamp1 } from '@/3dcomponents/Lamp1';
import { OrbitControls } from '@react-three/drei';
import { DeskSetup } from '@/3dcomponents/DeskSetup';
import { Desk } from '@/3dcomponents/Desk';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="home">
      <Canvas shadows>
        {/* helpers */}
        {/* <axesHelper scale={[5, 5, 5]} /> */}

        {/* Controls */}
        <OrbitControls />

        {/* Lights */}
        <directionalLight position={[-3, 3, 3]} intensity={1} />
        {/* <ambientLight intensity={1} color="#ffffff" /> */}
        {/* <pointLight
          intensity={50}
          distance={0}
          color="white"
          position={[-10, 5, 0]}
        /> */}

        {/* Models */}
        <Lamp1 debug={true} position={[-13, 0, 0]} />
        {/* <DeskSetup /> */}
        <Desk />
        {/* <mesh castShadow position={[0, 5, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh> */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[500, 500]} />
          <meshStandardMaterial color="#888888" metalness={1} roughness={0.8} />
        </mesh>

        {/* Postprocess */}
      </Canvas>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
