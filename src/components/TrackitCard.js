import React from 'react';
import { Pane, Heading, Text } from 'evergreen-ui';

import './styles/TrackitCard.css';

function setHeader(day) {
  if (day) {
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
          {day}
        </Heading>
      </Pane>
    );
  }
  return '';
}


function TrackitCard(props) {
  // const { icon, date, mainMeasure, subMeasure } = props;
  return (
    <>
      {setHeader(props.day)}
      <Pane display="flex"
            justifyContent="center"
            alignItems="center"
            padding={0}
            marginTop={12}
            marginBottom={12}
            color="#67899C">
        <Pane display="flex" justifyContent="center" alignItems="center" width="50%">
          <Text className="trackit-category">{props.category}</Text>
        </Pane>
        <Pane display="flex" justifyContent="center" alignItems="center" width="50%">
          <Text className="trackit-mainmeasure">{props.measure}</Text>
        </Pane>
      </Pane>
    </>
  );
}

export default TrackitCard;