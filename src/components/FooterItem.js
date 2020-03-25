import React from 'react';
import { Link } from 'react-router-dom';

function FooterItem(props) {
  return (
    <Link to={props.link} className="footer-item">
      <div>{props.icon}</div>
      <div>{props.title}</div>
    </Link>
  );
}

export default FooterItem;