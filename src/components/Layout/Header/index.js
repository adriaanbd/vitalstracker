import React from 'react';
import './HeaderRibbon.css';
import { Link } from 'react-router-dom';

function HeaderRibbon(props) {
  const { icon, title } = props;
  return (
    <div className="ribbon">
      <div className="ribbon-side" id="ribbon-left">
        {icon ? <Link to="/menu" id="angle-left">{icon}</Link> : ''}
      </div>
      <div id="ribbon-title-box">
        <h1 id="ribbon-title">{title ? title : 'Track.It'}</h1>
      </div>
      <div className="ribbon-side" id="ribbon-right" />
    </div>
  );
}

export default HeaderRibbon;