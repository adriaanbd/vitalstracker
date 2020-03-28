import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem(props) {
  return (
    <Link to={`/menu/${props.relPath}`} className="menu-link">
      <div className="item-frame">
        <div className="menu-icon">
          {props.icon}
        </div>
        <div className="menu-title">
          {props.title}
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;