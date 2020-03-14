import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './styles/ProgressDateHeader.css';

function ProgressDateHeader() {
  return (
    <div className="date-container">
      <div id="previous-date-angle-left" className="date-angle-arrow">
        {<FontAwesomeIcon icon={faAngleLeft} />}
      </div>
      <div id="progress-date">
        1 January 2020
      </div>
      <div id="next-date-angle-right" className="date-angle-arrow">
        {<FontAwesomeIcon icon={faAngleRight} />}
      </div>
    </div>
  );
}

export default ProgressDateHeader;