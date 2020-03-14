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
        <ProgressCircleCard title={'Weight'} measure={'135'} unit={'lbs'} />
        <ProgressCircleCard title={'Glucose'} measure={'XX'} unit={'uu'} />
        <ProgressCircleCard title={'Pressure'} measure={'XX'} unit={'uu'} />
      </div>
    </div>
  );
}

export default ProgressHeader;