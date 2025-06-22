import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Canvas } from '@react-three/fiber';
import '@/pages/index.scss';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="home">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
