import React from 'react';
import PropTypes from 'prop-types';
import HeaderRibbon from './Header';
import NavFooter from './Footer';

function Layout(props) {
  const {
    title, icon, iconName, children,
  } = props;
  return (
    <>
      <HeaderRibbon
        title={title}
        icon={icon}
        iconName={iconName}
      />
      {children}
      <NavFooter />
    </>
  );
}

Layout.defaultProps = {
  icon: undefined,
  iconName: undefined,
  title: undefined,
};

Layout.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  iconName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
