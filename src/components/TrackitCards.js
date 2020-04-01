import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loadVitals } from '../actions/index';
import { vitalsEndpoint } from '../api/endpoints';
import { Pane } from 'evergreen-ui';
import TrackitCard from './TrackitCard';
import './styles/TrackitCards.css';
import Layout from './Layout';

function TrackitCards() {
  const { vitals } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(async () => {
    (async () => {
      try {
        const resp = await axios.get(vitalsEndpoint);
        const data = await resp.data;
        const userVitals = data.filter(vital => `${vital.user_id}` === localStorage.user_id);
        dispatch(loadVitals(userVitals));
      } catch (error) {
        //
      }
    })();
  }, []);
  // loop over the data and insert trackit cards into trackit day
  // trackit days are: Today, Yesterday and Last Week
  return (
    <>
      <Layout>
        <Pane display="flex"
              flexDirection="column"
              width="100vw"
              height="80%"
        >
          <TrackitCard day='Today' />
          <TrackitCard />
          <TrackitCard day='Yesterday' />
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