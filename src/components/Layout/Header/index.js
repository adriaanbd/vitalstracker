import React from 'react';
import PropTypes from 'prop-types';
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
        <h1 id="ribbon-title">{title || 'Track.It'}</h1>
      </div>
      <div className="ribbon-side" id="ribbon-right" />
    </div>
  );
}

HeaderRibbon.defaultProps = {
  icon: undefined,
  title: 'Track.It',
};

HeaderRibbon.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default HeaderRibbon;
