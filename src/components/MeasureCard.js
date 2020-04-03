import React from 'react';
import { Pane, Text } from 'evergreen-ui';

import './styles/TrackitCard.css';

function MeasureCard(props) {
  const { category, measure } = props;
  return (
    <>
      <Pane display="flex"
            justifyContent="center"
            alignItems="center"
            padding={0}
            marginTop={12}
            marginBottom={12}
            color="#67899C">
        <Pane display="flex" justifyContent="center" alignItems="center" width="50%">
          <Text className="trackit-category">{category}</Text>
        </Pane>
        <Pane display="flex" justifyContent="center" alignItems="center" width="50%">
          <Text className="trackit-mainmeasure">{measure}</Text>
        </Pane>
      </Pane>
    </>
  );
}

export default MeasureCard;