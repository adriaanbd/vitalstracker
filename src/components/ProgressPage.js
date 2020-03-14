import React from 'react';
import ProgressPageHeader from './ProgressPageHeader';
import ProgressPageTiles from './ProgressPageTiles';
import './styles/ProgressPage.css';

function ProgressPage() {
  return (
    <div className="progress-page-container">
      <ProgressPageHeader />
      <ProgressPageTiles />
    </div>
  );
}

export default ProgressPage;