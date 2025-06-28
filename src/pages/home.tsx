import React from 'react';
import type { HeadFC } from 'gatsby';
import { Canvas } from '@react-three/fiber';
import '@/pages/index.scss';
import { Perf } from 'r3f-perf';
import Scene from './Scene';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Canvas shadows>
        {/* Helpers */}
        {/* <Perf /> */}
        {/* <axesHelper scale={[5, 5, 5]} /> */}

        <Scene />
      </Canvas>
    </div>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
