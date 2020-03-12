import React from 'react';

function VitalCard(props) {
  const { icon, title, id } = props
  return (
    <div className="vital-card" id={id}>
      <div>{ icon }</div>
      <h1>{ title }</h1>
    </div>
  )
}

export default VitalCard;