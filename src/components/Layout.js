import React from 'react';
import HeaderRibbon from './HeaderRibbon';
import NavFooter from './NavFooter';

function Layout(props) {
  return (
    <>
      <HeaderRibbon title={props.title}
                    icon={props.icon}
                    iconName={props.iconName}
      />
      {props.children}
      <NavFooter />
    </>
  );
}

export default Layout;