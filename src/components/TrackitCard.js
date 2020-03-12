import React from 'react';
import './styles/TrackitCard.css';

function TrackitCard() {
  // const { icon, date, mainMeasure, subMeasure } = props;
  return (
    <div className="trackit-card">
      <div className="trackit-icon">Icon</div>
      <div className="trackit-date-and-submeasure">
        <div>1 January 2020</div>
        <div>Glucose: 110</div>
      </div>
      <div className="trackit-mainmeasure">135 LBS</div>
    </div>
  );
}

export default TrackitCard;