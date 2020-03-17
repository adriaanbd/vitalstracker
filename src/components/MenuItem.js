import React from 'react';

function MenuItem(props) {
  return (
    <div className="item-frame">
      <div className="menu-icon">{props.icon}</div>
      <div className="menu-title">{props.title}</div>
    </div>
  );
}

export default MenuItem;