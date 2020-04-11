import React from 'react';
import { Pane } from 'evergreen-ui';
import ProgressPageHeader from './Header';
import ProgressPageTiles from './Tiles';
import Layout from '../Layout';


function ProgressPage() {
  return (
    <>
      <Layout title="Progress">
        <Pane
          height="80%"
          width="100vw"
          display="flex"
          flexDirection="column"
        >
          <ProgressPageHeader />
          <ProgressPageTiles />
        </Pane>
      </Layout>
    </>
  );
}

export default ProgressPage;
