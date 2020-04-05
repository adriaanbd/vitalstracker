import React from 'react';
import { Pane, Icon, Text } from 'evergreen-ui';

function ProgressDateHeader() {
  return (
    <Pane
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="2em"
      color="#67899c"
    >
      <Icon icon="chevron-left" cursor="pointer" />
      <Text id="progress-date">
        1 January 2020
      </Text>
      <Icon icon="chevron-right" cursor="pointer" />
    </Pane>
  );
}

export default ProgressDateHeader;
