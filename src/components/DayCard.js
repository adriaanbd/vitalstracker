import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVitalsData } from '../store/thunks/vitals';
import MeasureCard from './MeasureCard';
import DayCardHeader from './DayCardHeader';

function setMeasureCards(dayData) {
  const cards = [];
  if (!dayData) { return; }
  for (let i = 0; i < dayData.length; i += 1) {
    const { category, measure } = dayData[i];
    cards.push(<MeasureCard category={category} measure={measure}/>);
  }
  // eslint-disable-next-line consistent-return
  return cards;
}

function DayCard(props) {
  const dayToVitals = {
    'Today': 'todayVitals',
    'Yesterday': 'yesterdayVitals',
    'Last Week': 'lastWeekVitals',
  };
  const vitalsName = dayToVitals[props.day];
  const dayData = useSelector(state => state[vitalsName]);
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const dayTitle = props.day === 'Last Week' ? props.day.split(' ').join('_') : props.day;
    const userId = user.id ? user.id : localStorage.userId;
    dispatch(fetchVitalsData(userId, dayTitle));
  }, []);

  return (
    <>
      <DayCardHeader title={props.day}/>
      { setMeasureCards(dayData) }
    </>
  );
}

export default DayCard;