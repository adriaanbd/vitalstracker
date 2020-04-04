import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem(props) {
  const { relPath, icon, title } = props;
  return (
    <Link to={`/menu/${relPath}`} className="menu-link">
      <div className="item-frame">
        <div className="menu-icon">
          {icon}
        </div>
        <div className="menu-title">
          {title}
        </div>
      </div>
    </Link>
  );
}

export default MenuItem;
