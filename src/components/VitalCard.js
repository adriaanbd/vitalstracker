import React from 'react';
import { Link } from 'react-router-dom';

function VitalCard(props) {
  const {
    icon, title, id, path,
  } = props;
  return (
    <div className="vital-card-wrap">
      <Link to={`/vitals/${path}`} className='vital-card-link'>
        <div className="vital-card" id={id}>
          <div className="vital-card-icon">{ icon }</div>
          <div className="vital-card-title">{ title }</div>
        </div>
      </Link>
    </div>
  );
}

export default VitalCard;