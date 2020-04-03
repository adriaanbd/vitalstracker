import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pane } from 'evergreen-ui';
import TrackitCard from './MeasureCard';
import './styles/TrackitCards.css';
import Layout from './Layout';
import DayCard from './DayCard';

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
  // const { today, yesterday, last_week: lastWeek } = useSelector(state => state.vitals.vitals);

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
