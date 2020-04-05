import React from 'react';
import { Pane } from 'evergreen-ui';

function ProgressTile(props) {
  const { icon, title, measure } = props;
  return (
    <Pane
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      color="#67899c"
      margin="3%"
      height="25%"
      background="tint1"
      width="43%"
      elevation={1}
      border="muted"
    >
      <Pane>{icon}</Pane>
      <Pane>
        <Pane>{title}</Pane>
        <Pane>{measure}</Pane>
      </Pane>
    </Pane>
  );
}

export default ProgressTile;
