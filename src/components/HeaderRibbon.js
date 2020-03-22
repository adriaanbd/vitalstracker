import React from 'react';
import './styles/HeaderRibbon.css';

function genIcon(icon, id) {
  let html;
  if (icon) {
    html = <div id={id}>{icon}</div>;
  }
  return html;
}

function HeaderRibbon(props) {
  return (
    <div className="ribbon">
      <div className="ribbon-side" id="ribbon-left">
        {genIcon(props.icon, props.iconTitle)}
      </div>
      <div id="ribbon-title-box">
        <h1 id="ribbon-title">{props.title ? props.title : 'Track.It'}</h1>
      </div>
      <div className="ribbon-side" id="ribbon-right"></div>
    </div>
  );
}

export default HeaderRibbon;