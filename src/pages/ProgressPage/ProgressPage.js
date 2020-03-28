import React from 'react';
import ProgressPageHeader from '../../components/ProgressPageHeader';
import ProgressPageTiles from '../../components/ProgressPageTiles';
import './ProgressPage.css';
import Layout from '../../components/Layout';

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