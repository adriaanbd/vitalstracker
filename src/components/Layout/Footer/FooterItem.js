import React from 'react';
import { Link } from 'react-router-dom';

function FooterItem(props) {
  const { link, icon, title } = props;
  return (
    <Link to={`/${link}`} className="footer-item">
      <div>{icon}</div>
      <div>{title}</div>
    </Link>
  );
}

export default FooterItem;
