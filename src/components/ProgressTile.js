import React from 'react';

function ProgressTile(props) {
  return (
    <div className="progress-tile">
      <div className="tile-icon">
        {props.icon}
      </div>
      <div className="tile-info">
        <div className="progress-title">{props.title}</div>
        <div className="progress-measure">{props.measure}</div>
      </div>
    </div>
  );
}

export default ProgressTile;
