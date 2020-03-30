import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

import './styles/TrackitCard.css';

function setHeader(day) {
  if (day) {
    return (
      <Pane display="flex"
                    padding={8}
                    background="tint2"
                    alignItems="center"
                    elevation={1}
                    border="default"
      >
        <Heading size={500}
                 paddingLeft={16}
                 color="#67899C"
                 fontWeight={600}>
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
            justifyContent="space-evenly"
            padding={0}
            marginTop={12}
            marginBottom={12}
            color="#67899C">
          <div className="trackit-icon">Icon</div>
          <div>1 Jan 2020</div>
          <div className="trackit-mainmeasure">135 LBS</div>
      </Pane>
    </>
  );
}

export default TrackitCard;