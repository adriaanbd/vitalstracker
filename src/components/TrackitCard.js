import React from 'react';
import { Pane, Heading } from 'evergreen-ui';

import './styles/TrackitCard.css';

function setHeader(day) {
  if (day) {
    return (
      <Pane display="flex"
                    padding={16}
                    background="tint2"
                    alignItems="center"
      >
        <Heading size={600}
                 paddingLeft={16}
                 color="#67899C"
                 fontWeight={500}>
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
            justifyContent="space-between"
            padding={16}
            marginLeft={8}
            marginRight={8}
            color="#67899C">
          <div className="trackit-icon">Icon</div>
          <div>1 Jan 2020</div>
          <div className="trackit-mainmeasure">135 LBS</div>
      </Pane>
    </>
  );
}

export default TrackitCard;