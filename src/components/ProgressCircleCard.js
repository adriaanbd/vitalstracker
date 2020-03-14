import React from 'react';

function ProgressCircleCard(props) {
  return (
    <div className="progress-circle-card">
      <div className="progress-circle">
        <div className="progress-measure">{ props.measure }</div>
        <div className="progress-units">{ props.unit }</div>
      </div>
      <div className="progress-title">{ props.title }</div>
    </div>
  );
}

export default ProgressCircleCard;