import React from 'react';

function ProgressTile(props) {
  const { icon, title, measure } = props;
  return (
    <div className="progress-tile">
      <div className="tile-icon">
        {icon}
      </div>
      <div className="tile-info">
        <div className="progress-title">{title}</div>
        <div className="progress-measure">{measure}</div>
      </div>
    </div>
  );
}

export default ProgressTile;
