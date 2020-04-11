import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pane } from 'evergreen-ui';
import Layout from '../Layout';
import DayCard from './DayCard';
import { fetchVitalsData } from '../../store/thunks/vitals';
import './TrackitPage.css';

function TrackitCards() {
  const { user, vitals } = useSelector(state => state);
  const userId = user.id ? user.id : sessionStorage.getItem('userId');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVitalsData(userId));
  }, []);
  return (
    <>
      <Layout>
        <Pane
          display="flex"
          flexDirection="column"
          width="100vw"
          height="80%"
        >
          <DayCard day="Today" data={vitals.today} />
          <DayCard day="Yesterday" data={vitals.yesterday} />
          <DayCard day="More than 1 day ago" data={vitals.more} />
        </Pane>
      </Layout>
    </>
  );
}

export default TrackitCards;
