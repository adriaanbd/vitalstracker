import React from 'react';
import { Pane } from 'evergreen-ui';
import Layout from '../Layout';
import DayCard from './DayCard';

import './TrackitPage.css';

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
          <DayCard day="Today" />
          <DayCard day="Yesterday" />
          <DayCard day="More than 1 day ago" />
        </Pane>
      </Layout>
    </>
  );
}

export default TrackitCards;
