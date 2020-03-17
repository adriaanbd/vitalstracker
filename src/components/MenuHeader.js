import React from 'react';

function MenuHeader(props) {
  return (
    <div className="menu-header-container">
      <div id="mini-avatar">
        {props.avatar}
      </div>
      <div className="name-and-gender-container">
        <div id="name">{props.name}</div>
        <div id="gender">{props.gender}</div>
      </div>
    </div>
  );
}

export default MenuHeader;