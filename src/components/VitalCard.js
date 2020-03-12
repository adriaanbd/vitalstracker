import React from 'react';

function VitalCard(props) {
  const { icon, title, id } = props
  return (
    <div className="vital-card" id={id}>
      <div className="vital-card-icon">{ icon }</div>
      <h1 className="vital-card-title">{ title }</h1>
    </div>
  )
}

export default VitalCard;