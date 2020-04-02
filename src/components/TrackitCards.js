import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchVitalsData from '../store/thunks/vitals';
import { Pane } from 'evergreen-ui';
import TrackitCard from './TrackitCard';
import './styles/TrackitCards.css';
import Layout from './Layout';

function setDayCards(dayData, day) {
  const cards = [];
  let isHeader = false;
  if (dayData) {
    for (let i = 0; i < dayData.length; i += 1) {
      const { category, measure } = dayData[i];
      cards.push(<TrackitCard day={isHeader ? '' : day}
                              category={category}
                              measure={measure}/>);
      isHeader = true;
    }
  }
  return cards;
}

function TrackitCards() {
  const { today, yesterday, last_week: lastWeek } = useSelector(state => state.vitals.vitals);
  const { id } = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVitalsData(id));
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
          {setDayCards(today, 'Today')}
          {setDayCards(yesterday, 'Yesterday')}
          {setDayCards(lastWeek, 'One week ago')}
        </Pane>
      </Layout>
    </>
  );
}

export default TrackitCards;