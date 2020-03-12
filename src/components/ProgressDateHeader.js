import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './styles/ProgressDateHeader.css';

function ProgressDateHeader() {
  return (
    <div className="date-container">
      <div className="previous-date-angle-left">
        {<FontAwesomeIcon icon={faAngleLeft} />}
      </div>
      <div className="progress-date">
        1 January 2020
      </div>
      <div className="previous-date-angle-right">
        {<FontAwesomeIcon icon={faAngleRight} />}
      </div>
    </div>
  );
}

export default ProgressDateHeader;