import React from 'react';

function MenuHeader(props) {
  const { avatar, name, gender } = props;
  return (
    <div className="menu-header-container">
      <div id="mini-avatar">
        { avatar }
      </div>
      <div className="name-and-gender-container">
        <div id="name">
          { name }
        </div>
        <div id="gender">
          { gender }
        </div>
      </div>
    </div>
  );
}

export default MenuHeader;
