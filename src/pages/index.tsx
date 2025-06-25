import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Canvas } from '@react-three/fiber';
import '@/pages/index.scss';
import { Lamp1 } from '@/3dcomponents/Lamp1';
import { OrbitControls } from '@react-three/drei';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="home">
      <Canvas shadows>
        {/* helpers */}
        {/* <axesHelper scale={[5, 5, 5]} /> */}

        {/* Controls */}
        <OrbitControls />

        {/* Lights */}
        <directionalLight position={[-3, 3, 3]} intensity={0.5} castShadow />
        {/* <ambientLight intensity={1} color="#ffffff" /> */}
        {/* <pointLight
          intensity={50}
          distance={0}
          color="white"
          position={[-10, 5, 0]}
        /> */}

        {/* Models */}
        <Lamp1 castShadow />
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#888888" metalness={1} roughness={0.8} />
        </mesh>

        {/* Postprocess */}
      </Canvas>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
