import React from 'react';

function FooterItem(props) {
  return (
    <div className="footer-item">
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </div>
  );
}

export default FooterItem;