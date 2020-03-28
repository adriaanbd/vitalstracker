import React from 'react';
import { Link } from 'react-router-dom';

function VitalCard(props) {
  const {
    icon, title, id, path,
  } = props;
  return (
    <div className="vital-card" id={id}>
      <div className="vital-card-icon">{ icon }</div>
      <Link to={`/vitals/${path}`} className="vital-card-title">{ title }</Link>
    </div>
  );
}

export default VitalCard;