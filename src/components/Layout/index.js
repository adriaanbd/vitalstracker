import React from 'react';
import HeaderRibbon from './Header';
import NavFooter from './Footer';

function Layout(props) {
  const {
    title, icon, iconName, children
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

export default Layout;
