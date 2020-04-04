import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

function DayCardHeader(props) {
  const { title } = props;
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
        paddingLeft={4}
        color="#67899C"
        fontWeight={600}
      >
        {title}
      </Heading>
    </Pane>
  );
}

export default DayCardHeader;
