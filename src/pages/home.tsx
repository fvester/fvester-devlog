import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Canvas } from '@react-three/fiber';
import '@/pages/index.scss';
import { Lamp1 } from '@/glb_components/Lamp1';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Noise, Vignette } from '@react-three/postprocessing';
import { Bird } from '@/glb_components/Bird';
import { degToRad } from 'three/src/math/MathUtils';
import WorkSpace from '@/3dcomponents/WorkSpace';
import { Perf } from 'r3f-perf';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Canvas shadows>
        {/* helpers */}
        <Perf />
        {/* <axesHelper scale={[5, 5, 5]} /> */}

        {/* Controls */}
        <OrbitControls />

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
      </Canvas>
    </div>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
