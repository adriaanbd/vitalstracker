import React from 'react';

function ProgressCircleCard(props) {
  const { measure, unit, title } = props;
  return (
    <div className="progress-circle-card">
      <div className="progress-circle">
        <div className="progress-measure">{ measure }</div>
        <div className="progress-units">{ unit }</div>
      </div>
      <div className="progress-title">{ title }</div>
    </div>
  );
}

export default ProgressCircleCard;
