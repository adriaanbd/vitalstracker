import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

function DayCardHeader(props) {
  return (
    <Pane
      display="flex"
      padding={8}
      background="tint2"
      alignItems="center"
      elevation={1}
      border="default"
    >
      <Heading
        size={500}
        paddingLeft={16}
        color="#67899C"
        fontWeight={600}
      >
        {props.title}
      </Heading>
    </Pane>
  );
}

export default DayCardHeader;