import React from 'react';
import { Pane } from 'evergreen-ui';
import FooterItem from './FooterItem';


function NavFooter() {
  return (
    <Pane
      display="flex"
      justifyContent="space-evenly"
      alignItem="center"
      height="10vh"
      fontSize="1rem"
      backgroundColor="#67899C"
      color="whitesmoke"
      width="100vw"
    >
      <FooterItem
        icon="series-add"
        title="Measure"
        link="vitals"
      />
      <FooterItem
        icon="trending-up"
        title="Track It"
        link="tracker"
      />
      <FooterItem
        icon="pie-chart"
        title="Progress"
        link="progress"
      />
      <FooterItem
        icon="more"
        title="More"
        link="menu"
      />
    </Pane>
  );
}

export default NavFooter;
