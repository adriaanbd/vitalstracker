import React from 'react';
import './styles/HeaderRibbon.css';
import { Link } from 'react-router-dom';

function HeaderRibbon(props) {
  return (
    <div className="ribbon">
      <div className="ribbon-side" id="ribbon-left">
        {props.icon ? <Link to="/menu" id="angle-left">{props.icon}</Link> : ''}
      </div>
      <div id="ribbon-title-box">
        <h1 id="ribbon-title">{props.title ? props.title : 'Track.It'}</h1>
      </div>
      <div className="ribbon-side" id="ribbon-right"></div>
    </div>
  );
}

export default HeaderRibbon;