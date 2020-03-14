import React from 'react';
import './styles/HeaderRibbon.css';

function HeaderRibbon(props) {
  return (
    <div className="ribbon">
      <h1>{props.title ? props.title : 'Track.It'}</h1>
    </div>
  );
}

export default HeaderRibbon;