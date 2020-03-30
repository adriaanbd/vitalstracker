import React from 'react';
import ProgressPageHeader from './ProgressPageHeader';
import ProgressPageTiles from './ProgressPageTiles';
import './styles/ProgressPage.css';
import Layout from './Layout';

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