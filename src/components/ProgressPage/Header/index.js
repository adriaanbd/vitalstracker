import React from 'react';
import { Pane } from 'evergreen-ui';
import ProgressDateHeader from './DateHeader';
import ProgressCircleCard from './CircleCard';

function ProgressHeader() {
  return (
    <Pane
      display="flex"
      flexDirection="column"
      width="100%"
      color="#67899c"
    >
      <ProgressDateHeader />
      <Pane
        display="flex"
        justifyContent="space-evenly"
        marginTop="1em"
      >
        <ProgressCircleCard title="Weight" measure="135" unit="lbs" />
        <ProgressCircleCard title="Weight" measure="135" unit="lbs" />
        <ProgressCircleCard title="Weight" measure="135" unit="lbs" />
      </Pane>
    </Pane>
  );
}

export default ProgressHeader;
