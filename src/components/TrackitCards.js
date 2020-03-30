import React from 'react';
import { Pane } from 'evergreen-ui';
import TrackitCard from './TrackitCard';
import './styles/TrackitCards.css';
import Layout from './Layout';

function TrackitCards() {
  // loop over the data and insert trackit cards into trackit day
  // trackit days are: Today, Yesterday and Last Week
  return (
    <>
      <Layout>
        <Pane width="100vw" height="80vh">
          <TrackitCard day='Today' />
          <TrackitCard />
          <TrackitCard day='Yesterday' />
          <TrackitCard />
          <TrackitCard />
          <TrackitCard day='Last Week' />
          <TrackitCard />
          <TrackitCard />
          <TrackitCard />
        </Pane>
      </Layout>
    </>
  );
}

export default TrackitCards;