import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVitalsData } from '../store/thunks/vitals';

function DayCard(props) {
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const day = props.day === 'Last Week' ? props.day.split(' ').join('_') : props.day;
    dispatch(fetchVitalsData(user.id, day));
  }, []);
  return (
    <h1>DAY CARD</h1>
  );
}

export default DayCard;