import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'evergreen-ui';
import { fetchVitalsData } from '../../../store/thunks/vitals';
import MeasureCard from './MeasureCard';
import DayCardHeader from './Header';

function setMeasureCards(dayData) {
  const cards = [];
  if (!dayData) { return; }
  for (let i = 0; i < dayData.length; i += 1) {
    const { category, measure, id } = dayData[i];
    cards.push(<MeasureCard category={category} measure={measure} vitalId={id} />);
  }
  // eslint-disable-next-line consistent-return
  return cards;
}

function DayCard(props) {
  const { day } = props;
  const dayToVitals = {
    Today: 'todayVitals',
    Yesterday: 'yesterdayVitals',
    'More than 1 day ago': 'moreThan1DayAgoVitals',
  };
  const vitalsName = dayToVitals[day];
  const dayData = useSelector(state => state[vitalsName]);
  const { user } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const dayTitle = day.split(' ').length > 1
      ? day.split(' ').join('_').toLowerCase() : day;
    const userId = user.id ? user.id : sessionStorage.userId;
    dispatch(fetchVitalsData(userId, dayTitle));
  }, []);

  return (
    <>
      <DayCardHeader title={day} />
      <Table overflow="scroll">
        <Table.Head paddingLeft={4} width="100%">
          <Table.TextHeaderCell>
            Category
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>
            Measure
          </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body
          height="auto"
        >
          { setMeasureCards(dayData) }
        </Table.Body>
      </Table>
    </>
  );
}

export default DayCard;
