import React from 'react';
import { Pane, Text } from 'evergreen-ui';

function ProgressCircleCard(props) {
  const { measure, unit, title } = props;
  return (
    <Pane>
      <Pane
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginBottom="1em"
        elevation={1}
        padding={4}
        borderRadius="50%"

      >
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          borderRadius="50%"
          border="2px solid #67899c"
          paddingX="2em"
          paddingY="1em"
          marginBottom={0}
        >
          <Text>{ measure }</Text>
          <Text>{ unit }</Text>
        </Pane>
      </Pane>
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom={16}
      >
        <Text>{ title }</Text>
      </Pane>
    </Pane>
  );
}

export default ProgressCircleCard;
