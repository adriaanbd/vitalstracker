import React from 'react';
import ProgressPageHeader from '../../components/ProgressPageHeader';
import ProgressPageTiles from '../../components/ProgressPageTiles';
import './ProgressPage.css';
import HeaderRibbon from '../../components/HeaderRibbon';

function ProgressPage() {
  return (
    <>
      <HeaderRibbon title="Progress" />
      <div className="progress-page-container">
        <ProgressPageHeader />
        <ProgressPageTiles />
      </div>
    </>
  );
}

export default ProgressPage;