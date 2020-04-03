import React from 'react';
import { Pane } from 'evergreen-ui';
import './styles/TrackitCards.css';
import Layout from './Layout';
import DayCard from './DayCard';

function TrackitCards() {
  return (
    <>
      <Layout>
        <Pane
          display="flex"
          flexDirection="column"
          width="100vw"
          height="80%"
        >
          <DayCard day='Today'/>
          <DayCard day='Yesterday'/>
          <DayCard day='Last Week' />
        </Pane>
      </Layout>
    </>
  );
}

export default TrackitCards;
