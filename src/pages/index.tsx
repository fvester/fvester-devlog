import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import '@/pages/index.scss';
import Home from './home';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="main">
      <Home />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
