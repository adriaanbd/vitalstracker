import React from 'react';
import ProgressDateHeader from './ProgressDateHeader';
import ProgressCircleCard from './ProgressCircleCard';
import './styles/ProgressHeader.css';

function ProgressHeader() {
  // Angle Left and Angle Right should fetch data for corresponding date
  return (
    <div className="progress-header">
      <ProgressDateHeader />
      <div className="main-progress-status">
          <ProgressCircleCard />
          <ProgressCircleCard />
          <ProgressCircleCard />
      </div>
    </div>
  );
}

export default ProgressHeader;