import React from 'react';
import ProgressPageHeader from './Header';
import ProgressPageTiles from './Tiles';
import Layout from '../Layout';

import './ProgressPage.css';

function ProgressPage() {
  return (
    <>
      <Layout title="Progress">
        <div className="progress-page-container">
          <ProgressPageHeader />
          <ProgressPageTiles />
        </div>
      </Layout>
    </>
  );
}

export default ProgressPage;
